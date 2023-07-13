
import { filteredPosts, postsState } from "@/atoms/postsAtom";
import FullPost from "@/components/PostsList/FullPost";
import PostsList from "@/components/PostsList/PostsList";
import { useFetchComments, useFetchSubdirPosts } from "@/hooks/useFetchPosts";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useActionData } from "react-router-dom";
import { useRecoilValue } from "recoil";




const FullPostPage: NextPage  = () => {
  
  return (
    <section className="flex flex-col  md:flex-row">
  <FullPost />
    </section>
  );
}
export default FullPostPage