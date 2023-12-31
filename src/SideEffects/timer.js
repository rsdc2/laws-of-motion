

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
    // const [xSolSol2, ySolSol2] = Vector2D.subtract2(sol2.pos, sol.pos) // current relative position
    // const [rSolSol2, θSolSol2] = Angle.toPolar([xSolSol2, ySolSol2])

    // const [xSol2Sol, ySol2Sol] = Vector2D.subtract2(sol.pos, sol2.pos) // current relative position
    // const [rSol2Sol, θSol2] = Angle.toPolar([xSol2Sol, ySol2Sol])

    // const [xJSol, yJSol] = Vector2D.subtract2(sol.pos, jupiter.pos) // current relative position
    // const [rJSol, θJSol] = Angle.toPolar([xJSol, yJSol])

    // const [xJSol2, yJSol2] = Vector2D.subtract2(sol2.pos, jupiter.pos) // current relative position
    // const [rJSol2, θJSol2] = Angle.toPolar([xJSol2, yJSol2])


    // const gSolFromSol2 = Motion.g(rSol2Sol, sol2.mass, Vector2D.toUnit([xSolSol2, ySolSol2]))
    const gSolFromSol2 = sol.gFrom(sol2)
    // const gSol2FromSol = Motion.g(rSolSol2, sol.mass, Vector2D.toUnit([xSol2Sol, ySol2Sol]))
    const gSol2FromSol = sol2.gFrom(sol)
    const gJFromSol = jupiter.gFrom(sol)
    // const gJFromSol = Motion.g(rJSol, sol.mass, Vector2D.toUnit([xJSol, yJSol]))
    const gJFromSol2 = jupiter.gFrom(sol2)
    // const gJFromSol2 = Motion.g(rJSol2, sol2.mass, Vector2D.toUnit([xJSol2, yJSol2]))

    const gJ = Vector2D.add(gJFromSol, gJFromSol2)

    sol.accelerate(gSolFromSol2)
    sol2.accelerate(gSol2FromSol)
    jupiter.accelerate(gJ)
    // console.log(rJSol)
}

const Timer = {
    start: () => setInterval( () => {
        // sunAndPlanets()
        twoSuns()
    }, 5)
}

