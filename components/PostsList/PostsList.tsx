import React , {useState} from 'react';
import Card from './Card';
import { useRecoilValue } from 'recoil';
import { Post, filteredPosts } from '@/atoms/postsAtom';
import Link from 'next/link';
import CardFull from './CardFull';


const PostsList: React.FC = () => {
  const filteredPostsData = useRecoilValue(filteredPosts);

  const [selectedPost, setSelectedPost] = useState(null);

const  handleClick =(post:any)=>{
  setSelectedPost(
    post
   )
}

  return (
   
      !selectedPost ?
    <ul className="container w-full px-5 py-2 flex flex-col md:w-3/4 md:mr-10 md:mt-14">
      {filteredPostsData.map((post) => (
        <li key={post.id} onClick={()=>handleClick(post)}>
         {/*  <Link href={`r/[post]`}> */}
              <Card post={post} />
         {/*  </Link> */}
        </li>
      ))}
    </ul>  :
    <CardFull post={selectedPost} />
   
  );
};

export default PostsList;
