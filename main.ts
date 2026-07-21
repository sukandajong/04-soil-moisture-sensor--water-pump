let moisture = 0
OLED.init(128, 64)
basic.forever(function () {
    moisture = smarthome.ReadSoilHumidity(AnalogPin.P1)
    OLED.clear()
    OLED.writeStringNewLine("Moisture:")
    OLED.writeNumNewLine(moisture)
    if (moisture < 40) {
        basic.showIcon(IconNames.Sad)
        OLED.writeStringNewLine("Pump: ON")
        smarthome.Relay(DigitalPin.P15, smarthome.RelayStateList.On)
    } else if (moisture >= 40) {
        basic.showIcon(IconNames.Happy)
        OLED.writeStringNewLine("Pump: OFF")
        smarthome.Relay(DigitalPin.P15, smarthome.RelayStateList.Off)
    }
    basic.pause(100)
})
