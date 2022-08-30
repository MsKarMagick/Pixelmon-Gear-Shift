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
	
	event.create('unpressed_iron_base').displayName('Unpressed Iron Base')
    event.create('unpressed_silver_base').displayName('Unpressed Silver Base')
	event.create('unpressed_aluminium_base').displayName('Unpressed Aluminium Base')
	event.create('unpressed_platinum_base').displayName('Unpressed Platinum Base')
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

// ITEM MODIFICATION EVENT
onEvent('item.modification', event => {
	/*event.modify('pixelmon:lava_cookie', item => {
		item.setFoodProperties(f => {
			f.hunger(3)
			f.saturation(0.1)
			f.meat(false)
			f.alwaysEdible(true)
			f.fastToEat(true)
			f.effect('minecraft:fire_resistance', 1, 45, 100)
		 })
	})*/
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
    
	//Spider Eye
	event.recipes.create.filling('minecraft:spider_eye', ['minecraft:ender_eye', Fluid.of('create:potion', 10, {"Bottle": "REGULAR", "Potion": "minecraft:weakness"})])
	//Ghast Tear
	event.recipes.create.filling('minecraft:ghast_tear', ['minecraft:ender_pearl', Fluid.of('create:potion', 10, {"Bottle": "REGULAR", "Potion": "minecraft:fire_resistance"})])
	//Rabbit
	event.recipes.create.filling('minecraft:rabbit', ['minecraft:slime_ball', Fluid.of('create:potion', 10, {"Bottle": "REGULAR", "Potion": "minecraft:leaping"})])
	//Beef
	event.recipes.create.filling('minecraft:beef', ['minecraft:slime_ball', Fluid.of('create:potion', 10, {"Bottle": "REGULAR", "Potion": "minecraft:strength"})])
	//Porkchop
	event.recipes.create.filling('minecraft:porkchop', ['minecraft:slime_ball', Fluid.of('create:potion', 10, {"Bottle": "REGULAR", "Potion": "minecraft:slowness"})])
	//Mutton
	event.recipes.create.filling('minecraft:mutton', ['minecraft:slime_ball', Fluid.of('create:potion', 10, {"Bottle": "REGULAR", "Potion": "quark:resistance"})])
	//Chicken
	event.recipes.create.filling('minecraft:chicken', ['minecraft:slime_ball', Fluid.of('create:potion', 10, {"Bottle": "REGULAR", "Potion": "minecraft:slow_falling"})])

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

	//ComputerCraft Removes
	event.remove({id:'computercraft:turtle_advanced'})
	event.remove({id:'computercraft:turtle_advanced_upgrade'})
	event.remove({id:'computercraft:turtle_normal'})
	event.remove({id:'computercraft:pocket_computer_advanced_upgrade'})
	event.remove({id:'computercraft:computer_advanced_upgrade'})
	event.remove({id:'advancedperipherals:weak_automata_core'})
	event.remove({id:'advancedperipherals:overpowered_weak_automata_core'})
	event.remove({id:'advancedperipherals:overpowered_end_automata_core'})
	event.remove({id:'advancedperipherals:overpowered_husbandry_automata_core'})
	event.remove({id:'advancedperipherals:chunk_controller'})
})