# intro

`SceneSetup.intro();`

# intro-play-button

(...51)

```
_.PLAYED_BEFORE = !!window.localStorage.continueChapter;
```

{{if !_.PLAYED_BEFORE}}
`Game.OVERRIDE_FONT_SIZE=30;`
{{/if}}

{{if !_.PLAYED_BEFORE}}
[#play1# खेलें! #play2#](#intro-start) `publish("intro-to-game-1"); Game.OVERRIDE_CHOICE_LINE=true;`
{{/if}}

{{if _.PLAYED_BEFORE && window.localStorage.continueChapter=="act2"}}
[जारी रखें: पार्टी](#act2) `publish("LOAD_GAME", ["act2"]); Game.OVERRIDE_CHOICE_LINE=true;`
{{/if}}

{{if _.PLAYED_BEFORE && window.localStorage.continueChapter=="act3"}}
[जारी रखें: दूसरी पार्टी](#act3) `publish("LOAD_GAME", ["act3"]); Game.OVERRIDE_CHOICE_LINE=true;`
{{/if}}

{{if _.PLAYED_BEFORE && window.localStorage.continueChapter=="act4"}}
[जारी रखें: दूसरा सैंडविच](#act4) `publish("LOAD_GAME", ["act4"]); Game.OVERRIDE_CHOICE_LINE=true;`
{{/if}}

{{if _.PLAYED_BEFORE && window.localStorage.continueChapter=="replay"}}
`Game.OVERRIDE_FONT_SIZE=30;`
{{/if}}

{{if _.PLAYED_BEFORE && window.localStorage.continueChapter=="replay"}}
[#play1# फिर से खेलें! #play2#](#intro-start) `publish("intro-to-game-1"); Game.OVERRIDE_CHOICE_LINE=true;`
{{/if}}

{{if _.PLAYED_BEFORE}}
[अध्याय चुनें](#chapter-select) `Game.OVERRIDE_CHOICE_LINE=true;`
{{/if}}

[(कंटेंट नोट्स)](#intro-play-button) `Game.OVERRIDE_CHOICE_LINE=true; publish('show_cn');`

# chapter-select

`publish("HACK_chselect");`

[I. सैंडविच](#intro-start) `publish("HACK_chselect_end"); publish("intro-to-game-1"); Game.OVERRIDE_CHOICE_LINE=true;`

[II. पार्टी](#act2) `publish("HACK_chselect_end"); publish("LOAD_GAME", ["act2"]); Game.OVERRIDE_CHOICE_LINE=true;`

{{if window.localStorage.act3}}
[III. दूसरी पार्टी](#act3) `publish("HACK_chselect_end"); publish("LOAD_GAME", ["act3"]); Game.OVERRIDE_CHOICE_LINE=true;`
{{/if}}

{{if !window.localStorage.act3}}
[III. दूसरी पार्टी]()
{{/if}}

{{if window.localStorage.act4}}
[IV. दूसरा सैंडविच](#act4) `publish("HACK_chselect_end"); publish("LOAD_GAME", ["act4"]); Game.OVERRIDE_CHOICE_LINE=true;`
{{/if}}

{{if !window.localStorage.act4}}
[III. दूसरा सैंडविच]()
{{/if}}

{{if window.localStorage.credits}}
[V. आभार](#to-credits) `publish("HACK_chselect_end"); Game.OVERRIDE_CHOICE_LINE=true;`
{{/if}}

{{if !window.localStorage.credits}}
[५. आभार]()
{{/if}}

[(मेन मेनू)](#intro-play-button) `publish("HACK_chselect_end"); Game.OVERRIDE_CHOICE_LINE=true;`

# to-credits

`stopAllSounds();`

(...101)

(#credits)

# intro-start

(...500)

`clearText()`

n3: स्वागत है! यह एक "गेम" से ज़्यादा एक इंटरैक्टिव कहानी है। पढ़ना पसंद है ना, यार!

n3: तो शुरू करने से पहले, आप कैसे पढ़ना चाहेंगे?

`publish("show_options_bottom")`

# intro-start-2

n3: बहुत बढ़िया! ध्यान दें: आप नीचे दिए गए ⚙ आइकन से कभी भी विकल्प बदल सकते हैं। और हाँ, गेम हर अध्याय में अपने आप सेव हो जाता है!

n3: तो अब, अपनी कहानी शुरू करते हैं...

`clearText()`

(...1000)

`publish("intro-to-game-2")`

n2: यह एक इंसान है

(...600)

`clearText()`

(...300)

`publish("intro-to-game-3")`