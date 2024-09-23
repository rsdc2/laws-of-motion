import { Universe } from "./universe.js"
import { Star } from "./star.js"
import { Planet } from "./planet.js"
import { Moon } from "./moon.js"
import { svg } from "../General/elements.js"
import { Dim } from "../../Pure/dim.js"
import { CENTRE, EARTHPOS, MOONPOS } from "../config.js"
import { EARTHMASS, SUNMASS, MOONMASS } from "../../Pure/constants.js"

// const sol = new Star({
//     id: "sol",
//     pos: [3000, 3000],
//     bodyRadius: 10,
//     mass: 1.989e13,
//     velPolar: [0.3, 270]
// })

// const sol2 = new Star({
//     id: "sol2",
//     pos: Vector2D.addVec([2000, 0], sol.initialPos),
//     bodyRadius: 50,
//     mass: 1.989e13,
//     velPolar: [0.3, 90]
// })



export const sun = new Star({
    id: "sol",
    pos: CENTRE,
    bodyRadius: 50,
    mass: SUNMASS,
    velPolar: [Dim.from(0), 270]
})


export const earth = new Planet({
    id: "earth",
    pos: EARTHPOS,
    bodyRadius: 10,
    mass: EARTHMASS,
    velPolar: [Dim.fromKm(30.29), 90]
})

/**
 * https://en.wikipedia.org/wiki/Moon
 */

export const moon = new Moon({
    id: "moon",
    pos: MOONPOS,
    bodyRadius: 10,
    mass: MOONMASS,
    velPolar: [Dim.fromKm(30), 90]
})

// const jupiter = new Planet({
//     id: "jupiter",
//     pos: Vector2D.addVec([1000, 0], sol.initialPos),
//     bodyRadius: 20,
//     mass: 1.898e27,
//     velPolar: [1, 90]
// })

// const pluto = new Planet({
//     id: "pluto",
//     pos: Vector2D.addVec([2000, 0], sol.initialPos),
//     bodyRadius: 10,
//     mass: 50,
//     velPolar: [0.7, 90]
// })

// const moon1 = new Moon({
//     id: "moon1",
//     pos: Vector2D.addVec([100, 0], jupiter.initialPos),
//     bodyRadius: 10,
//     mass: 0.1,
//     velPolar: [1.4, 90]
// })

// const moon2 = new Moon({
//     id: "moon2",
//     pos: Vector2D.addVec([100, 0], sol2.initialPos),
//     bodyRadius: 10,
//     mass: 0.1,
//     velPolar: [1.5, 90]
// })


export const universe = new Universe(
    svg("#space"), 
    [sun, earth, moon]
)

// const universe = new Universe(
//     svg("#space"),
//     [sol, sol2, jupiter, moon1, moon2]
// )
