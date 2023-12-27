
const space = svg("#space")

/** @type {BodyT} */
const SOL = {
    pos: [3000, 3000],
    mass: 1000,
    velPolar: [0, 0]
}

/** @type {BodyT} */
const SOL2 = {
    pos: [2000, 3000],
    mass: 1000,
    velPolar: [30, 90]
}

/** @type {BodyT} */
const JUPITER = {
    pos: Vector2D.add([200, 0], SOL.pos),
    mass: 1,
    velPolar: [2.3, 90]
}

/** @type {BodyT} */
const PLUTO = {
    pos: Vector2D.add([500, 0], SOL.pos),
    mass: 1,
    velPolar: [0.7, 90]
}

const solInit = Body.new(
    50, 
    SOL.pos, 
    "sol"
)

const sol2Init = Body.new(
    50, 
    SOL2.pos, 
    "sol2"
)

const jupiterInit = Body.new(
    10, 
    JUPITER.pos, 
    "jupiter"
)

const plutoInit = Body.new(
    10, 
    PLUTO.pos, 
    "pluto"
)

const sol = () => circle("#sol")
const sol2 = () => circle("#sol2")
const pluto = () => circle("#pluto")
const jupiter = () => circle("#jupiter")


const appendBodies = () => {
    space.appendChild(solInit)  
    space.appendChild(sol2Init)  
    space.appendChild(plutoInit)  
    space.appendChild(jupiterInit)  
}

const initBodies = () => {
    Body.initPolar(pluto(), PLUTO)
    Body.initPolar(jupiter(), JUPITER)

    Body.initPolar(sol(), SOL)
    // Body.initPolar(sol2(), SOL2)
}