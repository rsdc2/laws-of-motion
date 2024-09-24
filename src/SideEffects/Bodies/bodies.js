/**
 * Module where celestial bodies are created
 * 
 */

import { Universe } from "./universe.js"
import { Star } from "./star.js"
import { Planet } from "./planet.js"
import { Moon } from "./moon.js"
import { svg } from "../General/elements.js"
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


export const sun = new Star(new InitialBodyParams({
    id: "sol",
    name: "Sol",
    pos: CENTRE,
    bodyRadius: 50,
    mass: SUNMASS,
    velPolar: [Dim.from(0), 270]
}))


export const earth = new Planet(new InitialBodyParams({
    id: "earth",
    name: "Earth",
    pos: EARTHPOS,
    bodyRadius: 10,
    mass: EARTHMASS,
    velPolar: EARTHSTARTVEL
}))


export const mercury = new Planet(new InitialBodyParams({
    id: "mercury",
    name: "Mercury",
    pos: MERCURYPOS,
    bodyRadius: 10,
    mass: MERCURYMASS,
    velPolar: MERCURYSTARTVEL
}))


export const venus = new Planet(new InitialBodyParams({
    id: "venus",
    name: "Venus",
    pos: VENUSPOS,
    bodyRadius: 10,
    mass: VENUSMASS,
    velPolar: VENUSSTARTVEL
}))


export const mars = new Planet(new InitialBodyParams({
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



