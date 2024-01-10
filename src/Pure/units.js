class Distance {

    #value // value in millions of km

    /**
     * 
     * @param {number} value millions of km 
     */
    constructor(value) {
        this.#value = value
    }

    get au() {
        return this.#value / 1.495978707e2
    }

    /**
     * TODO get source for ratio
     * @param {number} au Astronomical Units
     */
    static fromAU(au) {
        const value = au * 1.495978707e2
        return new Distance(value)
    }

    /**
     * 
     * @param {number} km 
     */
    static fromKm(km) {
        return new Distance(km / 1e6)
    }

    /**
     * 
     * @param {number} metres 
     * @returns 
     */
    static fromMetres(metres) {
        return new Distance(metres / 1e9)
    }

    get km() {
        return this.#value * 1e6
    }

    get metres() {
        return this.#value * 1e9
    }

    /**
     * Millions of km
     */
    get value() {
        return this.#value
    }


}