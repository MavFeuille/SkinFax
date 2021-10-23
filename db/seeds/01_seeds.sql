INSERT INTO users (id, username, name, email, password)
VALUES
(1, 'mario', 'mario', 'mario@hotmail.com', '$2a$10$GbpxiC5B2.ab7v9hae.uruaMuI.8LVySWcgwSbPCEUMsyUT8hfJhG'), 
(2, 'luigi','luigi', 'luigi@deviantart.com', '$2a$10$GbpxiC5B2.ab7v9hae.uruaMuI.8LVySWcgwSbPCEUMsyUT8hfJhG'),
(3, 'Princess Peach', 'Princess Peach', 'peach@gmail.com', '$2a$10$GbpxiC5B2.ab7v9hae.uruaMuI.8LVySWcgwSbPCEUMsyUT8hfJhG');

INSERT INTO categories (id, skin_type)
VALUES 
(1,'dry'),
(2,'oily'),
(3,'combination');

INSERT INTO results (id, user_id, category_id)
VALUES 
(1,1,1), 
(2,2,2), 
(3,3,3);

INSERT INTO calendar_entries(id, user_id)
VALUES 
(1, 3),
(2, 1),
(3, 2);




INSERT INTO forum_posts (user_id, category_id, content)
VALUES 
(1, 1, 'This is a test post'),
(2, 2, 'This is another test'),
(3, 3, 'This is the next test');

INSERT INTO topics (category_id)
VALUES 
(1),
(2),
(3);

-- stretch: user who created topic
