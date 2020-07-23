input.onButtonPressed(Button.A, function () {
    led.unplot(pos_X, pos_Y)
    pos_X += 1
    if (pos_X <= -1) {
        pos_X = 4
    }
    led.plot(pos_X, pos_Y)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(pos_X, pos_Y)
    pos_X += 1
    if (pos_Y >= 5) {
        pos_X = 0
    }
    led.plot(pos_X, pos_Y)
})
let pos_Y = 0
let pos_X = 0
pos_X = 0
let direction = 0
basic.forever(function () {
    basic.pause(500)
    led.unplot(pos_X, pos_Y)
    pos_Y += direction
    led.plot(pos_X, pos_Y)
    if (pos_Y >= 4) {
        direction = -1
    } else if (pos_Y <= 0) {
        direction = 1
    }
})
