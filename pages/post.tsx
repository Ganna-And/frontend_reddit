import React from 'react';

type PostProps = {
  post: {
    title: string;
    author: string;
    date: string;
    author_fullname: string;
  };
};

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>
        <strong>Author: </strong>
        {post.author}
      </p>
      <p>
        <strong>Date: </strong>
        {post.date}
      </p>
      <p>
        <strong>Author Fullname: </strong>
        {post.author_fullname}
      </p>
    </div>
  );
};

export default Post;
