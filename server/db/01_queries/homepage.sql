 SELECT users.username, f.user_id, f2.follower_user_id, content_posts.image_video_url, content_posts.description, content_posts.created
 FROM users
 JOIN followers f ON f.follower_user_id = users.id
 JOIN followers f2 ON f2.user_id = users.id
 JOIN content_posts on content_posts.user_id = users.id
 WHERE users.id = 2
 GROUP BY users.username;