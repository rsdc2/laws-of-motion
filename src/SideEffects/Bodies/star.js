import { addClasses } from "../General/elementAttributes.js"
import { CelestialBody } from "./celestialBody.js"


export class Star extends CelestialBody {
    /**
     * 
     * @param {SVGCircleElement} elem 
     * @return {SVGCircleElement}
     */
    addBodyClass (elem) {
        addClasses(elem)("star")
        return elem
    }
}