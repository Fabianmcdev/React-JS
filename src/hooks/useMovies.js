import responseMovies from '../mockResults/example-search.json'
import withoutMovies from '../mockResults/error-results.json'


export function useMovies() {

    const mappedMovies = responseMovies.Search.map((movie) => {
      return {
        id: movie.imdbID,
        title: movie.Title,
        poster: movie.Poster,
        year: movie.Year
      }
    })
    
    return {mappedMovies}
  }
  