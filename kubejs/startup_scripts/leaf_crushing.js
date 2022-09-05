onEvent('recipes', event => {
    let apricorns = ['red', 'yellow', 'blue', 'green', 'pink', 'white', 'black']
    apricorns.forEach(color => {
        event.recipes.create.crushing([item.of('pixelmon:'+color+'_apricorn').chance(0.40)], 'pixelmon:apricorn_leaves_'+color, 100)
    })

    let berries = ['kee', 'maranga', 'cheri', 'chesto', 'pecha', 'rawst', 'aspear', 'leppa', 'oran', 'persim', 'lum', 'sitrus', 'figy', 'wiki', 'mago', 'aguav', 'iapapa', 'razz', 'bluk', 'nanab', 'wepear', 'pinap', 'pomeg', 'kelpsy', 'qualot', 'hondew', 'grepa', 'tamato', 'cornn', 'magost', 'rabuta', 'nomel', 'spelon', 'pamtre', 'watmel', 'durin', 'belue', 'occa', 'passho', 'wacan', 'rindo', 'yache', 'chople', 'kebia', 'drash', 'eggant', 'nutpea', 'pumkin', 'shuca', 'strib', 'ginema', 'kuo', 'niniku', 'topo', 'touga', 'yago', 'coba', 'payapa', 'tanga', 'charti', 'kasib', 'haban', 'colbur', 'babiri', 'chilan', 'liechi', 'ganlon', 'salac', 'petaya', 'apicot', 'lansat', 'starf', 'enigma', 'micle', 'custap', 'jaboca', 'rowap', 'roseli']
    berries.forEach(berry => {
        event.recipes.create.crushing([item.of('pixelmon:'+berry+'_berry').chance(0.40)], 'pixelmon:berry_leaves_'+berry, 100)
    })

})