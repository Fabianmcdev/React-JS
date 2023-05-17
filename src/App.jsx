import './App.css'
import { useMovies } from './hooks/useMovies';
import { Movies } from './components/Movies';
import Header from './components/Header';
 


function App() {
  const {mappedMovies} = useMovies();
  
   return (
    <>
        <div className='page'>
        <Header/>
        <main>
          <Movies movies={mappedMovies}/>
        </main> 
      </div>
      
    </>
  )
}

export default App
