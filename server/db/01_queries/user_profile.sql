--- Display User's name and display picture in the profile
SELECT username, profile_picture_url, count(followers.follower_user_id) FROM users
WHERE users.id = 1;
-- JOIN content_posts ON content_posts.user_id = users.id

--- Display Luigi's name,Luigis'display picture, counts of followers, counts of people Luigi's following , count of Luigi's postin the profile
SELECT users.username, users.profile_picture_url, count(content_posts.user_id) as posts, count(followers.user_id) as followers FROM users
JOIN content_posts on content_posts.user_id = users.id
JOIN followers on followers.user_id = users.id
WHERE users.id = 3
GROUP BY users.id;

 

--- luigi is following 2 person
SELECT users.username, followers.* FROM users
JOIN followers ON followers.follower_user_id = users.id
WHERE users.id = 2;


SELECT users.username, count(followers.user_id) FROM users
JOIN followers ON followers.follower_user_id = users.id
WHERE users.id = 2
GROUP BY users.username;

--- no. of ppl follow me
SELECT users.username, count(followers.follower_user_id) FROM users
JOIN followers ON followers.follower_user_id = users.id
WHERE users.id = 2
GROUP BY users.username;


---- no. of ppl following luigi
SELECT users.username, followers.* FROM users
JOIN followers ON followers.user_id = users.id
WHERE users.id = 2;

SELECT users.username, count(followers.follower_user_id) FROM users
JOIN followers ON followers.user_id = users.id
WHERE users.id = 2
GROUP BY users.username;
 
-- JOIN content_posts ON content_posts.user_id = users.id
 

SELECT users.username, users.profile_picture_url, count(followers.follower_user_id) as following FROM users
JOIN followers on followers.follower_user_id = users.id
WHERE users.id = 3
GROUP BY users.id;
 

--
SELECT users.username, f.user_id, f2.follower_user_id FROM users
JOIN followers f ON f.follower_user_id = users.id
JOIN followers f2 ON f2.user_id = users.id
WHERE users.id = 2;

--- count followers and count following
SELECT users.username, count(DISTINCT f.user_id) as following, count(DISTINCT f2.follower_user_id) as follower, count(DISTINCT content_posts.id) as posts FROM users
JOIN followers f ON f.follower_user_id = users.id
JOIN followers f2 ON f2.user_id = users.id
JOIN content_posts on content_posts.user_id = users.id
WHERE users.id = 2
GROUP BY users.username;

---- >>>>>> shows username, follwing, follower, posts <<<<<<< -----
SELECT users.username, f.user_id, f2.follower_user_id, count(DISTINCT content_posts.id) as post FROM users
JOIN followers f ON f.follower_user_id = users.id
JOIN followers f2 ON f2.user_id = users.id
JOIN content_posts on content_posts.user_id = users.id
WHERE users.id = 2;

-- Display all the posts that the user created
SELECT * FROM content_posts
WHERE user_id = 1
ORDER BY created DESC;

-- display uer's profile page all-in-one
SELECT username, profile_picture_url, content_posts.image_video_url, content_posts.description, content_posts.created FROM users
JOIN content_posts ON content_posts.user_id = users.id
WHERE users.id = 1
ORDER BY created DESC;
