import { useRef,useState, useEffect } from 'react';

export function useSearch(){
    const [search, setSearch] = useState('');
    const [error, setError] = useState('');
    const isFirstInput= useRef(true);

    useEffect(() => {
        // Validaciones
        if (isFirstInput.current) {
            isFirstInput.current = search==='';
            return;
          }
       if (search.length < 3) {
           setError('Su busqueda debe tener al menos 3 caracteres');
           return
         }
       if (search.length === '') {
           setError('No puedes buscar películas "vacías"');
           return
         }
         if (search.match(/^[0-9]+$/)) {
           setError('No puedes buscar sólo números');
           return
         }
           setError(null);

       }, [search])
       return {error, search, setSearch}

}
export default useSearch;