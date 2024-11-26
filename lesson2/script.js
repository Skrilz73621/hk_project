// Основы асинхронности

// Синхронный код - (выполнение по порядку)


// Асинхронный код - (любой код, который имеет задержку)

// setTimeout(() =>{
//     console.log(1)
// }, 0)


// console.log(2) // 2, 1


// const interval = setInterval(() =>{
//    console.log('ok') 
// }, 1000)

// setTimeout(() =>{
//     clearInterval(interval)
// }, 5000)


// let num = 0
// const h2 = document.querySelector('h2')

// setInterval(()=>{
//     num++
//     h2.innerHTML = num
// }, 1000)



// const button = document.querySelector('button')


// button.onclick= () =>{
//     setTimeout(()=>{
//         console.log(1)
//     }, 800)
// }

// console.log(2);

///////////////////////////////////////////////////////////////////////

// Event loop - Цикл событий (Часть движка браузера)

//JS => V8 (движок Chrome) => EventLoop => event

const photo = 'https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg'

const John = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQREwdHNItDiQmFSE1VhdJeZG27ti7qFctWOQ&s'
const wrapper = document.querySelector('.wrapper')

const characters = [
    {
        name:'John Wick',
        age:42,
        photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11zQqRcIkP5kAS3XdpPFEa4s4cRixrIzIjA&s'
    },

    {
        name:'Pudge',
        age: 20,
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-goR_HcX3CJrWf7d2-OB_DY-A_9MRQxjlvw&s'
    },
    {
        name:'Nurs',
        age: 16,
        photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw8vXgXQ4BmAs9zPsytmkrFt4u6FpgxKUigg&s'
    },
]


characters.forEach((person) =>{
    const personBlock = document.createElement('div')
    personBlock.setAttribute('class', 'person_block')
    personBlock.innerHTML = `
    <div class='person_photo'>
        <img src='${person.photo || photo}' alt ="" />
    </div>
    <h2>${person.name}</h2>
        <h1>${person.age}</h1>
    `
    wrapper.append(personBlock)
    
})



function expect(num1) {
    return {
        toBe: function(num2) {
            if (num1 === num2) {
                console.log({'value': true});
            } else {
                console.log({'erroe': false});
            }
        },
        notToBe: function(num2){
            if(num1 !== num2){
                console.log({'value': true});
            }else{
                console.log({'erroe': false});
                
            }
        }
    };
}


console.log(expect(5).toBe(null));
