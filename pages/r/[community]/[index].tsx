import FullPost from "@/components/PostsList/FullPost";

import type { NextPage } from "next";

const FullPostPage: NextPage = () => {
  return (
    <section className="flex flex-col  md:flex-row w-full">
      <FullPost />
    </section>
  );
};
export default FullPostPage;
