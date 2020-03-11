// Progression #1: Greatest of the two numbers
function greaterOfTwoNumbers(num1, num2) {
  if (num1 > num2)
    return num1
  else if (num1 < num2)
    return num2
  else
    return num1
}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findScaryWord(names) {
  var len = 0
  for (var index = 0; index < names.length; index++) {
    if (len < names[index].length)
      len = names[index].length
  }
  for (var index = 0; index < names.length; index++) {
    if (len == names[index].length)
      return names[index]
  }
  return null
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(numbers) {
  var sum = 0
  for (var start = 0; start < numbers.length; start++) {
    sum += numbers[start]
  }
  return sum
}


function add(list) {
  var res = 0
  for (var start = 0; start < list.length; start++) {
    if (typeof (list[start]) == 'number')
      res += list[start]
    else if (typeof (list[start]) == 'string')
      res += list[start].length
    else if (typeof (list[start]) == 'boolean')
      res += list[start]
    else
      res += 0
  }
  return res
}


// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(numbers) {
  if (numbers.length == 0)
    return null
  var res = netPrice(numbers)
  return res / (numbers.length)
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordArr) {
  if (wordArr.length == 0)
    return null
  var res = add(wordArr)
  return Number((res / wordArr.length).toFixed(2))
}

function avg(wordArr) {
  if (wordArr.length == 0)
    return null
  var res = add(wordArr)
  return Number((res / wordArr.length).toFixed(2))
}

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];


function uniqueArray(wordsUnique) {
  if (wordsUnique.length == 0)
    return null
  else {
    var newArry = []
    for (var index = 0; index < wordsUnique.length; index++) {
      if (!(isThere(wordsUnique[index], newArry))) newArry.push(wordsUnique[index])
    }
    return newArry
  }

}

function isThere(word, newArray) {
  for (var index = 0; index < newArray.length; index++) {
    if (word == newArray[index])
      return 1
  }
  return 0
}



// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];



function searchElement(wordsFind, target) {
  if (wordsFind.length == 0)
    return null
  if (isThere(target, wordsFind))
    return true
  else false
}

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];



function countNumberOf(word, newArray) {
  var count = 0
  for (var index = 0; index < newArray.length; index++) {
    if (word == newArray[index])
      count++
  }
  return count
}


function howManyTimesElementRepeated(wordCount, target) {
  if (wordCount.length == 0)
    return 0
  var res = 0
  res = countNumberOf(target, wordCount)
  return res
}



// Progression #8: Bonus


function maximumProduct(matrix) {
  var temp = 1,
    res = 0
  for (var rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    temp = 1
    for (var colIndex = 0; colIndex < matrix.length; colIndex++) {
      temp *= matrix[rowIndex][colIndex]
    }
    if (res < temp)
      res = temp
  }
  temp = 1
  for (var rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    temp = 1
    for (var colIndex = 0; colIndex < matrix.length; colIndex++) {
      temp *= matrix[colIndex][rowIndex]
    }
    if (res < temp)
      res = temp
  }
  return Math.trunc(res)
}



const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];