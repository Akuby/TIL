function fetchMovies(title) {
  const OMDB_API_KEY = '7035c60c'
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`https://omdbapi.com?apikey=${OMDB_API_KEY}&s=${title}`) //async는 await가 소속된 함수인 콜백 앞에...!
      resolve(res)
    } catch (error) {
      console.log(error);
      reject(error)
    }
  })
}

async function test() {
  try {
    const res = await fetchMovies('frozen')
    const movies = res.data.Search
    for (let i = 0; i < movies.length; i++) {
      console.log(movies[i].Title)
    }
  } catch (error) {
    console.log(error)
  }
}

test()