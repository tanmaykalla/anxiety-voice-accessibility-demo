# intermission

`Game.clearAll();`

(...2000)

```
_.INTERMISSION_STAGE = _.INTERMISSION_STAGE ? _.INTERMISSION_STAGE : 1;
SceneSetup.intermission(_.INTERMISSION_STAGE);
Game.FORCE_CANT_SKIP = true;
```

(...6000)

```
publish("show_stats");
```

n2: इस दौर के डर:

i: नुकसान पहुँचाया जाना: {{_.INTERMISSION_STAGE==1 ? _.attack_harm_ch1 : _.attack_harm_ch2}}

i: प्यार न मिलना: {{_.INTERMISSION_STAGE==1 ? _.attack_alone_ch1 : _.attack_alone_ch2}}

i: बुरा इंसान होना: {{_.INTERMISSION_STAGE==1 ? _.attack_bad_ch1 : _.attack_bad_ch2}}


```
publish("set_how_many_prompts", [1]);
Game.FORCE_CANT_SKIP = false;
Game.CLICK_TO_ADVANCE = true;
```

n5: (गेम अपने आप सेव हो गया है! आप अभी छोड़ सकते हैं और बाद में जारी रख सकते हैं)

```
Game.clearAll();
sfx("yelp", {volume:0.5});
```

(...2000)

{{if _.INTERMISSION_STAGE==1}}
(#act2)
{{/if}}

{{if _.INTERMISSION_STAGE==2}}
(#act3)
{{/if}}
