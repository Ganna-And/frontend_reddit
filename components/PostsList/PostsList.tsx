import React from 'react';
import Card from './Card';

type PostsListProps = {
    
};

const PostsList:React.FC<PostsListProps> = () => {
    
    return (
        <div className="container w-full px-5 py-2 flex md:w-2/3 md:m-8">
            <Card />
        </div>
    )
}
export default PostsList;