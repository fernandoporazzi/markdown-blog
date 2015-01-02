#CSS The Right Way

There’s a lot of obsolete information about HTML and CSS and how to do websites, many are outdated, whereas other more current are either too deep into technicalities or just in need to be found.

##Extending a theme using shorthand and longhand
In most condition, the ideal premise is to see all element as a module and extend variants.

To illustrate this, imagine you want a type of block to set text content in. Content can be (only) a blog post introduction text, a code-snippet, a picture.

Let’s nicknamme it `”marble”` (as for the example), each of them needs different styling but some of it has common styling effects.

```css
/* a contrasting color to the background slate */
.marble {
  border:1px solid white;
  padding:25px;
  background:url(marble.png) #FFF repeat;
}
```

The previous could be a base module to use. Further down the project you could have “theme” section that takes care of the project specific theme.

```css
/* use: <div class="marble marble-code">Hello world</div> */
.marble-code {
  font-family: sans-serif;
}
```

##Colors

When a color consists of three pairs of hexadecimal digits, you can omit one digit from each pair

```css
/* longhand */
color: #000000;
color: #336699;
color: #0099CC;

/* shorthand */
color: #000;
color: #369;
color: #09C;
```

##A Common mistake
Unfortunately, a common mistake is that people simply copy-paste code from project to project without real version scheme or version control mechanisms at all (e.g. Git, Subversion). From a set of personnal, mixed with some other project’s source.

Carrying practices and “dead-wood” code alone every project, without follow up from the author or the source.

Although source-control is suggested, the essential to remember is to *not modify* external libraries. But merely extend and adapt; this is where CSS parsers comes in handy (more on this later).

Original article in [http://htmlcsstherightway.org/](http://htmlcsstherightway.org/)