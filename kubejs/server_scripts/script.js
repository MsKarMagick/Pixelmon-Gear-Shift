// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

onEvent('player.tick', event => {
	user = event.getPlayer()
    item = user.getHeldItem(MAIN_HAND)
    nbt = item.getNbtString()
    if(nbt.includes("double/head_left:water_stone") || nbt.includes("double/head_left:water_stone")){
        if(user.isInWater()){
        if(user.getAirSupply()<20)user.setAirSupply(20)
        eff = user.getPotionEffects()
        if(eff.getDuration("night_vision") < 220) eff.add("night_vision", 300, 0, false, false)
        }
    }
})
