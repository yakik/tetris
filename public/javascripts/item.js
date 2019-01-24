export function getNewItem(itemType) {
    if (itemType == 'Square')
        return {
            coordinates: [{ column: 0, row: 0 },
            { column: 1, row: 0 },
            { column: 0, row: 1 },
            { column: 1, row: 1 }],
            key: 1,
            type : 'Square'
        };

}

export function getCoordinatesWithOffset(item, offset) {
    var coordinates = []
    item.coordinates.forEach(coordinate => {
        coordinates.push({
            column: offset.column + coordinate.column,
            row: offset.row + coordinate.row,
        })
        });
        return coordinates
    }
