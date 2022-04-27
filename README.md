* Scrollable
* Parallax

# Future Plan 
+ Parallax Template
    - Background. 
+ Custom Domain

##  Grand Plan (Original; it does not affect changes already made)
Theme Inspired: SNL and Gotham

1. Header
    - Include each Section below
    
2. Home
    - Hello and Name, Email, Skills
    - Make texts appear like Drone 

3. Projects
    - Grid: 3 in only one row 
    - Additional projects will be slide on click

4. About Me
    - Intro, Experience, Fun Pictures
    - My favorite Quotes, musics, and movies 

5. Contacts (Back to Header) 


# Some Commands 
sqlite3  db.sqlite3
.tables
w.headers on
select * from projects_project;

# Resources 

Examples 
- Portfolio example
    - https://amananku26.github.io/#home
    - https://portfolio-neelbavarva.vercel.app/
- Parallax Template
    - https://codepen.io/samdbeckham/pen/OPXPNp
    - Just bunch of png? How do I do the mountain background? 
    - https://medium.com/@hamstu/recreating-the-firewatch-parallax-effect-213694d42f4e

- Scrollable javascript 
    - https://github.com/ahmed-eidd/Ibrahim-Portfolio/blob/master/index.html


# Features Added/Removed
+. Scrollable 
    - Section & Link?    
    = 

+ For Home, make texts appear like in Matrix 
    = Done; had to just render one character at a time using css/javascript

- Scrolling will make it go left or right
    => Can this be done
    => Cancelled. This hurts the eye actually especially carouseling a large display
    
+ Clicking Navigation or Scroll up/down to switch pages 
    - Scroll if scrollValue > 15
    - If other way, flip scrollingDown and reset scrollValue
    - If scrollValue and scrollingDown matches, flip slides
    = Done. 

+ Decide which projects will go on here
    - For old projects, just create a docx file for explanation
    = Done

+ Might replace About page for Contact page 
    = Cancelled Contact Page and added to About 