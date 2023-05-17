import { Modal  } from "./Modal";
import { useState } from "react";

function ShowMovies ({ movies }){
  const [modal, setModal] = useState(false);

  const showDetails = (event) => {
    setModal(true);
    const { alt } = event.target;
    const { title } = movies.find((movie) => movie.title === alt);
    console.log({title,modal})
    
    }

  return (
      <ul className="movies">
      { 
        movies.map((movie) => (
          <li className="movie" key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
             <img  onClick={showDetails} src={movie.poster} alt={movie.title} />
          </li>
         
        ))
      }
    </ul> 
  
  )}


const NoMoviesResults = ({ hasError })=> {
  <p>{hasError.Error}</p>
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;
  return (
    hasMovies
      ? <ShowMovies movies={movies} />
      : <NoMoviesResults hasError={hasError} />
  )
}