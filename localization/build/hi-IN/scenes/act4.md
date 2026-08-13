# act4

```
SceneSetup.act4();
publish("SAVE_GAME", ["act4"]);
Game.FORCE_CANT_SKIP = true;
```

(...5001)

```
publish("set_how_many_prompts", [1]);
Game.FORCE_CANT_SKIP = false;
Game.CLICK_TO_ADVANCE = true;
```

n3: (गेम ऑटो-सेव हो गया)

```
Game.clearText();
Game.FORCE_CANT_SKIP = true;
```

(...1001)

```
var hong_frame = _.INJURED ? 9 : 0;
publish("act4", ["hong_walks_in",hong_frame]);
sfx("grass_step1", {volume:0.1});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step2", {volume:0.2});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step1", {volume:0.25});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step2", {volume:0.3});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step1", {volume:0.35});
```

(...1667)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step2", {volume:0.35});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step1", {volume:0.35});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step2", {volume:0.35});
```

(...1333)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step1", {volume:0.20});
```

(...167)

```
publish("act4_hong_sits");
```

(...66)

```
publish("act4", ["hong_transition", "next"]);
sfx("squeak");
```

(...133)

`publish("act4", ["hong_transition", "next"]);`

(...1333)

```
publish("act4", ["hong_transition", "next"]);
sfx("rustle");
```

(...333)

`publish("act4", ["hong_transition", "next"]);`

(...1001)

```
publish("act4", ["hong_transition", "next"]);
```

(...333)

```
publish("act4", ["hong_transition", 9]);
sfx("sandwich");
```

(...333)

`publish("act4", ["hong_transition", 10]);`

(...333)

`publish("act4", ["hong_transition", 9]);`

(...333)

`publish("act4", ["hong_transition", 10]);`

(...333)

`publish("act4", ["hong_transition", 9]);`

(...333)

`publish("act4", ["hong_transition", 10]);`

(...333)

`publish("act4", ["hong_transition", "next"]);`

(...1466)

`publish("act4-out-1");`

(...201)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

```
publish("act4-show-chars");
Game.FORCE_CANT_SKIP = false;
```

(...901)

`hong({body:"sigh_1"})`

(...601)

```
hong({body:"sigh_2"});
bb({eyes:"look_down"});
```

h: आह

```
hong({body:"hold", eyes:"normal", mouth:"normal"});
bb({eyes:"normal"});
```

h: तो इस कहानी का क्या मतलब था?

`hong({body:"one_up", eyes:"annoyed"})`

h: हमने क्या सीखा? मैं बेवकूफ बन रहा था, मेरे "दोस्त" मेरा इस्तेमाल कर रहे थे, और हम बाल-बाल बचे।

`hong({body:"normal", eyes:"normal"})`

