
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(action = "go to the office") {
    return `This Monday, I will ${action}.`
}

function wrapAdjective(special= "*") {
    return function(sentence) {
        return `You are ${special}${sentence}${special}!`
    }
}