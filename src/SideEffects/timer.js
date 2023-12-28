

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
    // TODO: Change r values to centre of mass, cf. https://en.wikipedia.org/wiki/Gravitational_acceleration
    const [xSolSol2, ySolSol2] = Vector2D.subtract2(Body.pos(sol2()), Body.pos(sol())) // current relative position
    const [rSolSol2, θSolSol2] = Angle.toPolar([xSolSol2, ySolSol2])

    const [xSol2Sol, ySol2Sol] = Vector2D.subtract2(Body.pos(sol()), Body.pos(sol2())) // current relative position
    const [rSol2Sol, θSol2] = Angle.toPolar([xSol2Sol, ySol2Sol])

    const [xJSol, yJSol] = Vector2D.subtract2(Body.pos(sol()), Body.pos(jupiter())) // current relative position
    const [rJSol, θJSol] = Angle.toPolar([xJSol, yJSol])

    const [xJSol2, yJSol2] = Vector2D.subtract2(Body.pos(sol2()), Body.pos(jupiter())) // current relative position
    const [rJSol2, θJSol2] = Angle.toPolar([xJSol2, yJSol2])


    const gSolFromSol2 = Motion.g(rSol2Sol, SOL2.mass, Vector2D.toUnit([xSolSol2, ySolSol2]))
    const gSol2FromSol = Motion.g(rSolSol2, SOL.mass, Vector2D.toUnit([xSol2Sol, ySol2Sol]))
    const gJFromSol = Motion.g(rJSol, SOL.mass, Vector2D.toUnit([xJSol, yJSol]))
    const gJFromSol2 = Motion.g(rJSol2, SOL2.mass, Vector2D.toUnit([xJSol2, yJSol2]))

    const gJ = Vector2D.add(gJFromSol, gJFromSol2)

    Body.accelerate(gSolFromSol2, sol())
    Body.accelerate(gSol2FromSol, sol2())
    Body.accelerate(gJ, jupiter())
    console.log(rJSol)
}

const Timer = {
    start: () => setInterval( () => {
        // sunAndPlanets()
        twoSuns()
    }, 5)
}

