const caculatorPlus = (num1, nmu2) => {
    return num1 + nmu2
}

const caculatorMinus = (num1, nmu2) => {
    return num1 - nmu2
}
const calaculatormultiplication = (num1, nmu2) => {
    return num1 * nmu2
}

const caculatorDivision = (num1, nmu2) => {
    return num1 / nmu2
}

const calculateSum = (array) => {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}

module.exports = {calculateSum , caculatorPlus, caculatorMinus, caculatorDivision, calaculatormultiplication }