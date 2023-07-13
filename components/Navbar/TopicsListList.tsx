import React, {useState} from 'react';
import Link from 'next/link';
import Topic from '@/components/Navbar/Topic';
import { useFetchSubdirPosts } from '@/hooks/useFetchPosts';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { communityState } from '@/atoms/postsAtom';

type TopicsListProps = {};

const TopicsList: React.FC<TopicsListProps> = () => {
const [community, setCommunity]= useRecoilState(communityState);

  const communityList = ['javascript', 'tailwind', 'next', 'recoilhacks', 'react', 'reduxjs', 'node', 'Firebase', 'cssnews', 'typescript'];
  
  return (
    <div className='list'>
    {communityList.map((community) => (
      <Link href={`/r/${community}`} key={community}>
        <button className='btn-post' onClick={()=>setCommunity(community)} >
          <Topic community={community} />
        </button>
      </Link>
    ))}
  </div>
  );
};

export default TopicsList;