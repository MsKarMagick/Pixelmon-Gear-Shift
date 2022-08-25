// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

// ITEM REGISTRY EVENT
onEvent('item.registry', event => {
	event.create('origin_ore')
	     .displayName('§6Origin Ore§r')

	event.create('chicken_nugget_raw')
	     .displayName('Raw Chicken Nugget')
		 .food(f => {
			f.hunger(1)
			f.saturation(0)
			f.meat(true)
			f.alwaysEdible(false)
			f.fastToEat(false)
			f.effect('minecraft:hunger', 5, 1, 75)
		 })

	event.create('chicken_nugget')
	     .displayName('Chicken Nugget')
		 .food(f => {
			f.hunger(2)
			f.saturation(0.2)
			f.meat(true)
			f.alwaysEdible(false)
			f.fastToEat(false)
		 })

	event.create('chicken_nugget_galactic')
	     .displayName('Galactic Fried Chicken')
		 .food(f => {
			f.hunger(10)
			f.saturation(0.4)
			f.meat(true)
			f.alwaysEdible(true)
			f.fastToEat(false)
			f.effect('minecraft:regeneration', 1, 3, 100)
		 })
})

// BLOCK REGISTRY EVENT
onEvent('block.registry', event => {
	event.create('origin_ore_block')
	     .type('basic')
	     .material('metal')
	     .hardness(5.0)
		 .resistance(1200)
		 .displayName('§6Block of Origin Ore§r')
		 .harvestTool('pickaxe')
		 .tagBlock('minecraft:mineable/pickaxe')
		 .fullBlock(1)
		 .renderType('solid')
})

// RECIPES EVENT
onEvent('recipes', event => {
	//Replace max soup recipe.
	//No, i don't know how to use the potion in a data recipe.
	event.remove({id: 'pixelmon:max_soup'})
	event.shaped('pixelmon:max_soup', [
		"MHM",
		"SBS",
		"MHM"
	],{
		"M": "pixelmon:max_mushroom",
		"H": "pixelmon:max_honey",
		"S": Item.of('minecraft:potion', '{Potion:"minecraft:strong_strength"}'),
		"B":"minecraft:bowl",
		}
	)

	//Grappling Hook Removes
	event.remove({id: 'grapplemod:launcher'})
	event.remove({id: 'grapplemod:repeller'})
	event.remove({id: 'grapplemod:forcefieldupgradeitem'})
	event.remove({id: 'grapplemod:staffupgradeitem'})
	event.remove({id: 'grapplemod:limitsupgradeitem'})
	event.remove({id: 'grapplemod:rocketupgradeitem'})
	event.remove({id: 'grapplemod:rockethook'})
	event.remove({id: 'grapplemod:rocketdoublehook'})
	event.remove({id: 'grapplemod:rocketdoublemotorhook'})
	event.remove({id: 'grapplemod:magnethook'})
	event.remove({id: 'grapplemod:enderhook'})
})