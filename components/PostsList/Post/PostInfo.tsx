import React from 'react';
import { FaSun } from 'react-icons/fa';

type PostInfoProps = {
    post: any
};

const PostInfo:React.FC<PostInfoProps> = ({post}) => {
    
    return (
        
         <div className='flex justify-center m-4'>
       
      <button className='btn-post' > <FaSun />{post?.subreddit}</button>
      <button className='btn-post'><p className="italic">posted by: {post?.author}</p></button>
      
    </div>
   )
    
}
export default PostInfo;