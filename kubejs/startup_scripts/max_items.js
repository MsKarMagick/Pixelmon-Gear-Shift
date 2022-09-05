// RECIPES EVENT
onEvent('recipes', event => {
	//Replace max soup recipe.
	//No, i don't know how to use the potion in a data recipe.
	event.remove({id: 'pixelmon:max_soup'})
	event.shaped('pixelmon:max_soup', [
		"MHM",
		"SBS",
		"MHM"
	],
    {
		"M": "pixelmon:max_mushroom",
		"H": "pixelmon:max_honey",
		"S": Item.of('minecraft:potion', '{Potion:"minecraft:strong_strength"}'),
		"B":"minecraft:bowl",
		}
	)
})