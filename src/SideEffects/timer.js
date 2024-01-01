

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

const twoSuns = () => {
    // TODO: Change r values to centre of mass, cf. https://en.wikipedia.org/wiki/Gravitational_acceleration

    sol.accelerateFrom([sol2, jupiter])
    sol2.accelerateFrom([sol, jupiter])
    jupiter.accelerateFrom([sol, sol2])
}

const Timer = {
    start: () => setInterval( () => {
        // sunAndPlanets()
        twoSuns()
    }, 5)
}

