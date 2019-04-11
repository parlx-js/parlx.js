# parlx.js Changelog

### [CHANGELOG.md for v1 here](https://github.com/JB1905/parlx.js/blob/v1/CHANGELOG.md)

## 2.0.4 (2019-04-11)
#### Bug Fix
- fixed a problem with incorrect scrolling behavior in the Edge browser

## 2.0.1 / 2.0.2 / 2.0.3 (2019-03-21)
#### Bug Fix
- fixed CDN undefined bug

## 2.0.0 beta 3 / 2.0.0 (2019-03-06)
#### Bug Fix
- auto init is active only if element with `data-parlx` exists

#### Improvement
- create `.parlx-children` if not exists

#### Change
- reenabled auto init
- reenabled jQuery support

## 2.0.0 beta 2 (2019-01-17)
#### Breaking Changes
- splitted `options` prop into `settings` and `methods`

#### Temporary Changes (reverted in 2.0.0 beta 3)
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
