export function getNewItem(itemType, currentInterval) {
    if (itemType == 'Square')
        return {
            coordinates: [{ col: 0, row: 0 },
            { col: 1, row: 0 },
            { col: 0, row: 1 },
            { col: 1, row: 1 }],
            key: 1,
            type: itemType,
            currentInterval: currentInterval
        };
    if (itemType == 'Line')
        return {
            coordinates: [{ col: 0, row: 0 },
            { col: 1, row: 0 },
            { col: 2, row: 0 },
            { col: 3, row: 0 }],
            key: 2,
            type: itemType,
            currentInterval: currentInterval
        };
        if (itemType == 'Plus')
        return {
            coordinates: [{ col: 0, row: 1 },
            { col: 1, row: 0 },
            { col: 1, row: 1 },
            { col: 2, row: 1 }],
            key: 3,
            type: itemType,
            currentInterval: currentInterval
        };
        if (itemType == 'LeftL')
        return {
            coordinates: [{ col: 0, row: 0 },
            { col: 0, row:  1},
            { col: 1, row: 1 },
            { col: 2, row: 1 }],
            key: 4,
            type: itemType,
            currentInterval: currentInterval
        };
        if (itemType == 'RightL')
        return {
            coordinates: [{ col: 0, row: 1 },
            { col: 1, row: 1 },
            { col: 2, row: 0 },
            { col: 2, row: 1 }],
            key: 5,
            type: itemType,
            currentInterval: currentInterval
        };
        if (itemType == 'LeftStep')
        return {
            coordinates: [{ col: 0, row: 0 },
            { col: 1, row:  0},
            { col: 1, row: 1 },
            { col: 2, row: 1 }],
            key: 6,
            type: itemType,
            currentInterval: currentInterval
        };
        if (itemType == 'RightStep')
        return {
            coordinates: [{ col: 0, row: 1 },
            { col: 1, row: 1 },
            { col: 1, row: 0 },
            { col: 2, row: 0 }],
            key: 7,
            type: itemType,
            currentInterval: currentInterval
        };

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
