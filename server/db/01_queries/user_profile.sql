--- Display User's name and display picture in the profile
SELECT username, profile_picture_url FROM users
JOIN content_posts ON content_posts.user_id = users.id;

-- Display all the posts that the user created
SELECT * FROM content_posts
WHERE user_id = 1;