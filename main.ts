radio.onDataPacketReceived(function ({ receivedString: signal, receivedNumber: wert }) {
    if (signal == "richtung") {
        richtung = wert
    } else {
        geschwindigkeit = wert
    }
})
let motor_rechts = 0
let motor_links = 0
let led_y_wert = 0
let led_x_wert = 0
let geschwindigkeit = 0
let richtung = 0
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    led.unplot(led_x_wert, led_y_wert)
    led_x_wert = pins.map(
    richtung,
    -50,
    50,
    0,
    5
    )
    led_y_wert = pins.map(
    geschwindigkeit,
    0,
    100,
    5,
    0
    )
    led.plot(led_x_wert, led_y_wert)
    motor_links = geschwindigkeit + richtung
    motor_rechts = geschwindigkeit - richtung
    if (motor_links > 100) {
        motor_links = 100
    }
    if (motor_links < 0) {
        motor_links = 0
    }
    if (motor_rechts > 100) {
        motor_rechts = 100
    }
    if (motor_rechts < 0) {
        motor_rechts = 0
    }
    motors.dualMotorPower(Motor.M0, motor_links)
    motors.dualMotorPower(Motor.M1, motor_rechts)
})
