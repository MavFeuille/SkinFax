-- Follow a new user
INSERT INTO followers (id, follower_user_id, user_id)
VALUES (5, 1, 2);

-- Listing all the followers username
SELECT username FROM users
JOIN followers ON users.id = follower_user_id
WHERE user_id = 3;
--prints luigi/mario

-- Listing all the usernames that the user is FOLLOWING
SELECT username FROM users
JOIN followers ON users.id = user_id
WHERE follower_user_id = 3;
--prints princess peach

-- List all the posts that the user is following
SELECT users.username as following_users, image_video_url, description, created FROM content_posts
JOIN users ON content_posts.user_id = users.id
JOIN followers ON followers.user_id = users.id 
WHERE followers.follower_user_id = 1
ORDER BY created DESC;