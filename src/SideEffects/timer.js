let t = 0
const accs = /** @type {Array.<Vec2D>} */ ([])

const Timer = {
    start: () => setInterval( () => {
        t += 1

        const velInit = Angle.toVec(3, 180) // initial velocity 
        // console.log(Angle.toPolar(velInit))
        accs.push([0, 0])
        Body.moveAtTChangingAcc(t, SOL1.xy, velInit, accs, sol1())

        const [x, y] = Vec.substract(Body.xy(sol1()), SOL2.xy) // current relative position

        const [r, θ] = Angle.toPolar([x, y])
        
        const g = Motion.g(r, 400, Vec.toUnit([x, y]))


        // accs.push(g)
        // console.log(g)

        // Body.moveAtT(t, SOL1.xy, velInit, [0, 0], sol1())

    }, 50)
}

