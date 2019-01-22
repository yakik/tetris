export function getNewItem(itemType) {
    if (itemType == 'Square')
        return {
            coordinates: [{ x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 0, y: 1 },
            { x: 1, y: 1 }],
            key: 1,
            type : 'Square'
        };

}

export function getCoordinatesWithOffset(item, offset) {
    var coordinates = []
    item.coordinates.forEach(coordinate => {
        coordinates.push({
            x: offset.x + coordinate.x,
            y: offset.y + coordinate.y,
        })
        });
        return coordinates
    }
