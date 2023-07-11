import { atom, selector } from "recoil";

export interface Post {
  id: string;
  title: string;
  selftext: string;
  author: string;
  created_utc: number;
  score: number;
  num_comments: number;
  downs: number;
  isSelected: boolean;
}



export const postsState = atom<Post[]>({
  key: "postsState",
  default: [],
});

export const selectedPostState = atom<string >({
  key:'selectedPostState',
  default: ''
})

export const selectedPosts = selector({
  key: 'selectedPosts',
  get: ({ get }) => {
    const posts = get(postsState);
    const selectedPost = get(selectedPostState)

    return posts.filter(
      (post) => post.id === selectedPost
       
    );
  },
});

export const commentsState = atom<any[]>({
  key: 'commentsState',
  default: [],
});



/* 
export const communityState =atom({
  key:'communityState',
  default:''
});
 */
/* export const fetchInitialPosts = selector({
  key: 'fetchInitialPosts',
  get: async({ get, set }) => {
     try{
      const response = await fetch(`https://www.reddit.com/r/javascript.json`);
      const data = await response.json();
      const posts = data?.data?.children?.map((child: any) => child.data) ||[];
      set(postsState, posts)
    return posts}
      catch(error:any){
        console.log(error.message)
      }
  }
}) */

/* export const subredditPostsSelector = selector({
  key: 'subredditPostsSelector',
  get: ({ get }) => {
    const community = get(communityState)
    const fetchPostsData = async (community:string) => {
    try{const response = await fetch(`https://www.reddit.com/r/${community}.json`);
      const data = await response.json();
      const posts = data?.data?.children?.map((child: any) => child.data);
      console.log(posts)
    // Perform any computation or filtering on the fetched posts
    // Return the desired value
    return posts;
  }
    catch(error:any){
      console.log(error.message)
      return [];
    }
  }
  return fetchPostsData(community)
}
}); */

export const searchTermState = atom({
  key: 'searchTermState', 
  default: ''
});

export const filteredPosts = selector({
  key: 'filteredPosts',
  get: ({ get }) => {
    const posts = get(postsState);
    const term = get(searchTermState).toLowerCase();

    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(term) ||
        post.selftext.toLowerCase().includes(term)
    );
  },
});

