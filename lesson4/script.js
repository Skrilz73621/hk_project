// {} - можно создать объект
// [] - можно создать массив
// stringify - превращает объект в строку
// parse - наоборот
// AJAX - Asynchronous js and xml (подход(способ при помощи которого создается сайт))
// XML - extensible markup language
// HTTP - hypertext transfer protocol
// HTTPS - hypertext transfer protocol secure
// XHR - XML HTTP request
// Get - попросить данные
// Post - 
// ready state - 


// const userObject = {
//     name:'Nurdin',
//     age: 16
// }

// const jsonUser = JSON.stringify(userObject)
// console.log(JSON.parse(jsonUser))


const button = document.querySelector('.btn')

button.onclick = () =>{
    const request = new XMLHttpRequest() // 1. создание запроса
    request.open('GET','data.json') // 2. указывание метода запроса и пути 'метод запроса', 'аддрес откуда он должен получить данные'
    request.setRequestHeader('Content-type', 'application/json') //3. Указывание заголовка
    request.send() //4. Отправка запроса

    request.onload = () =>{
        const data = JSON.parse(request.response)
        document.querySelector('.name').innerHTML = data.name
        document.querySelector('.age').innerHTML = data.age

    }

}

