import { addClasses } from "../General/elementAttributes.js"
import { CelestialBody } from "./celestialBody.js"


export class Planet extends CelestialBody {
    /**
     * 
     * @param {SVGCircleElement} elem 
     * @return {SVGCircleElement}
     */
    addBodyClass (elem) {
        addClasses(elem)("planet")
        return elem
    }
}