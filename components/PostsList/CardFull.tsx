// Card.jsx
import React, {useState} from 'react';
import { FaThumbsUp, FaComments, FaThumbsDown, FaSun } from 'react-icons/fa';
import { truncateText } from '@/helper/truncateText';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Post, filteredPosts, postsState, commentsState } from '@/atoms/postsAtom';
import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useFetchComments, useFetchSubdirPosts } from '@/hooks/useFetchPosts';


interface CardProps {
  post: any;
}

const Card: React.FC<CardProps> = ({ post }) => {
const router = useRouter();

  const numberdate = post.created_utc;
  const dateFormatted = new Date(numberdate * 1000);
  const finalDate = dateFormatted.toLocaleString('default', { day: 'numeric', month: 'short' });
  const permalink = post.permalink

  useFetchComments(permalink)

  const comments = useRecoilValue(commentsState);
 ;
console.log(`comments are here:${comments}`);

  return (
    <main className="w-full h-screen">
      
       <div className="w-full mt-6 z-20 shadow-md h-full flex-col justify-center align-middle md:w-2/3 md:mt-24 md:ml-20">
         <div className='flex'>
        <FaSun />
      <h3 className='text-center' >{post.subreddit}</h3>
    </div>
    <div className="w-3/4 h-1/2  m-3 justify-center bg-cover rounded-lg bg-no-repeat bg-[url(https://picsum.photos/300/300)]">
          <button className="btn px-1 btn-primary m-3">{finalDate}</button>
        </div>
        <div className="px-4 w-1/2">
          <div className="">
            <h2 className="font-bold text-lg">{post.title}</h2>
            <p className="overflow-hidden">{post.selftext}</p>
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
      <ul>{comments.map(comment=>(
                <li key={comment}>COMMENT:{comment.body}</li>
            ))}</ul>
    </main>
  );
};

export default Card;

