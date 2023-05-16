import { useSelector } from "react-redux";

import React from "react";

const PostsList = () => {
  const posts = useSelector((state) => state.posts);

  const renderedPosts = posts.map((post) => (
    <article>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section key={post.id}>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
