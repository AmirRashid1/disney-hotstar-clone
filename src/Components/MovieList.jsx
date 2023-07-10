import React, { useEffect,useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from './HrMovieCard';
function MovieList({ genereId, index_}) {
    const [movieList, setMovieList] = useState([]);
    const elementRef=useRef(null);
    useEffect(() => {
        getMovieByGenereId();
    }, [])
    const getMovieByGenereId = () => {
        GlobalApi.getMovieByGenreId(genereId).then(res => {

            setMovieList(res.data.results)
        })
    };

    const slideRight=(element)=>{
        element.scrollLeft+=500;
    }
    const slideLeft=(element)=>{
        element.scrollLeft-=500;
    }

    return (
        <div className='relative'>
            <IoChevronBackOutline onClick={() => slideLeft(elementRef.current)}
                className={`text-[50px] text-white scroll-smooth p-2 z-10 cursor-pointer opacity-80 hover:opacity-100 hidden md:block absolute ${index_ % 3 == 0 ? 'mt-[5rem]' : 'mt-[8.3rem]'} `} />

            <div ref={elementRef} className='flex scroll-smooth gap-8 scrollbar-hide overflow-x-auto cursor-pointer pt-5 px-3 pb-10 '>
                {movieList.map((item, index) => (
                    <>
                    {index_%3==0 ? <HrMovieCard movie={item}/> : <MovieCard movie={item} />}
                    </>
                ))}
            </div>

            <IoChevronForwardOutline onClick={() => slideRight(elementRef.current)} 
            className={`text-[50px] text-white hidden md:block p-2 cursor-pointer opacity-80 hover:opacity-100 z-10 top-0 absolute right-0  ${index_ % 3 == 0 ? 'mt-[5.5rem]' : 'mt-[8.3rem]'}`} />
        </div>
    )
}

export default MovieList