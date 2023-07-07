import Image from 'next/image';
import React from 'react';
import {FcLike , FcComments, FcDislike} from 'react-icons/fc';


type CardProps = {
    
};

const Card:React.FC<CardProps> = () => {
    
    return (
       <main className='w-full '>
       <div className=" w-full mt-6  z-20 shadow-md h-64 flex">
  <div className="w-1/2 m-3  bg-cover rounded-lg bg-no-repeat bg-[url(https://picsum.photos/300/300)]">
    <button className="btn px-1 btn-primary m-3">8 Mar</button>
  </div>
<div className='px-4 w-1/2'>
    <div className='h-4/5'>
    <h2 className='font-bold text-lg'>Shoes!</h2>
    <p className=' text-sm'>If a dog chews shoes, whose shoes does he choose?</p>
    </div>
    <div className='h-1/5 flex'>
      <div className='svg-sm'>
        {<FcLike className='w-full h-full '/>}
         <span className='indicator-c' >+99</span>
      </div> 
      <div className='svg-sm'>
        {<FcComments className='w-full h-full '/>}
         <span className='indicator-c' >+99</span>
      </div> 
      <div className='svg-sm'>
        {<FcDislike className='w-full h-full '/>}
         <span className='indicator-c' >+99</span>
      </div> 
      
      
     
      </div>
    </div>
</div>
</main>
    )
}
export default Card;