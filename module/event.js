import {
    palyerMove,
    isWin
} from './play.js'
import {
    showMap
} from './ui.js'
showMap()
let isover = false
window.onkeydown = function (e) {
    let result = false
    if (isover) {
        return
    }
    if (e.key == "ArrowUp") {
        result = palyerMove("up")
    } else if (e.key == "ArrowDown") {
        result = palyerMove("down")
    } else if (e.key == "ArrowLeft") {
        result = palyerMove("left")
    } else if (e.key == "ArrowRight") {
        result = palyerMove("right")
    }
    if (result) {
        showMap()
        if (isWin()) {
            console.log("gameOver")
            isover = true
        }
    }

}