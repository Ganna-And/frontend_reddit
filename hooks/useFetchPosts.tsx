import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { postsState } from '../atoms/postsAtom'

/* export const useFetchPostsEffect = () => {
  const setPosts = useSetRecoilState(postsState);

  useEffect(() => {
    const fetchPostsData = async () => {
      const response = await fetch('https://www.reddit.com/r/javascript.json');
      const data = await response.json();
      const posts = data?.data?.children?.map((child: any) => child.data);
      // Update the Recoil state with the fetched posts
      setPosts(posts);
    };
    fetchPostsData();
  }, [setPosts]);
}; */

export const useFetchSubdirPosts = (community:string) => {
  const setPosts = useSetRecoilState(postsState);

  useEffect(() => {
    const fetchPostsData = async () => {
      const response = await fetch(`https://www.reddit.com/r/${community}.json`);
      const data = await response.json();
      const posts = data?.data?.children?.map((child: any) => child.data);
      // Update the Recoil state with the fetched posts
      setPosts(posts);
    };
    fetchPostsData();
  }, [setPosts, community]);
};

