
import Navbar from "@/components/Navbar/Navbar";
import SwitchTheme from "@/components/Navbar/SwitchTheme";
import PostsList from "@/components/PostsList/PostsList";
import CollapseSubdir from "@/components/SubdirList/CollapseSubdir";
import SubdirList from "@/components/SubdirList/SubdirList";
import {  useFetchSubdirPosts } from "@/hooks/useFetchPosts";

export default function Home() {
/* useFetchPostsEffect(); */

/* const communityList = ['javascript', 'tailwind', 'next', 'recoilhacks', 'react', 'reduxjs', 'node', 'Firebase', 'cssnews', 'typescript'];

useFetchSubdirPosts(community) */
 
  return (
    <main className="flex flex-col  md:flex-row">
      <section className="invisible h-0 md:flex-col md:visible md:w-1/3  ">
      <SubdirList/>
      </section>
      <section className="visible w-full md:visible md:w-0">
        <CollapseSubdir />
      </section>
      <PostsList />
    </main>
  );
}
