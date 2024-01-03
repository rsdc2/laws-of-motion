class Star extends CelestialBody {
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