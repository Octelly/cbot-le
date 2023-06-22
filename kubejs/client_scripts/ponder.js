// onEvent("ponder.registry", event => {

//     event.create("kubejs:alchemy", "kubejs:alchemical_laser")
//         .scene("alchemy_setup", "The Thermal Alchemy Setup", "kubejs:laser_alchemy", (scene, util) => {
//             scene.configureBasePlate(0, 0, 5);
//             scene.showBasePlate();
//             scene.idle(10)

//             let largeCog = util.select().position(5, 0, 2)
//             let deployerSingle = util.select().position(4, 1, 3)
//             let smallCog = util.select().position(4, 1, 2)
//             let lamp = util.select().fromTo(4, 1, 4, 4, 2, 4)
//             let deployer = util.select().fromTo(4, 1, 2, 4, 2, 4)
//             let machine = util.select().position(2, 1, 3)
//             let light = util.select().position(2, 1, 2)

//             scene.world().showSection(machine, Facing.down)
//             scene.idle(15)

//             scene.overlay().showText(50)
//                 .text("Start with an Invar Machine")
//                 .pointAt(util.vector().topOf(2, 1, 3))
//                 .colored(PonderPalette.WHITE)
//                 .placeNearTarget()
//             scene.idle(60)

//             scene.world().showSection(light, Facing.south)
//             scene.overlay().showText(50)
//                 .text("Attach a Laser Lamp of any colour")
//                 .pointAt(util.vector().centerOf(2, 1, 2))
//                 .colored(PonderPalette.WHITE)
//                 .placeNearTarget()
//             scene.idle(30)

//             scene.world().showSection(util.select().position(1, 1, 2), Facing.north)
//             scene.idle(25)

//             scene.world().toggleRedstonePower(util.select().position(1, 1, 2))
//             scene.effects().indicateRedstone(util.grid().at(1, 1, 2))
//             scene.world().setBlock(util.grid().at(2, 1, 2), util.getDefaultState("kubejs:ponder_laser_lamp_on"), false)
//             scene.idle(15)

//             scene.overlay().showText(40)
//                 .text("Ensure that the light is powered")
//                 .colored(PonderPalette.GREEN)
//                 .pointAt(util.vector().centerOf(2, 1, 2))
//                 .placeNearTarget()
//             scene.idle(50)

//             scene.world().setKineticSpeed(deployer, 0)
//             scene.world().showSection(deployerSingle, Facing.down)
//             scene.idle(15)

//             scene.overlay().showText(60)
//                 .text("Place a Deployer targeting the Invar Machine")
//                 .pointAt(util.vector().topOf(4, 1, 3))
//                 .colored(PonderPalette.WHITE)
//                 .placeNearTarget()
//             scene.idle(70)
//             scene.overlay().showControls(new PonderInput(util.vector().blockSurface(util.grid().at(4, 1, 3), Facing.west), PonderPointing.RIGHT)
//                 .rightClick().withWrench(),
//                 50)
//             scene.idle(8)
//             scene.world().modifyTileNBT(deployerSingle, java("com.simibubi.create.content.contraptions.components.deployer.DeployerTileEntity"), nbt => nbt.func_74778_a("Mode", "PUNCH"));
//             scene.overlay().showText(50)
//                 .text("Set it to Punch mode using a Wrench")
//                 .colored(PonderPalette.GREEN)
//                 .pointAt(util.vector().topOf(4, 1, 3))
//                 .placeNearTarget()
//             scene.idle(20)
//             scene.world().showSection(largeCog, Facing.up)
//             scene.world().showSection(smallCog, Facing.down)
//             scene.idle(5)
//             scene.world().showSection(lamp, Facing.down)
//             scene.idle(5)
//             scene.world().setKineticSpeed(deployer, 64)
//             scene.idle(60)
//             scene.overlay().showText(50)
//                 .attachKeyFrame()
//                 .text("Whenever the Deployer activates...")
//                 .pointAt(util.vector().topOf(4, 1, 3))
//                 .colored(PonderPalette.WHITE)
//                 .placeNearTarget()

//             scene.idle(30)
//             scene.world().toggleRedstonePower(lamp)
//             scene.idle(3)
//             scene.world().moveDeployer(util.grid().at(4, 1, 3), 1, 25);
//             scene.idle(15)
//             scene.idle(10)

//             scene.effects().indicateSuccess(util.grid().at(2, 1, 2))
//             scene.effects().indicateSuccess(util.grid().at(2, 1, 1))
//             scene.effects().indicateSuccess(util.grid().at(2, 1, 0))
//             scene.effects().indicateSuccess(util.grid().at(2, 1, -1))

