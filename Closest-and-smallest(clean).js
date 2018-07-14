var stringToArray = function (string) {
  var array = string.split(' ')
  return array
}

var arrayEachNumber = function (number) {
  var returnedSubArray = number.map(function (input) {
    return input.split('')
  })
  return returnedSubArray
}

var stringToNumber = function (letters) {
  var newNumber = letters.map(function (input) {
    var finalNumber = input.map(function (output) {
      return parseFloat(output)
    })
    return finalNumber
  })
  return newNumber
}

var sumOfEachNumbersDigit = function (input) {
  var firstSum = input.map(function (numbers) {
    var finalSum = numbers.reduce(function (a, b) {
      return a + b
    })
    return [numbers, finalSum]
  })
  return firstSum
}

var backToWholeNumbers = function (splited) {
  var numbersToString = splited.map(function (givenNumber) {
    var stringedNumbers = givenNumber[0].join('')
    var reNumberedString = parseFloat(stringedNumbers)
    return [reNumberedString, givenNumber[1]]
  })
  return numbersToString
}

var numbersOrdered = function (input) {
  var newOrder = input.sort(function (a, b) {
    return a[1] - b[1]
  })
  return newOrder
}

var inputString = function (strng) {
  var result = numbersOrdered(backToWholeNumbers(sumOfEachNumbersDigit(stringToNumber(arrayEachNumber(stringToArray(strng))))))
  return result
}

console.log(inputString('102 72 13 422 33'))
