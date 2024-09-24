
import { setEventHandlers } from "./SideEffects/General/eventHandlers.js";
import { Universe } from "./SideEffects/Bodies/universe.js";
import { 
    sun, 
    mercury, 
    venus, 
    earth, 
    mars 
} from "./SideEffects/Bodies/bodies.js";

import { svg } from "./SideEffects/General/elements.js";

const universe = new Universe(
    svg("#space"), 
    [sun, mercury, venus, earth, mars]
)
setEventHandlers(universe)
universe.startTimer()