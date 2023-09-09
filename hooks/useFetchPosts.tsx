import { useEffect } from 'react';
import {useSetRecoilState } from 'recoil';
import { postsStateAtom } from '../atoms/postsAtom';
import { commentsState } from '../atoms/postsAtom';
import { useRouter } from 'next/router';


export const useFetchSubdirPosts = () => {
  const setPosts = useSetRecoilState(postsStateAtom);
  const router = useRouter();
  const community = router.query
 
  useEffect(() => {
  const fetchPostsData = async () => {
    try {
  const response = await fetch(`https://www.reddit.com/r/${community.community}.json`);
  if(!response.ok){
    throw new Error(`Failed to fetch subreddit posts. Status: ${response.status}`)
  }
  const data = await response.json();
  const posts = data?.data?.children?.map((child: any) => child.data);
  // Update the Recoil state with the fetched posts
  setPosts(posts);
    } catch (error:any) {
      console.error('Error fetching subreddit posts:', error.message); 
    }
  
  };
    fetchPostsData();
  }, [setPosts, community]);
};


export const useFetchComments = (permalink:any) => {
  const setComments = useSetRecoilState(commentsState);
 

  useEffect(() => {
    const fetchCommentsData = async () => {
      try {
        const response = await fetch(`https://www.reddit.com/${permalink}.json`);
        const data = await response.json();
        console.log(data)
        const comments = data[1].data.children.map((child:any) => child.data);
        setComments(comments)
        console.log(comments);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchCommentsData();
  }, [setComments]);
};