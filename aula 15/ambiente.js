let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} elementos`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)

let nao = num.indexOf(10)
console.log(`O valor 10 está na posição ${nao}`)