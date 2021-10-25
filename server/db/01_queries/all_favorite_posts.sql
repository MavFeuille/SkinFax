
SELECT description, created
FROM content_posts
JOIN favourites ON content_post_id = content_posts.id
JOIN users ON favourites.user_id = users.id
WHERE users.id = 3
ORDER BY created DESC;