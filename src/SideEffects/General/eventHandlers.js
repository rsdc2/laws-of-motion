import { button } from "./elements.js";
import { universe, bodyFactory } from "../Bodies/bodies.js";

export function setEventHandlers( ) {
    button("#reset").onclick = () => {
        universe.reset()
    }

    button("#addBody").onclick = () => {
        const name = prompt("Please enter a name for the new body:")
        const body = bodyFactory(name.toLowerCase(), name)
        universe.addBody(body)
    }
}
