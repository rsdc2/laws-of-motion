
const space = svg("#space")

/** @type {BodyInst} */
const SOL = {
    id: "sol",
    pos: [3000, 3000],
    bodyRadius: 50,
    mass: 1000,
    velPolar: [0, 90]
}

/** @type {BodyInst} */
const SOL2 = {
    id: "sol2",
    pos: Vector2D.add([2000, 0], SOL.pos),
    bodyRadius: 10,
    mass: 1,
    velPolar: [0.7, 90]
}

/** @type {BodyInst} */
const JUPITER = {
    id: "jupiter",
    pos: Vector2D.add([1000, 0], SOL.pos),
    bodyRadius: 10,
    mass: 1,
    velPolar: [1, 130]
}
    
/** @type {BodyInst} */
const PLUTO = {
    id: "pluto",
    pos: Vector2D.add([500, 0], SOL.pos),
    bodyRadius: 10,
    mass: 1,
    velPolar: [0.7, 90]
}

const solInit = BodyT.new(SOL)
const sol2Init = BodyT.new(SOL2)
const jupiterInit = BodyT.new(JUPITER)
const plutoInit = BodyT.new(PLUTO)

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
    // BodyT.initPolar(pluto(), PLUTO)
    BodyT.startPolar(jupiter(), JUPITER)

    BodyT.startPolar(sol(), SOL)
    BodyT.startPolar(sol2(), SOL2)
}