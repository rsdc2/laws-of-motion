let t = 0

const Timer = {
    start: () => setInterval( () => {
        t += 1

        const vec = Angle.toVec(15, 250)

        Body.moveAtT(t, SOL1.xy, vec, [0, 0.1], sol1())

        const [x, y] = Body.xy(sol1())
        console.log(Angle.toRθ([x, y]))

    }, 20)
}

