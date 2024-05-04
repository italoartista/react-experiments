let url = 'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d'

function ler(url) { 
    fetch(url)
    .then(
        response => response.json()
    ).then(
        data => console.log(data)
    )

}

ler(url)
// let produto = { 
//     nome: 'Mouse', 
//     preco: 50.00 ,
//     descricao: 'Mouse sem fio',
//     detalhes: {
//         peso: 0.5,
//         dimensoes: {
//             altura: 10,
//             largura: 5,
//             comprimento: 15
//         }
//     }
// }

// // ES5 
// // let nome  = produto.nome
// // let preco = produto.preco
// // let descricao = produto.descricao
// // let peso = produto.detalhes.peso
// // let altura = produto.detalhes.dimensoes.altura
// // let largura = produto.detalhes.dimensoes.largura
// // let comprimento = produto.detalhes.dimensoes.comprimento

// // ES6
// let { nome, preco, descricao, detalhes: { peso, dimensoes: { altura, largura, comprimento } }  } = produto

// console.log(nome)
// console.log(preco)
// console.log(descricao)
// console.log(peso)
// console.log(altura)
// console.log(largura)
// console.log(comprimento)
