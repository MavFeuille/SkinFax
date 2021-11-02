import PostListItem from "./PostListItem";

export default function PostList(props) {
  // const [posts, setPosts] = useState(props.posts);
  const {followList, handleFollow, posts, addFavourite, deletePost, user} = props
  
  

  const allPosts = posts.map((post) => {
    return (
      <PostListItem
        key={post.post_id}
        created={post.created}
        username={post.username}
        description={post.description}
        deletePost={() => deletePost(post.id)}
        addFavourite={() => addFavourite(post.id)}
        isOwner={post.user_id === props.user.id}
        profilePictureUrl={post.profile_picture_url}
        imageVideoUrl={post.image_video_url}
        postId={post.post_id}
        user={user}
        creatorUserID={post.user_id}
        followList={followList}
        handleFollow={handleFollow}
        
      />
    );
  });

  return <div>{allPosts}</div>;
}
