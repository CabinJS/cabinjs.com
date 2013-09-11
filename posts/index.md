----
title: index
date:   2013-12-15
----
# Getting started

To use Cabin you must have [Node.js](http://nodejs.org/), [Python 2.7](http://www.python.org/) (for [Pygments](http://pygments.org/)), and [Compass](http://compass-style.org/) installed.

First install Cabin and Grunt globally with this command:

<textarea readonly class="cli-code">npm install -g cabin grunt-cli</textarea>

Then scaffold a static site generator with the `cabin new` command:

<textarea readonly class="cli-code">cabin new blog CabinJS/Candy</textarea>

The first parameter is the name of the destination folder, and the second is the GitHub username and repository name of a `theme` to use for the site. If the `theme` parameter is left blank, the [default theme](http://CabinJS.github.io/Candy/) will be used.

After scaffolding a site generator, you can run it by entering the project directory and running the default Grunt task with this command:

<textarea readonly class="cli-code">cd blog && grunt</textarea>

This will build your site, start a static file server, open a browser tab with the site's homepage, and start a watch process to rebuild your site when source files change.

Try editing a markdown file in the `posts` folder or css in the `src/styles` folder and upon saving, your site will automatically be rebuilt with the updated content/styles. When you edit markdown, your browser will automatically refresh to view new content, and when editing styles, they will be injected directly into the page for an immediate update.

# Themes

Cabin themes provide styling and structure for your static site project. They work great out of the box and as starting points for more customized sites.

## Featured themes

<a class="theme-wrapper group" href="http://CabinJS.github.io/Candy/">
  <img class="theme-img" src="./images/Candy.jpg"/>
</a>

## Recommended Deployment Tools

### GitHub Pages

When deploying to GitHub pages, use the [grunt-gh-pages](https://github.com/tschaub/grunt-gh-pages) plugin.

### Amazon S3

When deploying to Amazon S3, use the [grunt-s3](https://github.com/pifantastic/grunt-s3) plugin.

## Creating Themes

### Configuration

The only files explicitly required are `package.json` and `cabin.json` in the root of the repo. The package.json must list grunt-pages and cabin as hard dependencies to make sure the theme works with the user's currently running Cabin version, and that the correct grunt-pages version is installed.

The cabin.json file describes what CSS preprocessors and template engines that your theme supports as well as the configuration for [grunt-pages](https://github.com/CabinJS/grunt-pages). We currently support EJS and Jade template engines and the Sass and LESS preprocessors.

Here is an example `cabin.json` file which states that the project supports Sass, Jade, and has the specified config for the grunt-pages task:
```json
{
  "CSSPreprocessor": [
    "Sass"
  ],
  "templateEngine": [
    "Jade"
  ],
  "gruntPagesConfig": {
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

Your theme must conform to the following folder structure in order to work with the Gruntfile that Cabin generates:
```
├── cabin.json
├── package.json
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

### Testing your theme

To test your theme, run Cabin with the `--local` flag. For example if you had a theme in a folder called `themeFolder` and you wanted to make sure it was working properly, you would run the following command to install it locally into the `site` folder:

<textarea readonly class="cli-code">cabin new site themeFolder --local</textarea>


Then you would run the following command to make sure the theme will work as expected for users once installed:

<textarea readonly class="cli-code">cd site && grunt</textarea>

The best way to learn about how to develop a theme is by referencing the [default theme](https://github.com/CabinJS/Candy).
