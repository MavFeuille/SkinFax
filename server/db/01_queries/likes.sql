-- How many users like this post
SELECT count(*) FROM likes
WHERE content_post_id = 1;

-- Who liked this post
SELECT username FROM users
JOIN likes ON users.id = user_id
WHERE content_post_id = 2;

-- Add like'
INSERT INTO likes (user_id, content_post_id, comment_id)
VALUES 
(1,2, NULL);

-- Remove Like
DELETE FROM likes
WHERE user_id = 1 AND content_post_id = 2;