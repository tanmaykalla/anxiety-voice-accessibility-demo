# act3

```
SceneSetup.act3();
Game.WORDS_HEIGHT_BOTTOM = 205;
sfx("cheers");
```

r: चीयर्स!

```
publish("act3",["roofhunter",1]);
publish("act3",["roofhong",1]);
sfx("drinking");
```

(...4001)

```
publish("act3-alpha", ["dizzyhunter",1]);
publish("act3-alpha", ["dizzyhong",1]);
publish("act3",["roofhunter",3]);
publish("act3",["roofhong",3]);
```

h2: आह, इससे मज़ा आ गया।

```
publish("act3",["roofhunter",2]);
publish("act3",["roofhong",2]);
```

r: जानते हो, बच्चे...

```
publish("act3",["roofhunter",3]);
publish("act3",["roofhong",6]);
```

h2: खास तौर पर, जिन जगहों पर असर हुआ है, वो मेरे बाएँ और दाएँ एमिग्डाला हैं।

```
publish("act3",["roofhunter",8]);
publish("act3",["roofhong",5]);
```

r: तुम मुझे अपनी याद दिलाते हो जब मैं छोटा था। तब जब मेरे अंदर के जानवर ने मुझे सताया था।

```
publish("act3",["roofhunter",9]);
publish("act3",["roofhong",2]);
```

r: मैं बहुत आभारी हूँ कि मैं इसे आगे बढ़ा सकता हूँ, और तुम्हें उस जानवर को मारने में मदद कर सकता हूँ जैसे मैंने अपने को मारा था।

```
publish("act3",["roofhunter",2]);
```

r: हे, एक सवाल: सच या डे--

```
publish("act3",["roofhunter",3]);
publish("act3",["roofhong",7]);
publish("act3-alpha", ["dizzyhong",0]);
```

h2: डेयर!

```
publish("act3-alpha", ["dizzyhong",1]);
publish("act3",["roofhunter",10]);
publish("act3",["roofhong",2]);
```

r: हाहा! अच्छा।

```
publish("act3",["roofhunter",21]);
publish("act3",["roofhong",4]);
```

r: ठीक है। क्या तुम्हें वो बेबी-ब्लू स्विमिंग पूल नीचे दिख रहा है?

```
publish("act3-alpha", ["dizzyhong",0]);
publish("act3",["roofhunter",11]);
publish("act3",["roofhong",9]);
```

h2: हाँ? छह मंज़िल नीचे?

```
publish("act3",["roofhunter",10]);
publish("act3",["roofhong",8]);
```

r: कूद जाओ।

```
publish("act3",["roofhunter",11]);
publish("act3",["roofhong",10]);
```

h2: ...

```
publish("act3",["roofhong",11]);
```

h2: रुको, क्या?

```
publish("act3",["roofhong",10]);
publish("act3",["roofhunter",2]);
```

r: जानवर रोने लगा है, है ना?

```
publish("act3",["roofhunter",23]);
```

r: ओह नहींoooo यह खतरनाक है, मत करोoooo।

```
publish("act3",["roofhunter",22]);
```

r: लेकिन इसीलिए हमें मौत को दावत देने वाले रोमांच की ज़रूरत है! पार्टी करो! कार्पे डिएम! हुकर की गांड से कोकीन सूंघो, #YOLO!

```
publish("act3",["roofhunter",10]);
```

r: उस जानवर को दिखा दो कि हमें उसकी बकवास की परवाह नहीं है! कूद जाओ।

```
publish("act3",["roofhunter",11]);
publish("act3",["roofhong",13]);
```

h2: हाँ, पर कभी-कभी, उम्म... डर का कोई मतलब होता है...

```
publish("act3",["roofhunter",5]);
publish("act3",["roofhong",12]);
music(null, {fade:2});
```

r: ...

```
publish("act3-alpha", ["dizzyhunter",0]);
publish("act3",["roofhunter",6]);
publish("act3",["dd",1]);
```

