![CF](https://i.imgur.com/7v5ASc8.png)  Lab 12: REST and APIs
=======
[![Build Status](https://travis-ci.org/codefellows-seattle-301d4/12-REST-and-APIs.svg?branch=master)](https://travis-ci.org/codefellows-seattle-301d4/12-REST-and-APIs) [![GitHub issues](https://img.shields.io/badge/Issues%3F-Ask%20for%20Help!-orange.svg)](https://github.com/codefellows/seattle-301d4/issues/new)

Now that we understand how applications can handle different URLs, we can write code that communicates with other applications.

## TODOs - User Stories: MVP
 1. As a developer, I want to treat my GitHub repositories as a resource (with full MVC components), so that I can manage them within my blog.
  - You already have an `aboutController.js`,
  - so we need to add a `repo.js` model file,
  - and a `repoView.js` presentation layer.
  - GitHub API credentials should be stored in a local file (`githubToken.js`), but not committed to GitHub. Use `.gitignore` to prevent the file from being tracked (get help in lab if you don't know how to use `.gitignore`).
 - As the site owner, I want to highlight certain repos on my `/about` page so that everyone can see the great projects I am working on.
  - Retrieve and manipulate repo info in your model file.
  - You can choose exactly what API end point to use.
  - Craft an API query to return repos that you want to highlight.
  - Build out a Handlebars template in your view file to display these repos.

## Stretch goals
 1. As the site owner, I want my lists of GitHub activity well designed, so visitors like looking at my page.
  - Start with a wireframe sketch of how you'd like the page to looking
  - Apply styles, as you've learned: icons, typography, colors, etc.
 1. As the site owner, I also want to show off other recent GitHub activity, so that everyone knows how active I am on GitHub.
  - Get creative with the data available to you via the GitHub API!
  - Want to create links to your gists?
  - Maybe highlight your GitHub followers, or whom you follow?

## Technical Requirements and Grading Rubric
 - Ensure your code passes ESLint.
 - Place all code within the proper layer of MVC abstraction and encapsulation.
 - Use an authenticated ajax call to GitHub's API to get your repos.
 - DO NOT publish your GitHub Token to any public repo.
