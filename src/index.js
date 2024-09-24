import { Timer } from "./SideEffects/timer.js"
import { setEventHandlers } from "./SideEffects/General/eventHandlers.js";

const timer = new Timer();
setEventHandlers(timer)
timer.start();