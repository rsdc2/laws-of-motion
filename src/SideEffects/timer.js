let t = 0


const Timer = {
    start: () => setInterval( () => {
        t += 1
        if (t == 1) {
            const velInit = Angle.toVec(3, 180) // initial velocity 
            Body.setPos(sol1(), SOL1.xy)
            Body.setV(sol1(), velInit)
            console.log("hello")
        }

        Body.accelerate([-1, 0], sol1())
        console.log(Body.xy(sol1()))
        

        // const [x, y] = Vector2D.subtract(Body.xy(sol1()), SOL2.xy) // current relative position

        // const [r, θ] = Angle.toPolar([x, y])
        
        // const g = Motion.g(r, 400, Vector2D.toUnit([x, y]))
        // console.log(g)

    }, 50)
}

