
SELECT users.username as username, comments.comment, comments.created FROM users
JOIN comments ON comments.user_id = users.id
JOIN content_posts ON comments.content_post_id = content_posts.id
WHERE content_posts.id = 2
ORDER BY created DESC;


