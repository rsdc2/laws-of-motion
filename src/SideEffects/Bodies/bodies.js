
const space = new Space(svg("#space"))

const sol = new CelestialBody({
    id: "sol",
    pos: [3000, 3000],
    bodyRadius: 50,
    mass: 1000,
    velPolar: [0, 90]
})

const sol2 = new CelestialBody({
    id: "sol2",
    pos: Vector2D.add([2000, 0], sol.initialPos),
    bodyRadius: 10,
    mass: 1,
    velPolar: [0.7, 90]
})

const jupiter = new CelestialBody({
    id: "jupiter",
    pos: Vector2D.add([1000, 0], sol.initialPos),
    bodyRadius: 10,
    mass: 1,
    velPolar: [1, 130]
})

const pluto = new CelestialBody({
    id: "pluto",
    pos: Vector2D.add([500, 0], sol.initialPos),
    bodyRadius: 10,
    mass: 1,
    velPolar: [0.7, 90]
})

space.appendBodies([
    sol,
    sol2,
    jupiter
])