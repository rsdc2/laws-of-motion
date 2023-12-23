let t = 0

const Timer = {
    start: () => setInterval( () => {
        t += 1

        Body.moveAtT(t, [SOL.x, SOL.y], [5, -30], [0, 0.5], sol())

    }, 50)
}

