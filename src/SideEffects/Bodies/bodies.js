

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

const centre = Vector2D.fromVec2D([
    Dim.fromMKm(300).pixels, 
    Dim.fromMKm(300).pixels
])

const mass = 1.989e28 * 1e9

const star1 = new Star({
    id: "sol",
    pos: centre,
    bodyRadius: 10,
    mass: mass,
    velPolar: [Dim.fromMKm(0.03).pixels, 270]
})

const star2 = new Star({
    id: "sol2",
    pos: centre.addVec([
        Dim.fromMKm(300).pixels, 
        0
    ]),
    bodyRadius: 50,
    mass: mass,
    velPolar: [Dim.fromMKm(0.03).pixels, 90]
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