//             scene.idle(3)
//             scene.world().moveDeployer(util.grid().at(4, 1, 3), -1, 25);
//             scene.idle(10)
//             scene.world().toggleRedstonePower(lamp)
//             // scene.effects().indicateRedstone(util.grid().at(4, 2, 4))

//             scene.overlay().showText(50)
//                 .text("...the Laser Lamp will emit a High-Energy Beam")
//                 .colored(PonderPalette.GREEN)
//                 .pointAt(util.vector().centerOf(2, 1, 2))
//                 .placeNearTarget()
//             scene.idle(60)

//             scene.world().showSection(util.select().fromTo(1, 1, 0, 3, 1, 0), Facing.west)
//             scene.idle(5)
//             let HopperMinecart = java("net.minecraft.entity.item.minecart.HopperMinecartEntity")
//             let cartHandle = scene.special().createCart(util.vector().topOf(2, 0, 0), 0, (w, x, y, z) => new HopperMinecart(w, x, y, z))
//             scene.idle(20)
//             scene.overlay().showText(80)
//                 .attachKeyFrame()
//                 .text("Hopper Minecarts caught in the Beam will process their contained Items")
//                 .pointAt(util.vector().centerOf(2, 1, 0))
//                 .colored(PonderPalette.WHITE)
//                 .placeNearTarget()
//             scene.idle(70)

//             scene.overlay().showControls(new PonderInput(util.vector().centerOf(2, 1, 0), PonderPointing.DOWN)
//                 .withItem("thermal:flux_magnet"),
//                 40)
//             scene.idle(5)
//             scene.overlay().showControls(new PonderInput(util.vector().centerOf(2, 1, 0), PonderPointing.UP)
//                 .withItem("minecraft:basalt"),
//                 35)
//             scene.idle(30)

//             scene.world().toggleRedstonePower(lamp)
//             scene.idle(3)
//             scene.world().moveDeployer(util.grid().at(4, 1, 3), 1, 25);
//             scene.idle(15)
//             scene.idle(10)

//             scene.effects().indicateSuccess(util.grid().at(2, 1, 2))
//             scene.effects().indicateSuccess(util.grid().at(2, 1, 1))
//             scene.effects().indicateSuccess(util.grid().at(2, 1, 0))
//             scene.effects().indicateSuccess(util.grid().at(2, 1, -1))

//             scene.idle(3)
//             scene.world().moveDeployer(util.grid().at(4, 1, 3), -1, 25);
//             scene.idle(10)

//             scene.overlay().showControls(new PonderInput(util.vector().centerOf(2, 1, 0), PonderPointing.DOWN)
//                 .withItem("thermal:flux_magnet"),
//                 40)
//             scene.idle(5)
//             scene.overlay().showControls(new PonderInput(util.vector().centerOf(2, 1, 0), PonderPointing.UP)
//                 .withItem("thermal:basalz_rod"),
//                 35)

//             // scene.effects().indicateRedstone(util.grid().at(4, 2, 4))
//             scene.world().toggleRedstonePower(lamp)
//         })

//     event.create("kubejs:rocket", "advancedrocketry:guidancecomputer")
//         .scene("rocket_setup", "Launching Rockets 101", "kubejs:rocket_scene", (scene, util) => {
//             scene.configureBasePlate(0, 0, 7);
//             scene.scaleSceneView(.8);
//             scene.setSceneOffsetY(-1);
//             scene.showBasePlate();
//             scene.idle(10)

//             let pad = util.select().fromTo(1, 1, 1, 5, 1, 5)
//             let tower = util.select().fromTo(0, 1, 4, 0, 6, 4)
//             let assembler = util.select().position(3, 2, 0)
//             let fuelingstation = util.select().position(4, 2, 0)
//             let powercable = util.select().fromTo(1, 1, 0, 7, 1, 0)
//             let powercable2 = util.select().fromTo(7, 0, 1, 7, 1, 1)

//             let rocket1 = util.select().fromTo(2, 2, 2, 4, 2, 4)
//             let rocket21 = util.select().fromTo(2, 3, 3, 4, 3, 4)
//             let rocket22 = util.select().position(2, 4, 3)
//             let rocket23 = util.select().position(4, 4, 3)
//             let rocket3 = util.select().position(3, 3, 2)
//             let rocket4 = util.select().position(3, 4, 3)
//             let rocket51 = util.select().position(3, 4, 2)
//             let rocket52 = util.select().position(3, 4, 4)
//             let rocket53 = util.select().fromTo(2, 5, 2, 4, 6, 4)

