import PostsList from "@/components/PostsList/PostsList";
import { useFetchSubdirPosts } from "@/hooks/useFetchPosts";
import { GetStaticPaths, GetStaticProps } from "next";

export default function Home() {
 
  return (
    <section className="flex flex-col h-screen px-20 items-center justify-center ">
     <h1>Welcome to Front-Reddit App</h1>
     <p>The was aimed to create a user-friendly web application that fetches and displays posts, comments from listed communities from Reddit. It utilizes a custom hooks to handle data fetching and state management. Users can view and interact with the search, left navigation bar, view individual post page, while the application handles error scenarios gracefully by displaying error status and redirecting to home page. Start exploring the post by using nav bar on the left side of the screen</p>
    </section>
  )
}

