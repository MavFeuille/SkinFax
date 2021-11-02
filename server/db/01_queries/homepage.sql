-- SELECT users.username, content_posts.image_video_url, content_posts.description, content_posts.created FROM users
-- JOIN followers f ON f.follower_user_id = users.id
-- JOIN followers f2 ON f2.user_id = users.id
-- JOIN content_posts on content_posts.user_id = users.id
-- WHERE users.id = 2
-- GROUP BY users.username;

SELECT users.username, content_posts.image_video_url, content_posts.description, content_posts.created
FROM content_posts
JOIN users on content_posts.user_id = users.id
JOIN followers on followers.follower_user_id = users.id
WHERE followers.follower_user_id = 2
GROUP BY users.username
ORDER BY created DESC;


SELECT users.username as username, image_video_url, description, created 
FROM content_posts
JOIN users ON content_posts.user_id = users.id
JOIN followers ON content_posts.user_id = followers.user_id
WHERE content_posts.user_id = 1
ORDER BY created DESC;

SELECT DISTINCT users.username as username, posts.id, posts.description
FROM followers
JOIN users ON followers.follower_user_id = users.id
JOIN content_posts as posts ON posts.user_id = followers.follower_user_id;