//             scene.world().showSection(pad, Facing.down)
//             scene.idle(10)
//             scene.overlay().showText(40)
//                 .text("Start by placing down a Launch Pad")
//                 .pointAt(util.vector().topOf(1, 1, 2))
//                 .colored(PonderPalette.WHITE)
//                 .placeNearTarget()
//             scene.idle(50)
//             scene.world().showSection(tower, Facing.east)
//             scene.idle(10)
//             scene.overlay().showText(40)
//                 .text("Attach a Launch Tower to the side of it")
//                 .pointAt(util.vector().centerOf(0, 1, 4))
//                 .colored(PonderPalette.WHITE)
//                 .placeNearTarget()
//             scene.idle(50)
//             scene.world().showSection(assembler, Facing.down)
//             scene.idle(10)
//             scene.overlay().showText(80)
//                 .text("Place the Rocket Assembler one block above the perimeter")
//                 .pointAt(util.vector().blockSurface(util.grid().at(3, 2, 0), Facing.west))
//                 .colored(PonderPalette.WHITE)
//                 .placeNearTarget()
//             scene.idle(70)
//             scene.overlay().showOutline(PonderPalette.GREEN, Facing.down, util.select().fromTo(1, 2, 1, 5, 6, 5), 80)
//             scene.idle(15)
//             scene.overlay().showText(70)
//                 .attachKeyFrame()
//                 .text("The Rocket can now be built within these Boundaries")
//                 .colored(PonderPalette.GREEN)
//                 .pointAt(util.vector().topOf(1, 1, 2))
//                 .placeNearTarget()
//             scene.idle(80)

//             scene.world().showSection(rocket1, Facing.down)
//             scene.idle(5)
//             scene.overlay().showText(20)
//                 .text("Add Thrusters,")
//                 .pointAt(util.vector().blockSurface(util.grid().at(2, 2, 3), Facing.west))
//                 .colored(PonderPalette.WHITE)
//                 .placeNearTarget()
//             scene.idle(20)
//             scene.world().showSection(rocket21, Facing.down)
//             scene.world().showSection(rocket22, Facing.down)
//             scene.world().showSection(rocket23, Facing.down)
//             scene.idle(5)
//             scene.overlay().showText(20)
//                 .text("Fuel Tanks,")
//                 .pointAt(util.vector().blockSurface(util.grid().at(2, 4, 3), Facing.west))
//                 .colored(PonderPalette.WHITE)
//                 .placeNearTarget()
//             scene.idle(20)
//             scene.world().showSection(rocket3, Facing.south)
//             scene.idle(5)
//             scene.overlay().showText(20)
//                 .text("the Guidance Computer,")
//                 .pointAt(util.vector().blockSurface(util.grid().at(3, 3, 2), Facing.west))
//                 .colored(PonderPalette.WHITE)
//                 .placeNearTarget()
//             scene.idle(20)
//             scene.world().showSection(rocket4, Facing.down)
//             scene.idle(5)
//             scene.overlay().showText(20)
//                 .text("a Rocket Seat,")
//                 .pointAt(util.vector().centerOf(3, 4, 3))
//                 .colored(PonderPalette.WHITE)
//                 .placeNearTarget()
//             scene.idle(20)
//             scene.world().showSection(rocket51, Facing.down)
//             scene.world().showSection(rocket52, Facing.down)
//             scene.world().showSection(rocket53, Facing.down)
//             scene.idle(5)
//             scene.overlay().showText(50)
//                 .text("and other blocks for Decoration.")
//                 .pointAt(util.vector().blockSurface(util.grid().at(3, 5, 2), Facing.west))
//                 .colored(PonderPalette.WHITE)
//                 .placeNearTarget()

//             scene.idle(60)
//             scene.world().showSection(fuelingstation, Facing.down)
//             scene.idle(10)
//             scene.overlay().showText(60)
//                 .attachKeyFrame()
//                 .text("Add a Fueling Station by the Assembler...")
//                 .pointAt(util.vector().blockSurface(util.grid().at(4, 2, 0), Facing.up))
//                 .colored(PonderPalette.WHITE)
//                 .placeNearTarget()
//             scene.idle(50)
//             scene.world().showSection(powercable, Facing.south)
//             scene.world().showSection(powercable2, Facing.south)
//             scene.idle(10)
//             scene.effects().indicateRedstone(util.grid().at(4, 2, 0))
//             scene.effects().indicateRedstone(util.grid().at(3, 2, 0))
//             scene.idle(10)
//             scene.overlay().showText(60)
//                 .text("...and supply both Machines with Energy")
//                 .pointAt(util.vector().centerOf(2, 1, 0))
//                 .colored(PonderPalette.WHITE)
//                 .placeNearTarget()
//             scene.idle(80)

