export function getNewItem(itemType) {
    if (itemType == 'Square')
        return {
            coordinates: [{ col: 0, row: 0 },
            { col: 1, row: 0 },
            { col: 0, row: 1 },
            { col: 1, row: 1 }],
            key: 1,
            type : 'Square'
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
