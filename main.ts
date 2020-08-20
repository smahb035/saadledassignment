function lightOff () {
    selected = OnLights.shift()
    led.unplot(selected % 5, selected / 5)
    Offlights.push(selected)
    if (OnLights.length == 0) {
        OnOff = true
    }
}
input.onButtonPressed(Button.A, function () {
    led.enable(true)
    Offlights = []
    for (let index = 0; index <= 24; index++) {
        Offlights.push(index)
    }
    led.enable(false)
    basic.pause(100)
    led.enable(true)
    OnLights = []
    OnOff = true
})
function lightUp () {
    selected = randint(0, Offlights.length) - 1
    selected = Offlights.removeAt(selected)
    led.plot(selected % 5, selected / 5)
    OnLights.push(selected)
    if (Offlights.length == 0) {
        OnOff = false
    }
}
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    led.stopAnimation()
    basic.showString("reset")
    led.enable(false)
})
input.onButtonPressed(Button.B, function () {
    OnOff = true
    OnLights = []
    for (let index = 0; index <= 24; index++) {
        Offlights.pop()
    }
    led.enable(false)
    basic.pause(100)
    led.enable(true)
    Offlights = []
})
let OnOff = false
let Offlights: number[] = []
let OnLights: number[] = []
let selected = 0
led.enable(false)
basic.forever(function () {
    if (OnOff) {
        lightUp()
    } else {
        lightOff()
    }
    basic.pause(500)
})
