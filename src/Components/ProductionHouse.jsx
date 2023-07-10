import React from 'react';
import disney from '../assets/images/disney.png';
import marvel from '../assets/images/marvel.png';
import nationalGeo from '../assets/images/nationalG.png';
import pixar from '../assets/images/pixar.png';
import starwars from '../assets/images/starwar.png';

import disneyV from '../assets/Videos/disney.mp4';
import marvelV from '../assets/Videos/marvel.mp4';
import nationalGeoV from '../assets/Videos/national-geographic.mp4';
import pixarV from '../assets/Videos/pixar.mp4';
import starwarsV from '../assets/Videos/star-wars.mp4';

function ProductionHouse() {
    const ProductionHouseList = [
        {
            id: 1,
            image: disney,
            video: disneyV
        },
        {
            id: 2,
            image: marvel,
            video: marvelV
        },
        {
            id: 3,
            image: nationalGeo,
            video: nationalGeoV
        },
        {
            id: 4,
            image: pixar,
            video: pixarV
        },
        {
            id: 5,
            image: starwars,
            video: starwarsV
        },

    ]
    return (
        <div className='flex gap-5 md:gap-24 pt-6 ml-12 md:mr-4 mr-10 '>
            {ProductionHouseList.map((item) => (
                <div className=' shadow-2xl shadow-gray-700 hover:scale-110 transition-all cursor-pointer duration-300 ease-in-out border rounded-lg border-gray-300  md:w-[13rem]  '>
                    <video src={item.video} autoPlay loop playsInline muted className='m-0 absolute top-0 rounded-lg z-0 opacity-0 hover:opacity-60 md:h-[7.3rem] ' />
                    <img src={item.image} alt="image comp." className=' md:h-auto z-[1] hover:text-white' />
                </div>
            ))}
        </div>
    )
}

export default ProductionHouse