#Building web applications with Python + Django

In this tutorial you will build a simplified Google+ clone called “Not Google Plus” with Django and AngularJS.

Before we hit the proverbial books and learn to build a rich, modern web application with Django and Angular, let's take a moment to explore the motivations behind this tutorial and how you can get the most out of it.

##What is the goal of this tutorial?

Here at Thinkster, we strive to create high value, in depth content while maintaining a low barrier to entry. We release this content for free with the hope that you find it both exciting as well as informative.

Each tutorial we release has a specific goal. In this tutorial, that goal is to give you a brief overview of how Django and AngularJS play together and how these technologies can be combined to build amazing web applications. Furthermore, we place a heavy emphasis on building good engineering habits. This includes everything from considering the tradeoffs that come from making architectural decisions, to maintaining high quality code throughout your project. While these things may not sound like fun, they are key to becoming a well-rounded software developer.

![Image](http://www.sublimetext.com/screenshots/new_theme_large.png)

##A brief interlude about formatting 

Throughout this tutorial, we strive to maintain consistent formatting. This section details what that formatting looks like and what it means.

```python
def is_this_google_plus():
    return False
```

    $ python manage.py runserver

##Show me the code

Some Python code
```python
from django.contrib.auth.models import AbstractBaseUser
from django.db import models

class Account(AbstractBaseUser):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=40, unique=True)

    first_name = models.CharField(max_length=40, blank=True)
    last_name = models.CharField(max_length=40, blank=True)
    tagline = models.CharField(max_length=140, blank=True)

    is_admin = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = AccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __unicode__(self):
        return self.email

    def get_full_name(self):
        return ' '.join([self.first_name, self.last_name])

    def get_short_name(self):
        return self.first_name
```

When Django 1.7 was released, it was like `Christmas` in September! Migrations had finally arrived!

Anyone with a background in `Rails` will find the concept of migrations familiar. In short, migrations handle the SQL needed to update the schema of our database so you don't have to. By way of example, consider the Account model we just created. These models need to be stored in the database, but our database doesn't have a table for Account objects yet. What do we do? We create our first migration! The migration will handle adding the tables to the database and offer us a way to rollback the changes if we make a mistake.

Read the original article on [Thinkster](https://thinkster.io/brewer/angular-django-tutorial/)