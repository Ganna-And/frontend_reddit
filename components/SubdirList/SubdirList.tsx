import React from 'react';
import Link from 'next/link';
import CommunitySnippet from '@/components/SubdirList/CommunitySnippet';

type SubdirListProps = {};

const SubdirList: React.FC<SubdirListProps> = () => {
  const communityList = ['javascript', 'tailwind', 'next', 'recoilhacks', 'react', 'reduxjs', 'node', 'Firebase', 'cssnews', 'typescript'];

  return (
    <div className='list'>
    {communityList.map((community) => (
      <Link href={`/r/${community}`} key={community}>
        <button className='btn btn-primary btn-outline btn-sm m-2' /* onClick={() => handleCommunityClick(community) }*/>
          <CommunitySnippet community={community} />
        </button>
      </Link>
    ))}
  </div>
  );
};

export default SubdirList;