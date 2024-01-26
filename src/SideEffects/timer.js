

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
    // console.log(star2.periodActual(star1) / (60 * 60 * 24))
    star1.accelerateFrom([star2])
    star2.accelerateFrom([star1])
    console.log(star2.vel.actual1.r.km)
    // console.log(star2.acc.actual2.r.m)
    // console.log(star2.vel.r.km, star2.vel.θ)
    // console.log(star2.accelerationFrom([star1]).r.m)
    universe.update()
    // const [r, _] = Angle.toPolar(Vector2D.add(sol.momentum, sol2.momentum))
    // cf. https://en.wikipedia.org/wiki/Two-body_problem
    // console.log(pair.momentumScalar)
    // console.log(binary.R)
    // console.log(Angle.toPolar(binary.vel))
    // console.log(binary.pPolar)
    // console.log(universe.pPolar)
    // console.log(star1.pos.vec, universe.R)
}

// const twoSuns = () => {
//     star1.accelerateFrom([star2, jupiter, moon1, moon2])
//     star2.accelerateFrom([star1, jupiter, moon1, moon2])
//     jupiter.accelerateFrom([star1, star2, moon1, moon2])
//     moon1.accelerateFrom([star1, star2, jupiter, moon2])
//     moon2.accelerateFrom([star1, star2, jupiter, moon1])
//     universe.update()
//     console.log(universe.p.r)
//     // console.log(sol.rTo(jupiter), sol.rTo(sol2))
// }

const Timer = {
    start: () => setInterval( () => {
        // sunAndPlanets()
        // twoSuns()
        twoBody()
    }, 100)
}

