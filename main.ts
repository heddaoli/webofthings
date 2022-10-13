basic.forever(function () {
    if (smarthome.ReadSoilHumidity(AnalogPin.P1) < 50) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.showIcon(IconNames.Sad)
        basic.pause(2000)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
    }
})
