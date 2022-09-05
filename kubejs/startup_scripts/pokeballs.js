onEvent('recipes', event => {
    //Defines
    let allballs = ['luxury','timer','dusk','quick','repeat','ultra','friend','net','great','moon','level','dive','heavy','lure','fast','love','heal','safari','premier','sport','nest','poke']
    let tier1 = ['heal','safari', 'premier','sport','nest','poke']
    let tier2 = ['friend','net','great','moon','level','dive','heavy','lure','fast','love']
    let tier3 = ['luxury','timer','dusk','quick','repeat','ultra']

    //Disable base Ball recipes
     allballs.forEach(balltype => {
        event.remove({id:'pixelmon:pokeball/ball/'+balltype+'_ball'})
    })
    
    //Deploying recipes for Balls
    tier1.forEach(balltype => {
        event.recipes.createDeploying('pixelmon:'+balltype+'_ball', ['pixelmon:iron_base', 'pixelmon:'+balltype+'_ball_lid'])
        event.recipes.createDeploying('pixelmon:'+balltype+'_ball', ['pixelmon:aluminum_base', 'pixelmon:'+balltype+'_ball_lid'])
    })

    tier2.forEach(balltype => {
        event.recipes.createDeploying('pixelmon:'+balltype+'_ball', ['pixelmon:silver_base', 'pixelmon:'+balltype+'_ball_lid'])
    })

    tier3.forEach(balltype => {
        event.recipes.createDeploying('pixelmon:'+balltype+'_ball', ['pixelmon:platinum_base', 'pixelmon:'+balltype+'_ball_lid'])
    })
    //End of Deploying recipes for Balls

    //Disable base Lid recipes
    allballs.forEach(lidtype => {
        event.remove({id:'pixelmon:pokeball/lid/'+lidtype+'_ball_lid'})
    })

    //Disc to Lid press recipes
    allballs.forEach(disctype => {
        event.recipes.createPressing('pixelmon:'+disctype+'_ball_lid', ['kubejs:disc_ball_'+disctype])
    })
})