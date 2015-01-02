#Markdown blog

This is just a blog platform where you can write your posts using markdown.

##Up and Running

First of all, you need install all dependencies.

    $ npm install

After installing dependencies, you can run the application by typing the next:
    
    $ node app.js

**Why supervisor and not node?** When starting the application with supervisor, you don't need to restart your server in every code change. It does it automatically.

In your browser, type:

    http://localhost:3000/


##Usage

Post are written in markdown and are hosted inside the **entries** directory.

Posts mus be properly placed according to their publication date, so you must have something like the following:

    2014/12/25/my-post.markdown

After placing your markdown file to the correspondent folder, you should change the file **entrieslist.js** hosted in the root. This file contains posts configurations, like the markdown filename, title and date.

Just insert a new line at the top of array according to the existing ones.

##More
The markdown files are just examples copied from blogs I read. Every post has a reference to the original article.

Built only for learning purpose.