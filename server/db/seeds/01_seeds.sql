INSERT INTO users ( username, email, password, profile_picture_url, is_active)
VALUES
( 'mario', 'mario@hotmail.com', '$2a$10$GbpxiC5B2.ab7v9hae.uruaMuI.8LVySWcgwSbPCEUMsyUT8hfJhG', 'https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2021/03/mario-hero.jpg', TRUE), 
('luigi', 'luigi@deviantart.com', '$2a$10$GbpxiC5B2.ab7v9hae.uruaMuI.8LVySWcgwSbPCEUMsyUT8hfJhG', 'https://ssb.wiki.gallery/images/6/67/Luigi_SSBB.jpg', TRUE),
('Princess Peach', 'peach@gmail.com', '$2a$10$GbpxiC5B2.ab7v9hae.uruaMuI.8LVySWcgwSbPCEUMsyUT8hfJhG', 'https://pbs.twimg.com/profile_images/1317551648617730048/JY6m4Hfh.jpg', TRUE),
('sunflower_girl', 'daisy_keech@gmail.com', '$2a$10$GbpxiC5B2.ab7v9hae.uruaMuI.8LVySWcgwSbPCEUMsyUT8hfJhG', 'https://pbs.twimg.com/profile_images/1317551648617730048/JY6m4Hfh.jpg', TRUE),
('pretty_boi20', 'la_boy@gmail.com', '$2a$10$GbpxiC5B2.ab7v9hae.uruaMuI.8LVySWcgwSbPCEUMsyUT8hfJhG', 'https://pbs.twimg.com/profile_images/1317551648617730048/JY6m4Hfh.jpg', TRUE),
('tom_the.cat', 'tom_hates_jerry@gmail.com', '$2a$10$GbpxiC5B2.ab7v9hae.uruaMuI.8LVySWcgwSbPCEUMsyUT8hfJhG', 'https://pbs.twimg.com/profile_images/1317551648617730048/JY6m4Hfh.jpg', TRUE),
('leslie_29', 'leslie_29@gmail.com', '$2a$10$GbpxiC5B2.ab7v9hae.uruaMuI.8LVySWcgwSbPCEUMsyUT8hfJhG', 'https://pbs.twimg.com/profile_images/1317551648617730048/JY6m4Hfh.jpg', TRUE),
('amy_winehouse21', 'thesinger@gmail.com', '$2a$10$GbpxiC5B2.ab7v9hae.uruaMuI.8LVySWcgwSbPCEUMsyUT8hfJhG', 'https://pbs.twimg.com/profile_images/1317551648617730048/JY6m4Hfh.jpg', TRUE),
('football_islyfe', 'tom_john@gmail.com', '$2a$10$GbpxiC5B2.ab7v9hae.uruaMuI.8LVySWcgwSbPCEUMsyUT8hfJhG', 'https://pbs.twimg.com/profile_images/1317551648617730048/JY6m4Hfh.jpg', TRUE),
('hello_its_me', 'anonymous12@gmail.com', '$2a$10$GbpxiC5B2.ab7v9hae.uruaMuI.8LVySWcgwSbPCEUMsyUT8hfJhG', 'https://pbs.twimg.com/profile_images/1317551648617730048/JY6m4Hfh.jpg', TRUE),
('heyysammie12', 'sammie_sweetheart@gmail.com', '$2a$10$GbpxiC5B2.ab7v9hae.uruaMuI.8LVySWcgwSbPCEUMsyUT8hfJhG', 'https://pbs.twimg.com/profile_images/1317551648617730048/JY6m4Hfh.jpg', TRUE),
('cutiepie_girl67', 'patricia_67@gmail.com', '$2a$10$GbpxiC5B2.ab7v9hae.uruaMuI.8LVySWcgwSbPCEUMsyUT8hfJhG', 'https://pbs.twimg.com/profile_images/1317551648617730048/JY6m4Hfh.jpg', TRUE),
('cool_cat', 'cattie89@gmail.com', '$2a$10$GbpxiC5B2.ab7v9hae.uruaMuI.8LVySWcgwSbPCEUMsyUT8hfJhG', 'https://pbs.twimg.com/profile_images/1317551648617730048/JY6m4Hfh.jpg', TRUE),
('peaches_cream', 'peachgirl23@gmail.com', '$2a$10$GbpxiC5B2.ab7v9hae.uruaMuI.8LVySWcgwSbPCEUMsyUT8hfJhG', 'https://pbs.twimg.com/profile_images/1317551648617730048/JY6m4Hfh.jpg', TRUE),
('love_myself_amy', 'amy.smith@gmail.com', '$2a$10$GbpxiC5B2.ab7v9hae.uruaMuI.8LVySWcgwSbPCEUMsyUT8hfJhG', 'https://pbs.twimg.com/profile_images/1317551648617730048/JY6m4Hfh.jpg', TRUE),
('kanye_west', 'kanye_west@gmail.com', '$2a$10$GbpxiC5B2.ab7v9hae.uruaMuI.8LVySWcgwSbPCEUMsyUT8hfJhG', 'https://pbs.twimg.com/profile_images/1317551648617730048/JY6m4Hfh.jpg', TRUE),
('KimmyKW', 'kim_kardashian@gmail.com', '$2a$10$GbpxiC5B2.ab7v9hae.uruaMuI.8LVySWcgwSbPCEUMsyUT8hfJhG', 'https://pbs.twimg.com/profile_images/1317551648617730048/JY6m4Hfh.jpg', TRUE),
('lovelovesjoe', 'lovejoe@gmail.com', '$2a$10$GbpxiC5B2.ab7v9hae.uruaMuI.8LVySWcgwSbPCEUMsyUT8hfJhG', 'https://pbs.twimg.com/profile_images/1317551648617730048/JY6m4Hfh.jpg', TRUE);

