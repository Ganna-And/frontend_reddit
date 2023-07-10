import React from 'react';
import {FaReddit} from 'react-icons/fa';
import SwitchTheme from './SwitchTheme';
import Search from './Search/Search';
import AuthButton from './AuthButton/AuthButton';



type NavbarProps = {
    
};

const Navbar:React.FC<NavbarProps> = () => {
    
    return (
        <div className="navbar fixed ">
  <div className="flex-1 mt-3  ml-4 ">
    <a className="m-0 flex  font-monoton btn border-secondary pt-0.5 h-full "> 
    <span className="text-4xl flex-col font-mono">Front
  <FaReddit className=' w-10 h-7 text-accent  '/>
  </span>
   <span className='flex flex-col'>
      <span className="h-4 text-secondary text-sm ">e</span>
      <span className="h-4 text-secondary text-sm">n</span>
      <span className="h-4 text-secondary text-sm">d</span>
      </span></a>
   </div>
    <Search/>
    <SwitchTheme/>
    <AuthButton />
  </div>

    )
}
export default Navbar;