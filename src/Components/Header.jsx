
import disney_logo from '../assets/images/disney-logo.svg';
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from 'react-icons/hi2';
import { HiPlus, HiDotsVertical } from 'react-icons/hi';
import Headeritem from './Headeritem';
import ImageLogo from '../assets/images/download11.jpg';
import { useState } from 'react';
function Header() {
    const [toggle, setToggle] = useState(false);
    const menu = [
        {
            name: 'HOME',
            icon: HiHome
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass
        },
        {
            name: 'WATCH LIST',
            icon: HiPlus
        },
        {
            name: 'ORIGINALS',
            icon: HiStar
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'SERIES',
            icon: HiTv
        },
    ]
    return (
        <div className='flex justify-between py-3'>
            <div className='flex gap-6 space-x-8'>
                <img src={disney_logo} alt="disney logo" className='w-[5rem] h-[4rem]' />

                <div className='hidden md:flex space-x-14'>
                    {menu.map((item) => (
                        <Headeritem name={item.name} Icon={item.icon} />
                    ))}
                </div>

                <div className=' flex md:hidden gap-8'>
                    {menu.map((item, index) => index < 3 && (
                        <Headeritem name={''} Icon={item.icon} />
                    ))}

                    <div className='md:hidden flex' onClick={()=>(setToggle(!toggle))}>
                        <Headeritem name={''} Icon={HiDotsVertical} />
                        {toggle ? <div className='absolute mt-14 bg-inherit border-[1.2px] border-gray-500 shadow-2xl p-4'>
                            {menu.map((item, index) => index > 2 && (
                                <Headeritem name={item.name} Icon={item.icon} />
                            ))} 
                        </div> : null };
                    </div>

                </div>
            </div>
            <img src={ImageLogo} alt="image" className='w-[3rem] h-[3rem] rounded-2xl' />
        </div>
    )
}

export default Header;