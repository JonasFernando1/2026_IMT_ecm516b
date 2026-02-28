//comparação
console.log(1, 1 == 1)//true
console.log(2, 1 == '1')//true
console.log(3, 1 === '1')//false

console.log(4, true == 1)
console.log(5, true == '1')
console.log(6, true === 1)

console.log(7, 0 == false)
console.log(8, 2 == false)
console.log(9, -3.1415 == false)

console.log(10, 2 == true)
console.log(11, -3.1415 == true)

console.log(12, 1 == [1])
console.log(13, null == null)
console.log(14, null == undefined)
console.log(15, [] == false)
console.log(16, [] == [])

// //coerção
// const n1 = 2
// const n2 = '3'
// //coerção implícita
// const n3 = n1 + n2
// console.log(n3)
// //coerção explícita
// const n4 = n1 + Number(n2)
// console.log(n4)

// console.log(n1 + Number(n2))


// // //declaração de constantes  
// // const nome = "José"
// // const idade = 27
// // console.log(nome, idade)

// // const sexo = "M"
// // const endereco = 'Rua K, 12'
// // const endereco2 = "Rua Olho D'Água, 12"
// // const citacao = '"Ser ou não ser..."'
// // console.log(sexo, endereco, endereco2, citacao)

// // //declaração de variáveis
// // //let: variável local com escopo de bloco
// // let a = 2
// // let b = 'abc'
// // console.log(a,b)
// // b = 3
// // console.log(a,b)
// // /* variável global com escopo na função em que 
// //    foi criada ou no script todo */
// // var c = 2 + 3
// // var d = "abcd"
// // console.log(c, d)
// // console.log('nome3:', nome3)
// // let idade2 = 18
// // if (idade2 >= 18){
// //     let nome2 = "João"
// //     var nome3 = "Maria"
// //     console.log('nome2:', nome2)
// // }
// // //console.log('nome2:', nome2)
// // console.log('nome3:', nome3)

// // var linguagem = 'Javascript'
// // //concatenação
// // console.log('Aprendendo ' + linguagem)
// // //interpolação
// // let linguagem2 = 'Java'
// // console.log(`Já aprendi ${linguagem2} anteriormente.)