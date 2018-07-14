function reverseString (str) {
  var reverseStr = str
  var unNumbered = reverseStr.replace(/\d+/g, '').replace(/\W+/g, '').replace(/_/g, '')
  var arraiedStr = unNumbered.split('')
  .reverse()
  .join('')
  return arraiedStr
}

console.log(reverseString('Una string es una texto, o 2.'))
