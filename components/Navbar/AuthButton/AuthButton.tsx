import React from 'react';
import {CgProfile} from 'react-icons/cg'

type AuthButtonProps = {
    
};

const AuthButton:React.FC<AuthButtonProps> = () => {
    
    return (
        <div className="dropdown dropdown-end">
        <label tabIndex={0} className=" btn btn-ghost btn-circle">
          <div className="align-middle rounded-full ">
           <CgProfile className='ml-0 text-5xl '/>{/*  <img src="" /> */}
          </div>
        </label>
        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
             Subdir
            </a>
          </li>
          <li><a>LogIn</a></li>
        </ul>
      </div>
    )
}
export default AuthButton;