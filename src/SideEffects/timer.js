let t = 0

const Timer = {
    start: () => setInterval( () => {
        t += 1

        const vec = Angle.toVec(30, 250)

        Body.moveAtT(t, [SOL.x, SOL.y], vec, [0, 0.5], sol())

    }, 50)
}

