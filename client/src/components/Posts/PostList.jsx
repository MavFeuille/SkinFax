import PostListItem from "./PostListItem";

export default function PostList(props) {
  // const [posts, setPosts] = useState(props.posts);
  const { addFollower, removeFollower, followList, posts, addFavourite, deletePost, user } = props;
  // console.log("🚀 ~ file: PostList.jsx ~ line 6 ~ PostList ~ posts", posts)
  // console.log("🚀 ~ file: PostList.jsx ~ line 6 ~ PostList ~ user", user)
  
  console.log("🚀 ~ file: PostList.jsx ~ line 6 ~ PostList ~ followList", followList)

  const allPosts = posts.map((post) => {
    return (
      <PostListItem
        key={post.post_id}
        created={post.created}
        username={post.username}
        description={post.description}
        deletePost={() => deletePost(post.id)}
        addFavourite={() => addFavourite(post.id)}
        isOwner={post.user_id === user.id}
        profilePictureUrl={post.profile_picture_url}
        imageVideoUrl={post.image_video_url}
        postId={post.post_id}
        user={user}
        creatorUserID={post.user_id}
        followList={followList}
        removeFollower={removeFollower}
        addFollower={addFollower}
      />
    );
  });

  return <div>{allPosts}</div>;
}
