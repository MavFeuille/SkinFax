# SkinFax

## Features
- quiz
- quiz_results
- users
- forums
- calendar

## Routes
- get/homepage
  - quiz
  - user (if logged in)

- get/quiz
  - quiz questions

- get/quiz_results 
  - results of user's skin type
  - recommendation

- get/user (profile)
  - user name
  - user email
  - user's skin type
  - user's latest quiz result
  - recommendation

- get/user/calendar
- post/user/calendar

- get/forum_index
  - list of posts that different users created

- get/forum_post
  - 1 single forum post
  - title
  - show creator's name & time
  - all comments

- post/forum_post (submitting a single post)
- post/forum_post/comments

Quiz-DB stetup- 
takes (id, result_id)co
questions and answers
ex.  quiz id 2 -> renders content from results WHERE id=2 (for oily)

results will use UNION ALL potentially to select from users annd reults separately w/o JOIN

---------------------------------------
Routes:

/forum
Should take me to page with topics
Include title
 Post
Image
When a topic is clicked it should go to /forum/topic/:id
Include topic: title, post, image, time created, creators name
Comments
Buttons on the side of the main forum page will include categories
Can filter topics based on categories
/forum/dry_skin or /forum/1
/forum/oily_skin or /forum/2
/profile
/profile/settings > edit profile page/delete profile page
/profile/results > reveal results
/profile/calendar
/quiz


