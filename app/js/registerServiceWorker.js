// const request = new XMLHttpRequest ()
const app = document.getElementById('root');
const container = document.createElement('div');
let myRequest = new Request('http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=1ujrwsGkeMKXmEjKADBLp5l02Wtz9q99&limit=5')

app.appendChild(container)



// // request.open('GET', 'http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=1ujrwsGkeMKXmEjKADBLp5l02Wtz9q99&limit=20')
// //
// // //javascript, jQuery
// //
// // // var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
// // // xhr.done(function(data) { console.log("success got data", data); });
// //
// //
// //
// // request.onload = function () {
// //   let data = JSON.parse(this.response)
// //   console.log(data)
// //   console.log(data.type)
// // }
//
//
//
// request.send()


fetch(myRequest)
  .then(
    // response => {
    //   if (response.status !== 200) {
    //     console.log('Looks like there was a problem. Status Code: ' + response.status);
    //     return
    //   }

    response => response.json())
  .then( data => {
    // let giphyObject = Object.keys(data)
    // console.log(giphyObject)
    for (let i of Object.keys(data)) {
      let giphyCard = data[i];
      console.log(giphyCard)
      giphyCard.forEach(cards => {

              //find a way to loop through the array. right now, the array is from data.data;
              // each item in the array is a gif, with image and title
              // if I can save the array into a variable, then loop over with forEach, this may
              //work
              console.log(cards.title)
              let card = document.createElement('div');
              card.setAttribute('class', 'card');

              const h2 = document.createElement('h2');
              const img = document.createElement('img')
              h2.textContent = cards.title;


              img.setAttribute('src', cards.images.fixed_height.url)
              img.setAttribute('class', 'giphImage')
              console.log(img)
              container.appendChild(card)
              container.appendChild(img)
              container.appendChild(h2)

        })
    }


    // for (let i of Object.keys(data)) {
    //       let giphyURL = data.data;
    //       console.log(giphyURL)
    //
    //       // for (let j of Object.keys(giphyURL)) {
    //       //   console.log(giphyURL)
    //       //   let card = document.createElement('div');
    //       //   card.setAttribute('class', 'card');
    //       //
    //       //   const h2 = document.createElement('h2');
    //       //   h2.textContent = giphyURL.title;
    //       //
    //       //   container.appendChild(card)
    //       //   card.appendChild(h2)
    //       // }
    //
    // }


  })



    // data => {
    // for (const image of data) {
    //   console.log(images)
    // }
    // }
// )






    //   //examine the text in the response
    //   .then(response => response.JSON()) {
    //     console.log(JSON)
    //   })
    //   .then(
    //     data => {
    //       console.log(data)
    //       data.forEach(
    //         const card = document.createElement('div');
    //         card.setAttribute('class', 'card');
    //
    //         const h1 = document.createElement('h1');
    //         h1.textContent = gif.title;
    //         console.log(gif.title)
    //
    //         container.appendChild(card)
    //         card.appendChild(h1)
    //       )
    //     }
    //   }
    //
    // })

  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
