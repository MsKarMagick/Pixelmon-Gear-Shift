// BLOCK REGISTRY EVENT
onEvent('block.registry', event => {
	//Block of Origin Ore
	event.create('origin_ore_block')
	     .type('basic')
	     .material('metal')
	     .hardness(5.0)
		 .resistance(1200)
		 .displayName('§6Block of Origin Ore§r')
		 .harvestTool('pickaxe', 3)
		 .tagBlock('minecraft:mineable/pickaxe')
		 .fullBlock(1)
		 .renderType('solid')
})

// ITEM REGISTRY EVENT
onEvent('item.registry', event => {
	//Pixelmon Ball related items
	//Base Discs
	event.create('disc_base_iron').displayName('Iron Disc').type('create:sequenced_assembly')
    event.create('disc_base_silver').displayName('Silver Disc').type('create:sequenced_assembly')
	event.create('disc_base_aluminium').displayName('Aluminium Disc').type('create:sequenced_assembly')
	event.create('disc_base_platinum').displayName('Platinum Disc').type('create:sequenced_assembly')
	event.create('disc_ball_beast').displayName('Beast Ball Component').type('create:sequenced_assembly')
	event.create('unsanded_wooden_base').displayName('Unsanded Wooden Base')

	//Lid Discs + Bases
	event.create('beast_base').displayName('Beast Ball Base')
    event.create('disc_ball_dive').displayName('Dive Ball Disc')
	event.create('disc_ball_dusk').displayName('Dusk Ball Disc')
	event.create('disc_ball_fast').displayName('Fast Ball Disc')
	event.create('disc_ball_friend').displayName('Friend Ball Disc')
	event.create('disc_ball_great').displayName('Great Ball Disc')
	event.create('disc_ball_heal').displayName('Heal Ball Disc')
	event.create('disc_ball_heavy').displayName('Heavy Ball Disc')
	event.create('disc_ball_level').displayName('Level Ball Disc')
	event.create('disc_ball_love').displayName('Love Ball Disc')
	event.create('disc_ball_lure').displayName('Lure Ball Disc')
	event.create('disc_ball_luxury').displayName('Luxury Ball Disc')
	event.create('disc_ball_moon').displayName('Moon Ball Disc')
	event.create('disc_ball_nest').displayName('Nest Ball Disc')
	event.create('disc_ball_net').displayName('Net Ball Disc')
	event.create('disc_ball_poke').displayName('Poké Ball Disc')
	event.create('disc_ball_premier').displayName('Premier Ball Disc')
	event.create('disc_ball_quick').displayName('Quick Ball Disc')
	event.create('disc_ball_repeat').displayName('Repeat Ball Disc')
	event.create('disc_ball_safari').displayName('Safari Ball Disc')
	event.create('disc_ball_sport').displayName('Sport Ball Disc')
	event.create('disc_ball_timer').displayName('Timer Ball Disc')
	event.create('disc_ball_ultra').displayName('Ultra Ball Disc')

	//Materials
    //Origin Ore
	event.create('origin_ore').displayName('§6Origin Ore§r')

    //Sheets
	event.create('sheet_silver').displayName('Silver Sheet')
	event.create('sheet_platinum').displayName('Platinum Sheet')
	event.create('sheet_aluminium').displayName('Aluminium Sheet')

	//Shards & Bits
	event.create('shard_amethyst').displayName('Amethyst Shard')
	event.create('bit_sapphire').displayName('Sapphire Bit')
	event.create('bit_ruby').displayName('Ruby Bit')
})