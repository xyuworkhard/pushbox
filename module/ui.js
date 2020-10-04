import * as map from "./map.js"
const divContain = document.getElementById("game");
const peaceWidth = 45;
const peaceHeight = 45;
const mapContent = map.content;

function setDivContain() {
    divContain.style.height = peaceHeight * map.rowNumber + 'px';
    divContain.style.width = peaceWidth * map.colNumber + 'px';
}

function isRightPosition(row, col) {
    return map.correct.find(item => item.row == row && item.col == col) !== undefined
}

function setMapElement() {
    // 清空容器
    divContain.innerHTML = '';
    //渲染地图
    mapContent.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) => {
            const curValue = mapContent[rowIndex][colIndex];
            const correct = isRightPosition(rowIndex, colIndex);
            const div = document.createElement('div');
            div.className = "item";
            div.style.left = colIndex * peaceWidth + 'px';
            div.style.top = rowIndex * peaceHeight + 'px';
            if (curValue == map.PLAYER) {
                div.classList.add("player")
            } else if (curValue == map.WALL) {
                div.classList.add("wall")
            } else if (curValue == map.BOX) {
                if (correct) {
                    div.classList.add("correct-box")
                } else {
                    div.classList.add("box")
                }
            } else {
                if (correct) {
                    div.classList.add("correct")
                } else {
                    return
                }
            }
            divContain.appendChild(div);

        })
    })
}

export function showMap() {
    setDivContain();
    setMapElement();
}