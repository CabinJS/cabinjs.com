{
  title: "index",
  date:   "2013-12-15"
}

Simple and extensible static site generator powered by <a style="color: #E48632"href="http://gruntjs.com/">Grunt</a>.

# Getting started

To use Cabin you must have [Node.js](http://nodejs.org/), [Python](http://www.python.org/) (for [Pygments](http://pygments.org/)), and [Compass](http://compass-style.org/) installed.

First install Cabin and Grunt globally with this command:

```bash
npm install -g cabin grunt-cli  
```

Then scaffold a static site generator with the `cabin new` command:

```bash
cabin new blog CabinJS/Candy
```

The first parameter is the name of the destination folder, and the second is the GitHub username and repository name of a `theme` to use for the site. If the `theme` parameter is left blank, the [default theme](http://CabinJS.github.io/Candy/) will be used.

After scaffolding a site generator, you can run it by entering the project directory and running the default Grunt task with this command:

```bash
cd blog && grunt
```

This will build your site, start a static file server, open a browser tab with the site's homepage, and start a watch process to rebuild your site when source files change.

Try editing a [markdown](http://daringfireball.net/projects/markdown/syntax#block) file in the `posts` folder or CSS in the `src/styles` folder and upon saving, your site will automatically be rebuilt with the updated content or styles. When you edit markdown posts, your browser will automatically refresh to view new content, and when editing styles, the CSS will be injected directly into the page for an immediate update.

# Themes

Cabin themes provide styling and structure for your static site project. They work great out of the box and as starting points for more customized sites.

## Featured themes

<a class="theme-wrapper group" href="http://CabinJS.github.io/Candy/">
  <img class="theme-img" src="http://i.imgur.com/JKM27ib.png?1"/>
</a>

<a class="theme-wrapper group" href="http://CabinJS.github.io/Blok/">
  <img class="theme-img" src="http://i.imgur.com/CgppgNp.png"/>
</a>

<a class="theme-wrapper group" href="http://CabinJS.github.io/Canvas/">
  <img class="theme-img" src="http://i.imgur.com/nLkDQ08.png"/>
</a>

## Deployment

If you selected a deployment tool during the installation process, you can deploy your site with the `grunt deploy` command.

**Note: for Amazon S3 and FTP deployment, read the Gruntfile.js comment about how to configure your credentials.**

If you didn't select a deployment tool during the theme installation, you can add one later by following the [installation guide](https://github.com/CabinJS/Cabin/wiki/Deployment-Tools) in the wiki.

## Creating Themes

The best way to learn about how to develop a theme is by cloning the starter [Canvas theme](https://github.com/CabinJS/Canvas) and altering the below files to customize your theme.

### Theme file locations

Your theme must conform to the following folder structure in order to work with the Gruntfile that Cabin generates:
```
├── cabin.json
├── package.json
├── dist
│   └── Generated site files
├── posts
│   └── Sample markdown posts
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

### Configuring themes

The only files explicitly required are the `package.json` and `cabin.json` in the root of the theme repo. 

The `package.json` must list grunt-pages and cabin as hard dependencies(not devDependencies) to make sure the theme works with the user's currently running Cabin version, and that the correct grunt-pages version is installed with the theme.

The `cabin.json` file describes what CSS preprocessors and template engines that your theme supports as well as the configuration for [grunt-pages](https://github.com/CabinJS/grunt-pages). We currently support the EJS and Jade template engines and the Sass and LESS CSS preprocessors.

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
      "url": "posts/:title/"
    }
  }
}
```

### Testing your theme

To test your theme, run Cabin with the `--local` flag. For example if you had a theme in a folder called `themeFolder` and you wanted to make sure it was working properly, you would run the following command to install it locally into the `site` folder:

```bash
cabin new site themeFolder --local
```

Then you would run the following command to make sure the theme will work as expected for users once installed:

```bash
cd site && grunt
```