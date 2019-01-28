import { getNewItem } from "./item.js"

var typesArray = [7]
typesArray[0] = getNewItem('Square',300)
typesArray[1] = getNewItem('Line',300)
typesArray[2] = getNewItem('Plus',300)
typesArray[3] = getNewItem('LeftL',300)
typesArray[4] = getNewItem('RightL',300)
typesArray[5] = getNewItem('LeftStep',300)
typesArray[6] = getNewItem('RightStep',300)


export function getNextItem() {
    return typesArray[Math.floor(Math.random() * 7)]
}