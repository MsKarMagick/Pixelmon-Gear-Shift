onEvent('recipes', event => {
    //Defines
    let tumblestones = ['_sky_','_black_']

    tumblestones.forEach(type => {
        event.recipes.createMilling([Item.of('1x pixelmon:raw'+type+'tumblestone').withChance(0.3), Item.of('pixelmon:raw'+type+'tumblestone').withChance(0.1)], '#forge:tumblestone_mats/tumble1'+type)
        event.recipes.createMilling([Item.of('1x pixelmon:raw'+type+'tumblestone').withChance(0.6), Item.of('pixelmon:raw'+type+'tumblestone').withChance(0.3)], '#forge:tumblestone_mats/tumble2'+type)
        event.recipes.createMilling([Item.of('1x pixelmon:raw'+type+'tumblestone').withChance(1.0), Item.of('pixelmon:raw'+type+'tumblestone').withChance(0.5)], '#forge:tumblestone_mats/tumble3'+type)

        event.recipes.createMilling([Item.of('1x pixelmon:raw_tumblestone').withChance(0.3), Item.of('pixelmon:raw_tumblestone').withChance(0.1)], '#forge:tumblestone_mats/tumble1')
        event.recipes.createMilling([Item.of('1x pixelmon:raw_tumblestone').withChance(0.6), Item.of('pixelmon:raw_tumblestone').withChance(0.3)], '#forge:tumblestone_mats/tumble2')
        event.recipes.createMilling([Item.of('1x pixelmon:raw_tumblestone').withChance(1.0), Item.of('pixelmon:raw_tumblestone').withChance(0.5)], '#forge:tumblestone_mats/tumble3')
    
    })
})