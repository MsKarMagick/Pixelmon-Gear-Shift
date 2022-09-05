// RECIPES EVENT
onEvent('recipes', event => {
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
})