const numbers = document.getElementsByName('button')
const output = document.querySelector('p')
const operators = document.getElementsByName('Operator')
const clear = document.querySelector('.buttonC')
const equal = document.querySelector('.buttonEq')
const sqrt = document.querySelector('.buttonSqrt')

// Getting the clicks to print to output
let x = 0
let y = 0
let operation = 0

numbers.forEach(num => {
  num.addEventListener('click', function(event) {
    let value = event.target.value
    output.textContent += value
  })
})

operators.forEach(operator => {
  operator.addEventListener('click', function(event) {
    x = output.textContent
    output.textContent = event.target.value
    operation = event.target.value
    output.textContent = ''
  })
})

clear.addEventListener('click', function(event) {
  output.textContent = ''
  x = 0
  y = 0
  console.log(x + y)
})

sqrt.addEventListener('click', function(event) {
  output.textContent = '√' + x
  operation = '√'
})

equal.addEventListener('click', function(event) {
  y = output.textContent
  switch (operation) {
    case '*':
      output.textContent = +x * +y
      break
    case '+':
      output.textContent = +x + +y
      break
    case '-':
      output.textContent = +x - +y
      break
    case '/':
      output.textContent = +x / +y
      break
    case '√':
      output.textContent = Math.sqrt(x)
    default:
      x = output.textContent
      output.textContent = x
  }
  // if (operation === '*') {
  //   output.textContent = +x * +y
  // } else if (operation === '/') {
  //   output.textContent = +x / +y
  // } else if (operation === '+') {
  //   output.textContent = +x + +y
  // } else if (operation === '-') {
  //   output.textContent = +x - +y
  // } else {
  //   x = output.textContent
  //   output.textContent = x
  // }
})
