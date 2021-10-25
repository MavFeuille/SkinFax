SELECT description, created
FROM content_posts
JOIN users ON content_posts.user_id = users.id
WHERE users.id = 1
ORDER BY created DESC;