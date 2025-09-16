const API_KEY = "e8b7d12833b3c071b78bb0bc1858947d";
const BASE_URL = "https://api.themoviedb.org/3";

export const getMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`);
    const data = await response.json();
    return data.results;
}

export const searchMovies = async () => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${query}&page=1&include_adult=true`);
    const data = await response.json();
    return data.results;
}