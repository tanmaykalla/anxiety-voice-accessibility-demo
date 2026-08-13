# act1

```
SceneSetup.act1();
```

(...300)

n: और यह इस इंसान की चिंता है

n: आप ही वह चिंता हैं

{{if window.localStorage.continueChapter=="replay"}}
(#act1_replay)
{{/if}}

{{if window.localStorage.continueChapter!="replay"}}
(#act1_normal)
{{/if}}



# act1_replay

`hong({mouth:"0_neutral", eyes:"0_neutral"})`

h: अरे वाह! हम फिर से यहीं आ गए?

`hong({eyes:"0_neutral"})`

n: आपका काम अपने इंसान को खतरे से बचाना है

`bb({eyes:"look", mouth:"small_lock"})`

n: दरअसल, इस गेम को दोबारा खेलना उन्हें अभी खतरे में डाल रहा है

n: जल्दी, उन्हें खबरदार करो!

```
sfx("squeak");
bb({body:"squeeze_talk"});
hong({body:"0_squeeze"});
```

b: इंसान! सुनो, हम खतरे में हैं! खिलाड़ी...

[...हमें फिर से टॉर्चर करने वाला है!](#act1_replay_torture)

[...कोई अल्टरनेट एंडिंग नहीं ढूंढ पाएगा!](#act1_replay_alternate)

[...को लूडोनरेटिव डिसोनेंस हो जाएगा!](#act1_replay_dissonance)

# act1_replay_torture

```
window.HACK_REPLAY = JSON.parse(localStorage.act4);
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich"});
```

{{if window.HACK_REPLAY.act1_ending=="fight"}}
b: वे हमें दुबककर रोने पर मजबूर कर देंगे!
{{/if}}

{{if window.HACK_REPLAY.act1_ending=="flight"}}
b: वे हमें तुम्हारे फोन को खत्म करवा देंगे क्योंकि उसने तुम्हें पैनिक अटैक दिया!
{{/if}}

{{if window.HACK_REPLAY.a2_ending=="fight"}}
b: वे हमें पार्टी होस्ट को मुक्का मारने से रोकेंगे!
{{/if}}

{{if window.HACK_REPLAY.a2_ending=="flight"}}
b: वे हमें उस हमदर्द एंटी-विलेन पार्टी होस्ट को मुक्का मारने पर मजबूर कर देंगे!
{{/if}}

{{if window.HACK_REPLAY.a3_ending=="jump"}}
h: कम से कम इस बार हम छत से कूदेंगे तो नहीं--
{{/if}}

{{if window.HACK_REPLAY.a3_ending=="walkaway"}}
b: वे हमें छत से कूदने पर मजबूर कर देंगे।
{{/if}}

`bb({body:"fear"});`

b: ये सारी नई भयानक चीज़ें हमारे साथ होंगी, और फिर हम--

(#act1_replay_end)


#act1_replay_alternate

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich"});
```

h: हाँ, कहानी तो पूरी वही है, लेकिन हर चैप्टर के दो संभावित अंत हैं, और साथ ही सारे ब्रांचिंग डायलॉग ऑप्श--

`bb({body:"fear"});`

b: खिलाड़ी निराश हो जाएगा, यह ब्राउज़र टैब बंद कर देगा, हमारा सॉफ्टवेयर डिलीट कर देगा, और फिर हम--

(#act1_replay_end)


# act1_replay_dissonance

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich"});
```

h: एक अश्लील-क्या अब?

`bb({eyes:"normal"});`

b: कहानी का आर्क इस बारे में था कि आप अपने डर के साथ एक स्वस्थ सहयोग बनाने का चुनाव कैसे कर सकते हैं,

`bb({eyes:"normal_right"});`

b: लेकिन गेम को दोबारा खेलने से वही कहानी मिलेगी, जिसका मतलब है कि आपके चुनाव मायने नहीं रखते,

`bb({eyes:"narrow_eyebrow"});`

b: इस तरह गेम के संदेश और उसकी कार्यप्रणाली के बीच एक विरोधाभास दिखेगा,

`bb({eyes:"fear"});`

b: इस तरह इस कथा ब्रह्मांड का ताना-बाना बिखर जाएगा,

`bb({body:"fear"});`

b: और फिर हम--

(#act1_replay_end)


# act1_replay_end

`bb({body:"panic"})`

b: मर जाएँगेEEEEEEEEEEEEEEEEEEEE

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
Game.clearText();
```

(...1001)

```
bb({body:"laugh"});
hong({body:"laugh"});
Game.clearText();
sfx("laugh");
```

(...5001)

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({body:"0_sammich"});
```

h: ठीक है, चलो वापस अपने किरदार में आते हैं।

```
Game.clearText();
```

n4: (अपनी चिंता को बक बक बक... अपने डर के सबसे करीब बक बक... तुम्हें पता है क्या करना है)

```
sfx("squeak");
hong({body:"0_squeeze"});
bb({body:"squeeze"});
```

(#act1_normal_choice)



# act1_normal

`hong({mouth:"0_neutral", eyes:"0_annoyed"})`

h: ओह अच्छा, मेरा भेड़िया वापस आ गया। शानदार।

`hong({eyes:"0_neutral"})`

n: तुम्हारा काम अपने इंसान को खतरे से बचाना है

`bb({eyes:"look", mouth:"small_lock"})`

n: असल में, वो सैंडविच अभी उन्हें खतरे में डाल रहा है

n: जल्दी, उन्हें चेतावनी दो!

```
sfx("squeak");
bb({body:"squeeze_talk"});
hong({body:"0_squeeze"});
```

b: इंसान! सुनो, हम खतरे में हैं! खतरा है...

`bb({body:"squeeze"})`

n4: (अपनी चिंता को बाहर आने दो! चुनो जो तुम्हारे डर के सबसे करीब हो)

(#act1_normal_choice)

# act1_normal_choice

[हम फिर से अकेले लंच कर रहे हैं! दोबारा!](#act1a_alone) `bb({body:"squeeze_talk"})`

[खाते समय हम बिल्कुल प्रोडक्टिव नहीं होते!](#act1a_productive) `bb({body:"squeeze_talk"})`

[वह व्हाइट ब्रेड हमारे लिए खराब है!](#act1a_bread) `bb({body:"squeeze_talk"})`

# act1a_alone

```
bb({body:"normal", mouth:"small", eyes:"narrow"});
hong({body:"0_sammich"});
```

b: क्या तुम्हें नहीं पता कि अकेलापन उतनी ही जल्दी मौत से जुड़ा है जितना रोज़ 15 सिगरेट पीना?-

`Game.OVERRIDE_TEXT_SPEED = 2;`

`bb({mouth:"normal", eyes:"normal_right"})`

b: (होल्ट-लुनस्टैड 2010, पीएलओएस मेडिसिन)

`hong({eyes:"0_annoyed"})`

h: उम्म, अपने स्रोत बताने के लिए धन्यवाद लेकिन--

`Game.OVERRIDE_TEXT_SPEED = 2;`

`bb({body:"fear", mouth:"normal", eyes:"fear"})`

b: जिसका मतलब है कि अगर हम अभी किसी के साथ नहीं घूमेंगे तो हम-

`bb({body:"panic"})`

b: मर जाएँगेEEEEEEEEEEEEEEEEEEEE

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"0_shock", eyes:"0_shock"});
attack("18p", "alone");
publish("hp_show");
```

(...2500)

`_.fifteencigs = true`

n: तुमने 'प्यार न मिलने के डर' का इस्तेमाल किया

(#act1b)

# act1a_productive

```
bb({body:"normal", mouth:"small", eyes:"normal"});
hong({body:"0_sammich"});
```

b: अभी अपना लैपटॉप निकालो और कुछ काम करो!

`hong({eyes:"0_annoyed"})`

h: उम्म, मैं अपने कीबोर्ड में टुकड़े नहीं चाहता--

```
bb({mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: अगर हम समाज के शरीर में योगदान नहीं दे रहे हैं तो हम एक समाज-परजीवी हैं!

b: समाज-शरीर अपने समाज-परजीवियों को मारने के लिए समाज-डॉक्टर के पास दवा लेने जाएगा फिर हम--

```
bb({body:"panic", mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: मर जाएँगेEEEEEEEEEEEEEEEEEEEE

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"0_shock", eyes:"0_shock"});
attack("18p", "bad");
publish("hp_show");
```

(...2500)

`_.parasite = true`

n: तुमने 'बुरा इंसान होने के डर' का इस्तेमाल किया

(#act1b)

# act1a_bread

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich", eyes:"0_annoyed"});
```

h: क्या उन अध्ययनों को दोहराया गया है--

```
bb({body:"fear", mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: प्रोसेस्ड गेहूँ हमारे ब्लड शुगर को बढ़ा देगा जिससे उन्हें हमारे सारे अंग काटने पड़ेंगे और फिर हम-

`bb({body:"panic"})`

b: मर जाooooooooooooooo

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"0_shock", eyes:"0_shock"});
attack("18p", "harm");
publish("hp_show");
```

(...2500)

`_.whitebread = true`

n: आपने नुकसान पहुँचने के डर का इस्तेमाल किया

(#act1b)

# act1b

n: यह बहुत असरदार है

`bb({mouth:"smile", eyes:"smile"});`

b: देखा, इंसान? मैं तुम्हारा वफादार रखवाला भेड़िया हूँ!

`bb({body:"pride_talk"});`

b: अपनी अंतरात्मा पर भरोसा करो! तुम्हारी भावनाएँ हमेशा सही होती हैं!

`bb({body:"pride"});`

n: अपने इंसान की एनर्जी बार को शून्य पर लाओ

n: उनकी शारीरिक + सामाजिक + नैतिक ज़रूरतों की रक्षा के लिए, तुम इस्तेमाल कर सकते हो:

n: नुकसान पहुँचने का डर

n: प्यार न मिलने का डर

n: और एक बुरा इंसान होने का डर

`Game.OVERRIDE_TEXT_SPEED = 1.25;`

n4: (प्रो-टिप: उन विकल्पों को चुनो जो तुम्हारे सबसे गहरे, सबसे काले डरों को छूते हैं!~)

h: ...

```
hong({body:"putaway"});
sfx("rustle");
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

(...1000)

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

h: पता है क्या, शायद अब मेरा फोन देखने का समय आ गया है।

```
sfx("rustle2");
hong({body:"phone1", mouth:"neutral", eyes:"neutral"})
```

n: अपने इंसान की रक्षा करो

n: दुनिया से। दूसरे लोगों से। खुद से।

n: शुभकामनाएँ

(...500)

`Game.clearText()`

(...500)

(#act1c)

# act1c

`music('battle', {volume:0.5})`

n: पहला राउंड: लड़ो!

`bb({body:"normal", mouth:"normal", eyes:"normal"});`

h: हम्म। फेसबुक फीड कह रहा है कि इस वीकेंड एक पार्टी हो रही है।

`bb({eyes:"uncertain"});`

b: क्या वह अजीब इंसान हर वीकेंड पार्टी नहीं करता?

`bb({eyes:"uncertain_right"});`

b: वे किस अंदरूनी खालीपन को भरने की कोशिश कर रहे हैं? वे अंदर से बहुत परेशान होंगे!

`hong({eyes:"surprise"});`

h: और, मुझे एक इनवाइट मिला है?

`bb({eyes:"fear", mouth:"normal"});`

b: तो फिर!

[हाँ कहो, नहीं तो हम अकेलेपन से मर जाएंगे!](#act1c_loner)

[ना कहो, इसमें ज़हरीले ड्रग्स हैं!](#act1c_drugs)

[इग्नोर करो, हम बस पार्टियों को उदास कर देते हैं।](#act1c_sad)

# act1c_loner

{{if _.fifteencigs}}
b: पंद्रह सिगरेट रोज़, इंसान! पंद्रह!
{{/if}}

{{if !_.fifteencigs}}
`Game.OVERRIDE_TEXT_SPEED = 1.5;`
{{/if}}

{{if !_.fifteencigs}}
b: तो कोई हमारे अंतिम संस्कार में नहीं आएगा, हमारी राख समुद्र में फेंक देंगे, हमें एक व्हेल खा जाएगी,
{{/if}}

{{if !_.fifteencigs}}
b: और हम व्हेल की पॉटी बन जाएंगे!
{{/if}}

{{if !_.fifteencigs}} `_.whalepoop = true` {{/if}}

(...500)

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`bb({eyes:"normal"});`

{{if !_.fifteencigs}}
b: तो हाँ, हमें उस पार्टी में जाना चाहिए!
{{/if}}

{{if _.parasite}}
b: बस लैपटॉप ले आना ताकि हम काम कर सकें, और समाज के परजीवी न बनें।
{{/if}}

{{if _.whitebread}}
b: बस वो सफ़ेद ब्रेड न परोसें
{{/if}}

`hong({mouth:"anger", eyes:"anger"});`

h: हे भगवान। अगर इससे तुम चुप हो जाओगे, तो ठीक है।

h: मैं हाँ कहूँगा।

{{if _.whalepoop}}
b: व्हेल की पॉटी, इंसान! व्हेल की पॉटी!
{{/if}}

`_.partyinvite="yes"`

(#act1d)

# act1c_drugs

`bb({mouth:"small", eyes:"fear"});`

{{if _.whitebread}}
b: या इससे भी बुरा... सफ़ेद ब्रेड
{{/if}}

{{if _.whitebread}}
`Game.OVERRIDE_TEXT_SPEED = 1.5;`
{{/if}}

{{if _.whitebread}}
b: हम इतनी ज़्यादा मेथ और सफ़ेद ब्रेड खाकर ओवरडोज़ कर लेंगे कि हमारी मोटी लाश को श्मशान की भट्टी में भी नहीं डाल पाएंगे!
{{/if}}

{{if !_.whitebread}}
b: हम इतनी ज़्यादा ड्रग्स का ओवरडोज़ कर लेंगे कि अंतिम संस्कार करने वाला सोचेगा कि हमारी लाश पहले से ही कैसे एम्बाम की हुई है!
{{/if}}

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

{{if _.parasite}}
b: वैसे भी, पार्टी नहीं कर सकते, हमें काम करना है वरना हम एक भयानक समाज-परजीवी हैं!
{{/if}}

`hong({mouth:"anger", eyes:"anger"});`

h: हे भगवान। अगर इससे तुम चुप हो जाओगे, तो ठीक है।

h: मैं ना कहूँगा।

`_.partyinvite="no"`

(#act1d)

# act1c_sad

`bb({eyes:"uncertain_right", mouth:"normal"});`

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

{{if _.fifteencigs}}
b: हम बस एक कोने में रोते रहते हैं कि अकेलापन रोज़ की 15 सिगरेट जितना जानलेवा है।
{{/if}}

{{if _.parasite}}
b: हम पार्टियों में बस यही सोचते रहते हैं कि हमें इसके बजाय कुछ प्रोडक्टिव करना चाहिए।
{{/if}}

{{if _.whitebread}}
b: हम बस यही चिंता करते रहते हैं कि अनहेल्दी खाने के विकल्प हमें मार डालेंगे।
{{/if}}

```
bb({mouth:"normal", eyes:"normal"});
hong({mouth:"neutral", eyes:"lookaway"});
```

h: पता नहीं क्यों।

`hong({eyes:"neutral"});`

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

b: अगर हम जाएंगे तो उन्हें बुरा लगेगा, लेकिन अगर हम उनका न्योता ठुकरा देंगे तो भी उन्हें बुरा लगेगा!

`bb({body:"fear", eyes:"fear"});`

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

b: हम बस लोगों को बुरा महसूस कराते हैं, तो हमें भी बुरा महसूस करना चाहिए!

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "bad");
```

(...2500)

`hong({mouth:"anger", eyes:"anger"});`

h: उफ़. अगर इससे तुम चुप हो जाओगे, तो ठीक है.

h: मैं न्योते को नज़रअंदाज़ करूँगी.

`_.partyinvite="ignore"`

(#act1d)

# act1d

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"neutral", eyes:"annoyed"});
```

h: खैर. फेसबुक बहुत ज़्यादा हो गया है. मुझे कुछ शांत चाहिए, जो कम चिंता पैदा करे.

`hong({eyes:"neutral"});`

h: ट्विटर पर नया क्या है?

`bb({eyes:"look"});`

[अरे नहीं, वह भयानक खबर देखो!](#act1d_news)

[अरे नहीं, क्या वह ट्वीट हमारे ही बारे में है?](#act1d_subtweet)

[अरे देखो, दूध पीती बिल्ली का GIF](#act1d_milk)


# act1d_news

```
bb({eyes:"pained1"});
music(null, {fade:2});
```

b: हे भगवान, ऐसा लगता है जैसे दुनिया जल रही है, है ना?

```
bb({eyes:"pained2"});
hong({mouth:"sad", eyes:"sad"});
```

b: ऐसा लगता है जैसे सब कुछ खत्म हो रहा है, जैसे सब मर रहा है और हम बर्बाद हैं और हम इसके बारे में कुछ नहीं कर सकते.

```
Game.OVERRIDE_TEXT_SPEED = 0.5;
bb({mouth:"shut"});
```

b: ...

`bb({mouth:"smile", eyes:"smile"});`

b: चलो उस कहानी को रीट्वीट करते हैं!

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

`_.badnews=true`

```
music('battle', {volume:0.5});
hong({mouth:"anger", eyes:"anger"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: ठीक है, मैं इसे रीट्वीट करूँगी बस तुम चुप रहो!

`hong({mouth:"neutral", eyes:"annoyed"});`

h: छोड़ो यार, स्नैपचैट देखते हैं.

(#act1e)


# act1d_subtweet

`bb({eyes:"fear"});`

b: यह एक सबट्वीट है! एक चालाक, चालाक सबट्वीट!

`hong({eyes:"annoyed"});`

h: शायद नहीं?

`bb({eyes:"narrow", mouth:"small"});`

b: लेकिन क्या होगा अगर वे सब हमारी पीठ पीछे बात कर रहे हों

h: वे न--

`bb({body:"fear", eyes:"fear", mouth:"normal"});`

b: हमारी पीठ के सामने

`hong({eyes:"sad", mouth:"sad"});`

h: मैं न--

`bb({eyes:"narrow", mouth:"small"});`

b: लेकिन क्या होगा अगर

h: च--

`bb({eyes:"narrow_eyebrow"});`

b: क्या होगा अगर

```
Game.OVERRIDE_TEXT_SPEED = 0.5;
hong({mouth:"shut"});
```

h: ...

(...1000)

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`_.subtweet=true`

```
hong({mouth:"anger", eyes:"annoyed"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

h: ठीक है, स्नैपचैट ट्राई करता हूँ।

(#act1e)

# act1d_milk

`hong({mouth:"smile", eyes:"neutral"});`

h: हेह हाँ, वो क्यूट है, अभी-अभी रीट्वीट किया है, मैं सो--

```
hong({mouth:"shock", eyes:"shock"});
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 1.8;
```

b: बिल्लियाँ दूध नहीं पचा सकतीं और हम जानवर पर अत्याचार का मज़ा लेने वाले भयानक लोग हैं!

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
attack("18p", "bad");
```

(...2500)


`_.catmilk=true`

```
hong({mouth:"anger", eyes:"annoyed"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

h: ठीक है, स्नैपचैट ट्राई करता हूँ।

(#act1e)

# act1e

`hong({mouth:"neutral", eyes:"neutral"});`

h: हम्म, कल रात की तस्वीरें। तो ऐसी होती हैं वो हफ़्ते वाली पार्टियाँ।

{{if _.partyinvite=="yes"}} (#act1e_said_yes) {{/if}}

{{if _.partyinvite=="no"}} (#act1e_said_no) {{/if}}

{{if _.partyinvite=="ignore"}} (#act1e_said_ignore) {{/if}}

# act1e_said_yes

`hong({mouth:"sad", eyes:"annoyed"});`

h: उफ़्फ़, मेरी एंग्ज़ाइटी के लिए बहुत ज़्यादा भीड़ लग रही है।

h: शायद मुझे इनवाइट के लिए हाँ नहीं कहना चाहिए था?

```
hong({mouth:"neutral", eyes:"neutral"});
bb({mouth:"normal", eyes:"normal"});
```

[अपना जवाब बदलें? किसी बदतमीज़ की तरह?!](#act1e_yes_dontchange)

[अपना जवाब बदलो! वहाँ बहुत भीड़ है!](#act1e_yes_changetono)

{{if _.subtweet}}
[हाँ, वे पक्का हमारे बारे में ही इनडायरेक्ट ट्वीट कर रहे थे।](#act1e_ignore_subtweet)
{{/if}}

{{if _.badnews}}
[रुको, हमने बिना फैक्ट-चेक किए रीट्वीट कर दिया।](#act1e_ignore_factcheck)
{{/if}}

{{if (!_.subtweet && !_.badnews)}}
[तुम्हें पता है, तुम्हारा पोस्चर बहुत खराब है?](#act1e_ignore_posture)
{{/if}}

# act1e_yes_dontchange

```
bb({eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: वो हम पर भरोसा कर रहे थे कि हम आएँगे और अब हम उनका भरोसा तोड़ रहे हैं? क्या तुम अकेले मरना चाहते हो?!

{{if _.fifteencigs}}
b: पंद्रह। सिगरेट।
{{/if}}

{{if _.whalepoop}}
b: व्हेल। पॉटी।
{{/if}}

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

```
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: चुप हो जाओ चुप हो जाओ, मैं इसे हाँ ही रखूँगा!

(#act1f)

# act1e_yes_changetono

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: क्या तुम्हें इंसानी भगदड़ के बारे में नहीं पता?

```
bb({body:"fear", mouth:"small", eyes:"narrow"});
hong({eyes:"sad", mouth:"sad"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: 2003 में रोड आइलैंड के एक नाइटक्लब में आग लग गई थी और घबराहट में लोगों ने निकास द्वार जाम कर दिए जिससे 100 लोग जलकर मर गए थे--

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({mouth:"shock"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: क्या तुम चाहते हो कि हमारे साथ भी ऐसा हो--

```
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 2.5;
```

b: ना कहो ना कहो ना कहो ना कहो ना कहो ना कहो ना कहो ना कहो ना क--


```
bb({body:"normal", eyes:"fear", mouth:"normal"});
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

```
hong({eyes:"anger", mouth:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: चुप हो जाओ चुप हो जाओ, मैं अपना जवाब ना में बदल दूँगा! हे भगवान!

(#act1f)

# act1e_said_no

`hong({mouth:"sad", eyes:"sad"});`

h: हम्म... वो तो बहुत मज़ेदार लग रहा है।

h: शायद मुझे इनवाइट के लिए ना नहीं कहना चाहिए था?

`bb({mouth:"normal", eyes:"normal"});`

[अपना जवाब बदलें? किसी बदतमीज़ की तरह?!](#act1e_no_dontchange)

[अपना जवाब बदलो! अकेले नहीं मरना!](#act1e_no_changetoyes)

{{if _.subtweet}}
[हाँ, वे पक्का हमारे बारे में ही इनडायरेक्ट ट्वीट कर रहे थे।](#act1e_ignore_subtweet)
{{/if}}

{{if _.badnews}}
[रुको, हमने बिना फैक्ट-चेक किए रीट्वीट कर दिया।](#act1e_ignore_factcheck)
{{/if}}

{{if (!_.subtweet && !_.badnews)}}
[तुम्हें पता है, तुम्हारा पोस्चर बहुत खराब है?](#act1e_ignore_posture)
{{/if}}

# act1e_no_dontchange

`bb({eyes:"anger"})`

b: सब हम पर भरोसा कर रहे थे!

b: ...उन्हें अकेला छोड़ने के लिए और उन्हें एक अच्छी पार्टी करने देने के लिए, एक भयानक घिनौने {{if _.whitebread}}फालतू{{/if}} अजीब इंसान के बिना--


```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "bad");
```

(...2500)

```
bb({body:"normal", eyes:"uncertain", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: चुप रहो, चुप रहो, मैं इसे 'नहीं' ही रखूँगा!

(#act1f)

# act1e_no_changetoyes

```
bb({body:"fear", eyes:"fear", mouth:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: लंबे समय तक अकेलापन हमारे कोर्टिसोल के स्तर को बढ़ाता है, साथ ही हृदय रोग और स्ट्रोक का खतरा भी!

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

{{if _.fifteencigs}}
b: पंद्रह। सिगरेट।
{{/if}}

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: चुप रहो, चुप रहो, मैं अपना जवाब 'हाँ' में बदल दूँगा! हे भगवान!

(#act1f)

# act1e_ignore_subtweet

```
bb({eyes:"fear", mouth:"small"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: हमारे सारे विवादित ट्वीट अब हमें भारी पड़ रहे हैं!

```
bb({body:"fear", eyes:"fear", mouth:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.7;
```

b: हमें सब उजागर कर देंगे, हमें रद्द कर देंगे और सूचना के महामार्ग पर घोड़े पर रस्सी से घसीटेंगे!

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: तुम ऐसे क्यों हो?!

(#act1f)

# act1e_ignore_factcheck

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: हम गलत जानकारी फैला रहे हैं! हम स्वतंत्र प्रेस में विश्वास खत्म कर रहे हैं!

```
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: हम ही वो वजह हैं जिससे लोकतंत्र के मलबे से फासीवाद उठेगा!

```
bb({body:"normal", eyes:"anger"});
hong({mouth:"shock", eyes:"shock"});
attack("18p", "bad");
```

(...2500)

```
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
_.factcheck = true;
```

h: तुम ऐसे क्यों हो?!

(#act1f)

# act1e_ignore_posture

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: क्या तुम अपनी रीढ़ की हड्डी को टेढ़ा-मेढ़ा करना चाहते हो?! अपनी स्क्रीन पर झुकना बंद करो!

```
bb({body:"meta"});
```

b: इसका मतलब तुम भी।

```
bb({body:"normal", mouth:"normal"});
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: तुम ऐसे क्यों हो?!

(#act1f)

# act1e_said_ignore

`hong({mouth:"sad", eyes:"sad"});`

h: हम्म... वो तो बहुत मज़ेदार लग रहा है।

h: शायद मुझे न्योते को नज़रअंदाज़ नहीं करना चाहिए था?

`bb({mouth:"normal", eyes:"normal"});`

[नज़रअंदाज़ करते रहो, हम अभी भी मज़ा खराब करने वाले ही हैं।](#act1e_ignore_continue)

[वैसे, हाँ कह दो।](#act1e_ignore_changetoyes)

[वैसे, ना कह दो।](#act1e_ignore_changetono)

# act1e_ignore_continue

`hong({eyes:"annoyed"});`

h: उन्हें लगातार नज़रअंदाज़ करते रहना थोड़ा असभ्य है, है ना?

`bb({eyes:"normal_right"});`

b: खैर, दूसरे लोग हमेशा हमें नज़रअंदाज़ करते हैं, तो

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`bb({eyes:"normal"});`

b: तो चलो हिसाब बराबर कर लेते हैं।

(#act1f)

# act1e_ignore_changetoyes

`hong({eyes:"surprise", mouth:"smile"});`

h: तुम... मुझे मज़े करने दे रहे हो?

b: खैर, मेरा मतलब है, अकेलापन हमें मार सकता है।

`hong({eyes:"neutral", mouth:"neutral"});`

(#act1e_no_changetoyes)

# act1e_ignore_changetono

`bb({eyes:"narrow"});`

b: बहुत भीड़ है। भीड़ खतरनाक होती है।

(#act1e_yes_changetono)


# act1f

```
hong({mouth:"neutral", eyes:"neutral"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

h: जो भी हो। नई टिंडर नोटिफिकेशन।

`bb({eyes:"uncertain"})`

b: क्या, वो हुकअप ऐप?

`hong({eyes:"annoyed"})`

h: ये हुकअप ऐप नहीं है, ये तो बस नए लोगों से मिलने का एक तरीक--

`bb({eyes:"narrow"})`

b: ये एक हुकअप ऐप है।

```
hong({eyes:"surprise", mouth:"smile"});
bb({eyes:"normal"});
```

h: ओह, मुझे एक मैच मिला! वो क्यूट लग रहे हैं!

```
bb({eyes:"narrow_eyebrow"});
hong({eyes:"sad", mouth:"anger"})
```

h: प्लीज़ मेरे लिए ये खराब मत कर--

```
bb({body:"panic"});
Game.OVERRIDE_TEXT_SPEED = 2.0;
```

b: खतरा खतरा खतरा खतरा खतरा खतरा

`bb({body:"fear", eyes:"fear", mouth:"normal"})`

[दूसरे लोग हमारा इस्तेमाल कर रहे हैं।](#act1f_used_by_others)

[हम बस दूसरे लोगों का इस्तेमाल कर रहे हैं।](#act1f_using_others)

[तुम्हारा मैच एक सीरियल किलर है](#act1f_killer)

# act1f_used_by_others

`bb({body:"point_crotch", eyes:"normal", mouth:"normal"})`

b: रैंडम हुकअप्स शायद नीचे का खालीपन भर दें,

b: लेकिन वो कभी वो खालीपन नहीं भर सकते...

`bb({body:"point_heart", eyes:"pretty", mouth:"small"})`

b: जो यहाँ है।

(...1000)

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: बात ये है कि हम अकेले ही मरेंगे।

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`_.hookuphole=true`

(#act1g)

# act1f_using_others

`bb({eyes:"narrow", mouth:"small"})`

b: तुम्हें लगता है कि दूसरों के गुप्तांग हमारे लिए पोकेमोन हैं जिन्हें हम इकट्ठा करें?

```
bb({body:"sing", eyes:"pretty", mouth:"shut"});
music("pokemon");
Game.clearText();
Game.FORCE_CANT_SKIP = true;
```

```
Game.FORCE_TEXT_DURATION = 1000;
Game.FORCE_NO_VOICE = true;
```

b: ♫ (पोकेमोन थीम सॉन्ग)-

(...5600)

```
bb({mouth:"normal"});
Game.FORCE_TEXT_DURATION = 2400;
```

b: ♫ मैं बनना चाहता हूँ, सबसे बदचलन-

(...500)

```
bb({eyes:"narrow", mouth:"small"});
Game.FORCE_TEXT_DURATION = 2100;
```

b: ♫ जैसा कोई कभी न था-

(...1500)

```
bb({eyes:"pretty"});
Game.FORCE_TEXT_DURATION = 2300;
```

b: ♫ जाँघें और कूल्हे, भरे-भरे स्तन-

(...500)

```
bb({eyes:"fear", mouth:"normal"});
Game.FORCE_TEXT_DURATION = 2000;
```

b: ♫ पसीने वाले लिंग और अंडकोष के साथ!-

(...1000)

```
bb({eyes:"smile", mouth:"smile"});
Game.FORCE_TEXT_DURATION = 1000;
```

b: ♫ परवी-मोन! पकड़ना है-

```
Game.FORCE_CANT_SKIP = false;
Game.clearText();
music(false);
bb({body:"normal", mouth:"normal", eyes:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: बात ये है कि हम एक चालाक कमीने हैं।

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "bad");
```

(...2500)

`_.pokemon=true`

(#act1g)

# act1f_killer

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

{{if _.whitebread}}
b: वे तुम्हें कुएँ में फँसा देंगे और मोटा करने के लिए ज़बरदस्ती सफ़ेद ब्रेड खिलाएँगे ताकि तुम्हारी खाल को सूट की तरह पहन सकें!
{{/if}}

{{if _.parasite}}
b: वे तुम्हें पोमोडोरो टाइमर से पीट-पीटकर मार डालेंगे और कहेंगे "तुम्हें और ज़्यादा प्रोडक्टिव होना चाहिए था, परजीवी कहीं के!"
{{/if}}

{{if !_.whitebread && !_.parasite}}
b: वे तुम्हारे मांस को खूनी कंफ़ेटी की तरह फाड़ देंगे, तुम्हारी आँतों को झालर बना देंगे, और तुम्हारे खून को पंच बाउल में मिला देंगे!
{{/if}}

{{if !_.whitebread && !_.parasite}}
b: कैसी रही ये पार्टी का न्योता?!
{{/if}}

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

`_.serialkiller=true`

(#act1g)

# act1g

```
bb({body:"normal", mouth:"normal", eyes:"look"});
hong({body:"2_tired"});
Game.OVERRIDE_TEXT_SPEED = 0.5;
music(false);
```

h: ...

(...500)

h: मैं इस खेल से तंग आ गया हूँ।

(...700)

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

h:
{{if _.fifteencigs}}"loneliness will kill us"... {{/if}}
{{if _.parasite}}"we're a society-parasite"... {{/if}}
{{if _.whitebread}}"don't eat that, it'll kill us"... {{/if}}
{{if _.subtweet}}"they're talking behind our back"... {{/if}}
{{if _.badnews}}"the world is burning"... {{/if}}
{{if _.hookuphole}}"we'll die alone"... {{/if}}
{{if _.serialkiller}}"they're a serial killer"... {{/if}}
{{if _.catmilk}}"cats can't digest milk"... {{/if}}
{{if _.pokemon}}a ^crappy^ parody song... {{/if}}

h: मैं बस अपनी ज़िंदगी जीना चाहता हूँ।

h: मैं बस इस सब... दर्द से आज़ाद होना चाहता हूँ।

`bb({eyes:"look_sad"});`

b: हे... इंसान...

`Game.OVERRIDE_TEXT_SPEED = 0.5;`

b: सब ठीक हो जाएगा।

(...600)

`bb({body:"point_heart", eyes:"look_sad_smile", mouth:"smile"});`

b: तुम्हारे वफ़ादार गार्ड-भेड़िये के तौर पर, मैं हमेशा ख़तरे पर नज़र रखूँगा और तुम्हें सुरक्षित रखने की पूरी कोशिश करूँगा।

`bb({body:"normal", eyes:"look_sad", mouth:"smile"});`

b: मैं वादा करता हूँ।

(...600)

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({body:"phone1", eyes:"neutral", mouth:"neutral"});
```

h: आख़िरी ऐप। इंस्टाग्राम। क्या मिला?

`hong({eyes:"sad"});`

h: ये... और पार्टी की तस्वीरें हैं।

`hong({mouth:"sad"});`

h: सब कितने खुश दिख रहे हैं। चिंता से आज़ाद। बेचैनी से आज़ाद।

`hong({mouth:"anger"});`

h: हे भगवान, मैं उनकी तरह क्यों नहीं हो सकता? मैं बस सामान्य क्यों नहीं हो सकता?

`bb({eyes:"normal_right"});`

b: पार्टियों की बात करें तो, इस वीकेंड के न्योते के बारे में। ये रहा मेरा आख़िरी फ़ैसला:

`bb({eyes:"normal"});`

[हमें चलना चाहिए।](#act1g_go) `Game.OVERRIDE_CHOICE_LINE=true`

[हमें नहीं जाना चाहिए।](#act1g_dont) `Game.OVERRIDE_CHOICE_LINE=true`

# act1g_go

`_.act1g = "go"`

(#act1h)

# act1g_dont

`_.act1g = "dont"`

(#act1h)

# act1h

b: हम च--

```
bb({eyes:"wat", mouth:"small"});
hong({body:"2_fuck"});
```

h: धत्।

`hong({body:"2_you"});`

h: तुम।

(...500)

b: क

(...1500)

`bb({eyes:"wat_2"});`

b: क्या?

`hong({body:"phone1", eyes:"anger", mouth:"anger"});`

h: मैं उस पार्टी के लिए हाँ कहने वाली हूँ,

{{if _.act1g=="go"}}
h: इसलिए नहीं कि तुम चाहती हो, बल्कि इसलिए कि मैं चाहती हूँ।
{{/if}}

{{if _.act1g=="dont"}}
h: खासकर इसलिए क्योंकि तुम नहीं चाहती।
{{/if}}

```
hong({body:"putaway"});
sfx("rustle");
```

h: तुम मुझ पर काबू नहीं कर सकती।

```
sfx("rustle2");
hong({body:"0_sammich", eyes:"0_annoyed", mouth:"0_neutral"});
```

h: अब मुझे माफ़ करना, मैं यह स्वादिष्ट सैंडविच शांति से खाने वाली हूँ।

`hong({body:"2_sammich_eat"});`

(...601)

```
sfx("sandwich");
hong({body:"2_sammich_eaten", eyes:"0_lookaway", mouth:"0_chew1"})
```

(...601)

```
bb({body:"normal", eyes:"uncertain", mouth:"shut"});
Game.OVERRIDE_TEXT_SPEED = 0.5;
```

b: ...

```
bb({eyes:"normal_right"});
Game.OVERRIDE_TEXT_SPEED = 1;
```

b: ...

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 4;
```

b: ..................

(...500)

`bb({mouth:"normal"});`

[आह्ह्ह हम मरने वाले हैं](#act1h_death) `Game.OVERRIDE_CHOICE_LINE = true;`

[आह्ह्ह सब हमसे नफ़रत करते हैं](#act1h_loneliness) `Game.OVERRIDE_CHOICE_LINE = true;`

[आह्ह्ह हम बहुत बुरे लोग हैं](#act1h_worthless) `Game.OVERRIDE_CHOICE_LINE = true;`

# act1h_death

```
bb({body:"fear"});
Game.OVERRIDE_TEXT_SPEED = 3;
```

b: आह्ह्ह्ह हम मरने वाले हैं आह्ह्ह्ह्ह्ह्ह्ह्ह्ह

```
hong({body:"3_defeated1"});
attack("100p", "harm");
```

(...2500)

(#act1i)

# act1h_loneliness

```
bb({body:"fear"});
Game.OVERRIDE_TEXT_SPEED = 3;
```

b: आह्ह्ह्ह सब हमसे नफ़रत करते हैं आह्ह्ह्ह्ह्ह्ह्ह्ह्ह

```
hong({body:"3_defeated1"});
attack("100p", "alone");
```

(...2500)

(#act1i)

# act1h_worthless

```
bb({body:"fear"});
Game.OVERRIDE_TEXT_SPEED = 3;
```

b: आह्ह्ह्ह हम बुरे लोग हैं आह्ह्ह्ह्ह्ह्ह्ह्ह्ह

```
hong({body:"3_defeated1"});
attack("100p", "bad");
```

(...2500)

(#act1i)

# act1i

```
bb({mouth:"smile_lock", eyes:"smile", body:"normal"});
music('battle', {volume:0.5});
```

n: बधाई हो!

(...500)

n: आपने अपने इंसान की शारीरिक + सामाजिक + नैतिक ज़रूरतों को सफलतापूर्वक बचाया है

n: अरे, देखो वे कितने आभारी हैं!

(...500)

n: अब जब उनकी ऊर्जा शून्य है, आप सीधे उनके कार्यों को नियंत्रित कर सकते हैं।

`bb({mouth:"smile", eyes:"normal"});`

n: अपनी अंतिम चाल चुनें।

`bb({mouth:"small_lock", eyes:"fear"});`

n: उन्हें खत्म करो।

[{लड़ो: अपने तनाव देने वाले फ़ोन को सज़ा दो!}](#act1i_phone) `Game.OVERRIDE_CHOICE_LINE=true`

[{भागो: सिमट कर बैठ जाओ और रोओ!}](#act1i_cry) `Game.OVERRIDE_CHOICE_LINE=true`

# act1i_phone

`bb({mouth:"normal", eyes:"narrow"})`

b: तुम्हारा फ़ोन तुम्हें पैनिक अटैक दे रहा था!

`bb({eyes:"anger"})`

b: ज़करबर्ग और उनकी कंपनी वेंचर कैपिटलिस्ट के पैसे के लिए तुम्हारी मानसिक सेहत को हाईजैक कर रहे हैं!

```
bb({body:"fear", eyes:"fear"});
hong({body:"3_defeated2"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: अपने फ़ोन को सज़ा दो! इसे तबाह कर दो! इसे मार डालो!

```
Game.OVERRIDE_TEXT_SPEED = 2.5;
bb({body:"flail"});
hong({body:"3_defeated3"});
_.act1_ending = "fight";
```

b: इसे मार डालो इसे मार डालो इसे मार डालो इसे मार डालो इसे मार डालो इसे मार डालो इसे मार डालो इसे मार डालो इसे मार डालो इसे मार डालो इसे मार डालो इसे मार डालो इसे मार डालो इसे मार डालो इसे मार डालो इसे मार डा--

(#act1j)

# act1i_cry

`bb({eyes:"fear", mouth:"normal"})`

b: पूरी दुनिया ख़तरों से भरी है!

```
bb({body:"fear"});
hong({body:"3_defeated2"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: आर्माडिलो की तरह करो! आत्मरक्षा के लिए गेंद की तरह सिकुड़ जाओ!

```
Game.OVERRIDE_TEXT_SPEED = 2.5;
bb({body:"flail"});
hong({body:"3_defeated3"});
_.act1_ending = "flight";
```

b: सिकुड़ जाओ और रोओ सिकुड़ जाओ और रोओ सिकुड़ जाओ और रोओ सिकुड़ जाओ और रोओ सिकुड़ जाओ और रोओ सिकुड़ जाओ और रो--

(#act1j)

# act1j

`SceneSetup.act1_outro()`