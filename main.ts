input.onButtonPressed(Button.A, function () {
    choice = randint(0, activity.length - 0)
    basic.showString("" + (activity[choice]))
})
let choice = 0
let activity: string[] = []
activity = [
"tidur",
"grinding HSR",
"grinding BA",
"Grinding LC",
"Makan"
]
