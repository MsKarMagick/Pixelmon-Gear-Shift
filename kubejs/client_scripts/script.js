// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')


// JEI ITEM HIDE EVENT
onEvent('jei.hide.items', event => {
	// event.hide('minecraft:cobblestone')
		//Grappling Hook Removes
		event.hide('grapplemod:launcher')
		event.hide('grapplemod:repeller')
		event.hide('grapplemod:forcefieldupgradeitem')
		event.hide('grapplemod:staffupgradeitem')
		event.hide('grapplemod:limitsupgradeitem')
		event.hide('grapplemod:rocketupgradeitem')
		event.hide('grapplemod:rockethook')
		event.hide('grapplemod:rocketdoublehook')
		event.hide('grapplemod:rocketdoublemotorhook')
		event.hide('grapplemod:magnethook')
		event.hide('grapplemod:enderhook')
	
		//ComputerCraft Removes
		event.hide('computercraft:turtle_advanced')
		event.hide('computercraft:turtle_advanced_upgrade')
		event.hide('computercraft:turtle_normal')
		event.hide('advancedperipherals:weak_automata_core')
		event.hide('advancedperipherals:end_automata_core')
		event.hide('advancedperipherals:husbandry_automata_core')
		event.hide('advancedperipherals:overpowered_weak_automata_core')
		event.hide('advancedperipherals:overpowered_end_automata_core')
		event.hide('advancedperipherals:overpowered_husbandry_automata_core')
		event.hide('advancedperipherals:chunk_controller')
})