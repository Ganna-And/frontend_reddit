import React from 'react';
import Card from './Card';
import { postsState } from '@/atoms/postsAtom';
import { useRecoilValue } from 'recoil';

type PostsListProps = {
    
};

const PostsList:React.FC<PostsListProps> = () => {

    const posts = useRecoilValue(postsState);
    
    return (
        <div className="container w-full px-5 py-2 flex flex-col md:w-2/3 md:m-8">
            {posts.map((post:any) => (
        <Card key={post.id} post={post} />
      ))}
        </div>
    )
}
export default PostsList;