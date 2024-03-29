// priority: 0
onEvent('jei.hide.items', event => {
  event.hide('pipez:universal_pipe')
  event.hide('@pipez')
})

onEvent('jei.subtypes', event => {
	// event.useNBT('advancedrocketry:planet_id_chip')
})

onEvent('jei.hide.fluids', event => {
})

onEvent('jei.add.items', event => {

})

onEvent('jei.remove.categories', event => {
})

onEvent('item.tooltip', tooltip => {
	let holds = (id, slots) => tooltip.add("metalbarrels:" + id + "_barrel", [`§7${slots} Slots`])
	let main_assembly = (id, stage) => tooltip.add(id, [`§7Main Assembly: ${stage == "4" ? "§6Finale" : "§6Chapter " + stage}`, '§8Consider automating this item'])
	let bonus_assembly = (id, stage) => tooltip.add(id, [`§7Secondary Assembly: §6Chapter ${stage}`])
	let not_consumed = (id, stage) => tooltip.add(id, [`§7Not consumed in the`, `§7Assembly Process`])
	let ore = (id, y1, y2) => tooltip.add(id, [`§o§7Y level §6${y1} §7to §6${y2}`])

	tooltip.add("minecraft:redstone_ore", [`§7Does not generate, crush Cinnabar to obtain Redstone.`]);

	ore("forbidden_arcanus:arcane_crystal_ore", 1, 9)
	// ore("ae2:charged_quartz_ore", 1, 30)
	ore("forbidden_arcanus:xpetrified_ore", 1, 30)
	ore("ae2:quartz_ore", 1, 30)
	ore("thermal:apatite_ore", 1, 30)

	ore("thermal:cinnabar_ore", -59, 10)
	ore("thermal:deepslate_cinnabar_ore", -59, 10)

	ore("thermal:niter_ore", -26, 20)
	ore("thermal:deepslate_niter_ore", -26, 20)

	ore("thermal:nickel_ore", -40, 20)
	ore("thermal:deepslate_nickel_ore", -40, 20)

	// ore("thermal:ruby_ore", 1, 30)
	// ore("thermal:sapphire_ore", 1, 30)
	ore("thermal:lead_ore", -60, 10)
	ore("thermal:deepslate_lead_ore", -60, 10)
	// ore("minecraft:emerald_ore", 1, 30)
	ore("thermal:sulfur_ore", -32, 16)
	//ore("create:zinc_ore", 15, 70)
	//ore("create:copper_ore", 40, 85)

	//ore("minecraft:coal_ore", 1, 128)
	//ore("minecraft:iron_ore", 1, 64)
	//ore("minecraft:lapis_ore", 1, 32)
	//ore("minecraft:gold_ore", 1, 32)
	//ore("minecraft:diamond_ore", 1, 16)



	holds('copper', 5 * 9)
	holds('iron', 6 * 9)
	holds('silver', 8 * 9)
	holds('gold', 9 * 9)

	main_assembly('kubejs:rotation_mechanism', "1")
	bonus_assembly('kubejs:pressure_mechanism', "1A")
	main_assembly('create:precision_mechanism', "2")
	bonus_assembly('kubejs:scorch_mechanism', "2A")
	bonus_assembly('kubejs:train_mechanism', "2B")
	main_assembly('kubejs:explosive_mechanism', "3")
	// main_assembly('kubejs:inductive_mechanism', "4")
	main_assembly('kubejs:power_mechanism', "4")
	// bonus_assembly('kubejs:abstruse_mechanism', "4A")
	// main_assembly('kubejs:calculation_mechanism', "5")

	not_consumed('kubejs:stone_saw')
	not_consumed('kubejs:iron_saw')
	not_consumed('kubejs:diamond_saw')
	not_consumed('kubejs:screwdriver')
	// not_consumed('create:super_glue')
	not_consumed('kubejs:chromatic_resonator')
	not_consumed('kubejs:flash_drive')
	// not_consumed('xreliquary:mercy_cross')
	// not_consumed('xreliquary:ender_staff')

	global.substrates[0].forEach(e => tooltip.add(e.id, [`§8Category: §7Igneous`]));
	global.substrates[1].forEach(e => tooltip.add(e.id, [`§8Category: §7Herbal`]));
	global.substrates[2].forEach(e => tooltip.add(e.id, [`§8Category: §7Volatile`]));
	global.substrates[3].forEach(e => tooltip.add(e.id, [`§8Category: §7Crystalline`]));
	global.substrates[4].forEach(e => tooltip.add(e.id, [`§8Category: §7Metallurgic`]));
	global.substrates[5].forEach(e => tooltip.add(e.id, [`§8Category: §7Gemstone`]));
	global.substrates[6].forEach(e => tooltip.add(e.id, [`§8Category: §7Catalyst`]));

	// tooltip.add("structurescompass:structures_compass", [`§7Right-Click to Activate`]);

	tooltip.add("magicfeather:magicfeather", [`§6Grants Creative Flight`]);

	tooltip.add("kubejs:resistor", [`350kΩ`])

	// tooltip.add("xreliquary:alkahestry_tome", [`§6Cannot be used in Mechanical Crafting`]);

	tooltip.add("pipez:energy_pipe", [`§7Connections may have to be`, `§7marked as §fInputs §7by sneak-clicking`, `§7the connection with a §fWrench`]);

	tooltip.add("kubejs:accellerator_redstone", ["§7When used in Alchemy Research:", "  §6One of the §ecorrect §6Reagents",
		"  §6in §eincorrect §6slots will not be consumed"]);
	tooltip.add("kubejs:accellerator_glowstone", ["§7When used in Alchemy Research:", "  §6One of the §ecorrect §6Reagents",
		"  §6in §ecorrect §6slots will not be consumed"]);

	for (i = 0; i < 15; i++)
		tooltip.add(`kubejs:failed_alchemy_${i}`, [
			`§7Place in Centrifugal Separator to analyse.`,
			"",
			"§6Yields",
			"- Ash §7for each incorrect ingredient",
			"- Redstone §7for each correct ingredient",
			"   §7in an incorrect slot",
			"- Glowstone §7for each correct ingredient",
			"   §7in the correct slot"
		])
})

