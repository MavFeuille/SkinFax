INSERT INTO users ( username, email, password, profile_picture_url, is_active)
VALUES
( 'mario', 'mario@hotmail.com', '$2a$10$GbpxiC5B2.ab7v9hae.uruaMuI.8LVySWcgwSbPCEUMsyUT8hfJhG', 'https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2021/03/mario-hero.jpg', TRUE), 
('luigi', 'luigi@deviantart.com', '$2a$10$GbpxiC5B2.ab7v9hae.uruaMuI.8LVySWcgwSbPCEUMsyUT8hfJhG', 'https://ssb.wiki.gallery/images/6/67/Luigi_SSBB.jpg', TRUE),
('Princess Peach', 'peach@gmail.com', '$2a$10$GbpxiC5B2.ab7v9hae.uruaMuI.8LVySWcgwSbPCEUMsyUT8hfJhG', 'https://pbs.twimg.com/profile_images/1317551648617730048/JY6m4Hfh.jpg', TRUE);

INSERT INTO content_posts (user_id, image_video_url, description)
VALUES 
(2, 'url','description 1'),
(3, 'url', 'description 2'),
(1, 'url', 'description 3'),
(1, 'url', 'description 4');

INSERT INTO favourites (user_id, content_post_id)
VALUES 
(1,2), 
(2,3), 
(3,1);

INSERT INTO followers(follower_user_id, user_id)
VALUES 
(1, 3),
(2, 1),
(3, 2);


INSERT INTO direct_messages (to_user_id, from_user_id, message)
VALUES 
(1,2, 'This is a test msg'),
(2,3, 'This is another test msg'),
(3,1, 'This is the last test msg');

INSERT INTO comments (user_id, comment, content_post_id)
VALUES 
(1,'comment 1', 3),
(2,'comment 2',1),
(3,'comment 3',2);

INSERT INTO likes (user_id, content_post_id, comment_id)
VALUES 
(1,3,2),
(2,1,3),
(3,2,1);

--inserting content image via 3rd party ting