r: माफ़ करना, क्या तुम उस मैक-माइंडफुलनेस प्रचार के झांसे में आ गए कि बुरा महसूस करना अच्छा होता है?

```
publish("act3",["roofhunter",17]);
```

r: इस दुनिया को चलाने वाले हरामखोर हमें चिंता और अवसाद देते हैं,

```
publish("act3",["roofhunter",18]);
```

r: फिर हमें "स्वीकार" करने के लिए TED Talks देते हैं कि हमारे साथ बुरा हो रहा है, और हमारे दिमाग़ में बैठे उस शैतान को "गले" लगाओ!

```
publish("act3",["roofhunter",6]);
```

r: बच्चे, मुझे पता है कि तुम जानते हो कि वह जानवर हम जैसे लोगों को चोट पहुँचाता है। वह हम जैसे लोगों को यातना देता है।

```
publish("act3",["roofhunter",19]);
```

r: वह हमारा दोस्त नहीं है। वह एक पागल जानवर है, जिसे या तो शांत करने की ज़रूरत है,

```
publish("act3",["roofhunter",20]);
```

r: या उसके सिर में गोली उतारने की।

```
publish("act3",["roofhunter",27]);
```

r: वरना, तुम उसे जीतने दोगे।

```
publish("act3",["roofhunter",31]);
publish("act3",["roofhong",14]);
publish("act3",["dd",2]);
```

h2: नहीं। तुम गलत हो।

```
publish("act3",["roofhunter",13]);
publish("act3",["roofhong",15]);
music('battle_dark', {volume:1.0}, function(){
	music('battle_dark_loop');
});
```

h2: मैं उसे जीतने नहीं दूँगा।

```
publish("act3",["roofhunter",25]);
publish("act3-alpha", ["roofhong",0]);
publish("act3-alpha", ["transition",1]);
publish("act3",["dd",6]);
```

r: फक ये! मुझे तुम पर विश्वास है, बेब! उसे ख़त्म कर दो! <3

