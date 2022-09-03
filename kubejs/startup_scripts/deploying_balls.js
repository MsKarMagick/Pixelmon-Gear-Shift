onEvent('recipes', event => {

    let allballs = ['luxury','timer','dusk','quick','repeat','ultra','friend','net','great','moon','level','dive','heavy','lure','fast','love','heal','safari','premier','sport','nest','poke']
    allballs.forEach(balltype => {
        event.remove({id:'pixelmon:pokeball/ball/'+balltype+'_ball'})
    })

    let tier1 = ['heal','safari', 'premier','sport','nest','poke']
    tier1.forEach(balltype => {
        event.recipes.createDeploying('pixelmon:'+balltype+'_ball', ['pixelmon:iron_base', 'pixelmon:'+balltype+'_ball_lid'])
        event.recipes.createDeploying('pixelmon:'+balltype+'_ball', ['pixelmon:aluminum_base', 'pixelmon:'+balltype+'_ball_lid'])
    })

    let tier2 = ['friend','net','great','moon','level','dive','heavy','lure','fast','love']
    tier2.forEach(balltype => {
        event.recipes.createDeploying('pixelmon:'+balltype+'_ball', ['pixelmon:silver_base', 'pixelmon:'+balltype+'_ball_lid'])
    })

    let tier3 = ['luxury','timer','dusk','quick','repeat','ultra']
    tier3.forEach(balltype => {
        event.recipes.createDeploying('pixelmon:'+balltype+'_ball', ['pixelmon:platinum_base', 'pixelmon:'+balltype+'_ball_lid'])
    })

})