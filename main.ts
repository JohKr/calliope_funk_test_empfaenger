radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        basic.showNumber(value)
    }
})
let kanal = 7
radio.setGroup(kanal)
basic.showNumber(kanal)
basic.forever(function () {
	
})
