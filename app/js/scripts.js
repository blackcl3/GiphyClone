const request = new XMLHttpRequest ()



request.open('GET', 'http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=1ujrwsGkeMKXmEjKADBLp5l02Wtz9q99&limit=20')

//javascript, jQuery

// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
// xhr.done(function(data) { console.log("success got data", data); });



request.onload = function () {
  let data = JSON.parse(this.response)
  console.log(data)
  console.log(data.type)
}



request.send()
