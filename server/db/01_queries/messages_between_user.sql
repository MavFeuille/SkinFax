-- First user:
SELECT message, from_user_id, created
FROM direct_messages
JOIN users ON users.id = direct_messages.from_user_id
WHERE users.username = 'mario';

-- Second user:
Select message, to_user_id, created
FROM direct_messages
JOIN users ON users.id = direct_messages.to_user_id
WHERE users.username = 'luigi';

-- let gary double check