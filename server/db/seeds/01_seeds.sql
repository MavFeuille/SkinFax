DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS content_posts CASCADE;
DROP TABLE IF EXISTS favourites CASCADE;
DROP TABLE IF EXISTS followers CASCADE;
DROP TABLE IF EXISTS direct_messages CASCADE;
DROP TABLE IF EXISTS comments CASCADE;
DROP TABLE IF EXISTS likes CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
  profile_picture VARBINARY (max) 
);

CREATE TABLE content_posts (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  created timestamp default current_timestamp,
  description VARCHAR(1024) NOT NULL
);

CREATE TABLE favourites (
  id SERIAL PRIMARY KEY NOT NULL,
  content_post_id INTEGER REFERENCES content_posts(id) ON DELETE CASCADE,
);

CREATE TABLE followers (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
);

CREATE TABLE direct_messages (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  message VARCHAR(1024) NOT NULL
  created timestamp default current_timestamp
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  content_post_id INTEGER REFERENCES content_posts(id) ON DELETE CASCADE,
  created timestamp default current_timestamp
);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  comment_id INTEGER REFERENCES comments(id) ON DELETE CASCADE,
);

--how to add image/video content_posts db