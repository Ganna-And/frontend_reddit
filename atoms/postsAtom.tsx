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
  subreddit:string;
  permalink:string;
}




export const postsState = atom<Post[]>({
  key: "postsState",
  default: [],
});

export const selectedIndexState = atom<number>({
  key:'selectedPostState',
  default: -1
})


export const commentsState = atom<any[]>({
  key: 'commentsState',
  default: [],
});

export const getPost = selector({
  key: 'getPost',
  get: ({ get }) => {
    const posts = get(postsState);
    const selectedIndex = get(selectedIndexState)

    return posts[selectedIndex]}
});


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

export const communityState = atom<string>({
  key:'communityState',
  default:'javascript'
});
