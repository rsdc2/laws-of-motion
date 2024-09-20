import { CelestialBody } from "./celestialBody.js"
import { addClasses } from "../General/elementAttributes.js"

export class Moon extends CelestialBody {
    /**
     * 
     * @param {SVGCircleElement} elem 
     * @return {SVGCircleElement}
     */
    addBodyClass (elem) {
        addClasses(elem)("moon")
        return elem
    }
}