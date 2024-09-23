import { sun, earth, moon, universe } from "./Bodies/bodies.js"


export const multibody = () => {

    sun.accelerateFrom([earth, moon])
    earth.accelerateFrom([sun, moon])
    moon.accelerateFrom([earth, sun])

    universe.update()
}


export const Timer = {
    start: () => setInterval( () => {
        multibody()
    }, 50)
}

