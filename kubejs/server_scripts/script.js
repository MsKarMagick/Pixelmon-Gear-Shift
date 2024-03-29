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

function hasImprovement(item, key, minLevel){
    result = false;
/*  if(item.item.isBroken(item.getItemStack())) return false;
    item.item.getMajorModules(item.getItemStack()).forEach(module =>{
        if(module.getImprovementLevel(item.getItemStack(), key) >= minLevel) result = true
    })*/
    return result
}

onEvent('player.tick', event => {
	user = event.getPlayer()
    item = user.getHeldItem(MAIN_HAND)
    if(item.getId() == "tetra:modular_single" || item.getId() == "tetra:modular_double"){
    //Water Stone
    if(hasImprovement(item, "trait_waterstone", 0)){
        if(user.isInWater()){
        if(user.getAirSupply()<20)user.setAirSupply(20)
        eff = user.getPotionEffects()
        if(eff.getDuration("night_vision") < 220) eff.add("night_vision", 300, 0, false, false)
        if(user.level.getTime()%20 == 0 && Math.random() < 0.25)user.damageHeldItem(MAIN_HAND, 1)
        }
    }
    //Leaf Stone
    if(hasImprovement(item, "trait_leafstone", 0)){
        if(Math.random() < 0.004) user.damageHeldItem(MAIN_HAND, -1)
        if(Math.random() < 0.01) user.heal(1)
    }
    }
})


onEvent('entity.attack', event => {
    entity = event.getEntity()
    source = event.getSource()
    world = event.getEntity().getLevel()
	if(entity.getType() == "pixelmon:pixelmon" && source.getType() == "anvil"){
        data = entity.getFullNBT()
        if(data.ndex == 241 && data.Owner == undefined){
            if(world.getBlock(entity.getX(),entity.getY(),entity.getZ()).id == "cookingforblockheads:milk_jar"){
                event.server.runCommandSilent("setblock "+Math.floor(entity.getX())+" "+Math.floor(entity.getY())+" "+Math.floor(entity.getZ())+" cookingforblockheads:cow_jar")
                entity.kill()
            }
        }
    }
})