INSERT INTO content_posts (id, user_id, image_video_url, description)
VALUES 
(1,1, 'url','For me, money is not my definition of success. Inspiring people is a definition of success.'),
(2,2, 'url', 'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.'),
(3,3, 'url', 'Coming together is a beginning; keeping together is progress; working together is success.'),
(4,4, 'url', 'However difficult life may seem, there is always something you can do and succeed at.'),
(5,5, 'url', 'I still think I am the greatest.'),
(6,6, 'url', 'Keep your nose out the sky, keep your heart to god, and keep your face to the raising sun.'),
(7,7, 'url', 'If you have the opportunity to play this game of life you need to appreciate every moment. a lot of people don’t appreciate the moment until it’s passed.'),
(8,8, 'url', 'I feel like I’m too busy writing history to read it.'),
(9,9, 'url', 'Know your worth! People always act like they’re doing more for you than you’re doing for them.'),
(10,10, 'url', 'My message isn’t perfectly defined. I have, as a human being, fallen to peer pressure.'),
(11,11, 'url', 'If I was just a fan of music, I would think that I was the number one artist in the world.'),
(12,12, 'url', 'You don’t have to be scared of me, because I am loyal. Why are people so scared of creative ideas and so scared of truth? All I want to do is do good.'),
(13,13, 'url', 'You don’t have to be scared of me, because I am loyal. Why are people so scared of creative ideas and so scared of truth? All I want to do is do good.'),
(14,14, 'url', 'You don’t have to be scared of me, because I am loyal. Why are people so scared of creative ideas and so scared of truth? All I want to do is do good.'),
(15,15, 'url', 'You don’t have to be scared of me, because I am loyal. Why are people so scared of creative ideas and so scared of truth? All I want to do is do good.'),
(16,16, 'url', 'You don’t have to be scared of me, because I am loyal. Why are people so scared of creative ideas and so scared of truth? All I want to do is do good.'),
(17,17, 'url', 'You don’t have to be scared of me, because I am loyal. Why are people so scared of creative ideas and so scared of truth? All I want to do is do good.'),
(18,18, 'url', 'You don’t have to be scared of me, because I am loyal. Why are people so scared of creative ideas and so scared of truth? All I want to do is do good.');

INSERT INTO favourites (user_id, content_post_id)
VALUES 
(1,2), 
(2,3), 
(3,1),
(3,1),
(3,1),
(3,2),
(3,3),
(3,4),
(3,5),
(3,6),
(3,7),
(3,8),
(3,8),
(3,8),
(3,3),
(3,2),
(3,12),
(3,5),
(3,3),
(3,3),
(3,2),
(3,7);

INSERT INTO followers(follower_user_id, user_id)
VALUES 
(1, 3),
(2, 1),
(2, 3),
(3, 2),
(3, 4),
(3, 5),
(6, 3),
(7, 4),
(4, 7),
(5, 12),
(5, 13),
(5, 7),
(6, 2),
(7, 8),
(9, 9),
(10, 2),
(12, 4),
(13, 4),
(12, 3),
(14, 10),
(12, 10);


INSERT INTO direct_messages (to_user_id, from_user_id, message)
VALUES 
(1,2, 'hey hows it going'),
(2,3, 'omg guess what happened at work today!'),
(3,2, 'i love the new song that just came out today by kanye west!'),
(2,3, 'what are you up to'),
(4,5, 'i need a job asap!'),
(6,7, 'im so bored at work today!'),
(9,8, 'hihi!'),
(8,9, 'omg guess what!'),
(5,4, 'im pregnant!'),
(3,2, 'lets go see a movie today!'),
(7,5, 'whats that movie called again?!'),
(9,3, 'come over for dinner tonight!'),
(10,5, 'i love to eat salad!'),
(12,11, 'im so upset today!'),
(13,13, 'omg guess what happened at work today!'),
(14,6, 'i forgot my lunch at home and now i will starve');

INSERT INTO comments (user_id, comment, content_post_id)
VALUES 
(1,'comment 1', 3),
(2,'comment 2',1),
(3,'comment 3',2),
(4,'comment 4',2),
(4,'comment 5',2),
(2,'comment 6',2),
(6,'comment 7',3),
(7,'comment 8',3),
(8,'comment 9',8),
(3,'comment 10',8),
(4,'comment 11',8),
(5,'comment 12',9),
(3,'comment 13',10),
(1,'comment 14',12),
(7,'comment 15',4),
(8,'comment 16',4),
(9,'comment 17',5),
(5,'comment 18',4),
(6,'comment 19',3),
(7,'comment 20',3),
(3,'comment 21',2),
(10,'comment 22',1),
(13,'comment 23',1),
(12,'comment 24',8);

INSERT INTO likes (user_id, content_post_id, comment_id)
VALUES 
(1,3,2),
(2,1,3),
(3,2,1),
(1,3,3);

--inserting content image via 3rd party ting