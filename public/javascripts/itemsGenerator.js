import { getNewItem } from "./item.js"

var typesArray = [6]
typesArray[0] = getNewItem('Square',300)
typesArray[1] = getNewItem('Line',300)
typesArray[2] = getNewItem('Plus',300)
typesArray[3] = getNewItem('LeftL',300)
typesArray[4] = getNewItem('RightL',300)
typesArray[5] = getNewItem('LeftStep',300)
typesArray[6] = getNewItem('RightStep',300)


export function getNextItem() {
    var item = typesArray[Math.floor(Math.random() * 7)]
    return item
}