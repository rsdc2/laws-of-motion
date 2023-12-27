

const sunAndPlanets = () => {
    const [x1, y1] = Vector2D.subtract(SOL.pos, Body.pos(pluto())) // current relative position
    const [r1, θ1] = Angle.toPolar([x1, y1])

    const [x2, y2] = Vector2D.subtract(SOL.pos, Body.pos(jupiter())) // current relative position
    const [r2, θ2] = Angle.toPolar([x2, y2])

    const g1 = Motion.g(r1, SOL.mass, Vector2D.toUnit([x1, y1]))
    const g2 = Motion.g(r2, SOL.mass, Vector2D.toUnit([x2, y2]))
    Body.accelerate(g1, pluto())
    Body.accelerate(g2, jupiter())

}

const twoSuns = () => {
    
}

const Timer = {
    start: () => setInterval( () => {
        sunAndPlanets()

    }, 10)
}

