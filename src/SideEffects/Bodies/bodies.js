

// const sol = new Star({
//     id: "sol",
//     pos: [3000, 3000],
//     bodyRadius: 10,
//     mass: 1.989e13,
//     velPolar: [0.3, 270]
// })

// const sol2 = new Star({
//     id: "sol2",
//     pos: Vector2D.addVec([2000, 0], sol.initialPos),
//     bodyRadius: 50,
//     mass: 1.989e13,
//     velPolar: [0.3, 90]
// })

const centre = Vector.fromMKm([300, 300])
const earthPos = centre.addM([147.098450e9, 0])
const moonPos = earthPos.addM([362600000, 0])
const vel = Dim.fromKm(24)
// const vel = Dim.fromKm(30)
// const mass = 1.989e28 * 1e9
const mass = 1.989e30
// const mass = 0.01
// const mass = 100

const sun = new Star({
    id: "sol",
    pos: centre,
    bodyRadius: 50,
    mass: 1.9885e30,
    velPolar: [Dim.from(0), 270]
})


const earth = new Planet({
    id: "earth",
    pos: earthPos,
    bodyRadius: 10,
    mass: 5.972168e24,
    velPolar: [Dim.fromKm(30.29), 90]
})

/**
 * https://en.wikipedia.org/wiki/Moon
 */

const moon = new Moon({
    id: "moon",
    pos: moonPos,
    bodyRadius: 10,
    mass: 7.342e22,
    velPolar: [Dim.fromKm(30), 90]
})

// const jupiter = new Planet({
//     id: "jupiter",
//     pos: Vector2D.addVec([1000, 0], sol.initialPos),
//     bodyRadius: 20,
//     mass: 1.898e27,
//     velPolar: [1, 90]
// })

// const pluto = new Planet({
//     id: "pluto",
//     pos: Vector2D.addVec([2000, 0], sol.initialPos),
//     bodyRadius: 10,
//     mass: 50,
//     velPolar: [0.7, 90]
// })

// const moon1 = new Moon({
//     id: "moon1",
//     pos: Vector2D.addVec([100, 0], jupiter.initialPos),
//     bodyRadius: 10,
//     mass: 0.1,
//     velPolar: [1.4, 90]
// })

// const moon2 = new Moon({
//     id: "moon2",
//     pos: Vector2D.addVec([100, 0], sol2.initialPos),
//     bodyRadius: 10,
//     mass: 0.1,
//     velPolar: [1.5, 90]
// })


const universe = new Universe(
    svg("#space"), 
    [sun, earth, moon]
)

// const universe = new Universe(
//     svg("#space"),
//     [sol, sol2, jupiter, moon1, moon2]
// )
