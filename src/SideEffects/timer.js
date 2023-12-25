let t = 0
const accs = /** @type {Array.<Vec2D>} */ ([])
const acc = [0, 0]

const Timer = {
    start: () => setInterval( () => {
        t += 1

        const velInit = Angle.toVec(3, 180) // initial velocity 
        accs.push([0, 0])
        Body.moveAtTChangingAcc(t, SOL1.xy, velInit, accs, sol1())

        const [x, y] = Vec.subtract(Body.xy(sol1()), SOL2.xy) // current relative position

        const [r, θ] = Angle.toPolar([x, y])
        
        const g = Motion.g(r, 400, Vec.toUnit([x, y]))


        accs.push(g)
        console.log(g)

    }, 50)
}

