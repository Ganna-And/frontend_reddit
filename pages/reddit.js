import React from 'react';
import Post from './post'

const Reddit = ({ posts }) => {
  return (
    <div>
      <h1>Reddit Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>(<Post post={post}/>)</li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  // Fetch data from Reddit API
  const response = await fetch('https://www.reddit.com/r/javascript.json');
  const data = await response.json();

  // Extract the necessary data
  const posts = data.data.children.map((child) => child.data);

  // Return the fetched data as props
  return {
    props: {
      posts,
    },
  };
}

export default Reddit;
