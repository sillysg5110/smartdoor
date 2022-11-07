input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # . # . #
        # # . . #
        # . # . #
        # # # # #
        `)
    SuperBit.Servo2(SuperBit.enServo.S3, 90)
})
radio.onReceivedString(function (receivedString) {
    item = receivedString
    if (receivedString == "C") {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # . . .
            . # . . .
            . # # # .
            `)
        SuperBit.Servo2(SuperBit.enServo.S3, 90)
    } else if (receivedString == "D") {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 5000, 1, 255, 107, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        basic.showLeds(`
            . . # # .
            . # . . #
            . # . . #
            . # . . #
            . . # # .
            `)
        SuperBit.Servo2(SuperBit.enServo.S3, 0)
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 5000, 1, 255, 107, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    SuperBit.Servo2(SuperBit.enServo.S3, 0)
})
let item = ""
radio.setGroup(77)
radio.setTransmitPower(7)
SuperBit.Servo2(SuperBit.enServo.S3, 0)
