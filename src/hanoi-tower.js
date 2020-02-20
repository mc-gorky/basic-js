module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let finalObject = {};

    finalObject.turns = 2**disksNumber - 1;
    finalObject.seconds = finalObject.turns/(turnsSpeed/3600);

    return finalObject;
}