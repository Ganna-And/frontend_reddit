import React from 'react';
import { FaSun } from 'react-icons/fa';
import { useRouter } from 'next/router';

type PostInfoProps = {
  post: any
};

const PostInfo: React.FC<PostInfoProps> = ({ post }) => {
  const router = useRouter();

  const handleCommunityClick = () => {
    // Use the router to redirect to the new path
    router.push(`/r/${post?.subreddit}`);
  };

  return (
    <div className='flex justify-center m-4'>
      {/* Use the router to redirect to the new path */}
      <button className='btn-post' onClick={handleCommunityClick}>
        {post?.subreddit}
      </button>
      <button className='btn-post'><p className="italic">posted by: {post?.author}</p></button>
    </div>
  )
}

export default PostInfo;
