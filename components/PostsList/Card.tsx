import React from 'react';
import {FcLike , FcComments, FcDislike} from 'react-icons/fc';
import { truncateText } from '@/helper/truncateText';




type CardProps = {
    post:any
};

const Card:React.FC<CardProps> = ({post}) => {

  const numberdate = post.created_utc;
  const dateFormatted = new Date(numberdate*1000);
  const finalDate = dateFormatted.toLocaleString('default', {day:'numeric', month:'short' }) 
    return (
       <main className='w-full '>
       <div className=" w-full mt-6  z-20 shadow-md h-64 flex">
  <div className="w-1/2 m-3  bg-cover rounded-lg bg-no-repeat bg-[url(https://picsum.photos/300/300)]">
    <button className="btn px-1 btn-primary m-3">{finalDate}</button>
  </div>
<div className='px-4 w-1/2'>
    <div className='h-4/5'>
    <h2 className='font-bold text-lg'>{post.title}</h2>
    <p className='overflow-hidden'>{truncateText(post.selftext, 125)}</p>
    <p className='italic'>posted by:{post.author}</p>
    </div>
    <div className='h-1/5 flex'>
      <div className='svg-sm'>
        {<FcLike className='w-full h-full '/>}
         <span className='indicator-c' >{post.score}</span>
      </div> 
      <div className='svg-sm'>
        {<FcComments className='w-full h-full '/>}
         <span className='indicator-c' >{post.num_comments}</span>
      </div> 
      <div className='svg-sm'>
        {<FcDislike className='w-full h-full '/>}
         <span className='indicator-c' >{post.downs}</span>
      </div> 
      
      
     
      </div>
    </div>
</div>
</main>
    )
}
export default Card;