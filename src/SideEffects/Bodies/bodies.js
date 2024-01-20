

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

const centre = Vector2D.fromMKm([300, 300])
const vel = Dim.fromKm(24)
// const vel = Dim.fromKm(30)
// const mass = 1.989e28 * 1e9
const mass = 1.989e30
// const mass = 0.01
// const mass = 100

const star1 = new Star({
    id: "sol",
    pos: centre,
    bodyRadius: 50,
    mass: 1.9885e30,
    velPolar: [Dim.from(0), 270]
})

const star2 = new Star({
    id: "sol2",
    pos: centre.addMKm([150, 0]),
    bodyRadius: 10,
    mass: 5.972e24,
    velPolar: [Dim.fromKm(400000), 90]
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
    [star1, star2]
)

// const universe = new Universe(
//     svg("#space"),
//     [sol, sol2, jupiter, moon1, moon2]
// )
