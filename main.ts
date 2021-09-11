let y = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        y = 1
        while (y == 1) {
            basic.showArrow(ArrowNames.North)
            basic.showArrow(ArrowNames.NorthEast)
            basic.showArrow(ArrowNames.East)
            basic.showArrow(ArrowNames.SouthEast)
            basic.showArrow(ArrowNames.South)
            basic.showArrow(ArrowNames.SouthWest)
            basic.showArrow(ArrowNames.West)
            basic.showArrow(ArrowNames.North)
            if (input.buttonIsPressed(Button.B)) {
                y = 2
            }
        }
    } else if (input.buttonIsPressed(Button.B)) {
        y = 2
        while (y == 2) {
            basic.showArrow(ArrowNames.North)
            basic.showArrow(ArrowNames.NorthWest)
            basic.showArrow(ArrowNames.West)
            basic.showArrow(ArrowNames.SouthWest)
            basic.showArrow(ArrowNames.South)
            basic.showArrow(ArrowNames.SouthEast)
            basic.showArrow(ArrowNames.East)
            basic.showArrow(ArrowNames.NorthEast)
            basic.showArrow(ArrowNames.North)
            if (input.buttonIsPressed(Button.A)) {
                y = 1
            }
        }
    }
})
