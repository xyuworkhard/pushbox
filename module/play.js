import {
    content,
    PLAYER,
    SPACE,
    correct,
    WALL,
    BOX
} from "./map.js"



function getPlayerInfo() {
    let playerInfo;
    content.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) => {
            if (content[rowIndex][colIndex] == PLAYER) {
                playerInfo = {
                    row: rowIndex,
                    col: colIndex
                }
            }
        })
    })
    return playerInfo
}

function getBrotherInfo(row, col, direction) {
    if (direction == "left") {
        return {
            row,
            col: col - 1,
            value: content[row][col - 1]
        }
    } else if (direction == "right") {
        return {
            row,
            col: col + 1,
            value: content[row][col + 1]
        }
    } else if (direction == "up") {
        return {
            row: row - 1,
            col,
            value: content[row - 1][col]
        }
    } else if (direction == "down") {
        return {
            row: row + 1,
            col,
            value: content[row + 1][col]
        }
    }

}

function exchangePosition(point1, point2) {
    let temp = content[point1.row][point1.col]
    content[point1.row][point1.col] = content[point2.row][point2.col]
    content[point2.row][point2.col] = temp
}

export function isWin() {
    for (let i = 0; i < correct.length; i++) {
        const point = correct[i]
        if (content[point.row][point.col] != BOX) {
            return false
        }
    }
    return true
}
export function palyerMove(direction) {
    const palyPosition = getPlayerInfo();
    const {
        row,
        col
    } = palyPosition;
    const elementInfo = getBrotherInfo(row, col, direction);
    if (elementInfo.value == WALL) {
        console.log("不可以移动")
        return false
    }
    if (elementInfo.value == SPACE) {
        exchangePosition(palyPosition, elementInfo)
        return true
    } else {
        const elementNextInfo = getBrotherInfo(elementInfo.row, elementInfo.col, direction);
        if (elementNextInfo.value == SPACE) {
            exchangePosition(elementInfo, elementNextInfo)
            exchangePosition(palyPosition, elementInfo)
            return true
        } else {
            return false
        }

    }
}