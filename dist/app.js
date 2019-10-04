"use strict";

var _registerServiceWorker = require("./registerServiceWorker.js");

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
var app = document.getElementById('root');
var defaultRequest = new Request('http://api.giphy.com/v1/gifs/search?q=dogs&api_key=1ujrwsGkeMKXmEjKADBLp5l02Wtz9q99&limit=15'); // search Bar functionality
// let myRequest = new Request('http://api.giphy.com/v1/gifs/search?q=' + answer + '&api_key=1ujrwsGkeMKXmEjKADBLp5l02Wtz9q99&limit=15')

fetch(defaultRequest).then(function (response) {
  return response.json();
}).then(createPage)["catch"](function (err) {
  console.log('Fetch Error :-S', err);
});

function createPage(data) {
  // loop through data, produce card from response
  for (var _i = 0, _Object$keys = Object.keys(data); _i < _Object$keys.length; _i++) {
    var i = _Object$keys[_i];
    var giphyCard = data[i]; // console.log(giphyCard)

    giphyCard.forEach(function (cards) {
      //find a way to loop through the array. right now, the array is from data.data;
      // each item in the array is a gif, with image and title
      // if I can save the array into a variable, then loop over with forEach, this may
      //work
      // console.log(cards.title)
      var card = document.createElement('div');
      card.setAttribute('class', 'card');
      var container = document.getElementById('container');
      var paragraph = document.createElement('p');
      var img = document.createElement('img');
      paragraph.textContent = cards.title;
      img.setAttribute('src', cards.images.original.url);
      img.setAttribute('class', 'giphImage'); // console.log(img)

      container.appendChild(card);
      card.appendChild(img);
      card.appendChild(paragraph);
    });
  }
}