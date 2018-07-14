var shapeArea = function (n) {
  var firstValue = n
  var secondValue = n - 1
  var result = (firstValue * firstValue) + (secondValue * secondValue)
  return result
}

console.log(shapeArea(6))

// Impar = Odd = 1
// Par = Even = 0
