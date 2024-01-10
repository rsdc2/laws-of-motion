class Distance {

    #value // value in millions of km

    /**
     * 
     * @param {number} value millions of km
     */
    constructor(value) {
        this.#value = value
    }


    /**
     * TODO get source for ratio
     * @param {number} au Astronomical Units
     */
    static fromAU(au) {
        const metres = au * 1.495978707e11
        return Distance.fromMetres(metres)
    }

    /**
     * 
     * @param {number} metres 
     * @returns 
     */
    static fromMetres(metres) {
        return new Distance(metres / 1e6)
    }

    get metres() {
        return this.#value * 1e6
    }

    /**
     * Millions of km
     */
    get value() {
        return this.#value
    }


}