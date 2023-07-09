import { atom, selector } from "recoil";

export const postsState = atom<any[]>({
  key: "postsState",
  default: [],
});

export const fetchPosts = selector<any[]>({
  key: "fetchPosts",
  get: async ({ get }) => {
    const response = await fetch("https://www.reddit.com/r/javascript.json");
    const data = await response.json();
    return data.data.children.map((child: any) => child.data);
  },
});







