
const space = new Space(svg("#space"))

const sol = new Star({
    id: "sol",
    pos: [3000, 3000],
    bodyRadius: 50,
    mass: 1000,
    velPolar: [0, 90]
})

const sol2 = new Star({
    id: "sol2",
    pos: Vector2D.add([2000, 0], sol.initialPos),
    bodyRadius: 10,
    mass: 500,
    velPolar: [0.7, 90]
})

const jupiter = new Planet({
    id: "jupiter",
    pos: Vector2D.add([1000, 0], sol.initialPos),
    bodyRadius: 20,
    mass: 25,
    velPolar: [1, 90]
})

const pluto = new Planet({
    id: "pluto",
    pos: Vector2D.add([2000, 0], sol.initialPos),
    bodyRadius: 10,
    mass: 50,
    velPolar: [0.7, 90]
})

const moon1 = new Moon({
    id: "moon1",
    pos: Vector2D.add([100, 0], jupiter.initialPos),
    bodyRadius: 10,
    mass: 0.1,
    velPolar: [1.4, 90]
})

const moon2 = new Moon({
    id: "moon2",
    pos: Vector2D.add([100, 0], sol2.initialPos),
    bodyRadius: 10,
    mass: 0.1,
    velPolar: [1.5, 90]
})

space.appendBodies([
    sol,
    sol2,
    jupiter 
    // moon1,
    // moon2
])