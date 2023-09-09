import React from 'react';

type PostTextProps = {
    post:any
};

const PostText:React.FC<PostTextProps> = ({post}) => {
    
    return (
        <div className="px-8 w-full mt-5 text-center ">
            <h2 className="font-bold text-center text-lg">{post?.title}</h2>
            <p style={{wordBreak:'break-word'}}>{post?.selftext}</p>
          </div>
    )
}
export default PostText;