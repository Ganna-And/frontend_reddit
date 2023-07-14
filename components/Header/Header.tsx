import React from 'react';
import {FaReddit} from 'react-icons/fa';
import SwitchTheme from './SwitchTheme';
import Search from './Search';
import AuthButton from './AuthButton';
import Logo from '../../public/logo.png';
import Image from 'next/image';



type HeaderProps = {
    
};

const Header:React.FC<HeaderProps> = () => {
    
    return (
    
        <div className="navbar  md:px-40 h-10 ">
  <div className="flex-1 mt-3 ">
      <Image  src={Logo} width={80} height={80} className=' border-accent border-2 rounded-lg  ' alt='logo photo'/>
   </div>
    <Search/>
    <SwitchTheme/>
    <AuthButton />
  </div>
    )
}
export default Header;