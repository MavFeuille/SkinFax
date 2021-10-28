SELECT users.username as username, comments.comment, comments.created FROM comments
JOIN content_posts ON content_post_id = content_posts.id
JOIN users ON content_posts.user_id = users.id
WHERE content_posts.id = 2
ORDER BY created DESC;