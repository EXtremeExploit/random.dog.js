<div align="center">
  <p>
    <a href="https://www.npmjs.com/package/random.dog.js"><img src="https://img.shields.io/npm/v/random.dog.js.svg" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/random.dog.js"><img src="https://img.shields.io/npm/dt/random.dog.js.svg" alt="NPM downloads" /></a>
    <a href="https://travis-ci.org/hydrabolt/random.dog.js"><img src="https://travis-ci.org/hydrabolt/random.dog.js.svg" alt="Build status" /></a>
  </p>
</div>

## About
random.dog.js is a  [node.js](https://nodejs.org) module that allows you to interact with the
[random.dog API](http://random.dog) very easily.

- Predictable abstractions

## Installation

`npm install random.dog.js --save`

## Example usage
```js
const randomCat = require('random.dog.js');
const randomCatApi = randomCat.api();

randomCatApi.getDog().then((dog) => console.log(cat.url))
```
