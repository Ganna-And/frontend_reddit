import React, { useEffect, useState } from 'react';
import Card from './Card';
import { useRecoilState, useRecoilValue } from 'recoil';
import { filteredPosts, postsState, searchTermState } from '@/atoms/postsAtom';

const PostsList: React.FC = () => {
  const filteredPostsData = useRecoilValue(filteredPosts);
  const searchTerm = useRecoilState(searchTermState);
 
  return (
    <div className="container w-full px-5 py-2 flex flex-col md:w-3/4 md:mr-10 md:mt-14">
      {filteredPostsData.map((post: any) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
