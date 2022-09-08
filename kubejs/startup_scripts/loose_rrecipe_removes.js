// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

// RECIPES EVENT
onEvent('recipes', event => {
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

	//Duplicate Zinc Sheet Remove
	event.remove({id:'minecraft:pressing/zinc_sheet'})

	//Bone > Bonemeal smelting Remove
	event.remove({id:'quark:tweaks/smelting/bone_meal_utility'})
	
	//Bauxite requires Blasting
	event.remove({id:'pixelmon:furnace/bauxite_ore'})
	event.remove({id:'create:smelting/aluminum_ingot_compat_pixelmon'})

	//Platinum requires Blasting
	event.remove({id:'pixelmon:furnace/platinum_ore'})
	event.remove({id:'create:smelting/platinum_ingot_compat_pixelmon'})

	//BYG Basalt crushing recipe Remove
	event.remove({id:'byg:compat/create/black_sand_from_crushing'})

	//Farmer's Delight Removes
	event.remove({id:'farmersdelight:horse_feed'})
	event.remove({id:'farmersdelight:cooking/dog_food'})
	event.remove({id:'farmersdelight:wheat_dough'})
	event.remove({id:'farmersdelight:bread_from_smelting'})
	event.remove({id:'farmersdelight:bread_from_smoking'})

	//Quark veggie crates Removes
	event.remove({id:'quark:building/crafting/compressed/potato_crate'})
	event.remove({id:'quark:building/crafting/compressed/carrot_crate'})
	event.remove({id:'quark:building/crafting/compressed/beetroot_crate'})

	//Horse Armor Removes
	event.remove({id:'minecraft:leather_horse_armor'})
	event.remove({id:'byg:ametrine_horse_armor'})
	event.remove({id:'byg:pendorite_horse_armor'})
})