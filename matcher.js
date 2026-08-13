/* Intent matcher. Maps a speech transcript onto ONE of the currently valid
   authored choices, or nothing. It can never invent a branch — that is the
   whole safety property of the design. Shared by the browser app and the
   Node test harness. */
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.Matcher = factory();
})(typeof self !== "undefined" ? self : this, function () {

  const STOP = new Set(
    ("a an and are be but for from get got has have i if in is it its just like me my of on " +
     "or our ours re s so t that the their them then there they this to us was we well what will " +
     "with you your yours don t won isn re ll ve").split(" ")
  );

  const WORDNUM = { one: 1, two: 2, three: 3, four: 4, five: 5,
                    first: 1, second: 2, third: 3, fourth: 4, fifth: 5,
                    a: 1, b: 2, c: 3, d: 4, e: 5,
                    alpha: 1, bravo: 2, charlie: 3, delta: 4, echo: 5,
                    "एक": 1, "पहला": 1, "पहली": 1, "ए": 1,
                    "दो": 2, "दूसरा": 2, "दूसरी": 2, "बी": 2,
                    "तीन": 3, "तीसरा": 3, "तीसरी": 3, "सी": 3,
                    "चार": 4, "चौथा": 4, "चौथी": 4, "डी": 4,
                    "पाँच": 5, "पांच": 5, "पाँचवाँ": 5, "पांचवां": 5, "ई": 5 };

  const norm = (s) => String(s).normalize("NFC").toLocaleLowerCase().replace(/[^\p{L}\p{M}\p{N}\s']/gu, " ").replace(/\s+/g, " ").trim();

  // Explicit selection: "option 2", "number two", "choice 3", "the second one",
  // or a bare "2". Deliberately narrow so a sentence that merely contains a
  // number word can't hijack the pick.
  const NUM = "(\\d+|one|two|three|four|five|first|second|third|fourth|fifth|a|b|c|d|e|alpha|bravo|charlie|delta|echo|एक|पहला|पहली|ए|दो|दूसरा|दूसरी|बी|तीन|तीसरा|तीसरी|सी|चार|चौथा|चौथी|डी|पाँच|पांच|पाँचवाँ|पांचवां|ई)";
  function explicitIndex(heard) {
    const n = norm(heard);
    // Safari sometimes transcribes spoken "option A" as just "option".
    if (n === "option") return 0;
    let m = n.match(new RegExp("(?:^|\\s)(?:option|number|choice|answer|pick|letter|विकल्प|ऑप्शन|नंबर|क्रमांक|चुनाव|उत्तर)\\s+" + NUM + "(?:$|\\s)", "u"));
    if (!m) m = n.match(new RegExp("(?:^|\\s)" + NUM + "\\s+(?:विकल्प|ऑप्शन|option)(?:$|\\s)", "u"));
    if (!m) m = n.match(new RegExp("^(?:the\\s+)?" + NUM + "(?:\\s+one)?$"));
    if (!m) return -1;
    const v = /^\d+$/.test(m[1]) ? parseInt(m[1], 10) : WORDNUM[m[1]];
    return v ? v - 1 : -1;
  }
  const CANON = {
    loneliness: "lonely", parties: "party", "party's": "party", drugs: "drug",
    eating: "eat", unhealthy: "bad", invite: "party", invitation: "party",
  };

  // A few speech-friendly normalizations cover common morphology without
  // allowing a language model to invent intent. Negation is deliberately kept.
  function toks(s) {
    const expanded = norm(s).replace(/\bunproductive\b/g, "not productive");
    return expanded.split(" ")
      .filter((w) => (w.length > 2 || w === "no") && !STOP.has(w))
      .map((w) => CANON[w] || w);
  }

  // Fraction of the choice's content words that showed up in what was heard,
  // with a boost when one string effectively contains the other.
  function scoreOne(heard, choiceText) {
    const h = new Set(toks(heard));
    const c = toks(choiceText);
    if (!c.length || !h.size) return 0;

    let hit = 0;
    for (const w of c) if (h.has(w)) hit++;
    const recall = hit / c.length;
    const precision = hit / h.size;
    let s = recall;

    // Players usually speak a distinctive fragment, not the whole authored
    // sentence. Two matching content words with high transcript precision are
    // enough to be useful; one-word coincidences remain below auto-pick level.
    if (hit >= 2) s = Math.max(s, 0.7 * precision + 0.3 * recall);

    // Reward long verbatim-ish reads even if a word or two got dropped.
    const nh = norm(heard), nc = norm(choiceText);
    if (nh.length >= 10 && (nc.includes(nh) || nh.includes(nc))) s = Math.max(s, 0.95);

    // Partial credit when the player says a distinctive fragment.
    if (s === 0 && c.length) {
      const rare = c.filter((w) => w.length >= 5);
      const rareHit = rare.filter((w) => h.has(w)).length;
      if (rareHit) s = Math.min(0.45, 0.3 * rareHit);
    }
    return s;
  }

  // alternatives: STT n-best list. choices: [{text, ...}]
  function match(alternatives, choices) {
    const alts = Array.isArray(alternatives) ? alternatives : [alternatives];
    let best = { index: -1, score: 0, second: 0, via: "none" };

    for (const heard of alts) {
      if (!heard) continue;

      // Explicit selection wins outright.
      const ex = explicitIndex(heard);
      if (ex >= 0 && ex < choices.length) {
        return { index: ex, score: 1, margin: 1, via: "ordinal", confident: true };
      }

      const ranked = choices
        .map((c, i) => ({ s: scoreOne(heard, c.text), i }))
        .sort((a, b) => b.s - a.s);

      if (ranked[0] && ranked[0].s > best.score) {
        best = { index: ranked[0].i, score: ranked[0].s, second: ranked[1] ? ranked[1].s : 0, via: "semantic" };
      }
    }

    const margin = Math.round((best.score - best.second) * 100) / 100;
    return {
      index: best.index,
      score: Math.round(best.score * 100) / 100,
      margin,
      via: best.via,
      confident: best.score >= 0.5 && margin >= 0.15,
    };
  }

  return { match, scoreOne, norm, toks };
});
