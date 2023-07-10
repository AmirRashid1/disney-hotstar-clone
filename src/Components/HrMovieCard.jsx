import React from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
function HrMovieCard({movie}) {
  return (
    <div >
      <img src={IMAGE_BASE_URL + movie.backdrop_path} alt="movies"
        className=' max-w-xs max-h-52 rounded-lg shadow-lg shadow-gray-800 hover:border-[2px] border-gray-500 hover:scale-105 transition-all duration-300 ease-in-out' />
    <h3 className='text-white  p-4 text-[1.1rem] text-center'>{movie.title}</h3>
    </div>
    )
}

export default HrMovieCard