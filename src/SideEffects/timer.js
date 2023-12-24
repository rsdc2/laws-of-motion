let t = 0


const Timer = {
    start: () => setInterval( () => {
        t += 1

        const vel = Angle.toVec(5, 240)

        // const [x, y] = Vec.sub(Body.xy(sol1()), Body.xy(sol2()))
        const [x, y] = Vec.sub(Body.xy(sol1()), SOL2.xy)

        // const [x1, y1] = Body.xy(sol1())
        // const [x, y] = [x2 - x1, y1 - y2]
        const [r, θ] = Angle.toRθ([x, y])
        // const g = Motion.g(r, 1000000000000, [x, y])
        // const [rg, rθ] = Angle.toRθ(g)
        // console.log(x, y)
        // console.log(x1, x2)
        // console.log(r, θ)

        // console.log(g, rg)
        // console.log(g)
        // console.log(θ, rθ)
        if (x < -100) {
            const g = Vec.toUnit([x, y])
            Body.moveAtT(t, SOL1.xy, vel, g, sol1())
            console.log(g, x,y)
            
            const [x2, y2] = Body.xy(sol1())
        }
        // console.log(Body.xy(sol1()))



        // console.log(Angle.toRθ([x, y]))
        // console.log()

    }, 50)
}

