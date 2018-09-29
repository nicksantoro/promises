const apiKey = `e9ddb24aed6d48c4342303aba5269e28`;
const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
const imgUrl = `https://image.tmdb.org/t/p/w185/`;


let submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function( event ){
    event.preventDefault();
    console.log("it's working!")
})
