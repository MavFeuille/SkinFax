INSERT INTO content_posts (
  user_id, description, image_video_url)
  VALUES (4, 'description new', 'new url')
  RETURNING *;
  