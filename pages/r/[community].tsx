import PostsList from "@/components/PostsList/PostsList";

export default function Home() {
 
  return (
    <section className="flex flex-col  md:flex-row">
      <PostsList />
    </section>
  );
}
