const numbers = document.getElementsByName('button')
const output = document.querySelector('p')
const operators = document.getElementsByName('Operator')
const clear = document.getElementsByName('Clear')
const equal = document.getElementsByName('Equal')

// Getting the clicks to print to output
let x = 0
let y = 0

console.log(5 + 5)

numbers.forEach(num => {
  num.addEventListener('click', function(event) {
    let value = event.target.value
    output.textContent += value
  })
})

operators.forEach(operator => {
  operator.addEventListener('click', function(event) {
    x = output.textContent
    output.textContent = ''
  })
})

clear.forEach(empty => {
  empty.addEventListener('click', function(event) {
    output.textContent = ''
  })
})

equal.forEach(solve => {
  solve.addEventListener('click', function(event) {
    y = output.textContent
    output.textContent = +x + +y
  })
})
