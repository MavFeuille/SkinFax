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

-- query for message all-in-one

SELECT message, from_user_id, to_user_id, created
FROM direct_messages
JOIN users u_1 ON u_1.id = direct_messages.from_user_id
JOIN users u_2 ON u_2.id = direct_messages.to_user_id
WHERE u_1.username = 'luigi' AND u_2.username = 'Princess Peach';