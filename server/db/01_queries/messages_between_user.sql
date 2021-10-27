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
--from_user_id = sender
--to_user_id = receiver

SELECT *
FROM direct_messages
INNER JOIN(                                     
SELECT MAX(id) as id FROM (
SELECT MAX(id) as id, from_user_id as contact
FROM direct_messages
WHERE to_user_id = 2
GROUP BY from_user_id
UNION ALL
SELECT MAX(id) as id, to_user_id as contact
FROM direct_messages
WHERE from_user_id = 3
GROUP BY to_user_id
) t GROUP BY contact
) d
ON direct_messages.id = d.id
ORDER BY created DESC;



-- users u_1 ON u_1.id = direct_messages.from_user_id
-- JOIN users u_2 ON u_2.id = direct_messages.to_user_id
-- WHERE u_1.username = 'luigi' AND u_2.username = 'Princess Peach';