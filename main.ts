radio.onReceivedString(function (receivedString) {
    if (receivedString == "stop") {
        motors.dualMotorPower(Motor.M0_M1, 0)
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "x") {
    	
    }
})
let kanal = 7
radio.setGroup(kanal)
basic.showNumber(kanal)
basic.forever(function () {
	
})
