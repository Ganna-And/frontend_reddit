
import Navbar from "@/components/Navbar/Navbar";
import SwitchTheme from "@/components/Navbar/SwitchTheme";
import PostsList from "@/components/PostsList/PostsList";
import CollapseSubdir from "@/components/SubdirList/CollapseSubdir";
import SubdirList from "@/components/SubdirList/SubdirList";
import {  useFetchSubdirPosts } from "@/hooks/useFetchPosts";

export default function Home() {
 
  return (
    <main className="flex flex-col  md:flex-row">
      <section className="invisible h-0 md:flex-col md:visible md:w-1/5 md:ml-10 md:mt-32 md:bg-gradient-to-r from-primary via-accent to-secondary">
      <SubdirList/>
      </section>
      <section className="visible w-full mt-24  md:visible md:w-0 ">
        <CollapseSubdir />
      </section>
      <PostsList />
    </main>
  );
}
