
SELECT image_video_url, description, created, users.username
FROM content_posts
JOIN favourites ON favourites.content_post_id = content_posts.id
JOIN users ON content_posts.user_id = users.id
WHERE favourites.user_id = 3
ORDER BY created DESC;