import { sun, earth, moon, universe, bodyFactory } from "./Bodies/bodies.js"


export const multibody = () => {

    universe.bodies.forEach( body => {
        body.accelerateFrom(universe.bodiesExcept(body))
    })


    // sun.accelerateFrom([earth, moon])
    // earth.accelerateFrom([sun, moon])
    // moon.accelerateFrom([earth, sun])

    universe.update()
}


export const Timer = {
    start: () => setInterval( () => {
        multibody()
    }, 50)
}

