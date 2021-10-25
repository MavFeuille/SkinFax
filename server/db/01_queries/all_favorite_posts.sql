
SELECT image_URL, description, created
FROM content_posts
JOIN favourites ON content_post_id = content_post.id
JOIN users ON favourites.user_id = users.id
WHERE users.id = 1
ORDER BY created DESC;