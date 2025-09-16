import '../css/Home.css'
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies } from '../services/api';
import { getMovies } from '../services/api';


function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    
    
    const [movies,setMovies] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
       const fetchMovies = async () => {
        try{
            const filmes = await getMovies()
            setMovies(filmes)
        }catch(error){
            setError("Erro ao buscar filmes. Por favor, tente novamente mais tarde.");
            console.error("Erro ao buscar filmes:", error);
            
       }finally{
        console.log("Busca de filmes concluída.");
        setLoading(false);
       }
    }

       fetchMovies()
    }, [])


const handleSearch = async (e) => {
  e.preventDefault();

  if (!searchTerm.trim()) {
    // se o campo estiver vazio, não faz nada
    return;
  }

  setLoading(true);
  setError(null);

  try {
    const data = await searchMovies(searchTerm);
    setMovies(data);
    if (data.length === 0) {
      setError("Filmes não encontrados.");
    }
  } catch (error) {
  setError("Erro ao buscar filmes. Por favor, tente novamente mais tarde.");
  console.error("Erro ao buscar filmes:", error);setTimeout(() => {setError(null);
  }, 3000);
}
finally {
    setLoading(false);
  }
};




    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Buscar filme..." 
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    
                />
                <button type="submit" className="search-button">Buscar</button>
            </form>
            {loading ?<div className="loading">Carregando filmes...</div> : error ? <div className="error">{error}</div> : null}
            <div className="movies-grid">
                {movies.map((movie) => 
                    movie.title.toLowerCase().startsWith(searchTerm.toLowerCase()) && (<MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Home;
