

//want to create a search bar
// let answer = ''; 
// const input = document.getElementsByTagName('form');
// let textInput = input[0]; 
// console.log(input[0])




// textInput.addEventListener("submit", () => {
//     let searches = document.getElementById('mySearch').value; 
//     console.log(searches)
//     event.preventDefault()
//     return answer = searches; 
// })

// console.log(answer)

// function search = () = {

// }


// input.submit(); 

//next step would be to export value of submit to search in registerServiceworker.js 
// separate functionality of API request and registering service worker? put API request in this file? MVC separatio? 


// update for 9/14/19: for now I will table the export/import option, and attempt to simply utilze the script method
// export { answer as searchBarSubmission }

// const request = new XMLHttpRequest ()
// import { answer } from './app.js'; 
const app = document.getElementById('root');
let defaultRequest = new Request('http://api.giphy.com/v1/gifs/search?q=dogs&api_key=1ujrwsGkeMKXmEjKADBLp5l02Wtz9q99&limit=15')



// search Bar functionality


let answer = '';
const input = document.getElementsByTagName('form');
let textInput = input[0];
console.log(input[0])




textInput.addEventListener("submit", () => {
    let searches = document.getElementById('mySearch').value;
    console.log(searches)
    event.preventDefault()
    return answer = searches;
})

console.log(answer)

let myRequest = new Request('http://api.giphy.com/v1/gifs/search?q=' + answer + '&api_key=1ujrwsGkeMKXmEjKADBLp5l02Wtz9q99&limit=15')


fetch(defaultRequest)
    .then(
        response => response.json())
    .then(data => {
        // loop through data, produce card from response
        for (let i of Object.keys(data)) {
            let giphyCard = data[i];
            // console.log(giphyCard)
            giphyCard.forEach(cards => {

                //find a way to loop through the array. right now, the array is from data.data;
                // each item in the array is a gif, with image and title
                // if I can save the array into a variable, then loop over with forEach, this may
                //work
                // console.log(cards.title)
                let card = document.createElement('div');
                card.setAttribute('class', 'card');
                const container = document.getElementById('container')
                const paragraph = document.createElement('p');
                const img = document.createElement('img')
                paragraph.textContent = cards.title;


                img.setAttribute('src', cards.images.original.url)
                img.setAttribute('class', 'giphImage')
                // console.log(img)
                container.appendChild(card)
                card.appendChild(img)
                card.appendChild(paragraph)
            })
        }
    })
    .catch(function (err) {
        console.log('Fetch Error :-S', err);
    });
