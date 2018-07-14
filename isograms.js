var isIsogram = function (str) {
  var mainString = str.toLowerCase()
  var arrayedString = mainString.split('')
  var i = 0
  var result = ''
  if (str === '') {
    result = true
  } else {
    while (i < arrayedString.length) {
      var checkingStrings = arrayedString.includes(mainString[i], i + 1)
      if (checkingStrings === false) {
        i++
      } else if (checkingStrings === true) {
        i = arrayedString.length
      }
    }
    result = !checkingStrings
  }
  return result
}

console.log(isIsogram('Isograma'))
