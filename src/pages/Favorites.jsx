import '../css/Favorites.css';
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';


function Favorite() {
    const {favorites} = useMovieContext();

    if(favorites){
        return(
          <div>
            <h2 className='favorites'>Meus Filmes Favoritos</h2>
             <div className="movies-grid">
             {favorites.map((movie) => (<MovieCard movie={movie} key={movie.id} />
                ))}
                </div>

        </div>
        )

    }
    
    return(
     <div className="favorite-none">
        <h2>Você não tem filmes favoritos ainda!</h2>
        <p>Podes adicionar na Homepage</p>
     </div>
    )
}

export default Favorite;