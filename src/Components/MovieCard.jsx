import React from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
function MovieCard({movie}) {
  return (
    <div >
        <img src={IMAGE_BASE_URL + movie.poster_path} alt="movies"
         className='max-w-sm max-h-44 md:max-w-lg md:max-h-72 rounded-lg shadow-lg shadow-gray-800 hover:border-[2px] border-gray-500 hover:scale-110 transition-all duration-300 ease-in-out' />
    </div>
  )
}

export default MovieCard