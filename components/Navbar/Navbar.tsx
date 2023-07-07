import React from 'react';
import {FaReddit} from 'react-icons/fa';
import SwitchTheme from './SwitchTheme';
import Search from './Search/Search';
import AuthButton from './AuthButton/AuthButton';



type NavbarProps = {
    
};

const Navbar:React.FC<NavbarProps> = () => {
    
    return (
        <div className="navbar bg-base-100">
  <div className="flex-1 mt-3 ">
    <a className="m-0 text-xl normal-case btn btn-ghost">Front<span className='text-accent'>
      <FaReddit className='stroke-0 fill-accent'/>end</span></a>
  </div>
    <Search/>
    <SwitchTheme/>
    <AuthButton />
  </div>

    )
}
export default Navbar;