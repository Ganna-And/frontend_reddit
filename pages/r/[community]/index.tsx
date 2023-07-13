
import PostsList from "@/components/PostsList/PostsList";
import { useFetchSubdirPosts } from "@/hooks/useFetchPosts";
import type { NextPage } from "next";




const CommunityPage: NextPage  = () => {

  useFetchSubdirPosts();
 
  return (
    <section className="flex flex-col  md:flex-row">
      <PostsList/>
    </section>
  );
}
export default CommunityPage