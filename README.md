# get-website-title

[![Build Status](https://travis-ci.org/wolfika/get-website-title.svg?branch=master)](https://travis-ci.org/wolfika/get-website-title)
[![codecov](https://codecov.io/gh/wolfika/get-website-title/branch/master/graph/badge.svg)](https://codecov.io/gh/wolfika/get-website-title)

Node.js module that retrieves the title of a website by URL.

## Prerequisites

- Node.js >=13
- npm or Yarn

## Installation

npm:

`npm install get-website-title`

Yarn:

`yarn add get-website-title`

## Usage

```javascript
import getWebsiteTitle from 'get-website-title'
// OR
//const getWebsiteTitle = require('get-website-title')

getWebsiteTitle('https://github.com').then((title) => {
  console.log(title)
})
```

## API

### getWebsiteTitle(url: string): Promise\<string\>

#### Parameters

- `url`: string<br>Fully qualified absolute URL of the website. Must start with `http://` or `https://`.

#### Returns

- `Promise<string>`<br>Promise that resolves to the website's parsed title as a string. Will be empty string if title could not be found or is empty.

## License

MIT © [Máté Farkas](https://github.com/wolfika)
