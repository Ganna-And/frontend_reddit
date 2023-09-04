// FullPost.jsx
import React, {useState} from 'react';
import { FaThumbsUp, FaComments, FaThumbsDown, FaSun } from 'react-icons/fa';
import { truncateText } from '@/helper/helpers';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Post, filteredPosts, postsState, commentsState } from '@/atoms/postsAtom';
import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useFetchComments, useFetchSubdirPosts } from '@/hooks/useFetchPosts';
import PostInfo from './Post/PostInfo';
import PostImg from './Post/PostImg';
import PostText from './Post/PostText';
import Comments from './Post/Comments';



const FullPost: React.FC = () => {
  const router = useRouter();
  const { index } = router.query;
  const {community}= router.query;
  const posts = useRecoilValue(filteredPosts);
  const post = posts[Number(index)];
  const permalink = post?.permalink;
  const comments =useRecoilValue(commentsState)
  
   
  
useFetchSubdirPosts();
useFetchComments(permalink);

console.log(`index ${permalink}`)
 
  return (
    
   <>
   <section className="w-full h-full flex-col items-center">
     <PostInfo post={post}/>
     <div className='lg:flex '>
      <PostImg post={post} />
      <PostText post={post} />
      </div>
      <Comments post={post} comments={comments}/>
      
    </section>
    </>
  );
};

export default FullPost;

