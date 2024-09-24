import { button } from "./elements.js";
import { bodyFactory } from "../Bodies/bodies.js";
import { Universe } from "../Bodies/universe.js";
import { createPlanets } from "../Bodies/bodies.js";
import { svg } from "./elements.js";
/**
 * 
 * @param {Universe} universe
 */
export function setEventHandlers(universe) {
    button("#reset").onclick = () => {
        universe.clear()
        universe = new Universe(svg("#space"), createPlanets()) 
        universe.startTimer()
    }

    button("#addBody").onclick = () => {
        const name = prompt("Please enter a name for the new body:")

        if (name != null) {
            const body = bodyFactory(name.toLowerCase(), name)
            universe.addBody(body)    
        }
    }

    button("#pause").onclick = () => {
        universe.pauseTimer()
    }

    button("#start").onclick = () => {
        if (universe.modifying) {
            universe.reset()
            return
        }
        if (universe.paused) {
            universe.startTimer()
        }
    }

    button("#modify").onclick = () => {
        universe.toggleModifying()
    }

}
