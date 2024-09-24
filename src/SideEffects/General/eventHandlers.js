import { button } from "./elements.js";
import { bodyFactory } from "../Bodies/bodies.js";
import { Universe } from "../Bodies/universe.js";
/**
 * 
 * @param {Universe} universe
 */
export function setEventHandlers(universe) {
    button("#reset").onclick = () => {
        universe.modifyingToFalse()
        universe.pauseTimer()
        universe.reset()
        universe.startTimer()
    }

    button("#addBody").onclick = () => {
        const name = prompt("Please enter a name for the new body:")
        const body = bodyFactory(name.toLowerCase(), name)
        universe.addBody(body)
    }

    button("#pause").onclick = () => {
        universe.pauseTimer()
    }

    button("#start").onclick = () => {
        if (universe.paused) {
            universe.startTimer()
        }
    }

    button("#modify").onclick = () => {
        universe.toggleModifying()
    }

}
