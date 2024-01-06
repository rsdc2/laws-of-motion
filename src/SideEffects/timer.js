

// const sunAndPlanets = () => {
//     const [x1, y1] = Vector2D.subtract(SOL.pos, BodyT.pos(pluto())) // current relative position
//     const [r1, θ1] = Angle.toPolar([x1, y1])

//     const [x2, y2] = Vector2D.subtract(SOL.pos, BodyT.pos(jupiter())) // current relative position
//     const [r2, θ2] = Angle.toPolar([x2, y2])

//     const g1 = Motion.g(r1, SOL.mass, Vector2D.toUnit([x1, y1]))
//     const g2 = Motion.g(r2, SOL.mass, Vector2D.toUnit([x2, y2]))
//     BodyT.accelerate(g1, pluto())
//     BodyT.accelerate(g2, jupiter())

// } 

const twoBody = () => {
    sol.accelerateFrom([sol2])
    sol2.accelerateFrom([sol])
    universe.update()
    // const [r, _] = Angle.toPolar(Vector2D.add(sol.momentum, sol2.momentum))
    // cf. https://en.wikipedia.org/wiki/Two-body_problem
    // console.log(pair.momentumScalar)
    // console.log(binary.R)
    // console.log(Angle.toPolar(binary.vel))
    // console.log(binary.pPolar)
    // console.log(universe.pPolar)
    console.log(universe.pPolar)
}

const twoSuns = () => {
    sol.accelerateFrom([sol2, jupiter, moon1, moon2])
    sol2.accelerateFrom([sol, jupiter, moon1, moon2])
    jupiter.accelerateFrom([sol, sol2, moon1, moon2])
    moon1.accelerateFrom([sol, sol2, jupiter, moon2])
    moon2.accelerateFrom([sol, sol2, jupiter, moon1])
    universe.update()
    console.log(universe.pPolar)
    // console.log(sol.rTo(jupiter), sol.rTo(sol2))
}

const Timer = {
    start: () => setInterval( () => {
        // sunAndPlanets()
        twoSuns()
        // twoBody()
    }, 1)
}

