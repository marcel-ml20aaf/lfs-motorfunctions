let LFSL2 = 0
let LFSR2 = 0
function soft_left () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 45)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 90)
}
function all_ahead () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 90)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 90)
}
function hard_right () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 90)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 15)
    basic.pause(100)
}
function soft_right () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 90)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 45)
}
function hard_left () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 15)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 90)
    basic.pause(100)
}
basic.forever(function () {
    LFSL2 = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    LFSR2 = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    if (LFSL2 == 1 && LFSR2 == 1) {
        all_ahead()
    } else if (LFSL2 == 1) {
        soft_right()
    } else if (LFSR2 == 1) {
        soft_left()
    } else {
        all_ahead()
    }
})
