let t = 0

const Timer = {
    start: () => setInterval( () => {
        t += 1

        // Body.move([10, 3], sol())
        Body.moveAtT(t, [10, 3], [SOL.x, SOL.y], sol())

    }, 50)
}

