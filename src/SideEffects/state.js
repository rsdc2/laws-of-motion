import { hide, show } from "./General/elementAttributes.js"
import { inputAttrs } from "./frontend.js"
import { button } from "./General/elements.js"
import { Timer } from "./timer.js"


// export default class State {
//     #modifying
//     #timer

//     constructor() {
//         this.#timer = new Timer()
//         this.modifyingToFalse()
//     }

//     get paused() {
//         return this.#timer.paused
//     }

//     modifyingToFalse() {
//         this.#modifying = false
//         hide(...inputAttrs())
//         hide(button("#addBody"))

//         if (this.paused) {
//             this.#timer.start()
//         }
//     }

//     modifyingToTrue() {
//         this.#modifying = true
//         show(...inputAttrs())
//         show(button("#addBody"))
//         this.pauseTimer()
//     }

//     pauseTimer() {
//         this.#timer.pause()
//     }

//     startTimer() {

//         this.#timer.start()
//     }

//     toggleModifying() {
//         if (this.#modifying) {
//             this.modifyingToFalse()
//         }
//         else {
//             this.modifyingToTrue()
//         }
//     }
// }
