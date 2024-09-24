/**
 * Module where celestial bodies are created
 * 
 */

import { Star } from "./star.js"
import { Planet } from "./planet.js"
import { Moon } from "./moon.js"

import { Dim } from "../../Pure/dim.js"
import { InitialBodyParams, PolarVec } from "../../Pure/typedefs.js"
import { CelestialBody } from "./celestialBody.js"
import { 
    CENTRE, 
    MERCURYPOS,
    VENUSPOS,
    EARTHPOS, 
    MARSPOS,
    MOONPOS, 
    MERCURYSTARTVEL,
    VENUSSTARTVEL,
    EARTHSTARTVEL, 
    MARSSTARTVEL,
    MOONSTARTVEL 
} from "../config.js"
import { MERCURYMASS, VENUSMASS, EARTHMASS, MARSMASS, SUNMASS, MOONMASS } from "../../Pure/constants.js"


/**
 * Create the planets and return as an array
 * @returns { Array<Planet> }
 */
export function createPlanets() {

    const sun = new Star(new InitialBodyParams({
        id: "sol",
        name: "Sol",
        pos: CENTRE,
        bodyRadius: 50,
        mass: SUNMASS,
        velPolar: [Dim.from(0), 270]
    }))
    
    
    const earth = new Planet(new InitialBodyParams({
        id: "earth",
        name: "Earth",
        pos: EARTHPOS,
        bodyRadius: 10,
        mass: EARTHMASS,
        velPolar: EARTHSTARTVEL
    }))
    
    
    const mercury = new Planet(new InitialBodyParams({
        id: "mercury",
        name: "Mercury",
        pos: MERCURYPOS,
        bodyRadius: 10,
        mass: MERCURYMASS,
        velPolar: MERCURYSTARTVEL
    }))
    
    
    const venus = new Planet(new InitialBodyParams({
        id: "venus",
        name: "Venus",
        pos: VENUSPOS,
        bodyRadius: 10,
        mass: VENUSMASS,
        velPolar: VENUSSTARTVEL
    }))
    
    
    const mars = new Planet(new InitialBodyParams({
        id: "mars",
        name: "Mars",
        pos: MARSPOS,
        bodyRadius: 10,
        mass: MARSMASS,
        velPolar: MARSSTARTVEL
    }))
    
    
    // export const moon = new Moon(new InitialBodyParams({
    //     id: "moon",
    //     name: "Moon",
    //     pos: MOONPOS,
    //     bodyRadius: 10,
    //     mass: MOONMASS,
    //     velPolar: MOONSTARTVEL
    // }))

    return [sun, mercury, venus, earth, mars]
    
}



/**
 * Create a new celestial body with preset parameters
 * @param {string} id 
 * @param {string} name 
 */
export function bodyFactory(id, name) {
    return new CelestialBody(new InitialBodyParams(
        {
            id: id,
            name: name,
            pos: CENTRE.addMKm([10, 10]),
            bodyRadius: 10,
            mass: EARTHMASS,
            velPolar: PolarVec([Dim.fromKm(60), 90])
        }
    ))
}