onEvent('jei.information', event => {
	// event.add('thermal:blitz_rod', ["Obtain by running a §9Charged Staff§0 (with Charge) and any amount of §9Tiny Smoke Clouds§0 through an §5Alchemical Laser§0."])
	// event.add('thermal:blizz_rod', ["Obtain by running an §9Entropy Manipulator§0 (with Charge) and any amount of §9Snowballs§0 through an §5Alchemical Laser§0."])
	// event.add('thermal:basalz_rod', ["Obtain by running a §9FluxoMagnet§0 (with Charge) and any amount of §9Basalt§0 through an §5Alchemical Laser§0."])
	// event.add('kubejs:substrate_silicon', ["Obtained only by running a §9Chaos Catalyst§0 and any amount of one specific other §9Reagent§0 through an §5Alchemical Laser§0.", " ", "The Reagent in question §9differs from World to World§0."])

	// event.add('kubejs:alchemical_laser', ["This item represents the §5Alchemical Laser§0 machine. Use the §9Ponder Feature§0 on this item to learn how it is build."])

	// let catalyst = (name, me) =>
	// 	[
	// 		`Obtained by finding the §9Correct Combination§0 of four §9${me ? name : name + " §0Reagent"}s§0 with the §5Alchemical Laser§0.`, " ",
	// 		`§81.§0 Occupy the first four slots of the Hopper Cart with one §9${me ? name : name + " §0Reagent"}§0 each`,
	// 		`§82.§0 Run the §5Alchemical Laser§0 on the contents and find either the §9${me ? me : name + " §9Catalyst"}§0, or a §9Hint§0 towards the Correct Combination`, " ",
	// 		"§8Note:§0 The Correct Combination may contain §9Duplicates§0",
	// 		"§8Note:§0 The Correct Combination §9Differs from World to World§0",
	// 		"§8Optional:§0 Place §9Redstone Accelerator§0 or §9Glowstone Accelerator§0 in the fifth slot for §9Additional Hints§0",
	// 	]

	// event.add('kubejs:substrate_igneous', catalyst("Igneous"))
	// event.add('kubejs:substrate_herbal', catalyst("Herbal"))
	// event.add('kubejs:substrate_volatile', catalyst("Volatile"))
	// event.add('kubejs:substrate_crystal', catalyst("Crystalline"))
	// event.add('kubejs:substrate_metal', catalyst("Metallurgic"))
	// event.add('kubejs:substrate_gem', catalyst("Gemstone"))


	// event.add('kubejs:substrate_chaos', catalyst("Catalyst", "Chaos Catalyst").concat([
	// 	" ", "§8Usage:§0", "Running the §9Chaos Catalyst§0 with any amount of one §9Reagent§0 through an §5Alchemical Laser§0 will §9transmute§0 the Reagent to another. The Transmutation Pairings are §9unique to each World§0."
	// ]))
})