{{if _.INJURED}}
[हाँ, और हॉस्पिटल के बिल की तो बात ही मत करो।](#act4a_bill)
{{/if}}

{{if !_.INJURED}}
[हाँ, और लिवर खराब होने की तो बात ही मत करो।](#act4a_liver)
{{/if}}

[हाँ, वह सबसे खराब स्थिति थी।](#act4a_worst)

[हाँ, मैं सही था।](#act4a_right)

# act4a_bill

`hong({eyes:"annoyed_l", mouth:"narrow"});`

h: सही है। मुझे नहीं लगता कि मेरे बीमा प्लान में "बेवकूफी करना" शामिल है।

`hong({eyes:"annoyed", mouth:"normal"});`

b: और फिर भी... हम बच गए!

`hong({eyes:"normal"});`

h: ?

(#act4b)

# act4a_liver

`bb({eyes:"normal_d"});`

b: हमने निश्चित रूप से अपनी जीवन प्रत्याशा कुछ साल कम कर दी...

`bb({eyes:"surprise"});`

b: लेकिन कम से कम हमारे पास अभी भी जीवन प्रत्याशा है! हम बच गए!

```
hong({eyes:"surprise"});
bb({eyes:"normal"});
```

h: ?

(#act4b)

# act4a_worst

`bb({eyes:"normal_d"});`

b: और फिर भी...

h: हाँ?

`bb({eyes:"surprise"});`

b: हम बच गए!

(#act4b)

# act4a_right

`bb({eyes:"normal_d"});`

b: लेकिन... तुम भी सही थे।

`hong({eyes:"surprise"});`

h: हाँ?

`bb({eyes:"normal"});`

b: मैं वह भेड़िया था जिसने भेड़िया चिल्लाया था। इसलिए जब असली खतरा आया, तो तुमने - न्यायसंगत रूप से - मुझे विश्वास नहीं किया।

`bb({eyes:"surprise_r"});`

b: और फिर भी, हम बच गए!

(#act4b)

# act4b

```
bb({eyes:"normal", mouth:"normal"});
hong({eyes:"normal", mouth:"normal"});
```

b: सब कुछ के बावजूद, हम अभी भी यहाँ हैं।

`hong({eyes:"suspect"});`

{{if _.INJURED}}
h: हम मौत के करीब अनुभव से गुज़रे हैं, यह देखते हुए तुम काफी शांत लग रहे हो।
{{/if}}

{{if !_.INJURED}}
h: हम मौत के करीब अनुभव से गुज़रे हैं, यह देखते हुए तुम काफी शांत लग रहे हो।
{{/if}}

```
hong({eyes:"normal"});
bb({eyes:"annoyed_d", mouth:"narrow"});
```

b: वैसे, इसकी तुलना में बाकी सब कुछ कम डरावना लगता है। इसने मुझे सोचने पर भी मजबूर कर दिया है।

`bb({eyes:"normal", mouth:"normal"});`

b: अगर मैं तुमसे लड़ता हूँ तो यह बुरा है, क्योंकि यह तुम्हारी रक्षा नहीं करता...

h: लेकिन मैं तुमसे लड़ता हूँ तो यह भी बुरा है, क्योंकि इससे तुम और ज़ोर से चिल्लाते हो...

`bb({eyes:"normal_r"})`

b: तो शायद...

`bb({eyes:"normal"})`

h: शायद हमें लड़ना नहीं पड़ेगा।

```
Game.FORCE_CANT_SKIP = true;
Game.clearText();
```

(...301)

`publish("smash",[0]);`

(...2001)

```
publish("smash",[1]);
sfx("smash_glass");
```

(...2601)

```
publish("smash",[2]);
bb({eyes:"normal", mouth:"normal"});
hong({eyes:"normal", mouth:"normal"});
```

(...2001)

`Game.FORCE_CANT_SKIP = false;`

(#act4b_2)

# act4b_2

```
music('dontfight',{fade:5, volume:0.6});
bb({eyes:"annoyed_d"});
```

b: मैं कोई बड़ा बुरा भेड़िया नहीं हूँ। लेकिन मैं कोई रखवाला भेड़िया भी नहीं हूँ।

`bb({eyes:"sad_d"})`

b: मैं एक पिटा-पिटाया आश्रय कुत्ता हूँ।

`bb({eyes:"sad"})`

b: हम मुश्किल दौर से गुज़रे हैं। शायद सदमा या उपेक्षा। इसीलिए मैं कभी-कभी ज़्यादा प्रतिक्रिया कर देता हूँ और ऐसे करता हूँ:

```
sfx("yaps", {volume:0.6});
bb({body:"yap_1"});
Game.FORCE_CANT_SKIP = true;
Game.WORDS_HEIGHT_BOTTOM = 215;
Game.FORCE_TEXT_DURATION = 90;
Game.FORCE_NO_VOICE = true;
```

b: भौंक भौंक भौंक भौंक भौंक

(...1884)

```
Game.WORDS_HEIGHT_BOTTOM = -1;
Game.FORCE_CANT_SKIP = false;
bb({body:"normal", mouth:"scream", eyes:"scream_sad"});
```

b: लेकिन मैं डरपोक कुत्ता नहीं बनना चाहता! मैं तुम्हारी रक्षा करना चाहता हूँ! मैं एक अच्छा कुत्ता बनना चाहता हूँ!

`bb({eyes:"sad", mouth:"normal"});`

b: इंसान... क्या तुम इस भेड़िये को पालतू बनाने में मदद करोगे?

`hong({eyes:"sad"})`

h: मैं... मैं कोशिश करूँगा।

`hong({eyes:"normal_l", body:"chin", mouth:"narrow"})`

h: ठीक है। भावनाओं के साथ स्वस्थ रिश्ता। रिश्तों में संवाद की ज़रूरत होती है। तो, चलो संवाद करते हैं।

`hong({eyes:"normal", body:"hands_1", mouth:"normal"})`

h: अगले पाँच मिनट बहुत ही बचकाने लगेंगे, लेकिन चलो कोशिश करते हैं।

```
hong({body:"hands_2", mouth:"normal"});
```

h: प्रिय अंदरूनी भेड़िया... तुम कैसा महसूस कर रहे हो?

n2: कुल डर:

n2: चोट लगी {{_.attack_harm_total}}, अकेला {{_.attack_alone_total}}, बुरा इंसान {{_.attack_bad_total}}

n2: किस डर के बारे में पहले बात करना चाहते हो? (तुम बाद में दूसरों के बारे में बात कर सकते हो)

```
_.a4_fears_discussed = 0;
_.num_thanks = 0;
hong({body:"normal"});
bb({eyes:"normal"});
```

[मुझे डर है कि हमें नुकसान पहुँचेगा।](#act4_harm)

[मुझे डर है कि हम अकेले रह जाएँगे।](#act4_alone)

[मुझे डर है कि हम बुरे लोग हैं।](#act4_bad)

# act4_harm

```
_.a4_talked_about_harm = true;
_.a4_fears_discussed += 1;
```

`bb({eyes:"normal_d"})`

b: मैं तुम्हारी शारीरिक सुरक्षा की ज़रूरत की रक्षा करना चाहता हूँ,

`bb({eyes:"sad_d"})`

b: लेकिन पूरी दुनिया बहुत खतरनाक लगती है। इतनी त्रासदी और बुराई से भरी हुई।

`bb({eyes:"sad"})`

{{if _.a4_fears_discussed==1}}
b: पता नहीं, बहुत हो गया मेरा चुनना कि आगे क्या कहना है। तुम क्या कहते हो, इंसान?
{{/if}}

{{if _.a4_fears_discussed==2}}
b: फिर से, तुम्हारी बारी, इंसान। तुम क्या सोचते हो?
{{/if}}

{{if _.a4_fears_discussed==3}}
b: और कुछ विचार हैं, इंसान?
{{/if}}

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[तुम सही कह रहे हो। तो चलो खुद को बचाते हैं।](#act4_harm_skills)

[चलो खुद को और खतरे में डालते हैं।](#act4_harm_exposure)

[शुक्रिया।](#act4_thanks) `_.thanks_for = "physical safety";`

# act4_harm_skills

`bb({eyes:"look_down", body:"paw"})`

b: लेकिन... कैसे? मेरे पास नुकीले दाँत और पंजे हैं, पर मैं सिर्फ़ एक रूपक हूँ।

```
bb({ body:"normal", eyes:"normal" });
hong({ body:"one_up", eyes:"surprise" });
```

h: क्या हम आत्मरक्षा सीख सकते हैं? ऐसे समुदाय में शामिल हो सकते हैं जो एक-दूसरे की रक्षा करता है? अपने सामान्य स्वास्थ्य और व्यक्तिगत सीमाओं में सुधार कर सकते हैं?

```
bb({ eyes:"annoyed_r" });
hong({ body:"normal", eyes:"normal" });
```

b: शायद, लेकिन...

[हम शुरुआत कहाँ से करें?](#act4_harm_skills_start)

[क्या होगा अगर वे फिर भी काम न करें?](#act4_harm_skills_work)

[क्या होगा अगर हम "सुरक्षा" के मामले में कुछ ज़्यादा ही आगे निकल जाएं?](#act4_harm_skills_overboard)

# act4_harm_skills_start

`bb({ eyes:"sad_d" })`

b: हमें खुद को सुधारने के लिए बहुत कुछ करना है, बहुत कुछ। हम शुरू कहाँ से करें?

`hong({ body:"shrug", eyes:"surprise" })`

h: हम अभी शुरू कर रहे हैं।

`bb({ eyes:"normal", mouth:"narrow" })`

b: हाँ?

```
bb({ body:"normal", mouth:"normal" });
hong({ body:"normal", mouth:"normal", eyes:"normal"});
```

h: हम अभी अच्छी बातचीत का अभ्यास कर रहे हैं। जिससे हमें खतरे का बेहतर पता लगाने में मदद मिलेगी, कम गलत अलार्म के साथ,

`hong({ eyes:"surprise" });`

h: और इससे हमें नुकसान से बचाने में मदद मिलेगी!

`hong({ eyes:"normal", mouth:"normal" });`

h: इसलिए: यह आत्मरक्षा प्रशिक्षण है।

`bb({ eyes:"normal_r" })`

b: हम्म। मैं इससे ज़्यादा की उम्मीद कर रही थी:

```
Game.FORCE_CANT_SKIP = true;
Game.clearText();
hong({ eyes:"sad", mouth:"smile" });
bb({ body:"karate_1" });
sfx("hiya");
```

(...1001)

`Game.FORCE_CANT_SKIP = false;`

(#act4_something_else)

# act4_harm_skills_work

`bb({ eyes:"normal" });`

h: सच है, हम खुद को 100% सुरक्षित नहीं रख सकते...

`hong({ body:"one_up" });`

h: लेकिन 1% सुधार भी कुछ मायने रखता है, है ना?

```
bb({ eyes:"annoyed" });
hong({ normal:"one_up" });
```

b: तुम गिलास को 99% खाली नहीं, बल्कि 1% भरा हुआ देख रही हो?

`bb({ eyes:"normal" });`

h: जो रेगिस्तान में फंसे होने पर भी कुछ मायने रखता है।

`bb({ eyes:"closed" });`

b: ठीक है। तो, पी लो।

(#act4_something_else)

# act4_harm_skills_overboard

`bb({ body:"chest", eyes:"annoyed" })`

b: मेरा मतलब है, तुम मेरे चेतावनियों को इसलिए नज़रअंदाज़ कर रही थी क्योंकि मैं सुरक्षा को लेकर ज़्यादा कर रही थी!

`bb({ body:"normal", eyes:"normal" })`

h: नहीं, तुम सही हो। हम संयम में सुरक्षा करना चाहेंगे। हर चीज़ संयम में।

`bb({ eyes:"suspect" })`

b: माफ़ करना, हर चीज़ संयम में?

`hong({ eyes:"annoyed" })`

h: संयम में चीज़ों की एक संयमित संख्या।

```
bb({ eyes:"closed" });
hong({ eyes:"normal" });
```

b: धन्यवाद अपने कथनों को पुनरावर्ती रूप से स्व-सुसंगत बनाने के लिए।

(#act4_something_else)


# act4_harm_exposure

`bb({ mouth:"scream_talk", eyes:"scream", MOUTH_LOCK:true });`

b: क्या

```
bb({ mouth:"narrow", eyes:"suspect" });
hong({ body:"one_up" });
```

h: मेरा मतलब है, मान लीजिए कि एक कुत्ता बिजली की गड़गड़ाहट से डरता है।

`hong({ body:"hands_1" });`

h: प्रशिक्षकों द्वारा इस्तेमाल की जाने वाली एक तरकीब यह है कि बिजली की गड़गड़ाहट की रिकॉर्डिंग कम आवाज़ में बजाई जाए, फिर कुत्ते को शांत रहने पर इनाम दिया जाए।

`hong({ body:"hands_2" });`

h: कई दिनों तक, ट्रेनर आवाज़ को धीरे-धीरे बढ़ाता है, जब तक कि कुत्ता गरज के डर पर काबू नहीं पा लेता।

```
hong({ body:"normal", eyes:"surprise" });
bb({ mouth:"normal", eyes:"normal" });
```

h: इसे एक्सपोज़र थेरेपी कहते हैं!

`hong({ body:"point", eyes:"normal" });`

h: चूंकि तुम एक कुत्ता हो, यह तुम्हारे लिए भी काम करना चाहिए, है ना? सभी स्तनधारियों में एक जैसी 'लड़ो या भागो' प्रतिक्रिया होती है।

`hong({ body:"normal" });`

[क्या होगा अगर हम ज़रूरत से ज़्यादा असंवेदनशील हो जाएं?](#act4_harm_exposure_overboard)

[क्या होगा अगर हमारा सामना असली खतरे से हो जाए?](#act4_harm_exposure_hurt)

[मैं एक भेड़िया हूँ, कोई कुत्ता नहीं।](#act4_harm_exposure_dog) `bb({ eyes:"suspect" })`

# act4_harm_exposure_dog

h: और मैं तुम्हें तब तक दया और धैर्य दिखाऊंगा जब तक तुम एक प्यारे से पिल्ले में पालतू नहीं बन जाते।

`bb({ MOUTH_LOCK:true })`

b: ...

`bb({ eyes:"sad", mouth:"smile" })`

b: कितना प्यारा।

(#act4_something_else)

# act4_harm_exposure_overboard

`bb({ eyes:"annoyed" })`

b: हमने अभी देखा कि अगर तुम अपने डर को दबा देते हो तो क्या होता है - तुम खुद को खतरनाक स्थितियों में डाल देते हो।

`bb({ eyes:"angry_r", body:"one_up" })`

b: वैसे भी, क्या बहुत ज़्यादा असंवेदीकरण हमें साइकोपैथ नहीं बना देगा?

`bb({ mouth:"scream", eyes:"scream", body:"two_up" })`

b: जल्द ही हम भयानक हत्या के पोर्न देखते हुए खुद को इनाम देंगे!

`hong({ eyes:"annoyed" })`

h: मुझे... लगता है कि इसमें और गरज के बीच एक रेखा है।

`bb({ body:"normal", mouth:"normal", eyes:"suspect" })`

b: लेकिन ठीक कहाँ, इंसान? कहाँ?!

`hong({ eyes:"surprise", body:"one_up" })`

h: मुझे नहीं पता। लेकिन तुम मेरी मदद कर सकते हो!

`hong({ eyes:"normal", body:"normal" })`

h: तुम्हारे साथ काम करके और बातचीत करके, हम वह रेखा खींचेंगे।

`bb({ body:"paw", mouth:"narrow", eyes:"closed" })`

b: ठीक है। लेकिन मेरे पास अंगूठे नहीं हैं, इसलिए तुम्हें ही रेखा खींचनी होगी।

(#act4_something_else)

# act4_harm_exposure_hurt

`bb({ body:"two_up", eyes:"angry_r" })`

{{if _.INJURED}}
b: उदाहरण के लिए: हमने एक छत से छलांग लगा दी!
{{/if}}

{{if !_.INJURED}}
b: उदाहरण के लिए: हमने लगभग एक छत से छलांग लगा दी!
{{/if}}

```
hong({ eyes:"annoyed" });
bb({ body:"normal", eyes:"annoyed" });
```

h: नहीं, तुम सही हो। कोई बहुत आगे जा सकता है।

`hong({ eyes:"normal" });`

h: लेकिन इसीलिए, अगर हम एक्सपोज़र थेरेपी करते हैं, तो हम छोटी शुरुआत करेंगे, और ऊपर की ओर छोटे कदम बढ़ाएंगे।

h: वास्तविक खतरा महसूस होने से ठीक पहले, हम रुक जाते हैं।

`bb({ eyes:"annoyed_r", mouth:"narrow" });`

b: हाँ, मैं ज़ोरदार गरज सुनने और एक लंबी नुकीली टोपी पहनकर तूफान में खड़े होने के बीच रेखा खींचता हूँ।

(#act4_something_else)

# act4_thanks

`_.num_thanks += 1`

{{if _.num_thanks==1}}
(#act4_thanks_1)
{{/if}}

{{if _.num_thanks==2}}
(#act4_thanks_2)
{{/if}}

{{if _.num_thanks==3}}
(#act4_thanks_3)
{{/if}}

# act4_thanks_1

`bb({ MOUTH_LOCK:true })`

b: ...

`bb({ eyes:"annoyed" })`

b: रुको, मेरी भावनाओं के पक्ष या विपक्ष में कोई तर्क नहीं? बस... "धन्यवाद"?

`hong({ eyes:"surprise", body:"shrug" })`

h: हाँ! मेरी {{_.thanks_for}} के लिए अपनी चिंता दिखाने के लिए धन्यवाद।

```
bb({ eyes:"closed_annoyed", MOUTH_LOCK:true });
hong({ eyes:"normal", body:"normal" });
```

b: ...

h: तुम ठीक हो?

`bb({ eyes:"super_sad", mouth:"narrow" });`

b: तुमने मुझसे पहले कभी धन्यवाद नहीं कहा।

`hong({ mouth:"smile" });`

h: ओह, तुम बड़े रोएँदार, घबराए हुए भेड़िये हो।

(#act4_something_else)

# act4_thanks_2

h: भले ही तुम ज़्यादा प्रतिक्रिया करते हो, मैं तुम्हारी मेरी {{_.thanks_for}} को देखने की सराहना करता हूँ।

`bb({ eyes:"annoyed" })`

b: रुको... तुम इन डर के बारे में वास्तव में बात करने से बचने के लिए सिर्फ 'धन्यवाद' दोहरा नहीं रहे हो, है ना?

```
bb({ eyes:"normal" });
hong({ eyes:"annoyed", body:"chin" });
```

h: वैसे, चीज़ें जटिल हैं, और मेरे पास हमेशा तैयार जवाब नहीं होते।

`hong({ eyes:"annoyed_l", body:"one_up" })`

h: ऐसा नहीं है कि जीवन तुम्हें 3 पहले से बने संवाद प्रतिक्रियाओं की सूची देता है।

`hong({ eyes:"normal", mouth:"smile", body:"normal" })`

h: लेकिन अभी के लिए, मैं कम से कम धन्यवाद कह सकता हूँ।

b: अच्छा, आपका भी धन्यवाद, मुझे धैर्यपूर्वक सुनने के लिए।

`bb({ eyes:"closed" });`

b: तुम छोटे, बाल-रहित मांस-स्तनपायी।

(#act4_something_else)

# act4_thanks_3

h: भले ही तुम्हारी बकवास मुझे डराती है, तुम बस मेरी {{_.thanks_for}} की रक्षा करने की कोशिश कर रहे हो।

`bb({ eyes:"smile_r" });`

b: ठीक है, अगर तुम मेरी इस तरह तारीफ़ करते रहे, तो इंटरनेट हमारे बारे में अजीब बातें सोचेगा।

```
bb({ eyes:"smile" });
hong({ eyes:"annoyed" });
```

h: चलो, मैं बस एक कमज़ोर कॉलेज-उम्र का बच्चा हूँ और तुम एक बड़े, डरावने भेड़िया हो। सबसे बुरा क्या हो सकता है--

`hong({ eyes:"normal", body:"point" });`

h: वास्तव में, उसका जवाब मत देना।

(#act4_something_else)




# act4_alone

```
_.a4_talked_about_alone = true;
_.a4_fears_discussed += 1;
```

`bb({ eyes:"sad_d" });`

b: मैं यह सुनिश्चित करना चाहता हूँ कि तुम अपने अपनेपन की गहरी, मानवीय ज़रूरत को पूरा करो...

`bb({ eyes:"sad_u" });`

b: लेकिन मुझे चिंता है कि अगर कोई हमें - असली हमें - जान गया, तो हम उन सभी को डरा देंगे।

`bb({ eyes:"sad" });`

{{if _.a4_fears_discussed==1}}
b: पता नहीं, अब मैं आगे क्या कहूँ। तुम क्या कहते हो, इंसान?
{{/if}}

{{if _.a4_fears_discussed==2}}
b: फिर से, तुम्हारी बारी, इंसान। तुम क्या सोचते हो?
{{/if}}

{{if _.a4_fears_discussed==3}}
b: और कुछ विचार, इंसान?
{{/if}}

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[मैं सहमत हूँ: चलो अपनी सोशल लाइफ पर काम करते हैं।](#act4_alone_skills)

[मुझे लगता है लोग हमें पसंद करते हैं। चलो पता लगाते हैं?](#act4_alone_experiment)

[शुक्रिया।](#act4_thanks) `_.thanks_for = "social belonging";`

# act4_alone_skills

```
bb({ eyes:"normal" });
hong({ body:"chin" });
```

h: क्या हम सवाल पूछना, सुनना और सहानुभूति रखना, खुला और कमजोर बनना जैसे कौशल का अभ्यास कर सकते हैं?

`hong({ eyes:"normal_l" });`

h: या बेहतर सामाजिक आदतें बना सकते हैं, जैसे दोस्तों के साथ समय निर्धारित करना या नियमित रूप से मीटअप में जाना?

`hong({ body:"one_up" });`

h: अस्वीकृति के साथ अधिक सहज होना भी सीख सकते हैं।

`hong({ eyes:"normal" });`

h: या यह जानना सीख सकते हैं कि लोग हमें अस्वीकार नहीं कर रहे हैं, वे बस थके हुए हैं या उनका चेहरा ही ऐसा है।

```
hong({ body:"normal" });
bb({ eyes:"annoyed_r" });
```

b: यह बहुत सारे विकल्प हैं। लेकिन, "सामाजिक कौशल सीखने" के बारे में...

[क्या यह हेरफेर करना नहीं हुआ?](#act4_alone_skills_manipulative)

[क्या इससे दूसरों के लिए हमारे साथ हेरफेर करना आसान नहीं हो जाएगा?](#act4_alone_skills_manipulated)

[क्या होगा अगर हम फिर भी नाकाम रहे?](#act4_alone_skills_fail)

# act4_alone_skills_manipulative

`bb({ eyes:"suspect" });`

b: क्या सीरियल किलर जो अपने पीड़ितों की भावनाओं को पढ़ सकते हैं, वे "सहानुभूति" में बहुत अच्छे होते हैं?

`bb({ eyes:"annoyed" });`

b: क्या चार्ल्स मैनसन ने दोस्त बनाए और लोगों को प्रभावित किया?

`hong({ eyes:"annoyed", body:"chin" });`

h: नहीं, तुम सही हो।

h: "सामाजिक कौशल" का कोई मतलब नहीं है अगर हम वास्तव में लोगों की परवाह नहीं करते हैं।

`hong({ body:"normal" });`

h: असल में, बस कमीने मत बनो।

`bb({ eyes:"annoyed", mouth:"smile" });`

b: यह तो किसी मोटिवेशनल पोस्टर का कैप्शन है।

`hong({ body:"shrug", mouth:"narrow" });`

h: “कमीने मत बनो™”

(#act4_something_else)

# act4_alone_skills_manipulated

`bb({ eyes:"angry" })`

b: हम एक स्वागत करने वाले पायदान बन जाएंगे, जो लोगों के हमारे ऊपर पैर पोंछने पर कृपया और धन्यवाद कहेंगे!

`bb({ mouth:"scream", eyes:"scream" })`

b: हम इतना चाटेंगे कि ऐसा लगेगा जैसे हमने भूरे रंग की लिपस्टिक लगाई हो!

```
bb({ mouth:"normal", eyes:"normal" });
hong( body:"chin" });
```

h: नहीं, तुम सही हो। "सामाजिक कौशल" केवल दूसरों को खुश करने के बारे में नहीं हो सकते, यह सीमाएं निर्धारित करने के बारे में भी होना चाहिए।

`hong( body:"one_up" });`

h: हम दूसरों को अपने घर में आमंत्रित नहीं कर सकते, अगर हमारे पास अपने घर को सहारा देने के लिए कोई दीवारें ही न हों।

```
hong( eyes:"angry", mouth:"narrow" });
bb( eyes:"annoyed", mouth:"smile" });
```

h: वैसे भी... उस लिपस्टिक वाली कल्पना के बारे में... घिनौना??

(#act4_something_else)

# act4_alone_skills_fail

`bb({ eyes:"annoyed" });`

h: हम असफल हो सकते हैं। वास्तव में, हम असफल होंगे।

```
bb({ eyes:"normal" });
hong({ eyes:"surprise", body:"shrug" });
```

h: और यह ठीक है! असफल होना ही वह तरीका है जिससे कोई भी शुरुआत में कुछ नया सीखता है!

`hong({ body:"normal", eyes:"normal" });`

h: तो चलो मिलकर आगे बढ़ते हुए असफल हों, हाँ?

`bb({ eyes:"normal_r" });`

b: हाँ, शायद... सबसे बुरा हुआ तो हम शहर छोड़कर नई पहचान बना लेंगे।

`bb({ eyes:"normal" });`

h: हाँ, मुझे लगता है आजकल इसकी कीमत बस दो बिटकॉइन है।

(#act4_something_else)

# act4_alone_experiment

```
hong({ body:"one_up" });
bb({ eyes:"normal" });
```

h: हम कुछ प्रयोग करके देख सकते हैं!

`hong({ body:"chin" });`

h: हम किसी दोस्त को मिलने के लिए बुला सकते हैं, किसी पुराने साथी से फिर से जुड़ सकते हैं, या फिर किसी बरिस्ता से बस बात कर सकते हैं।

`hong({ body:"normal" });`

h: मुझे लगता है कि हम जितना सोचते हैं, उससे ज़्यादा पसंद किए जाने लायक हैं।

`bb({ eyes:"annoyed" });`

[क्या होगा अगर ये छोटी और मामूली "जीत" हों?](#act4_alone_experiment_cheap)

[क्या होगा अगर यह दूसरों पर एक बोझ बन जाए?](#act4_alone_experiment_burden)

[लेकिन छोटी-मोटी बातें करना हमारा असली रूप नहीं है!](#act4_alone_experiment_real_us)

# act4_alone_experiment_real_us

`bb({ eyes:"sad" });`

b: अगर हम एक झूठी मुस्कान ओढ़ लेंगे, तो हम कभी किसी से सच में जुड़ नहीं पाएंगे,

`bb({ eyes:"super_sad" });`

b: लेकिन अगर हम खुल गए, तो दूसरे लोग हमारे सारे बिगड़े हुए अंदरूनी हिस्से देख लेंगे!

`hong({body:"chin", mouth:"narrow", MOUTH_LOCK:true})`

h: ...

```
hong({body:"normal", mouth:"normal"});
bb({eyes:"normal"});
```

h: लुढ़क जाओ।

b: क्या।

`hong({body:"hands_1"})`

h: जब कुत्ते प्यार और भरोसा दिखाना चाहते हैं, तो वे अपना पेट खोलकर खुद को असुरक्षित बना लेते हैं।

`hong({body:"one_up"})`

h: शायद हम अभी इतने सुरक्षित नहीं हैं कि बहुत ज़्यादा असुरक्षित हो सकें, लेकिन काफ़ी ट्रेनिंग के बाद,

`hong({body:"normal", eyes:"surprise"})`

h: एक दिन हम लोगों को अपना असली रूप दिखा पाएंगे – सब बिगड़ा हुआ, सब इंसान।

```
hong({eyes:"normal"});
bb({ eyes:"super_sad", mouth:"smile", body:"chest" });
```

b: अगर तुम मुझे इनाम दोगे तो मैं लुढ़क जाऊँगी।

`bb({ eyes:"normal", mouth:"normal" });`

h: नहीं।

(#act4_something_else)


# act4_alone_experiment_cheap

b: बरिस्ता को "हाय" कहना सोशल बटरफ्लाई ओलंपिक्स में गोल्ड मेडल प्रदर्शन तो नहीं है।

```
hong({ body:"point", eyes:"surprise" });
bb({ eyes:"normal" });
```

h: हमारे लिए तो है!

`hong({ body:"one_up", eyes:"annoyed" });`

h: सामाजिक क्षेत्र में, हम फ़ेदरवेट क्लास में भी नहीं हैं, हम तो... जैसे क्वार्क-वेट हैं।

`hong({ body:"normal", eyes:"normal" });`

h: अगर हमें छोटी, सस्ती जीत से शुरुआत करनी पड़ी, तो ठीक है। हज़ारवीं सीढ़ी चढ़ने से पहले पहली सीढ़ी चढ़नी पड़ती है।

b: हाँ! शायद "हाय" कहने के बाद, हम आगे बढ़कर कह सकते हैं...

`bb({ body:"two_up", mouth:"smile", eyes:"smile_u" });`

b: "आप कैसे हैं?"

`hong({ body:"shrug", mouth:"smile", eyes:"surprise_l" });`

h: कुछ ख़ास नहीं!

(#act4_something_else)

# act4_alone_experiment_burden

`bb({ eyes:"suspect_r" })`

b: शायद बरिस्ता बस कॉफ़ी बनाना चाहता है, यह देखने का प्रयोग नहीं कि हमारे सामाजिक कौशल कितने खराब हैं।

`bb({ eyes:"annoyed" })`

h: ठीक है, अगर ऐसा होता है कि हम बोझ बन रहे हैं...

```
hong({ eyes:"surprise" });
bb({ eyes:"normal" });
```

h: यह जानना भी अच्छा है!

`hong({ eyes:"normal" });`

h: तब हम सक्रिय रूप से लोगों से पूछना सीख सकते हैं कि वे किस चीज़ में सहज हैं, ताकि दूसरों की सीमाओं को जान सकें और उनका सम्मान कर सकें।

```
hong({ eyes:"annoyed_l", mouth:"narrow" });
bb({ eyes:"annoyed", mouth:"smile" });
```

h: पता है, वो सब "आपसी कौशल" बकवास जो हम काउंसलर ब्रोशर में देखते हैं।

(#act4_something_else)



# act4_bad

```
_.a4_talked_about_bad = true;
_.a4_fears_discussed += 1;
```

`bb({ eyes:"annoyed_r" })`

b: मैं तुम्हारी नैतिक ज़रूरतों का बचाव करना चाहता हूँ, वह बेहतर इंसान बनने की चाह,

`bb({ eyes:"sad_d" })`

b: लेकिन ऐसा लगता है कि गहराई में, हम इतने मौलिक रूप से... टूटे हुए हैं।

`bb({ body:"two_up", eyes:"angry" })`

{{if _.INJURED}}
b: और मुझे यह मत कहना कि हम बिगड़े हुए नहीं हैं। हम छत से कूद गए।
{{/if}}

{{if !_.INJURED}}
b: और मुझे यह मत कहना कि हम बिगड़े हुए नहीं हैं। हम लगभग छत से कूद गए थे।
{{/if}}

`bb({ body:"normal", eyes:"sad" })`

{{if _.a4_fears_discussed==1}}
b: पता नहीं, बस बहुत हो गया कि मैं तय करूँ कि आगे क्या कहना है। तुम क्या कहते हो, इंसान?
{{/if}}

{{if _.a4_fears_discussed==2}}
b: फिर से, तुम्हारी बारी, इंसान। तुम क्या सोचते हो?
{{/if}}

{{if _.a4_fears_discussed==3}}
b: और विचार हैं, इंसान?
{{/if}}

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[तो हम टूटे हुए हैं। चलो खुद को ठीक करते हैं।](#act4_bad_fix)

[तो हम टूटे हुए हैं। चलो इसे स्वीकार करते हैं।](#act4_bad_accept)

[शुक्रिया।](#act4_thanks) `_.thanks_for = "moral well-being";`

# act4_bad_fix

```
bb({eyes:"normal"});
hong({body:"chin"});
```

h: हम धीरे-धीरे बेहतर आदतें बना सकते हैं, अपने जीवन को उस चीज़ के साथ और अधिक संरेखित कर सकते हैं जिसे हम महत्व देते हैं,

`hong({body:"one_up"});`

h: और यदि आवश्यक हो, तो हम पेशेवर मदद ले सकते हैं - एक चिकित्सक या परामर्शदाता।

`hong({body:"normal"});`

h: हमें ठीक करने के तरीके हैं।

[क्या होगा अगर हम सब कुछ ठीक न कर पाएं?](#act4_bad_fix_cant)

[क्या होगा अगर हम कुछ ज़्यादा ही ठीक कर दें?](#act4_bad_fix_too_much)

[हम किसी प्रोफेशनल की मदद का खर्च नहीं उठा सकते।](#act4_bad_fix_afford)

# act4_bad_fix_cant

`hong({eyes:"annoyed"});`

h: नहीं, मुझे लगता है तुम सही हो।

h: हम सब कुछ ठीक नहीं कर सकते।

`bb({mouth:"scream", eyes:"scream_sad"});`

b: आह, मुझे पता था, हम हमेशा टूटे रहेंगे!

`hong({eyes:"surprise"});`

h: लेकिन हम कम से कम कम टूटे हुए तो हो सकते हैं।

```
bb({mouth:"normal", eyes:"annoyed"});
hong({eyes:"sad", mouth:"smile"});
```

h: घाव समय के साथ भर जाते हैं, पर वे कभी गायब नहीं होते। और यह ठीक है।

`bb({eyes:"annoyed_r"});`

b: शायद। वैसे भी,

```
Game.FORCE_TEXT_Y = 460;
Game.clearText();
publish("act4-sexy", [true]);
```

b: निशान सेक्सी होते हैं।

```
Game.FORCE_TEXT_Y = -1;
Game.clearText();
publish("act4-sexy", [false]);
bb({body:"chest", mouth:"smile_talk", MOUTH_LOCK:true, eyes:"sexy"}, 0);
hong({eyes:"normal", mouth:"normal"}, 0);
```

h: कृपया ऐसा मत करो।

(#act4_something_else)

# act4_bad_fix_too_much

`bb({ eyes:"angry_d" })`

b: यह स्वीकार करना बहुत अजीब लगता है, लेकिन... मेरे अंदर का एक हिस्सा चाहता है कि मुझे यह डिसऑर्डर हो।

`bb({ eyes:"angry" })`

b: मेरा मतलब है, इसके बिना, क्या हम बोरिंग नहीं होंगे?

`bb({ eyes:"sad_r", body:"one_up" })`

b: डिसऑर्डर के बिना, क्या हमारी कला बासी और फीकी नहीं पड़ जाएगी?

`bb({ eyes:"sad_u", body:"two_up" })`

b: डिसऑर्डर वाले हमारे दोस्तों से क्या हम जुड़ नहीं पाएंगे?

`bb({ eyes:"sad", body:"chest" })`

b: अगर हम जीवन से संतुष्ट हो गए, तो क्या हम खुद को महान काम करने के लिए प्रेरित करना बंद नहीं कर देंगे?

`hong({ MOUTH_LOCK:true })`

h: ...

h: अगर हमें "डर खत्म होने" का भी डर लगे...

h: मुझे नहीं लगता कि हमारे डर खत्म होंगे।

`bb({ eyes:"smile_u", body:"normal", mouth:"smile" })`

b: ओह, हाँ! उफ़! क्या राहत की बात है!

(#act4_something_else)

# act4_bad_fix_afford

`bb({ body:"one_up", eyes:"sexy", mouth:"normal" })`

b: "डॉक्टर, मुझे चिंता है कि मैं सिर्फ यह सुनने के लिए $100/घंटा दे रहा हूँ कि आप पूछें कि आपको कैसा महसूस हो रहा है?"

`bb({ body:"paw", eyes:"closed", mouth:"narrow" })`

b: "हम्म। और आपको कैसा महसूस हो रहा है?"

```
bb({ body:"normal", eyes:"normal", mouth:"normal" });
hong({ eyes:"sad" });
```

h: नहीं, यह बिल्कुल जायज़ चिंता है।

`hong({ eyes:"annoyed", mouth:"sad" });`

h: और यह सच में बहुत बुरा है कि बहुत से लोगों के लिए मानसिक स्वास्थ्य सेवाएँ सस्ती नहीं हैं।

`hong({ eyes:"normal", mouth:"normal" });`

h: फिर भी, कुछ सस्ते या मुफ्त विकल्प हैं:

`hong({ body:"chin" })`

h: सहायता समूह, ऑनलाइन थेरेपी, छात्र/गैर-लाभकारी स्वास्थ्य केंद्र...

`hong({ body:"hands_1" })`

h: ध्यान जैसी आदतें बनाना, अच्छी नींद लेना, दोस्तों से नियमित रूप से बात करना, नई चीजें सीखना...

`hong({ body:"hands_2" })`

h: सबूत-आधारित मनोचिकित्सा के लिए वर्कबुक उधार लेने के लिए पुस्तकालय जाना...

`hong({ body:"one_up" })`

h: इस गेम के अंत में संसाधनों की पूरी सूची दी गई है!

```
hong({ body:"normal" });
bb({ eyes:"annoyed", mouth:"narrow" });
```

b: खैर, वह चौथी दीवार ज़्यादा देर नहीं टिकी।

`hong({ body:"point" });`

h: कुछ चीज़ें कथा की परंपराओं से ज़्यादा महत्वपूर्ण होती हैं। जैसे मानसिक स्वास्थ्य।

(#act4_something_else)


# act4_bad_accept

```
bb({ eyes:"normal" });
hong({ eyes:"normal_l", body:"one_up", mouth:"narrow" });
```

h: मेरा मतलब है, थेरेपिस्ट यही कहते हैं ना? अपनी सभी भावनाओं को स्वीकार करो, यहाँ तक कि नकारात्मक भावनाओं को भी?

```
bb({ eyes:"annoyed" });
hong({ eyes:"normal", body:"normal", mouth:"normal" });
```

b: रुको।

["स्वीकार करना" यानी हार मान लेना?](#act4_bad_accept_give_up)

["स्वीकार करना" यानी मंज़ूर करना?](#act4_bad_accept_approve)

["स्वीकार करना" यानी सच मान लेना?](#act4_bad_accept_literally)

# act4_bad_accept_give_up

`bb({ eyes:"angry", body:"one_up" });`

b: क्या तुम्हें लगता है कि मार्टिन लूथर किंग ने कहा होगा, "धत् तेरे की, हम बस में आगे नहीं बैठ सकते, चलो इसे स्वीकार कर लेते हैं?"

`bb({ eyes:"angry_r", body:"two_up" });`

b: सेल्फ-हेल्प इंडस्ट्रियल कॉम्प्लेक्स को क्यों लगता है कि सफेद झंडा लहराना कोई गहरी बुद्धिमानी है?

`bb({ eyes:"annoyed", body:"normal" });`

h: मुझे लगता है कि थेरेपिस्ट का मतलब 'बुरी चीजों को स्वीकार करना' है, जैसे: यह स्वीकार करना कि वे मौजूद हैं और उन्हें बदलना मुश्किल है,

h: लेकिन ज़रूरी नहीं कि बदलाव की प्रतिबद्धता छोड़ दी जाए।

`bb({ eyes:"suspect" });`

b: तो थेरेपिस्ट को स्वीकार करने के बजाय 'स्वीकार करना' कहना चाहिए।

`hong({ body:"chin", eyes:"annoyed" });`

h: हाँ, अगर सोचें तो 'स्वीकार करना' थोड़ा भ्रमित करने वाला है।

`bb({ eyes:"closed", mouth:"narrow" });`

b: ठीक है, मैं इसे स्वीकार करता हूँ।

(#act4_something_else)

# act4_bad_accept_approve

`bb({ eyes:"angry" });`

b: जैसे कि यह अच्छा है कि हम टूटे हुए हैं या कुछ और? नहीं!

`bb({ eyes:"angry_r", body:"one_up" });`

b: वे सभी बेकार हॉलीवुड पटकथा लेखक जो मानसिक बीमारी को रोमांटिक बनाते हैं, बकवास करते हैं!

`bb({ eyes:"angry", body:"two_up" });`

b: मानसिक विकार होना भयानक है! यह लोगों से जीवन छीन लेता है! हमें इसे 'स्वीकार' क्यों करना चाहिए?!

`bb({ body:"normal" });`

h: मुझे लगता है कि थेरेपिस्ट का मतलब हमारी भावनाओं को 'स्वीकार करना' है, जैसे: उनके साथ धैर्य रखना।

```
hong({ body:"one_up" });
bb({ eyes:"normal" });
```

h: जैसे दलदल में फँसने से आप तेज़ी से डूबते हैं, और इसका समाधान धैर्यपूर्वक लेटना है,

`hong({ eyes:"surprise" });`

{{if _.INJURED}}
h: तुमसे, मेरे डर से लड़ने के कारण, मैं छत से कूद गया।
{{/if}}

{{if !_.INJURED}}
h: तुमसे, मेरे डर से लड़ने के कारण, मैं लगभग छत से कूद गया।
{{/if}}

`hong({ body:"normal", eyes:"normal" });`

h: इसके बजाय, समाधान वही है जो हम अभी कर रहे हैं - लड़ना नहीं, बल्कि धैर्यपूर्वक एक-दूसरे के साथ रहना।

`bb({ eyes:"annoyed" });`

b: तो उन्हें 'स्वीकार' जैसे किसी उलझाने वाले शब्द के बजाय सीधे-सीधे वही कहना चाहिए।

`hong({ body:"chin", eyes:"annoyed" });`

h: हाँ, अब सोचूँ तो 'स्वीकार' शब्द सच में बकवास है।

`bb({ eyes:"closed_annoyed", mouth:"narrow" });`

b: मैं 'स्वीकार' शब्द को स्वीकार नहीं करता।

(#act4_something_else)

# act4_bad_accept_literally

`bb({ eyes:"sad", body:"one_up" });`

b: लेकिन हम पहले से ही जानते हैं कि तुम्हें मेरी बातों को एकदम सच नहीं मान लेना चाहिए!

`bb({ eyes:"sad_u", body:"two_up" });`

b: पूरी समस्या यही है कि मैं तुम्हारी मदद करना चाहता हूँ, लेकिन इसके लिए शब्दों का इस्तेमाल करने में मैं बहुत बेकार हूँ!

`bb({ eyes:"sad", body:"normal" });`

h: मुझे लगता है कि थेरेपिस्ट का अपनी भावनाओं को 'स्वीकार' करने से मतलब होता है: 'उनसे लड़ो मत या उन्हें अनदेखा मत करो।'

`hong({ eyes:"surprise", body:"one_up" });`

h: तुम्हारी बात सुनना, तुम्हारे साथ मिलकर काम करना, लेकिन तुम्हारी कही बातों को सौ प्रतिशत सच न मान लेना।

```
hong({ eyes:"normal", body:"normal" });
bb({ eyes:"annoyed", mouth:"normal" });`
```

b: तो फिर थेरेपिस्ट को 'स्वीकार' जैसे किसी गोलमोल और उलझाने वाले शब्द के बजाय सीधे यही कहना चाहिए।

`hong({ body:"chin", eyes:"annoyed" });`

h: मुझे लगता है कि वे भी शब्दों का इस्तेमाल करने में बेकार हैं।

(#act4_something_else)




# act4_something_else

```
bb({ body:"normal", mouth:"normal", eyes:"normal" });
hong({ body:"normal", mouth:"normal", eyes:"normal" });
```

{{if _.a4_fears_discussed==1}}
h: खैर, क्या तुम किसी और चीज़ के बारे में बात करना चाहते हो?
{{/if}}

{{if _.a4_fears_discussed==2}}
h: तो, क्या तुम्हारे भारी दिल में कुछ और भी है?
{{/if}}

{{if _.a4_fears_discussed==3}}
(#act4_something_else_2)
{{/if}}

{{if _.a4_talked_about_harm!=true}}
[मुझे डर है कि हमें नुकसान पहुँचेगा।](#act4_harm)
{{/if}}

{{if _.a4_talked_about_alone!=true}}
[मुझे डर है कि हम अकेले रह जाएँगे।](#act4_alone)
{{/if}}

{{if _.a4_talked_about_bad!=true}}
[मुझे डर है कि हम बुरे लोग हैं।](#act4_bad)
{{/if}}

[नहीं, अभी के लिए ठीक है।](#act4c_prelude)

# act4_something_else_2

h: ठीक है, मुझे लगता है कि अब हमने अपने सभी डरों के बारे में बात कर ली है।

b: हाँ, केवल तीन ही डर हैं।

h: हाँ, पूरे तीन।

b: सुविधाजनक है।

(#act4c)

# act4c_prelude

h: अच्छी बातचीत रही, टीम।

(#act4c)

# act4c

```
Game.clearText();
music(null,{fade:3});
bb({body:"normal", eyes:"normal", mouth:"normal", MOUTH_LOCK:true},0);
hong({body:"normal", eyes:"normal", mouth:"normal"},0);
```

b: ...

`hong({MOUTH_LOCK:true},0)`

h: ...

`bb({eyes:"annoyed_d"})`

b: तुम्हें पता है न, यह कोई खेल नहीं है।

`bb({eyes:"angry_d", body:"one_up"})`

b: अपनी भावनाओं के साथ एक स्वस्थ रिश्ता बनाना स्क्रीन पर बटन क्लिक करने जितना आसान नहीं है।

`bb({eyes:"sad", body:"normal"})`

b: क्या हम सच में एक-दूसरे के साथ तालमेल बिठा सकते हैं?

b: क्या हम एक टीम की तरह मिलकर काम कर सकते हैं?

`hong({eyes:"sad", body:"one_up"})`

h: खैर,

```
hong({eyes:"surprise_l"});
bb({eyes:"normal"});
```

a: मा-माफ़ कीजिएगा...

```
Game.clearText();
publish("act4-in-2");
music('campus', {volume:0.5, fade:1});
```

(...2101)

(#act4d)

# act4d

`Game.WORDS_HEIGHT_BOTTOM = 221;`

`publish("act4", ["alshire", 0]);`

a: क्या... क्या मैं आपके साथ बैठकर लंच कर सकता हूँ?

`publish("act4", ["alshire", 1]);`

{{if _.TOP_FEAR=="harm"}}
s: ये तुम्हारा क्रश है? ये किसी साइको सीरियल किलर की तरह अकेले क्यों बैठे हैं?
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: अपने क्रश से पूछ रहे हो कि क्या तुम उनके साथ बैठ सकते हो? तुम्हें अंदाज़ा भी है कि हम कितने चिपकू लग रहे हैं?!
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: ये तुम्हारा क्रश है? हमने उनके सुकून में खलल डाल दिया! हम कितने बड़े बोझ हैं!
{{/if}}

`publish("act4", ["alshire", 2]);`

a: मे- मेरा मतलब- अ-अगर आप मना कर दें तो भी कोई बात नहीं, मैं तो बस...

`publish("act4", ["alshire", 3]);`

`Game.OVERRIDE_CHOICE_SPEAKER = "h2"`

[रुको, क्या मैंने तुम्हें पार्टी में नहीं देखा था?](#act4d_recognition) `publish("act4", ["hong_to_alshire",1])`

[हाँ, बिल्कुल! यहाँ आओ।](#act4d_yes) `publish("act4", ["hong_to_alshire",2])`

[माफ़ करना, मुझे अभी अकेले रहने के लिए थोड़ा समय चाहिए।](#act4d_no) `publish("act4", ["hong_to_alshire",8])`

# act4d_recognition

`publish("act4", ["hong_to_alshire",2]);`

h2: हाँ, तुम सोफे पर थे! उस पहली पार्टी में जिसमें मैं गया था...

`publish("act4", ["hong_to_alshire",10]);`

{{if _.a2_ending=="fight"}}
h2: जहाँ मुझे वो पैनिक अटैक आया था और मैंने होस्ट को मुक्का मार दिया था।
{{/if}}

{{if _.a2_ending=="flight"}}
h2: जहाँ मुझे वो पैनिक अटैक आया था और मैं रोते हुए बाहर भाग गया था।
{{/if}}

```
publish("act4", ["hong_to_alshire", 0]);
publish("act4", ["bb_to_alshire", _.INJURED ? 3 : 1]);
```

b: रुको इंसान, शायद हम उन्हें असहज कर रहे हैं।

```
publish("act4", ["hong_to_alshire", 3]);
publish("act4", ["bb_to_alshire", _.INJURED ? 2 : 0]);
```

h2: अरे, मेरा मतलब आपको असहज करना नहीं था!

`publish("act4", ["hong_to_alshire",4]);`

h2: बस एक जाना-पहचाना चेहरा याद आ गया, और कुछ नहीं।

```
publish("act4", ["hong_to_alshire",5]);
publish("act4", ["alshire", 4]);
```

{{if _.TOP_FEAR=="harm"}}
s: आह्ह्ह मुझे पता था! वो एक खतरनाक, घबराया हुआ साइको है!
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: आह्ह्ह हमारा पहला इम्प्रेशन ही ये था कि "उसने मेरा सदमा देखा था"! इसका मतलब वो हमसे नफ़रत करते हैं!
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: आह्ह्ह हमने किसी को एक दर्दनाक घटना याद दिला दी। हमारा होना ही दूसरों को तकलीफ़ देता है।
{{/if}}

(#act4e)

# act4d_yes

```
publish("act4", ["hong_to_alshire", 5]);
publish("act4", ["bb_to_alshire", _.INJURED ? 3 : 1]);
```

b: रुको इंसान, वो असहज लग रहे हैं।

```
publish("act4", ["hong_to_alshire", 6]);
publish("act4", ["bb_to_alshire", _.INJURED ? 2 : 0]);
```

h2: अरे, कोई ज़बरदस्ती नहीं है!

`publish("act4", ["hong_to_alshire", 4]);`

h2: बस ऐसे ही कह रहा था, अगर आप चाहें तो यहाँ बैठ सकते हैं।

```
publish("act4", ["hong_to_alshire", 5]);
publish("act4", ["alshire", 4]);
```

{{if _.TOP_FEAR=="harm"}}
s: ये ज़रूरत से ज़्यादा दोस्ताना बन रहे हैं! टेड बंडी की तरह, वो सीरियल किलर!
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: वो बस अच्छे होने का नाटक कर रहे हैं! कोई सच में हमारे करीब नहीं आना चाहता!
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: आह्ह्ह हम हमेशा दूसरों को असहज महसूस कराते हैं! हम इस धरती पर एक कलंक हैं!
{{/if}}

(#act4e)

# act4d_no

```
publish("act4", ["hong_to_alshire", 9]);
publish("act4", ["bb_to_alshire", _.INJURED ? 3 : 1]);
```

b: रुको इंसान, शायद हम उन्हें असहज कर रहे हैं।

```
publish("act4", ["hong_to_alshire", 3]);
publish("act4", ["bb_to_alshire", _.INJURED ? 2 : 0]);
```

h2: अरे, मेरा इरादा बदतमीज़ी करने का नहीं था!

`publish("act4", ["hong_to_alshire", 6]);`

h2: मुझे अपनी भावनाओं को समझने के लिए बस थोड़ा समय चाहिए। कृपया इसे व्यक्तिगत अस्वीकृति के रूप में न लें।

```
publish("act4", ["hong_to_alshire", 7]);
publish("act4", ["alshire", 4]);
```

{{if _.TOP_FEAR=="harm"}}
s: वे कौन से बीमार, विकृत विचारों को समझ रहे हैं?! इस साइको के दिल में कौन सी काली इच्छाएं भरी हैं?!
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: हमें व्यक्तिगत रूप से अस्वीकार कर दिया गया है! हमें कभी कोई प्यार नहीं करेगा!
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: हमने उनकी भावनाओं को समझने की प्रक्रिया में बाधा डाली! अब वे हमेशा के लिए सदमे में रहेंगे और यह सब हमारी गलती है!
{{/if}}

(#act4e)

# act4e

```
Game.WORDS_HEIGHT_BOTTOM = 195;
publish("act4", ["alshire", 6]);
```

s: भागो भागो भागो भागो भागो भागो भागो भागो भागो भागो भागो भागो भागो भागो भागो

```
Game.clearText();
publish("act4", ["hong_to_alshire", 0]);
publish("act4", ["alshire", 10]);
sfx("pop");
```

(...1001)

```
publish("act4", ["alshire", 11]);
sfx("alshire_run");
```

(...2601)

```
publish("act4-out-3");
Game.WORDS_HEIGHT_BOTTOM = -1; /* reset */
```

(...1201)

`publish("act4-jumpcut-hong");`

h: हूँ। वह अजीब था। पता नहीं उनके दिमाग में क्या चल रहा था।

`publish("act4", ["hong_closer", 2]);`

h: वैसे, तुम कुछ कह रहे थे?

```
publish("act4", ["hong_closer", 1]);
publish("act4", ["bb_closer", 6]);
```

b: अरे, मैं भूल गया क्या? टीम और काम के बारे में कुछ था?

```
publish("act4", ["bb_closer", 0]);
publish("act4", ["hong_closer", 3]);
```

h: ¯\_(ツ)_/¯

```
publish("act4", ["hong_closer", 1]);
publish("act4", ["bb_closer", 4]);
```

b: लोग कहते हैं कि आपको अपनी भावनाओं के साथ "सुलह" कर लेनी चाहिए, जैसे कि आपकी भावनाएं कोई युद्ध अपराधी हों।

`publish("act4", ["bb_closer", 7]);`

b: लेकिन मैं चाहता हूँ कि हम सिर्फ सुलह से कहीं बढ़कर कुछ करें! मैं चाहता हूँ कि हम सहयोगी बनें!

`publish("act4", ["bb_closer", 3]);`

b: मैं एक अच्छा रखवाला कुत्ता बनना चाहता हूँ। ठीक वैसे ही जैसे भूख और प्यास आपकी शारीरिक ज़रूरतों के लिए अलार्म हैं,

`publish("act4", ["bb_closer", 8]);`

b: मैं आपकी मनोवैज्ञानिक ज़रूरतों के लिए अलार्म बनना चाहता हूँ - सुरक्षा, अपनेपन और अच्छाई की आपकी ज़रूरतें।

`publish("act4", ["bb_closer", 1]);`

b: लेकिन... मैं अपने काम में बहुत बेकार हूँ, इसलिए मुझे सिखाने के लिए तुम्हारी ज़रूरत है।

`publish("act4", ["bb_closer", 4]);`

b: मैं न तो "हमेशा सही" हूँ, और न ही "हमेशा तर्कहीन"। मैं बस... अपनी पूरी कोशिश कर रहा हूँ। इसलिए, कृपया,

`publish("act4", ["bb_closer", 30]);`

b: तुम्हारी मदद करने में मेरी मदद करो!

`publish("act4", ["bb_closer", 6]);`

b: वैसे, एक बूढ़े कुत्ते को नए करतब सिखाने में थोड़ा समय लगेगा। शायद सालों।

`publish("act4", ["bb_closer", 3]);`

b: और कभी-कभी मेरी हालत फिर से बिगड़ जाएगी, मैं अपनी पुरानी आदतों में वापस चली जाऊँगी।

`publish("act4", ["bb_closer", 2]);`

b: मैं परछाइयों पर भौंकूँगी। मैं तुम्हें अपनी बातों से डराऊँगी। शायद मैं तुम्हें कुछ... चीज़ों की अवांछित तस्वीरें भी दिखाऊँ।

`publish("act4", ["bb_closer", 9]);`

b: मुझे माफ़ कर दो! मैं शेल्टर का सताया हुआ एक कुत्ता हूँ! सताए हुए कुत्ते कभी-कभी आपके बिस्तर पर पॉटी कर देते हैं!

`publish("act4", ["bb_closer", 4]);`

b: लेकिन अगर तुम मेरे साथ थोड़ा सब्र रखोगे... और बस मेरे पास रुककर बैठोगे...

`publish("act4", ["bb_closer", 8]);`

b: तो शायद तुम इस भेड़िये को वश में कर सको।

`publish("act4", ["bb_closer", 0]);`

`Game.clearText();`

(...1000)

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[अच्छा कुत्ता।](#act4f-pat-bb) `Game.OVERRIDE_CHOICE_SPEAKER = "h"; publish("act4", ["hong_closer", 2]);`

`Game.OVERRIDE_CHOICE_SPEAKER = "b"`

[अच्छा इंसान।](#act4f-pat-hong) `Game.OVERRIDE_CHOICE_SPEAKER = "b"; publish("act4", ["bb_closer", 8]);`

# act4f-pat-hong

```
Game.clearText();
publish("hide_tabs");
Game.FORCE_CANT_SKIP = true;
music(null,{fade:0.5});
sfx("youbothwin");
```

```
publish("act4", ["hong_closer", 4]);
publish("act4", ["bb_closer", 13]);
```

(...501)

`publish("act4", ["bb_closer", 14]);`

(...501)

`publish("act4", ["bb_closer", 13]);`

(...501)

`publish("act4", ["bb_closer", 14]);`

(...501)

`publish("act4", ["bb_closer", 13]);`

(...501)

`publish("act4", ["bb_closer", 14]);`

(...6501)

`publish("act4", ["bb_closer", 15]);`

(...1001)

(#act4f)

# act4f-pat-bb

```
Game.clearText();
publish("hide_tabs");
Game.FORCE_CANT_SKIP = true;
music(null,{fade:0.5});
sfx("youbothwin");
```

```
publish("act4", ["hong_closer", 4]);
publish("act4", ["bb_closer", 10]);
```

(...501)

`publish("act4", ["bb_closer", 11]);`

(...501)

`publish("act4", ["bb_closer", 10]);`

(...501)

`publish("act4", ["bb_closer", 11]);`

(...501)

`publish("act4", ["bb_closer", 10]);`

(...501)

`publish("act4", ["bb_closer", 11]);`

(...6501)

`publish("act4", ["bb_closer", 12]);`

(...1001)

(#act4f)

# act4f

```
Game.FORCE_CANT_SKIP = false;
publish("act4", ["bb_closer", 16]);
publish("act4", ["hong_closer", 5]);
```

{{if _.fifteencigs}}
b: आआआआ तुम अभी भी अकेले खा रहे हो पंद्रह सिगरेट आआआआ
{{/if}}

{{if _.parasite}}
b: आआआआ तुम खाते समय भी कुछ काम नहीं कर रहे हो हम समाज के परजीवी हैं आआआआ
{{/if}}

{{if _.whitebread}}
b: आआआआ तुम और ज़्यादा व्हाइट ब्रेड खा रहे हो आआआआ
{{/if}}

```
publish("act4", ["bb_closer", 18]);
publish("act4", ["hong_closer", 6]);
sfx("yaps", {volume:0.6});
Game.FORCE_CANT_SKIP = true;
Game.WORDS_HEIGHT_BOTTOM = 205;
Game.FORCE_TEXT_DURATION = 90;
Game.FORCE_NO_VOICE = true;
```

b: भौं भौं भौं भौं भौं

(#credits)
