import { addListeners } from "./SideEffects/General/eventListeners.js";
import { Timer } from "./SideEffects/timer.js"

addListeners();
Timer.start();