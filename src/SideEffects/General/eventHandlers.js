import { button } from "./elements.js";
import { universe, bodyFactory } from "../Bodies/bodies.js";
import { Timer } from "../timer.js";

/**
 * 
 * @param {Timer} timer 
 */
export function setEventHandlers(timer) {
    button("#reset").onclick = () => {
        universe.reset()
    }

    button("#addBody").onclick = () => {
        const name = prompt("Please enter a name for the new body:")
        const body = bodyFactory(name.toLowerCase(), name)
        universe.addBody(body)
    }

    button("#pause").onclick = () => {
        timer.pause()
    }

    button("#start").onclick = () => {
        timer.start()
    }

}
