import React, { useState, useEffect } from "react";
import PostsList from "@/components/PostsList/PostsList";
import { useFetchSubdirPosts } from "@/hooks/useFetchPosts";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const textToType = `
    This is a user-friendly web application that fetches and displays posts and comments from listed communities on Reddit. Start exploring 
    the posts by using the navigation bar on the left side of the screen.`;

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < textToType.length) {
        setTypedText((prevText) => prevText + textToType.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Adjust typing speed here (in milliseconds)
    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <section className="flex flex-col h-screen items-center justify-start">
      <h1
        className="text-[4rem] hidden lg:block "
        style={{
          textShadow:
            "0 -40px 100px, 0 0 2px, 0 0 2em #3F3B6C, 0 0 0.01em , 0 0 0.07em #000, 0 15px 5px #000",
        }}
      >
        FrontEND RedDit
      </h1>
      <div className="flex">
        <p className="px-3 text-sm lg:text-xl lg:w-[60%] font-typewriter lg:mt-[7rem]">
          {typedText}
        </p>
        <img
          src="homeImg.png.png"
          className="absolute right-0 bottom-0"
          alt=""
        />
      </div>
    </section>
  );
}
