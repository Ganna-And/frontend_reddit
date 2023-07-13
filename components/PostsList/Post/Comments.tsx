import Link from 'next/link';
import React, { useState } from 'react';
import { FaThumbsUp, FaComments, FaThumbsDown } from 'react-icons/fa';
import { Comment } from '@/atoms/postsAtom';

type CommentsProps = {
    post: any;
    comments:any;
};

const Comments:React.FC<CommentsProps> = ({post, comments}) => {

    const [viewComments, setViewComments] = useState(false)
   
    
    
    return (
        <div className="w-full mt-6 z-20 shadow-md mb-8 h-full flex-col justify-center items-center md:w-full md:mt-8  px-10">
        <div className="flex w-full">
          <div className="svg-sm">
            {<FaThumbsUp className="w-full h-full fill-primary" />}
            <span className="indicator-c text-white bg-black">+{post?.score}</span>
          </div>
          <div className="svg-sm">
            {<FaComments className="w-full h-full fill-accent" />}
            <span className="indicator-c bg-white text-black">+{post?.num_comments}</span>
          </div>
          <div className="svg-sm">
            {<FaThumbsDown className="w-full h-full fill-primary" />}
            <span className="indicator-c text-white bg-black">+{post?.downs}</span>
          </div>
          <button className='btn-post ' onClick={()=>{setViewComments(true)}}>View comments</button>
        </div>
       {viewComments && <ul className='mt-3 mb-10'>{comments?.map((comment: Comment)=>(
                <li key={comment.id} className='rounded-lg border bottom-1 border-primary shadow-lg px-4 py-4 mb-2 '>{comment.author}:   {comment.body} </li>
            ))}</ul>}
       
      </div>
     
    )
}
export default Comments;