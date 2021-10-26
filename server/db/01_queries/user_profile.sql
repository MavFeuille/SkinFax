--- Display User's name and display picture in the profile
SELECT username, profile_picture_url FROM users
-- JOIN content_posts ON content_posts.user_id = users.id
WHERE users.id = 1;

-- Display all the posts that the user created
SELECT * FROM content_posts
WHERE user_id = 1
ORDER BY created DESC;

-- display uer's profile page all-in-one
SELECT username, profile_picture_url, content_posts.image_video_url, content_posts.description, content_posts.created FROM users
JOIN content_posts ON content_posts.user_id = users.id
WHERE users.id = 1
ORDER BY created DESC;
