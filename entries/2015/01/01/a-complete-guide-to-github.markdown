#A complete guide to GitHub

GitHub is more than just a programmer's tool. If you want to collaborate on anything, you should give it a try. Part 1 of a two-part look at getting started with GitHub.

Thank famed software developer Linus Torvalds for Git, the software that runs at the heart of GitHub. (And while you’re at it, go ahead thank him for the Linux operating system, too.) Git is version control software, which means it manages changes to a project without overwriting any part of that project. And it’s not going away anytime soon, particularly since Torvalds and his fellow kernel developers employ Git to help develop the core kernel for Linux.

Why use something like Git? Say you and a coworker are both updating pages on the same website. You make your changes, save them, and upload them back to the website. So far, so good. The problem comes when your coworker is working on the same page as you at the same time. One of you is about to have your work overwritten and erased.

A version control application like Git keeps that from happening. You and your coworker can each upload your revisions to the same page, and Git will save two copies. Later, you can merge your changes together without losing any work along the way. You can even revert to an earlier version at any time, because Git keeps a “snapshot” of every change ever made.

The problem with Git is that it’s so ancient that we have to use the command line—or Terminal if you’re a Mac user—in order to access it, typing in snippets of code like ‘90s hackers. This can be a difficult proposition for modern computer users. That’s where GitHub comes in.

GitHub makes Git easier to use in two ways. First, if you [download the GitHub software](https://github.com/) to your computer, it provides a visual interface to help you manage your version-controlled projects locally. Second, creating an account on GitHub.com brings your version-controlled projects to the Web, and ties in social network features for good measure.

##Words People Use When They Talk About Git

In this tutorial, there are a few words I’m going to use repeatedly, none of which I'd heard before I started learning. Here’s the big ones:

**Command Line:** The computer program we use to input Git commands. On a Mac, it’s called Terminal. On a PC, it’s a non-native program that you download when you download Git for the first time (we’ll do that in the next section). In both cases, you type text-based commands, known as prompts, into the screen, instead of using a mouse.

**Repository:** A directory or storage space where your projects can live. Sometimes GitHub users shorten this to “repo.” It can be local to a folder on your computer, or it can be a storage space on GitHub or another online host. You can keep code files, text files, image files, you name it, inside a repository.

**Commit:** This is the command that gives Git its power. When you commit, you are taking a “snapshot” of your repository at that point in time, giving you a checkpoint to which you can reevaluate or restore your project to any previous state.

**Branch:** How do multiple people work on a project at the same time without Git getting them confused? Usually, they “branch off” of the main project with their own versions full of changes they themselves have made. After they’re done, it’s time to “merge” that branch back with the “master,” the main directory of the project.

##Git-Specific Commands

Since Git was designed with a big project like Linux in mind, there are a lot of Git commands. However, to use the basics of Git, you’ll only need to know a few terms. They all begin the same way, with the word “git.”

- **git init** - Initializes a new Git repository. Until you run this command inside a repository or directory, it’s just a regular folder. Only after you input this does it accept further Git commands.

- **git config** - Short for “configure,” this is most useful when you’re setting up Git for the first time.

- **git help** - Forgot a command? Type this into the command line to bring up the 21 most common git commands. You can also be more specific and type “git help init” or another term to figure out how to use and configure a specific git command.

- **git status** - Check the status of your repository. See which files are inside it, which changes still need to be committed, and which branch of the repository you’re currently working on.

- **git add** - This does not add new files to your repository. Instead, it brings new files to Git’s attention. After you add files, they’re included in Git’s “snapshots” of the repository.

- **git commit** - Git’s most important command. After you make any sort of change, you input this in order to take a “snapshot” of the repository. Usually it goes:
    
    `git commit -m “Message here.”`

- **git branch** - Working with multiple collaborators and want to make changes on your own? This command will let you build a new branch, or timeline of commits, of changes and file additions that are completely your own. Your title goes after the command. 

- **git push** - If you’re working on your local computer, and want your commits to be visible online on GitHub as well, you “push” the changes up to GitHub with this command.

Read the full article on [readwrite](http://readwrite.com/2013/09/30/understanding-github-a-journey-for-beginners-part-1)
