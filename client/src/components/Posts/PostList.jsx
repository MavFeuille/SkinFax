import axios from "axios";
import { useState, useEffect } from "react";
import PostListItem from "./PostListItem";

export default function PostList(props) {
  const { posts, addFavourite, deletePost } = props;

  const allPosts = posts.map((post) => {
    return (
      <PostListItem
        key={post.content_post_id}
        created={post.created}
        username={post.username}
        description={post.description}
        deletePost={() => deletePost(post.id)}
        addFavourite={() => addFavourite(post.id)}
        isOwner={post.id === props.user.id}
        profilePictureUrl={post.profile_picture_url}
        imageVideoUrl={post.image_video_url}
        postId={post.content_post_id}
        user={props.user}
      />
    );
  });

  return <div>{allPosts}</div>;
}
