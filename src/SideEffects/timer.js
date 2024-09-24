import { Universe } from "./Bodies/universe.js"
import { button } from "./General/elements.js"


export class Timer {
    #timeout 
    #paused

    /**
     * 
     * @param {Universe} universe 
     */
    start(universe) {
        this.#timeout = setInterval( () => {
            universe.accelerateAllAndUpdate()
        }, 50)
        this.#paused = false
        button("#pause").hidden = false
        button("#start").hidden = true
    }

    get paused() {
        return this.#paused
    }

    pause() {
        clearInterval(this.#timeout)
        this.#paused = true
        button("#pause").hidden = true
        button("#start").hidden = false
    }

    /**
     * 
     * @param {Universe} universe 
     */
    togglePause(universe) {
        if (this.#paused) {
            this.start(universe)
        }
        else {
            this.pause()
        }
    }


}

