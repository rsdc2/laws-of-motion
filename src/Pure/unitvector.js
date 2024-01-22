
/**
 * Class for handling 2D vectors.
 * Underlying interface is Vec2D, which is
 * a 2D array.
 * Any method with the suffix 'Vec' is used 
 * for interacting directly with Vec2D;
 * otherwise methods interact with Vector2D
 * 
 */


class UnitVector {

    // cf. https://en.wikipedia.org/wiki/Unit_vector

    #vector
    /**
     * 
     * @param {Vector} vector
     */
    constructor(vector) {
        this.#vector = vector
    }

    get pix() {
        const r = sqrt(this.#x.pix + this.#y.pix)
        return Vector.fromPix([this.#x.pix / r, this.#y.pix / r])
    }

    get m() {
        const r = sqrt(this.#x.m ** 2 + this.#y.m ** 2)
        return Vector.fromM([this.#x.m / r, this.#y.m / r])
    }

    get #x() {
        return this.#vector.x
    }

    get #y() {
        return this.#vector.y
    }
 
    /**
     * The angle of the vector in degrees
     */
    get θ() {
        return this.#vector.θ
    }
}