//             scene.overlay().showText(60)
//                 .attachKeyFrame()
//                 .text("Open the Assembler UI and 'Scan' the Rocket")
//                 .pointAt(util.vector().blockSurface(util.grid().at(3, 2, 0), Facing.west))
//                 .colored(PonderPalette.WHITE)
//                 .placeNearTarget()
//             scene.idle(70)
//             scene.overlay().showText(60)
//                 .text("If the Rocket is considered valid, press 'Build'")
//                 .pointAt(util.vector().blockSurface(util.grid().at(3, 2, 0), Facing.west))
//                 .colored(PonderPalette.WHITE)
//                 .placeNearTarget()
//             scene.idle(70)
//             scene.overlay().showText(80)
//                 .text("(Don't worry about the brief Screen Freeze - the rocketry mod is in early Development.)")
//                 .pointAt(util.vector().blockSurface(util.grid().at(3, 2, 0), Facing.west))
//                 .colored(PonderPalette.GREEN)
//                 .placeNearTarget()
//             scene.idle(90)

//             scene.effects().indicateSuccess(util.grid().at(3, 2, 0))
//             scene.idle(5)
//             scene.overlay().showControls(new PonderInput(util.vector().centerOf(3, 4, 3), PonderPointing.RIGHT)
//                 .rightClick().whileSneaking(),
//                 50)
//             scene.idle(8)
//             scene.overlay().showText(70)
//                 .attachKeyFrame()
//                 .text("Once the Rocket is assembled, Sneak-Right-Click it to open the Interface")
//                 .pointAt(util.vector().centerOf(3, 4, 3))
//                 .colored(PonderPalette.WHITE)
//                 .placeNearTarget()
//             scene.idle(80)
//             scene.overlay().showControls(new PonderInput(util.vector().centerOf(4, 4, 3), PonderPointing.RIGHT)
//                 .withItem("advancedrocketry:planet_id_chip"),
//                 50)
//             scene.idle(8)
//             scene.overlay().showText(70)
//                 .text("Inside the UI you can insert the Planet Id Chip of the Desired Destination")
//                 .colored(PonderPalette.GREEN)
//                 .pointAt(util.vector().centerOf(3, 4, 3))
//                 .placeNearTarget()
//             scene.idle(80)

//             scene.overlay().showText(70)
//                 .attachKeyFrame()
//                 .text("In order to Fuel the rocket, you first need a Rocket Linking Device")
//                 .pointAt(util.vector().blockSurface(util.grid().at(4, 2, 0), Facing.up))
//                 .colored(PonderPalette.WHITE)
//                 .placeNearTarget()
//             scene.idle(80)
//             scene.overlay().showControls(new PonderInput(util.vector().topOf(4, 2, 0), PonderPointing.DOWN)
//                 .withItem("libvulpes:linker").rightClick().whileSneaking(),
//                 20)
//             scene.idle(15)
//             scene.overlay().showControls(new PonderInput(util.vector().centerOf(4, 4, 3), PonderPointing.RIGHT)
//                 .withItem("libvulpes:linker").rightClick().whileSneaking(),
//                 20)
//             scene.idle(8)
//             scene.effects().indicateSuccess(util.grid().at(4, 2, 0))
//             scene.idle(15)
//             scene.overlay().showText(60)
//                 .attachKeyFrame()
//                 .text("Sneak-Use it on the Fueling Station first, then on the Rocket")
//                 .pointAt(util.vector().blockSurface(util.grid().at(4, 2, 0), Facing.up))
//                 .colored(PonderPalette.WHITE)
//                 .placeNearTarget()
//             scene.idle(70)
//             scene.overlay().showControls(new PonderInput(util.vector().topOf(4, 2, 0), PonderPointing.DOWN)
//                 .withItem("thermal:refined_fuel_bucket"),
//                 20)
//             scene.idle(15)
//             scene.overlay().showText(70)
//                 .text("Any fuel added to the Station will now be trasferred to the Rocket")
//                 .pointAt(util.vector().blockSurface(util.grid().at(4, 2, 0), Facing.up))
//                 .colored(PonderPalette.WHITE)
//                 .placeNearTarget()
//             scene.idle(50)
//         })

// })