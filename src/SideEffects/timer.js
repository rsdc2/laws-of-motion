let t = 0


const Timer = {
    start: () => setInterval( () => {
        t += 1
        if (t == 1) {
            const velInitSol1 = Angle.toVec(1.7, 90) // initial velocity 
            Body.setPos(pluto(), PLUTO.xy)
            Body.setV(pluto(), velInitSol1)

            const velInitJupiter = Angle.toVec(2.5, 90) // initial velocity 
            Body.setPos(jupiter(), JUPITER.xy)
            Body.setV(jupiter(), velInitJupiter)
        }

        const [x1, y1] = Vector2D.subtract(SOL.xy, Body.xy(pluto())) // current relative position
        const [r1, θ1] = Angle.toPolar([x1, y1])

        const [x2, y2] = Vector2D.subtract(SOL.xy, Body.xy(jupiter())) // current relative position
        const [r2, θ2] = Angle.toPolar([x2, y2])

        const g1 = Motion.g(r1, 1000, Vector2D.toUnit([x1, y1]))
        const g2 = Motion.g(r2, 1000, Vector2D.toUnit([x2, y2]))
        Body.accelerate(g1, pluto())
        Body.accelerate(g2, jupiter())

    }, 10)
}

