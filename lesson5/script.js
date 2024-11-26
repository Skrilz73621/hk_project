// hell callback

const logger = (object) => {
    const { name, price } = object
    console.log(`name: ${name}\nprice: ${price}`)
}
console.log('Loading...')

// setTimeout(()=>{
// const product = {
//     name:'milk',
//     price:'4$'
// }
//     logger(product)
//     setTimeout(()=>{
//         product.name = 'pepsi',
//         product.price = '6$'
//         logger(product)

//         setTimeout(()=>{
//             product.name = 'fanta',
//             product.price = '6$'
//             logger(product)
//         },1000)
//     },1200)
// }, 1500)


// Деструктуризация


// const obj = {
//     key1:'value1',
//     key2:'value2',
//     key3:'value3',
// } // Струкутуризация

// const {key1, key2} = obj // Деструктуризация

// console.log(key1, key2)

// Promise - обещания
// Promise => rejected(Не выполнение) <-- pending (Ожидание) --> fulfilled(Выполнение)
// resolve - функция которая выполняется при fulfilled (promise.then())
// reject - функция которая выполняется при rejected (promise.then())

const promise = new Promise((resolve, reject) => {
    // throw new Error('Ручная ошибка') // Ручная ошибка
    setTimeout(() => {
        const product = {
            name: 'milk',
            price: '4$'
        }
        logger(product)
        resolve(product)
        reject()
    }, 1000)
})


promise.then((product) => { // - двойное обещание
    return new Promise((resolve, reject) => { // - чтобы обратиться к этому обещанию
        // throw new Error('Ручная ошибка')
        setTimeout(() => { // resolve
            product.name = 'ice cream'
            product.price = '5$'
            logger(product)
            resolve(product)
            reject()
        }, 1200)
    })
}, () => {
    console.log('reject')
}).then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.name = 'milkshake'
            product.price = '10$'
            logger(product)
            resolve()
            reject()
        }, 1000)
    })
}, () => {
    console.log('reject 2')
}).then(() => {
    setTimeout(() => {
        console.log('OK')
    }, 1000)
}, () => {
    console.log('not ok')
})


// fetch() - получать

// fetch('data.json').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })


// API - application programming interface 
// Интерфейс программного приложения
const url = 'https://jsonplaceholder.typicode.com/todos'
// протокол      доменное имя           файл     

fetch(url).then((response) => {
    response.json().then((data) => {
        data.forEach(element => {
            const h2 = document.createElement('h2')
            h2.innerHTML = element.title
            document.body.append(h2)
        });
    })
})

fetch(url).then((response) =>{
    response.json().then((data) =>{
        console.log(data)
    })
})



