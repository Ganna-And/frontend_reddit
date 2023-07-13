import React, { useEffect , useState } from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import {FaSun} from 'react-icons/fa'
import { headers } from 'next/dist/client/components/headers';


type TopicProps = {
  community: string;
};

const Topic: React.FC<TopicProps> = ({ community }) => {
  const router = useRouter();
  
  return (
    <div className='flex'>
        <FaSun />
      <h3 className='text-center' >{community}</h3>
    </div>
  );
};


  export default Topic

  