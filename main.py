radio.onReceivedString(function (receivedString) {
    if (receivedString == Math.map(0, 0, 1023, 0, 4)) {
        motors.dualMotorPower(Motor.M0_M1, 0)
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        datalogger.log(datalogger.createCV("X", "" + control.eventTimestamp() + " :x " + value))
        basic.showNumber(value)
    }
})
let kanal = 7
radio.setGroup(kanal)
basic.showNumber(kanal)
basic.forever(function () {
	
})
