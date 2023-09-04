import { filteredPosts } from "@/atoms/postsAtom";
import Link from "next/link";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import Card from "./Card";
import { useRouter } from "next/router";

const PostsList: React.FC = () => {
  const filteredPostsData = useRecoilValue(filteredPosts);
  const [postIndex, setpostIndex] = useState(-1);
  const router = useRouter();
  const community = router.query.community;

  return (
    <ul className="sm:mt-4 lg:w-full">
      {filteredPostsData.map((post, index) => (
        <li key={post.id} onClick={() => setpostIndex(index)}>
          <Link href={`${community}/${index}`}>
            <Card post={post}/>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PostsList;
