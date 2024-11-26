// async await, try catch

const url = 'https://jsonplaceholder.typicode.com/posts/1'

const fetchPost = async () =>{
    try{ // сработает при выполнении
        const response = await fetch(url) // ждет пока выполнится эта строчка кода
        const data = await response.json()
        console.log(data);
    } catch(e){ // сработает при ошибке
        console.log(e);
        
    } finally { // сработает в любом случае
        console.log('finally');       
    }
    
}


fetchPost()


// const fetchPost = () =>{
//     fetch(url)
//     .then(response => response.json())
//     .then(data =>{
//         console.log(data);
        
//     })
// }

// fetchPost()

