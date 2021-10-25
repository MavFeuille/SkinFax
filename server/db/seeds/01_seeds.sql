INSERT INTO users (id, username, name, email, password)
VALUES
(1, 'mario', 'mario@hotmail.com', '$2a$10$GbpxiC5B2.ab7v9hae.uruaMuI.8LVySWcgwSbPCEUMsyUT8hfJhG'), 
(2, 'luigi', 'luigi@deviantart.com', '$2a$10$GbpxiC5B2.ab7v9hae.uruaMuI.8LVySWcgwSbPCEUMsyUT8hfJhG'),
(3, 'Princess Peach', 'peach@gmail.com', '$2a$10$GbpxiC5B2.ab7v9hae.uruaMuI.8LVySWcgwSbPCEUMsyUT8hfJhG');

INSERT INTO content_posts (id, description
VALUES 
(1,'description 1'),
(2,'description 2'),
(3,'description 3');

INSERT INTO favourites (id, content_post_id)
VALUES 
(1,1), 
(2,2), 
(3,3);

INSERT INTO followers(id, user_id)
VALUES 
(1, 3),
(2, 1),
(3, 2);

INSERT INTO direct_messages (user_id, message)
VALUES 
(1, 'This is a test msg'),
(2, 'This is another test msg'),
(3, 'This is the last test msg');

INSERT INTO comments (user_id, content_post_id)
VALUES 
(1,3),
(2,1),
(3,2);

INSERT INTO likes (user_id, contentcontent_post_id, comment_id)
VALUES 
(1,3,2),
(2,1,3),
(3,2,4);

--inserting content image