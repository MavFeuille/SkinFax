INSERT INTO users (id, username, name, email, password, profile_picture_URL)
VALUES
(1, 'mario', 'mario@hotmail.com', '$2a$10$GbpxiC5B2.ab7v9hae.uruaMuI.8LVySWcgwSbPCEUMsyUT8hfJhG', 'https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2021/03/mario-hero.jpg', TRUE), 
(2, 'luigi', 'luigi@deviantart.com', '$2a$10$GbpxiC5B2.ab7v9hae.uruaMuI.8LVySWcgwSbPCEUMsyUT8hfJhG', 'https://ssb.wiki.gallery/images/6/67/Luigi_SSBB.jpg', TRUE),
(3, 'Princess Peach', 'peach@gmail.com', '$2a$10$GbpxiC5B2.ab7v9hae.uruaMuI.8LVySWcgwSbPCEUMsyUT8hfJhG', 'https://pbs.twimg.com/profile_images/1317551648617730048/JY6m4Hfh.jpg', TRUE);

INSERT INTO content_posts (id, user_id, description, image_video_URL*)
VALUES 
(1,2,'description 1','url'),
(2,3,'description 2','url'),
(3,1,'description 3','url');

INSERT INTO favourites (id, user_id content_post_id)
VALUES 
(1,1,2), 
(2,2,3), 
(3,3,1);

INSERT INTO followers(id, user_id)
VALUES 
(1, 3),
(2, 1),
(3, 2);

INSERT INTO direct_messages (to_user_id, from_user_id, message)
VALUES 
(1,2, 'This is a test msg'),
(2,3, 'This is another test msg'),
(3,1, 'This is the last test msg');

INSERT INTO comments (user_id, content_post_id)
VALUES 
(1,3),
(2,1),
(3,2);

INSERT INTO likes (user_id, content_post_id, comment_id)
VALUES 
(1,3,2),
(2,1,3),
(3,2,1);

--inserting content image via 3rd party ting