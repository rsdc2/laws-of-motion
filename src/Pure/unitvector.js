import { sqrt } from "./imports.js"
import { Vector } from "./vector.js"


/**
 * Class for handling 2D unit vectors.
 * Contains a Vector which is scaled according 
 * to the unit needed
 * 
 */


export class UnitVector {

    // cf. https://en.wikipedia.org/wiki/Unit_vector
    // https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Engineering_Statics%3A_Open_and_Interactive_(Baker_and_Haynes)/02%3A_Forces_and_Other_Vectors/2.05%3A_Unit_Vectors
    // https://www.cuemath.com/calculus/unit-vector/
    
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