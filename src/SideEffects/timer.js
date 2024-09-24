import { universe } from "./Bodies/bodies.js"


export class Timer {
    #timeout 

    start() {
        this.#timeout = setInterval( () => {
            universe.accelerateAllAndUpdate()
        }, 50)
    }

    pause() {
        clearInterval(this.#timeout)
    }

}

