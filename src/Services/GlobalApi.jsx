import axios from "axios";

const MovieBaseUrl="https://api.themoviedb.org/3";
const api_key="375499cea8f34f764d9790d914861998";
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=375499cea8f34f764d9790d914861998';
//https://api.themoviedb.org/3/trending/all/day?api_key=375499cea8f34f764d9790d914861998

const getTrendingVideos=axios.get(MovieBaseUrl+"/trending/all/day?api_key="+api_key);
const getMovieByGenreId=(id)=>axios.get(movieByGenreBaseURL+"&with_genres="+id)
export default{
    getTrendingVideos,
    getMovieByGenreId
}