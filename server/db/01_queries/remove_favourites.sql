DELETE FROM favourites
WHERE user_id = 2 AND favourites.id = 4;

//---------
DELETE FROM likes
WHERE user_id = 1 AND content_post_id = 2;