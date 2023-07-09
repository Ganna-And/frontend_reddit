import React, {useState} from 'react';
import Link from 'next/link';
import CommunitySnippet from '@/components/SubdirList/CommunitySnippet';
import { useFetchSubdirPosts } from '@/hooks/useFetchPosts';

type SubdirListProps = {};

const SubdirList: React.FC<SubdirListProps> = () => {

  const [community, setCommunity]=useState('javascript')
  const communityList = ['javascript', 'tailwind', 'next', 'recoilhacks', 'react', 'reduxjs', 'node', 'Firebase', 'cssnews', 'typescript'];
useFetchSubdirPosts(community);

  return (
    <div className='list'>
    {communityList.map((community) => (
      <Link href={`/r/${community}`} key={community}>
        <button onClick={()=>setCommunity(community)} className='btn btn-primary btn-outline btn-sm m-2' /* onClick={() => handleCommunityClick(community) }*/>
          <CommunitySnippet community={community} />
        </button>
      </Link>
    ))}
  </div>
  );
};

export default SubdirList;