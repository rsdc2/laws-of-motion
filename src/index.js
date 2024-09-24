
import { setEventHandlers } from "./SideEffects/General/eventHandlers.js";
import { Universe } from "./SideEffects/Bodies/universe.js";
import { createPlanets } from "./SideEffects/Bodies/bodies.js";

import { svg } from "./SideEffects/General/elements.js";

let universe = new Universe(
    svg("#space"), 
    createPlanets()
)
setEventHandlers(universe)
universe.startTimer()