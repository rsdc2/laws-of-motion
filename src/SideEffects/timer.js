let t = 0
const accs = /** @type {Array.<Vec2D>} */ ([])

const Timer = {
    start: () => setInterval( () => {
        t += 1

        const velInit = Angle.toVec(1, 45) // initial velocity 

        const [x, y] = Vec.substract(Body.xy(sol1()), SOL2.xy) // current relative position

        const [r, θ] = Angle.toRθ([x, y])
        const g = Motion.g(r, 1, [x, y])

        accs.push(g)

        Body.moveAtTChangingAcc(t, SOL1.xy, velInit, accs, sol1())
        // Body.moveAtT(t, SOL1.xy, velInit, [0, 0], sol1())

    }, 1)
}

