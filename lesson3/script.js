//DOM - document object model
//arr - настоящий массив
//node - ненастоящий массив
//event.target - Панацея
//event.target.tagName - DIV BUTTON

// const newButton = document.createElement('button')

// buttons.forEach(button => {
    //     button.addEventListener('click', ()=>{
                // event.target.classList.toggle('red')
//     })
// });

// wrapper.append(newButton)
// const buttons = document.querySelectorAll('button')


// Делигирование событий - много собыйтий превращаем в одноэ

const wrapper = document.querySelector('.wrapper')
wrapper.onclick = (event) =>{
    if(event.target.tagName.toLowerCase() === 'button'){
        event.target.classList.toggle('red')
    }
}

