
import useSearch from '../hooks/useSearch';

export default function Header() {

    // Custom hook
    const {error,search, setSearch} = useSearch();


    const handleSubmit=(event)=> { 
        event.preventDefault();
        console.log({search});
        /* Uncontrolled form
        De esta forma se pueden obtener todos los inputs del formulario y sus valores en un objeto (MIDU recomienda usar ésta forma por sobre la controlada)

        const fields= Object.fromEntries(new FormData(event.target));
        const {query} = fields;
        console.log(query)
        */
    }
    //Controlled form
    const handleChange = (event) => {
        const newQuery = event.target.value; //  Para asegurarnos de tener el último valor del state
        if (newQuery.startsWith(' ')) return; // Para evitar que el usuario empiece con espacios
        setSearch(event.target.value);
         console.log(search);   
        }
 
    

  return (
    <header>
    <h1>Movie Search</h1>
    <form className='form' onSubmit={handleSubmit}>
        <input value={search} name='query' onChange={handleChange} type="text" placeholder="Avengers, The Shining..." />
        <button type="submit">Search</button>
    </form>
    {error && <p style={{color:'red'}} className='error'>{error}</p> }
</header>
  );
}