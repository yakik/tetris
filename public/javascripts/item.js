
const itemsConfiguration = {
    Square: {
        numberOfRotations: 1,
        key: 1,
        rotations: [[{ col: 0, row: 0 },
        { col: 1, row: 0 },
        { col: 0, row: 1 },
        { col: 1, row: 1 }]]
    }
    , Line: {
        numberOfRotations: 2,
        key: 2,
        rotations: [[{ col: 0, row: 0 },
        { col: 1, row: 0 },
        { col: 2, row: 0 },
        { col: 3, row: 0 }],
        [{ col: 1, row: 0 },
        { col: 1, row: 1 },
        { col: 1, row: 2 },
        { col: 1, row: 3 }]]
    },
    Plus: {
        numberOfRotations: 4,
        key: 3,
        rotations: [
            [{ col: 0, row: 1 },
            { col: 1, row: 0 },
            { col: 1, row: 1 },
            { col: 2, row: 1 }],
            [{ col: 1, row: 0 },
            { col: 1, row: 1 },
            { col: 1, row: 2 },
            { col: 2, row: 1 }], [{ col: 0, row: 1 },
            { col: 1, row: 2 },
            { col: 1, row: 1 },
            { col: 2, row: 1 }],
            [{ col: 1, row: 0 },
            { col: 1, row: 1 },
            { col: 1, row: 2 },
            { col: 0, row: 1 }],

        ]
    }
    , LeftL: {
        numberOfRotations: 4,
        key: 4,
        rotations: [[{ col: 0, row: 0 },
        { col: 0, row: 1 },
        { col: 1, row: 1 },
        { col: 2, row: 1 }],
        [{ col: 1, row: 0 },
        { col: 1, row: 1 },
        { col: 1, row: 2 },
        { col: 2, row: 0 }],
        [{ col: 0, row: 1 },
        { col: 1, row: 1 },
        { col: 2, row: 1 },
        { col: 2, row: 2 }],
        [{ col: 1, row: 0 },
        { col: 1, row: 1 },
        { col: 1, row: 2 },
        { col: 0, row: 2 }]]
    }
    , RightL: {
        numberOfRotations: 4,
        key: 5,
        rotations:  [[{ col: 2, row: 0 },
            { col: 0, row: 1 },
            { col: 1, row: 1 },
            { col: 2, row: 1 }],
            [{ col: 1, row: 0 },
            { col: 1, row: 1 },
            { col: 1, row: 2 },
            { col: 2, row: 2 }],
            [{ col: 0, row: 1 },
            { col: 1, row: 1 },
            { col: 2, row: 1 },
            { col: 0, row: 2 }],
            [{ col: 1, row: 0 },
            { col: 1, row: 1 },
            { col: 1, row: 2 },
            { col: 0, row: 0 }]]
    }
    , LeftStep: {
        numberOfRotations: 2,
        key: 6,
        rotations: [[{ col: 0, row: 0 },
        { col: 1, row: 0 },
        { col: 1, row: 1 },
        { col: 2, row: 1 }],
        [{ col: 2, row: 0 },
        { col: 2, row: 1 },
        { col: 1, row: 1 },
        { col: 1, row: 2 }]]
    }
    , RightStep: {
        numberOfRotations: 2,
        key: 7,
        rotations: [[{ col: 0, row: 1 },
        { col: 1, row: 1 },
        { col: 1, row: 0 },
        { col: 2, row: 0 }],
        [{ col: 1, row: 0 },
        { col: 1, row: 1 },
        { col: 2, row: 1 },
        { col: 2, row: 2 }]]
    }

}
export function getItemCWRotated(sourceItem) {
    var item = getDuplicateItem(sourceItem)
    item.rotation = (item.rotation + 1 + itemsConfiguration[item.type].numberOfRotations) % itemsConfiguration[item.type].numberOfRotations
    item.coordinates = itemsConfiguration[item.type].rotations[item.rotation]
    return item
}

export function getItemCCWRotated(sourceItem) {
    var item = getDuplicateItem(sourceItem)
    item.rotation = (item.rotation - 1 + itemsConfiguration[item.type].numberOfRotations) % itemsConfiguration[item.type].numberOfRotations
    item.coordinates = itemsConfiguration[item.type].rotations[item.rotation]
    return item
}

export function getNewItem(itemType, currentInterval) {
    return {
        coordinates: itemsConfiguration[itemType].rotations[0],
        key: itemsConfiguration[itemType].key,
        type: itemType,
        rotation: 0,
        currentInterval: currentInterval
    }
}

function getDuplicateItem(item) {
    return {
        coordinates: itemsConfiguration[item.type].rotations[item.rotation],
        key: itemsConfiguration[item.type].key,
        type: item.type,
        rotation: item.rotation,
        currentInterval: item.currentInterval
    }
}

export function getCoordinatesWithOffset(item, offset) {
    var coordinates = []
    item.coordinates.forEach(coordinate => {
        coordinates.push({
            col: offset.col + coordinate.col,
            row: offset.row + coordinate.row,
        })
    });
    return coordinates
}
