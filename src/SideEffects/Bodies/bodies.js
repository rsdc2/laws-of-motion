
const space = svg("#space")

/** @type {BodyT} */
const SOL = {
    xy: [3000, 3000],
    mass: 1000,
    velPolar: [0, 0]
}

/** @type {BodyT} */
const JUPITER = {
    xy: Vector2D.add([200, 0], SOL.xy),
    mass: 1,
    velPolar: [2.3, 90]
}

/** @type {BodyT} */
const PLUTO = {
    xy: Vector2D.add([500, 0], SOL.xy),
    mass: 1,
    velPolar: [0.7, 90]
}

const solInit = Body.new(
    50, 
    SOL.xy, 
    "sol"
)

const jupiterInit = Body.new(
    10, 
    JUPITER.xy, 
    "jupiter"
)

const plutoInit = Body.new(
    10, 
    PLUTO.xy, 
    "pluto"
)

const sol = () => circle("#sol")
const pluto = () => circle("#pluto")
const jupiter = () => circle("#jupiter")

const appendBodies = () => {
    space.appendChild(plutoInit)  
    space.appendChild(solInit)  
    space.appendChild(jupiterInit)  
}