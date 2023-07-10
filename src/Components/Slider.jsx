import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;
function Slider() {
    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        getTrendingMovies();
    }, []);

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then(res => {
            setMovieList(res.data.results);
        })
    };

    const elementRef = useRef();
    const sliderRight = (element) => {
        element.scrollLeft += screenWidth - 85;
    }
    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth - 85;
    }
    return (
        <div>
            <HiChevronLeft className='hidden md:block text-white text-[2.3rem] mx-6 absolute mt-[10.7rem] cursor-pointer opacity-30 hover:opacity-60' onClick={() => sliderLeft(elementRef.current)} />
            <HiChevronRight className='hidden md:block text-white text-[2.3rem] mx-6 absolute mt-[10.7rem] cursor-pointer right-0 opacity-30 hover:opacity-60' onClick={() => sliderRight(elementRef.current)} />

            <div className='flex overflow-x-auto py-2 px-16 scrollbar-hide gap-5 scroll-smooth ' ref={elementRef}>
                {movieList.map((item, index) => (
                    <img src={IMAGE_BASE_URL + item.backdrop_path} alt="movies images"
                        className='min-w-full md:h-[22rem] object-cover object-left-top mr-5 rounded-lg hover:border-[3px] hover:border-gray-300 transition-all duration-150 ease-in-out ' />
                ))}
            </div>
        </div>
    )
}

export default Slider