# parlx.js Changelog

## 2.0.0 beta 2 (2019-01-17)
#### Breaking Changes
- splitted `options` prop into `settings` and `methods`

#### Temporary Changes (Will be reverted in the next betas)
- disabled auto init
- disabled jQuery support

#### Repository Changes
- updated npm scripts
- cleaned up Webpack config
- removed unused dependencies

#### Bug Fix
- fixed `window is not defined`
- fixed `global` error (CDN)

## 2.0.0 beta 1 (2018-12-10)
#### New Feature
- added destroy method
- added new callbacks: `onInit`, `onDestroy`

#### Breaking Changes
- improved plugin init process

#### Internal
- renamed method `settings()` to `extendSettings()` to avoid conflict with variable `settings`

#### Repository Changes
- added Travis CI config
- added Prettier config
- added ESLint config

## 1.4.1 (2018-11-11)
#### Bug Fix
- fixed bug with `window` global variable in Node.js

## 1.4.0 beta 2 / 1.4.0 (2018-10-16)
#### Documentation
- updated comments
- updated README.md

## 1.4.0 beta 1 (2018-10-14)
#### Breaking Changes
- replaced `mobile` option with `exclude` (disable parallax effect on selected user agents)
- `parlx-children` class is required for elements inside the parallax container

## 1.3.1 (2018-09-04)
#### Documentation
- updated README.md

## 1.3.1 beta 1 (2018-09-02)
#### New Feature
- new callbacks: `onScroll`, `onResize`

#### Dependencies
- updated Babel to `^7.0.0` stable
- updated babel-plugin-add-module-exports to `^0.3.3`
- updated Webpack to `^4.17.1`
- updated babel-loader to `^8.0.0` stable

#### Repository Changes
- removed map for production version

## 1.3.0 (2018-07-16)
#### Repository Changes
- switched from Gulp to Webpack
- updated Babel to v7
- only 2 dist version
- changed main file from parlx.js to parlx.min.js
- moved demo to gh-pages branch

## 1.2.0 beta 2 / 1.2.0 (2018-07-05)
#### New Feature
- added support for all HTML5 tags as parallax div children

## 1.2.0 beta 1 (2018-06-12)
#### New Feature
- re-added support for background-image

#### Bug Fix
- partly fixed bug with image scaling

## 1.1.0 rc 1 / 1.1.0 (2018-04-30)
#### Documentation
- updated comments

## 1.1.0 beta 4 (2018-04-14)
#### Change
- re-added support for image tag as a background
- renamed jQuery plugin from Parlx() to parlx()
- renamed type option values (`back` to `background` and `front` to `foreground`)

#### New Feature
- added autoinit
- added parlxMove event

#### Bug Fix
- fixed parallax background size bug
- fixed bug with autoinit in Node.js
- fixed bug with jQuery and Node.js compatibility

## 1.1.0 beta 3 (2018-03-30)
#### New Feature
- npm added

## 1.1.0 beta 2 (2018-03-29)
#### New Feature
- AMD & CommonJS support added

## 1.1.0 beta 1 (2018-01-26)
#### New Feature
- new parallax directions (`horizontal` and `diagonal`)
- new option (type: `front` / `back`)

## 1.0.1 (2017-12-06)
#### Bug Fix
- Single parallax element error fixed
