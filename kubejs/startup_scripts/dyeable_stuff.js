//Tag: #forge:daycares
onEvent('tags.items', event => {
    let daycares = ['white','orange','magenta','light_blue','yellow','lime','pink','gray','light_gray','cyan','purple','blue','brown','green','red','black']
    daycares.forEach(color => {
        event.add('forge:daycares', 'pixelmon:'+color+'_day_care')
    })

  })

onEvent('recipes', event => {
    let colors = ['white','orange','magenta','light_blue','yellow','lime','pink','gray','light_gray','cyan','purple','blue','brown','green','red','black']
    colors.forEach(color1 => {
            event.shapeless('1x pixelmon:'+color1+'_day_care', ['#forge:daycares', 'minecraft:'+color1+'_dye'])
    })

})