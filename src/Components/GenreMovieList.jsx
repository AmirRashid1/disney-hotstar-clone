import React from 'react'
import GenresList from '../Constant/GenresList';
import MovieList from './MovieList';
function GenreMovieList() {
    return (
        <div>
            {GenresList.genere.map((item,index) => index<=4 && (
                <div className=' p-6 md:px-16'>
                    <h2 className=' text-white font-bold text-[2rem] my-3'>{item.name}</h2>
                <MovieList genereId={item.id} index_={index}/>
                </div>
            ))}
        </div>
    )
}

export default GenreMovieList