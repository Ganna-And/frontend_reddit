import React, { useEffect , useState } from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import {FaSun} from 'react-icons/fa'
import { headers } from 'next/dist/client/components/headers';


type CommunityPageProps = {
  community: string;
};

const CommunityPage: React.FC<CommunityPageProps> = ({ community }) => {
  const router = useRouter();
  
  return (
    <div className='flex'>
        <FaSun />
      <h3 className='text-center' >{community}</h3>
    </div>
  );
};

export default CommunityPage;
export const getPaths: GetStaticPaths = async () => {
    const communityList = ['javascript', 'tailwind', 'next', 'recoilhacks', 'react', 'reduxjs', 'node', 'Firebase', 'cssnews', 'typescript'];
  
    const paths = communityList.map((community) => ({
      params: { community },
    }));
  
    return {
      paths,
      fallback: true, // Set fallback to true if you want to statically generate only the defined paths
    };
  };

  export const getStaticPaths: GetStaticPaths = async () => {
    const communityList = ['javascript', 'tailwind', 'next', 'recoilhacks', 'react', 'reduxjs', 'node', 'Firebase', 'cssnews', 'typescript'];
  
    const paths = communityList.map((community) => ({
      params: { community },
    }));
  
    return {
      paths,
      fallback: true, // Set fallback to true if you want to statically generate only the defined paths
    };
  };
  
  export const getStaticProps: GetStaticProps = async ({ params }) => {
    const community = params?.community;
  
    return {
      props: {
        community,
      },
    };
  };