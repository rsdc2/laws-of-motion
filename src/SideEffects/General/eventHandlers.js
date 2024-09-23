import { button } from "./elements.js";
import { universe } from "../Bodies/bodies.js";

export function setEventHandlers( ) {
    button("#reset").onclick = () => {
        universe.reset()
    }
}
