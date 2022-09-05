// ITEM REGISTRY EVENT
onEvent('item.registry', event => {
    //Chicken Items
	event.create('chicken_nugget_raw')
	     .displayName('Raw Chicken Nugget')
		 .food(f => {
			f.hunger(1)
			f.saturation(0)
			f.meat(true)
			f.alwaysEdible(false)
			f.fastToEat(false)
			f.effect('minecraft:hunger', 100, 1, 75)
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
			f.effect('minecraft:regeneration', 100, 3, 100)
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
			f.effect('minecraft:speed', 500, 5, 100)
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
			f.effect('minecraft:resistance', 500, 3, 100)
		 })

	event.create('lava_cookie_chocolate_ruby')
	     .displayName('Ruby Lava Cookie')
		 .food(f => {
			f.hunger(5)
			f.saturation(0.2)
			f.meat(false)
			f.alwaysEdible(true)
			f.fastToEat(true)
			f.effect('minecraft:regeneration', 200, 1, 100)
		 })

	event.create('lava_cookie_chocolate_white')
	     .displayName('White Chocolate Lava Cookie')
		 .food(f => {
			f.hunger(5)
			f.saturation(0.2)
			f.meat(false)
			f.alwaysEdible(true)
			f.fastToEat(true)
			f.effect('minecraft:jump_boost', 600, 3, 100)
		 })

	event.create('lava_cookie_caramel')
	     .displayName('Caramel Lava Cookie')
		 .food(f => {
			f.hunger(5)
			f.saturation(0.2)
			f.meat(false)
			f.alwaysEdible(true)
			f.fastToEat(true)
			f.effect('minecraft:strength', 500, 1, 100)
		 })

	event.create('lava_cookie_honey')
	     .displayName('Honey Lava Cookie')
		 .food(f => {
			f.hunger(5)
			f.saturation(0.2)
			f.meat(false)
			f.alwaysEdible(true)
			f.fastToEat(true)
			f.effect('minecraft:night_vision', 1200, 1, 100)
		 })

	event.create('lava_cookie_smores')
	     .displayName('Lava Cookie Smores')
		 .food(f => {
			f.hunger(5)
			f.saturation(0.2)
			f.meat(false)
			f.alwaysEdible(true)
			f.fastToEat(true)
			f.effect('minecraft:luck', 100, 3, 100)
		 })
})