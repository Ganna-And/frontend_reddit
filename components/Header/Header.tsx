import React from 'react';
import {FaReddit} from 'react-icons/fa';
import SwitchTheme from './SwitchTheme';
import Search from './Search';
import AuthButton from './AuthButton';
import Logo from '../../public/FRONTEND-removebg-preview.png';
import Image from 'next/image';



type HeaderProps = {
    
};

const Header:React.FC<HeaderProps> = () => {
    
    return (
    
        <div className="navbar  md:px-40 h-10  lg:pl-0 ">
  <div className="flex-1 mt-3 ">
      <Image src={Logo} width={100} height={100}  alt='logo photo' className='lg:mt-[4rem] lg:ml-[4rem] md:mt-[4rem]'/>
   </div>
    <Search/>
    <SwitchTheme/>
    <AuthButton />
  </div>
    )
}
export default Header;