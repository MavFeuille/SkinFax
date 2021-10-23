INSERT INTO users (id, username, email, password, result_id)
VALUES
(1, 'mario', 'mario@hotmail.com', '$2a$10$GbpxiC5B2.ab7v9hae.uruaMuI.8LVySWcgwSbPCEUMsyUT8hfJhG', 1), 
(2, 'luigi', 'luigi@deviantart.com', '$2a$10$GbpxiC5B2.ab7v9hae.uruaMuI.8LVySWcgwSbPCEUMsyUT8hfJhG', 2),
(3, 'Princess Peach', 'peach@gmail.com', '$2a$10$GbpxiC5B2.ab7v9hae.uruaMuI.8LVySWcgwSbPCEUMsyUT8hfJhG', 3);

INSERT INTO results (user_id, category_id)
VALUES 
(1,1), 
(2,2), 
(3,3);

INSERT INTO calendar_entries (user_id)
VALUES 
(1),
(2),
(3);

INSERT INTO categories (id, skin_type)
VALUES 
(1,'dry'),
(2,'oily'),
(3,'combination');


INSERT INTO forum_posts (user_id, categories_id, content)
VALUES 
(1, 1, 'This is a test post'),
(2, 2, 'This is another test'),
(3, 3, 'This is the next test');

INSERT INTO topics (categories_id)
VALUES 
(1),
(2),
(3);

-- stretch: user who created topic
