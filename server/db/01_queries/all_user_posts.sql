SELECT image_URL, description, created
FROM content_posts
JOIN users ON content_post.user_id = users.id
WHERE users.id = 1
ORDER BY created DESC;