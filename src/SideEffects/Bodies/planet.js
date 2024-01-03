class Planet extends CelestialBody {
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