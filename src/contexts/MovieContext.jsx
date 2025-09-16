import { createContext,useState,useContext,useEffect, use } from "react";


const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {

    const [favorites, setFavorites] = useState([])

     useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

    const addFavorite = (movie) => {
        if (!favorites.find((fav) => fav.id === movie.id)) {
            setFavorites([...favorites, movie]);
        }
    };

    const removeFavorite = (movieId) => {
        setFavorites(favorites.filter((fav) => fav.id !== movieId));
    }

    const isFavorite = (movieId) => {
        return favorites.some((fav) => fav.id === movieId);
    }   

    const value = { favorites, addFavorite, removeFavorite, isFavorite }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>

}