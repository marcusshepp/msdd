
Eleventy seems awesome


It is a static site generator.

It seems simple to use.

It is very fast.

Seems like there is nothing that I want to do that I can't do with Eleventy.

Front matter:
there is a section at the top of the md files that
is called front matter.

---
title: "Eleventy seems awesome"
date: 2021-07-07
tags: eleventy, static site generator
customClass: "eleventy"
permalink: "/notes/eleventy/"
---

Linking from page to page:

# Docs
https://www.11ty.dev/docs

# Create a new Eleventy project
pnpm init
pnpm install @11ty/eleventy

# Searches the current directory, outputs to ./_site
pnpm exec eleventy

# `pnpm exec eleventy` is the same as:
pnpm exec eleventy --input=. --output=_site

# Add a web server to apply changes and
# refresh automatically. We’ll also --watch for you.
pnpm exec eleventy --serve

# Change the web server’s port—use localhost:8081
pnpm exec eleventy --serve --port=8081

# Watch and re-run when files change, without the web server.
pnpm exec eleventy --watch
