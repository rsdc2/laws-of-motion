
const space = svg("#space")

/** @type {BodyT} */
const SOL = {
    id: "sol",
    pos: [3000, 3000],
    bodyRadius: 50,
    mass: 1000,
    velPolar: [0, 90]
}

/** @type {BodyT} */
const SOL2 = {
    id: "sol2",
    pos: Vector2D.add([2000, 0], SOL.pos),
    bodyRadius: 10,
    mass: 1,
    velPolar: [0.7, 90]
}

/** @type {BodyT} */
const JUPITER = {
    id: "jupiter",
    pos: Vector2D.add([1000, 0], SOL.pos),
    bodyRadius: 10,
    mass: 1,
    velPolar: [1, 90]
}
    
/** @type {BodyT} */
const PLUTO = {
    id: "pluto",
    pos: Vector2D.add([500, 0], SOL.pos),
    bodyRadius: 10,
    mass: 1,
    velPolar: [0.7, 90]
}

const solInit = Body.new(SOL)
const sol2Init = Body.new(SOL2)
const jupiterInit = Body.new(JUPITER)
const plutoInit = Body.new(PLUTO)

const sol = () => circle("#sol")
const sol2 = () => circle("#sol2")
const pluto = () => circle("#pluto")
const jupiter = () => circle("#jupiter")


const appendBodies = () => {
    space.appendChild(solInit)  
    space.appendChild(sol2Init)  
    // space.appendChild(plutoInit)  
    space.appendChild(jupiterInit)  
}

const startBodies = () => {
    // Body.initPolar(pluto(), PLUTO)
    Body.startPolar(jupiter(), JUPITER)

    Body.startPolar(sol(), SOL)
    Body.startPolar(sol2(), SOL2)
}