(#act3a)



# act3a

```
Game.clearText();
publish("act3-out");
Game.WORDS_HEIGHT_BOTTOM = -1; /* reset */
_.act3_bb_body = 1;
```

(...1500)

```
publish("hp_show");
```

b: नहीं नहीं नहीं नहीं नहीं नहीं

n: इस अध्याय के दो संभावित अंत हैं। एक बहुत, बहुत बुरा है।

b: नहीं नहीं नहीं नहीं नहीं नहीं नहीं नहीं नहीं नहीं नहीं नहीं नहीं नहीं

n: समझदारी से चुनो। अपने इंसान को बचाओ

`bb({ eyes:"oh_crap", mouth:"normal_talk", MOUTH_LOCK:true });`

b: आआआआआआआआआआ

`bb({ mouth:"normal" });`

n: शुभकामनाएं

```
Game.clearText();
bb({ eyes:"start" });
```

[इंसान, तुम सच में यहाँ मर सकते हो!](#act3a_harm) `Game.OVERRIDE_CHOICE_LINE=true`

[यह बेवकूफ़ी है और ख़ुद को बर्बाद करने जैसा है!](#act3a_bad) `Game.OVERRIDE_CHOICE_LINE=true`

[ये सनकी लोग सच में तुम्हारे दोस्त नहीं हैं!](#act3a_alone) `Game.OVERRIDE_CHOICE_LINE=true`

# act3a_harm

`bb({ MOUTH_LOCK:true, mouth:"normal_talk" });`

b: ह--

(#act3a_after)

# act3a_alone

`bb({ MOUTH_LOCK:true, mouth:"normal_talk" });`

b: ट--

(#act3a_after)

# act3a_bad

`bb({ MOUTH_LOCK:true, mouth:"normal_talk" });`

b: ट--

(#act3a_after)

# act3a_after

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

h: सच कहूँ तो, शायद मैं तुम पर यकीन कर लेती... अगर तुमने यह पहले लाखों बार करने की कोशिश नहीं की होती।

h: तुम तो वो भेड़िया हो जिसने चिल्लाया था कि भेड़िया आया।

```
bb({ eyes:"sad" });
```

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_harm"`

[](#act3_fork) `_.SPECIAL_ATTACK="harm"; Game.OVERRIDE_CHOICE_LINE=true`

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_alone"`

[](#act3_fork) `_.SPECIAL_ATTACK="alone"; Game.OVERRIDE_CHOICE_LINE=true`

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_bad"`

[](#act3_fork) `_.SPECIAL_ATTACK="bad"; Game.OVERRIDE_CHOICE_LINE=true`


# act3_fork

```
Game.clearText();
bb({body:"special_attack"});
sfx("charging");
Game.FORCE_CANT_SKIP = true;
```

(...1001)

```
Game.FORCE_CANT_SKIP = false;
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

h: तुमने वो भी आज़माया है।

b: इंसान, प्लीज़...

`hong({ eyes:"look_right" });`

h: ओह, माफ़ करना कि बिग फ़ार्मा मेरी सेल्फ-मेडिकेशन को मंज़ूरी नहीं देता।

h: सुन बे गधे, हम सब जानते हैं तुझे चुप कैसे कराना है।

`hong({ body:"look_up", eyes:"look_up" });`

h: कुछ लोग खुद को काम में झोंक देते हैं।

`hong({ body:"look_down", eyes:"look_down" });`

h: कुछ लोग खुद को सेक्स, ड्रग्स और अपना फ़ेसबुक फ़ीड रिफ्रेश करने में झोंक देते हैं।

`hong({ body:"normal", eyes:"look_right" });`

h: कुछ लोग खुद को दूसरों में झोंक देते हैं।

`hong({ eyes:"angry" });`

h: मैं तो बस इस स्विमिंग पूल में कूदने वाला हूँ।

[तुम नशे में हो और यह छह मंज़िल नीचे है](#act3_bad_1_harm)

[धत् तेरे की, क्या मुझे इसी बात का इनाम मिल रहा है?!](#act3_bad_1_insult) `bb({eyes:"angry"});`

[ठीक है, मैं मानता हूँ। मुझसे ग़लती हो गई।](#act3_good_1) `bb({mouth:"sorry", eyes:"sorry_down"});`

# act3_bad_1_harm

b: भले ही तुम पानी में गिरो, पानी की सतह का तनाव तुम्हारी पसलियाँ तोड़ देगा और कम से कम तुम्हें कंCUSSION हो जाएगा!

h: ऐ।

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal", mouth:"angry", eyes:"angry" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

h: मैंने एक रूसी आदमी को यह करते हुए यूट्यूब पर देखा था।

(#act3_bad_2)

# act3_bad_1_insult

`hong({ eyes:"look_right" });`

h: मैं- माफ़ करना, धन्यवाद?

`bb({ eyes:"angry" });`

b: यही तो वजह है कि मैं मौजूद हूँ! क्योंकि इंसानों पर खुद को बचाने के लिए भरोसा नहीं किया जा सकता!

b: मैं तुम्हारी इस बेवकूफ़ की जान बचाने की कोशिश कर रही हूँ और अब तुम बस--

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal", mouth:"angry", eyes:"angry" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

(#act3_bad_2)

# act3_good_1

`hong({ body:"laugh_1" })``

h: हेह।

`hong({ body:"laugh_2" })``

h: हाहाहा।

`hong({ body:"laugh_3" })``

h: हाहाहाहाहाहा।

```
bb({ eyes:"sorry"});
hong({ body:"yell_1", mouth:"yell", eyes:"blank" });
```

h: ओह वाह, यह सदी का सबसे बड़ा फ़किंग अंडरस्टेटमेंट है!

`hong({ body:"yell_2" });`

h: हाँ, सड़े हुए खून से सने हुए हरामखोर! तुमने बहुत बड़ी गड़बड़ कर दी!

`hong({ body:"normal", mouth:"angry", eyes:"angry" });`

h: और कोई टिप्पणी, कैप्टन ऑब्वियस?

[लेकिन मुझसे बदला लेना इसका हल नहीं है!](#act3_good_1_fail_revenge) `bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });`

[लेकिन इस बार मैं सच में सही हूँ!](#act3_good_1_fail_harm) `bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });`

[मैंने तुम्हें चोट पहुँचाई है।](#act3_good_2a)


# act3_good_1_fail_revenge

b: तुम्हें अपनी भावनाओं के साथ एक स्वस्थ रिश्ता रखने की ज़रूरत है, उन्हें डुबाने के बजाय...

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal", mouth:"angry", eyes:"angry" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

(#act3_bad_2)



# act3_good_1_fail_harm

b: तो कृपया, बोतल नीचे रखो और चलो--

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal", mouth:"angry", eyes:"angry" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

(#act3_bad_2)




# act3_bad_2

`bb({ eyes:"sad" });`

b: कृपया... मत करो...

h: तुम्हारी एनर्जी बार काफी कम दिख रही है, भेड़िया।

h: अगर मैं तुम्हारी जगह होता, तो मैं अपने अगले शब्दों को बहुत सावधानी से चुनता।

`bb({ eyes:"normal" });`

[ठीक है। अब मैं तुम्हारी रक्षा नहीं करूँगा।](#act3_bad_2_jump) `bb({ mouth:"ignore", eyes:"ignore" });`

[मैं शुरू से ही सही था।](#act3_bad_2_right)

[मुझे माफ़ कर दो।](#act3_good_2b) `bb({mouth:"sorry", eyes:"sorry_down"});`


# act3_bad_2_jump

b: तो, आगे बढ़ो और कूद जाओ। देखो मुझे क्या परवाह है।

`hong({ eyes:"look_right", mouth:"normal", MOUTH_LOCK:true });`

h: ...

```
hong({ eyes:"less_angry", mouth:"normal" });
bb({ eyes:"ignore_oh_crap" });
```

h: ठीक है तो। बॉटम्स अप।

```
bb({ mouth:"normal", eyes:"oh_crap" });
Game.OVERRIDE_TEXT_SPEED = 2;
```

b: रुको नहीं, वो रिवर्स साइकोलॉजी थी तुम्हें वो करना था जो मैंने कहा उसके विपरीत--

(#act3_bad_3)



# act3_bad_2_right

`bb({ eyes:"angry" });`

b: तुम खुद को खतरे में डाल रहे हो। तुम्हारे तथाकथित दोस्त तुम्हारा इस्तेमाल कर रहे हैं। और तुम अपने तथाकथित दोस्तों का इस्तेमाल कर रहे हो।

`bb({ eyes:"sad" });`

b: तो कृपया, इंसान... तुम मुझ पर विश्वास क्यों नहीं करते?!

h: क्योंकि तुमने कभी मुझ पर विश्वास नहीं किया।

(#act3_bad_3)


# act3_bad_2_terrible

`bb({ eyes:"angry" });`

b: दूसरे गार्ड-भेड़ियों के पास ऐसे इंसान होते हैं जो वास्तव में उन्हें प्रशिक्षित करने में धैर्य से समय बिताते हैं, साथ काम करना सीखते हैं,

b: बजाय इसके कि वे गार्ड-भेड़ियों से उन्हें बचाने की कोशिश करने के लिए नफरत करें! तो तुम क्यों नहीं...

`bb({ eyes:"normal" });`

h: गलत जवाब।

(#act3_bad_3)



# act3_bad_3

```
music(null);
hong({body:"drink"});
bb({body:"attacked"});
publish("bb_STOP_VIBRATING");
attackBB("100p");
```

(...2000)

```
hong({ body:"normal", mouth:"normal", eyes:"normal" });
bb({ body:"dead" });
```

(...999)

h: "डरने वाली इकलौती चीज़ डर ही है।"

`hong({ body:"look_up", mouth:"happy", eyes:"blank" });`

h: "चिंता मत करो, खुश रहो!"

`hong({ body:"normal", mouth:"normal", eyes:"normal" });`

h: हमारे समय के सभी बुद्धिमान लोग सहमत हैं: नकारात्मक भावनाएं बुरी होती हैं!

`hong({ eyes:"less_angry" });`

h: वाह! इसीलिए उन्हें नकारात्मक कहा जाता है!

b: इंसान... प्लीज़...

`hong({ eyes:"normal" });`

h: कुछ समय पहले, मैंने कहा था: “मैं बस इस सारे दर्द से आज़ाद होना चाहती हूँ।”

h: मेरी इच्छा पूरी हुई। मुझे अब दर्द, या डर, या चिंता महसूस नहीं होती...

h: मुझे कुछ भी महसूस नहीं होता।

`_.a3_ending = "jump";`

(#act3_end)



# act3_good_2a

`bb({mouth:"sorry", eyes:"sorry_down"});`

b: मैं इस बात को लेकर इतनी जुनूनी थी कि तुम्हें और कुछ भी चोट न पहुँचे, कि मुझे एहसास ही नहीं हुआ कि मैं ही चोट पहुँचा रही थी।

```
bb({ eyes:"sorry"});
hong({ body:"yell_2", mouth:"yell", eyes:"blank" });
```

h: अरे हाँ।

`hong({ body:"yell_1" });`

h: हे भगवान। तुम्हें यह समझने में इतना समय लगा?!

`hong({ body:"cry", mouth:"cry", eyes:"blank" });`

h: तुम हमें इतनी परेशानी से बचा सकती थी, तुम बड़ी रोएँदार बेवकूफ़। तुमने यह पहले क्यों नहीं समझा?...

`_.apologized_for_hurt = true;`

(#act3_good_2q)



# act3_good_2b

`hong({ body:"normal", mouth:"angry", eyes:"look_right" });`

h: ...तुम माफ़ी माँग रही हो।

`hong({ eyes:"angry", MOUTH_LOCK:true });`

h: ...

h: किस बात के लिए?

(#act3_good_2q)


# act3_good_2q

`bb({mouth:"sorry", eyes:"sorry"});`

{{if _.apologized_for_hurt}}
(#act3_good_2q_already_apologized)
{{/if}}

{{if !_.apologized_for_hurt}}
(#act3_good_2q_not_already_apologized)
{{/if}}


# act3_good_2q_already_apologized

`hong({ body:"normal", mouth:"angry", eyes:"less_angry" });`

[मुझे माफ़ कर दो कि मैं एक अच्छा रक्षक नहीं बन पाया।](#act3_good_3_protector)

[मुझे माफ़ कर दो कि मैंने तुम्हारा सम्मान नहीं किया।](#act3_good_3_respect)

[मुझे माफ़ कर दो।](#act3_good_4)


# act3_good_2q_not_already_apologized

`hong({ body:"normal", mouth:"angry", eyes:"angry" }, 0);`

[मुझे माफ़ कर दो कि मेरा इंसान इतना बुरा है!](#act3_bad_2_terrible) `bb({mouth:"normal", eyes:"normal"})`

[मुझे माफ़ कर दो कि मैंने तुम्हारा सम्मान नहीं किया।](#act3_good_3_respect)

[मुझे माफ़ कर दो कि मैंने तुम्हें चोट पहुँचाई।](#act3_good_3_hurt)



# act3_good_3_protector

`bb({eyes:"sorry_down"});`

b: यह मेरा कर्तव्य है कि मैं तुम्हें असली खतरे से आगाह करूँ, लेकिन मैं कारों और डाकिया पर भौंकती रही।

`bb({eyes:"sorry_up"});`

b: परछाइयों पर भौंकना। बहुत भौंकना।

`bb({eyes:"sorry"});`

b: यह समझ में आता है कि तुम मुझे मूँह बंद करना चाहोगी।

`bb({eyes:"sorry_down"});`

b: मुझे माफ़ कर दो।

(#act3_good_4)



# act3_good_3_respect

`bb({eyes:"sorry_down"});`

b: मुझे तुम्हारा वफादार कुत्ता होना चाहिए था, लेकिन मैंने ऐसा व्यवहार किया जैसे तुम्हें मेरी आज्ञा माननी चाहिए।

`bb({eyes:"sorry_up"});`

b: एक रक्षक और एक जेलर के बीच अंतर होता है, और मैंने वह रेखा पार कर दी।

`bb({eyes:"sorry_down"});`

b: मुझे माफ़ कर दो।

(#act3_good_4)



# act3_good_3_hurt

`bb({eyes:"sorry_down"});`

b: मैं तुम्हें चोट लगने से बचाने की कोशिश करने में इतनी व्यस्त थी कि मैंने कभी यह महसूस करने के लिए नहीं सोचा कि मैं तुम्हें चोट पहुँचा रही थी।

`bb({eyes:"sorry_up"});`

b: मैं एक बुरा कुत्ता थी।

`bb({eyes:"sorry_down"});`

b: मुझे माफ़ कर दो।

(#act3_good_4)


# act3_good_4

```
music(null,{fade:3});
hong({ eyes:"less_angry", MOUTH_LOCK:true },0);
```

h: ...

```
hong({ body:"stop", mouth:"stop", eyes:"blank" });
```

h: हाँ, वैसे भी यह एक बेवकूफी भरा विचार था।

h: मैंने यह सिर्फ तुम्हें परेशान करने के लिए किया था, और हाँ, मैंने तुम्हें परेशान कर दिया।

h: चलो इस दौर को बराबरी पर खत्म करते हैं, ठीक है?

```
bb({ mouth:"sorry", eyes:"sorry" });
bb({ MOUTH_LOCK:true });
```

b: ...

b: ठीक है।

h: ठीक है।

n: बराबर

`_.a3_ending = "walkaway";`

(#act3_end)









# act3_end

```
Game.clearText();
publish("act3-in");
publish("hp_hide");
Game.FORCE_CANT_SKIP = true;
```

{{if _.a3_ending=="walkaway"}}
(#act3_walkaway)
{{/if}}

{{if _.a3_ending=="jump"}}
(#act3_jump)
{{/if}}






# act3_walkaway

```
publish("start-walkaway-anim");
Game.WORDS_HEIGHT_BOTTOM = 205;
```

(...3501)

```
sfx("bottle_toss");
publish('hong-next');
publish("act3",["roofhunter",7]);
```

(...667)

```
publish("act3",["dd",4]);
publish("act3",["roofhunter",26]);
publish('hong-next');
sfx("concrete_step1");
```

(...667)

```
publish('hong-next');
sfx("concrete_step2");
```

(...667)

```
publish('hong-next');
publish("act3",["roofhunter",27]);
```

`Game.FORCE_CANT_SKIP = false;`

r: अरे यार। उस जानवर ने तुम्हारे साथ जो कुछ भी किया, उसके बाद तुम हार मान रहे हो?

r: क्या बात है, बच्चे? डर लग रहा है?

```
publish('hong-next');
publish("act3",["roofhunter",26]);
```

h2: हाँ।

h2: मुझे डर लग रहा है।

`publish('hong-next')`

h2: और इसमें कोई बात नहीं है!

`publish('hong-next')`

h2: डर लगना ठीक है।

`publish('hong-next')`

(...500)

```
Game.clearText();
Game.FORCE_CANT_SKIP = true;
```

(...1167)

```
publish('hong-next');
```

(...833)

```
publish('hong-next');
sfx("rustle2");
```

(...1333)

```
publish('hong-next');
publish("act3",["dd",5]);
publish("act3",["roofhunter",31]);
sfx("concrete_step4");
```

(...667)

```
publish('hong-next');
sfx("concrete_step1");
```

(...667)

```
publish('hong-next');
sfx("door");
```

(...1333)

```
publish('hong-next');
sfx("concrete_step2");
```

(...501)

```
publish('hong-next');
Game.FORCE_CANT_SKIP = false;
sfx("lock_door");
publish("act3",["roofhunter",32]);
```

(...2001)

```
publish("act3",["roofhunter",33]);
```

r: क्या उन्होंने अभी दरवाज़ा बंद कर दिया?

```
Game.clearAll();
_.INJURED = false;
Game.WORDS_HEIGHT_BOTTOM = -1;
```

(...2000)

(#act4)




# act3_jump

```
publish("start-jump-anim");
Game.FORCE_TEXT_Y = 300;
```

(...2001)

```
publish('hong-next');
sfx("bottle_toss");
```

(...833)

```
sfx("concrete_step1");
sfx("claps");
publish('hong-next');
publish("act3",["dd",4]);
publish("act3",["roofhunter",28]);
```
(...125)

`publish("act3",["roofhunter",29]);`

(...125)

`publish("act3",["roofhunter",28]);`

(...125)

`publish("act3",["roofhunter",29]);`

(...125)

```
sfx("concrete_step2");
publish('hong-next');
publish("act3",["roofhunter",28]);
```

(...125)

`publish("act3",["roofhunter",29]);`

(...125)

`publish("act3",["roofhunter",28]);`

(...125)

`publish("act3",["roofhunter",29]);`

(...125)

```
sfx("concrete_step3");
publish('hong-next');
publish("act3",["dd",5]);
publish("act3",["roofhunter",34]);
```

(...1167)

```
sfx("rustle2");
publish('hong-next');
```

(...1001)

`publish('hong-next')`

b: नहीं...

(...501)

`Game.clearText();`

`publish('hong-next')`

(...1333)

```
sfx("quack");
publish('hong-next');
```

(...1333)

`publish('hong-next')`

b: नहीं नहीं नहीं

(...501)

`Game.clearText();`

`publish('hong-next')`

(...2001)

```
sfx("rustle2");
publish('hong-next')
```

(...501)

```
sfx("concrete_step1");
publish('hong-next');
publish("act3",["dd",4]);
publish("act3",["roofhunter",30]);
```

(...167)

```
sfx("concrete_step2");
publish('hong-next');
```

(...167)

```
sfx("concrete_step3");
publish('hong-next');
publish("act3",["dd",2]);
publish("act3",["roofhunter",15]);
```

(...167)

```
sfx("bottle_slip");
publish('hong-next');
publish("act3",["dd",3]);
publish("act3",["roofhunter",16]);
```

(...833)

```
sfx("rustle");
publish('hong-next');
```

(...167)

`publish('hong-next')`

(...167)

```
publish('hong-next');
Game.FORCE_TEXT_Y = 325;
Game.OVERRIDE_FONT_SIZE = 50;
```

b: नहीं!

(...400)

```
Game.WORDS_HEIGHT_BOTTOM = -1;
Game.FORCE_TEXT_Y = -1;
Game.clearText();
publish("act4-injury-show");
publish("hide_tabs");
```

(...2000)

```
sfx("hospital1");
publish("act4-injury", [1]);
```

(...4000)

```
stopAllSounds();
publish("act4-injury", [0]);
```

(...2000)

```
sfx("hospital2");
publish("act4-injury", [2]);
```

(...4000)

```
stopAllSounds();
publish("act4-injury", [0]);
```

(...2000)

```
sfx("hospital3");
publish("act4-injury", [3]);
```

(...8000)

```
stopAllSounds();
publish("act4-injury", [0]);
```

(...5500)

`_.INJURED = true;`

(#act4)
