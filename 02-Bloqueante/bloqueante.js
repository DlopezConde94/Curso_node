const fs = require('fs')

//lee el fichero prueba.txt
const data = fs.readFileSync('Prueba.txt', { encoding: 'utf-8' })
console.log(data)

let data2
fs.readFile('Prueba2.txt', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    data2 = data
    console.log(data2)
})

console.log('Lectura de ficheros')