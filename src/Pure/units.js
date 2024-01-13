class Dim {

    #value // value in millions of km

    /**
     * 
     * @param {number} value millions of km 
     */
    constructor(value) {
        this.#value = value
    }

    /**
     * 
     * @param {Dim} other 
     */
    add(other) {
        return new Dim(this.value + other.value)
    }

    get au() {
        return this.#value / 1.495978707e2
    }

    /**
     * 
     * @param {number} scalar 
     */
    div(scalar) {
        return new Dim(this.value / scalar)
    }

    /**
     * TODO get source for ratio
     * @param {number} au Astronomical Units
     */
    static fromAU(au) {
        const value = au * 1.495978707e2
        return new Dim(value)
    }

    /**
     * 
     * @param {number} km 
     */
    static fromKm(km) {
        return new Dim(km / 1e6)
    }

    /**
     * 
     * @param {number} metres 
     * @returns 
     */
    static fromMetres(metres) {
        return new Dim(metres / 1e9)
    }

    /**
     * 
     * @param {number} mkm 
     */
    static fromMKm(mkm) {
        return new Dim(mkm)
    }

    /**
     * 
     * @param {number} pixels 
     */
    static fromPixels(pixels) {
        return new Dim(pixels / 10)
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
    get mkm() {
        return this.#value
    }

    /**
     * 
     * @param {number} scalar 
     */
    mult(scalar) {
        return new Dim(this.value * scalar)
    }

    get pixels() {
        return this.#value * 10
    }

    /**
     * 
     * @param {number} exp exponent 
     */
    pow(exp) {
        return new Dim(this.value ** exp)

    }

    /**
     * 
     * @param {Dim} other 
     */
    subtract(other) {
        return new Dim(this.value - other.value)
    }

    /**
     * Millions of km
     */
    get value() {
        return this.#value
    }
}