// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

// ITEM REGISTRY EVENT
onEvent('item.registry', event => {
	event.create('origin_ore').displayName('§6Origin Ore§r') 
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

	event.shaped('1x pixelmon:fishing_log', [
	  'SSS',
	  'SPS',
	  'SSS'
	], {
	   S: '#minecraft:wooden_slabs',
	   P: '#forge:paper'
	})
})