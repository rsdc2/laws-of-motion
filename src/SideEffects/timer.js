let t = 0

const Timer = {
    start: () => setInterval( () => {
        t += 1

        // Body.move([10, 3], sol())
        // Body.moveAtT(t, [SOL.x, SOL.y], [10, 3], sol())
        Body.moveAtT_(t, [SOL.x, SOL.y], [0, 0], [0, 0.5], sol())

    }, 50)
}

