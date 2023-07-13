// Card.jsx
import React, {useState} from 'react';
import { FaThumbsUp, FaComments, FaThumbsDown } from 'react-icons/fa';
import { truncateText } from '@/helper/helpers';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Post, filteredPosts, postsState } from '@/atoms/postsAtom';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { useFetchSubdirPosts } from '@/hooks/useFetchPosts';

interface CardProps {
  post: any;
}

const Card: React.FC<CardProps> = ({ post }) => {
const router = useRouter();

  const numberdate = post.created_utc;
  const dateFormatted = new Date(numberdate * 1000);
  const finalDate = dateFormatted.toLocaleString('default', { day: 'numeric', month: 'short' });



  return (
    <section className="w-full">
      <div className="w-full mt-6 z-20 shadow-md h-64 flex">
        <div className="w-1/2 m-3 bg-cover rounded-lg bg-no-repeat bg-[url(https://picsum.photos/300/300)]">
          <button className="btn px-1 btn-primary m-3">{finalDate}</button>
        </div>
        <div className="px-4 w-1/2">
          <div className="h-4/5">
            <h3 className="font-bold text-lg">{post.title}</h3>
            <p className="overflow-hidden">{truncateText(post.selftext, 90)}</p>
            <p className="italic">posted by: {post.author}</p>
            
          </div>
          <div className="h-1/5 flex">
            <div className="svg-sm">
              {<FaThumbsUp className="w-full h-full fill-primary" />}
              <span className="indicator-c text-white bg-black">+{post.score}</span>
            </div>
            <div className="svg-sm">
              {<FaComments className="w-full h-full fill-accent" />}
              <span className="indicator-c bg-white text-black">+{post.num_comments}</span>
            </div>
            <div className="svg-sm">
              {<FaThumbsDown className="w-full h-full fill-primary" />}
              <span className="indicator-c text-white bg-black">+{post.downs}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;

