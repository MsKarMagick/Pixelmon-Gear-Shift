// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

// ITEM REGISTRY EVENT
onEvent('item.registry', event => {
	
	//Origin Ore
	event.create('origin_ore')
	     .displayName('§6Origin Ore§r')
    //Chicken Items
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
			f.effect('minecraft:regeneration', 5, 3, 100)
		 })

		 //Lava Cookie Variants
		 event.create('lava_cookie_sugar')
	     .displayName('Powdered Lava Cookie')
		 .food(f => {
			f.hunger(5)
			f.saturation(0.2)
			f.meat(false)
			f.alwaysEdible(true)
			f.fastToEat(true)
			f.effect('minecraft:speed', 25, 5, 100)
		 })

		 event.create('lava_cookie_chocolate')
	     .displayName('Choco-Dipped Lava Cookie')
		 .food(f => {
			f.hunger(5)
			f.saturation(0.2)
			f.meat(false)
			f.alwaysEdible(true)
			f.fastToEat(true)
			f.effect('minecraft:instant_health', 1, 1, 100)
		 })

		 event.create('lava_cookie_chocolate_black')
	     .displayName('Dark Lava Cookie')
		 .food(f => {
			f.hunger(5)
			f.saturation(0.2)
			f.meat(false)
			f.alwaysEdible(true)
			f.fastToEat(true)
			f.effect('minecraft:resistance', 25, 3, 100)
		 })

		 event.create('lava_cookie_chocolate_ruby')
	     .displayName('Ruby Lava Cookie')
		 .food(f => {
			f.hunger(5)
			f.saturation(0.2)
			f.meat(false)
			f.alwaysEdible(true)
			f.fastToEat(true)
			f.effect('minecraft:regeneration', 10, 1, 100)
		 })

		 event.create('lava_cookie_chocolate_white')
	     .displayName('White Chocolate Lava Cookie')
		 .food(f => {
			f.hunger(5)
			f.saturation(0.2)
			f.meat(false)
			f.alwaysEdible(true)
			f.fastToEat(true)
			f.effect('minecraft:jump_boost', 30, 3, 100)
		 })

		 event.create('lava_cookie_caramel')
	     .displayName('Caramel Lava Cookie')
		 .food(f => {
			f.hunger(5)
			f.saturation(0.2)
			f.meat(false)
			f.alwaysEdible(true)
			f.fastToEat(true)
			f.effect('minecraft:strength', 25, 1, 100)
		 })

		 event.create('lava_cookie_honey')
	     .displayName('Honey Lava Cookie')
		 .food(f => {
			f.hunger(5)
			f.saturation(0.2)
			f.meat(false)
			f.alwaysEdible(true)
			f.fastToEat(true)
			f.effect('minecraft:night_vision', 60, 1, 100)
		 })

		 event.create('lava_cookie_smores')
	     .displayName('Lava Cookie Smores')
		 .food(f => {
			f.hunger(5)
			f.saturation(0.2)
			f.meat(false)
			f.alwaysEdible(true)
			f.fastToEat(true)
			f.effect('minecraft:luck', 5, 3, 100)
		 })
	
	//Pixelmon Ball related items
	//Base Discs
	event.create('disc_base_iron').displayName('Iron Disc')
    event.create('disc_base_silver').displayName('Silver Disc')
	event.create('disc_base_aluminium').displayName('Aluminium Disc')
	event.create('disc_base_platinum').displayName('Platinum Disc')
	event.create('unsanded_wooden_base').displayName('Unsanded Wooden Base')

	//Lid Discs
	event.create('disc_ball_beast').displayName('Beast Ball Disc')
    event.create('disc_ball_dive').displayName('Dive Ball Disc')
	event.create('disc_ball_dusk').displayName('Dusk Ball Disc')
	event.create('disc_ball_fast').displayName('Fast Ball Disc')
	event.create('disc_ball_friend').displayName('Friend Ball Disc')
	event.create('disc_ball_great').displayName('Great Ball Disc')
	event.create('disc_ball_heal').displayName('Heal Ball Disc')
	event.create('disc_ball_heavy').displayName('Heavy Ball Disc')
	event.create('disc_ball_level').displayName('Level Ball Disc')
	event.create('disc_ball_love').displayName('Love Ball Disc')
	event.create('disc_ball_lure').displayName('Lure Ball Disc')
	event.create('disc_ball_luxury').displayName('Luxury Ball Disc')
	event.create('disc_ball_moon').displayName('Moon Ball Disc')
	event.create('disc_ball_nest').displayName('Nest Ball Disc')
	event.create('disc_ball_net').displayName('Net Ball Disc')
	event.create('disc_ball_poke').displayName('Poké Ball Disc')
	event.create('disc_ball_premier').displayName('Premier Ball Disc')
	event.create('disc_ball_quick').displayName('Quick Ball Disc')
	event.create('disc_ball_repeat').displayName('Repeat Ball Disc')
	event.create('disc_ball_safari').displayName('Safari Ball Disc')
	event.create('disc_ball_sport').displayName('Sport Ball Disc')
	event.create('disc_ball_ultra').displayName('Ultra Ball Disc')

    //Sheets
	event.create('sheet_silver').displayName('Silver Sheet')
	event.create('sheet_platinum').displayName('Platinum Sheet')
	event.create('sheet_aluminium').displayName('Aluminium Sheet')

	//Unfinished Tests
	event.create('unfinished_ball_ultra').type('create:sequenced_assembly').displayName('Unassembled Ultra Ball')
	event.create('unfinished_lid_ultra').type('create:sequenced_assembly').displayName('Unshaped Ultra Ball Lid')
	  



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