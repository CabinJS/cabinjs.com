----
title: index
date:   2013-12-15
----
# Getting started

First install Cabin and Grunt globally with this command:

<textarea readonly class="cli-code">npm install -g cabin grunt-cli</textarea>

Then scaffold a static site generator with the `cabin new` command:

<textarea readonly class="cli-code">cabin new myBlog colinwren/Candy</textarea>

The first parameter is the name of the destination folder, and the second is the GitHub username and repository name of a `theme` to use for the site. If the `theme` parameter is left blank, the [default theme](http://colinwren.github.io/Candy/) will be used.

After scaffolding a site generator, you can run it by entering the project directory and running the default Grunt task with this command:

<textarea readonly class="cli-code">cd myBlog && grunt</textarea>

This will build your site, start a static file server, open a browser tab with the site's homepage, and start a watch process to rebuild your site when source files change. Try editing or creating a new markdown file in the `posts` folder and upon saving, your site will automatically be rebuilt. When your site rebuilds, your browser will automatically refresh with your updated site.

# Themes

Cabin themes provide styling and structure for your static site project. They work great out of the box and as starting points for more customized sites.

## Featured themes

<a class="theme-wrapper group" href="http://colinwren.github.io/Candy/">
  <span class="theme-name">Candy</span>
  <img class="theme-img" src="./images/Candy.jpg"/>
</a>

<a class="theme-wrapper group" href="http://colinwren.github.io/Blok/">
  <img class="theme-img" src="./images/Blok.jpg"/>
  <span class="theme-name">Blok</span>
</a>

## Recommended Deployment Tools

### GitHub Pages

When deploying to GitHub pages, use the [grunt-gh-pages](https://github.com/tschaub/grunt-gh-pages) plugin.

### Amazon S3

When deploying to Amazon S3, use the [grunt-s3](https://github.com/pifantastic/grunt-s3) plugin.

## Creating Themes

### Configuration

The only file explicitly required is a `cabin.json` configuration in the root of the repo. This file describes what CSS preprocessors and template languages that your theme supports as well as the configuration for [grunt-pages](https://github.com/CabinJS/grunt-pages). We currently support EJS and Jade templates and the Sass and LESS preprocessors.

Here is an example `cabin.json` file which states that the project supports Sass, Jade, and has the specified config for the grunt-pages task:
```json
{
  "style": [
    "Sass"
  ],
  "template": [
    "Jade"
  ],
  "gruntPages": {
    "posts": {
      "src": "posts",
      "dest": "dist",
      "layout": "src/layouts/post.jade",
      "url": "blog/posts/:title"
    }
  }
}
```
**Note: the configuration of the cabin.json must have `dist` as the destination folder and the theme files must match the folder structure described below.**

### Theme file locations

Your theme must conform to the following folder structure in order to work with the Gruntfile that Cabin generates.
```
├── cabin.json
├── dist
│   └── Generated site files
├── posts
│   └── Sample posts
└── src
    ├── images
    │   └── Theme image files
    ├── layouts
    │   └── Theme layout templates
    ├── pages
    │   └── Theme page templates
    └── scripts
    │   └── Theme JavaScripts
    └── styles
        └── Theme stylesheets
```

The best way to learn about how to develop a theme is by referencing the [default theme](https://github.com/colinwren/Candy).
