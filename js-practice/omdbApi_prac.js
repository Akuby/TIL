import axios from 'axios'

function fetchMovies() {
  axios
  .get('https://omdbapi.com/?apikey=7035c60c&s=taken')
  .then((res) => {
    console.log(res)
    const h1El = document.querySelector('h1')
    const imgEl = document.querySelector('img')
    h1El.textContent = res.data.Search[0].Title
    imgEl.src = res.data.Search[0].Poster
  })

}

fetchMovies()