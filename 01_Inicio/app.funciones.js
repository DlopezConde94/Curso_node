//cambian de valor
let x
    //no cambian de valor
const ob = {}
ob.name = 'Pepe'

function suma(a = 0, b = 0) {
    return a + b
}
console.log(suma(3, 8))

const resta = function(a = 0, b = 0) {
    return a - b
}

console.log(suma(3, 8))

//ES 6
const prod = (a = 1, b = 1) => { return a * b }

console.log(prod(4, 6))

//LAMBDAS
const prod1 = (a = 1, b = 1) => a * b

const cuad = a => a * a
console.log(cuad(3))

cuad.desc = "Calcula el cuadro"
console.log(cuad.desc)
setTimeout(() => {
    console.log(suma(13, 6))
}, 1000)