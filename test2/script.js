const regExp = /^\d+$/

function extractNumbers(str) {
    if(regExp.test(str)){
        console.log(str.replace(regExp));
    }
    return str
}

extractNumbers('12ksd')

function fibonacci(a = 0, b = 1) {
    console.log(a); 
  
    if (a >= 144){
        return a
    }; 
    setTimeout(() => {
      fibonacci(b, a + b);
    }, 1000);
  }
  
fibonacci();

const url = 'https://fakestoreapi.com/products'

const fetchPost = async () =>{
    try{
        const response = await fetch(url)
        const data = await response.json()
        data.forEach((item) =>{
            console.log(item.title);
        })
        
    }catch(e){
        console.log(e);
    }
    
}

fetchPost()


const buttons = document.querySelectorAll('button')
const body = document.querySelector('body')

buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        body.style.backgroundColor = event.target.innerHTML
    })
    
})


const btn = document.querySelector('.btn')
const block = document.querySelector('.block')

btn.addEventListener('click', ()=>{
    block.classList.toggle('show')
})



const jsonbtn = document.querySelector('.json')

const jsonUrl = '../test2/products.json'

const fetchJson = async () =>{
    const response = await fetch(jsonUrl)
    const data = await response.json()
    console.log(data);
    
}

jsonbtn.addEventListener('click', (fetchJson))



let num = 0
const h2 = document.querySelector('h2')

setInterval(()=>{
    if(num < 100){
        num++
        h2.innerHTML = num
    }
}, 1)


