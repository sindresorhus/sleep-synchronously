# sleep-synchronously [![Build Status](https://travis-ci.com/sindresorhus/sleep-synchronously.svg?branch=master)](https://travis-ci.com/github/sindresorhus/sleep-synchronously)

> Block the main thread for a given amount of time

This is similar to a native [`sleep()`](https://linux.die.net/man/3/sleep) function you can find in many other languages.

**This is the wrong tool for most tasks!** Prefer using async APIs whenever possible. This package can be useful in tests if you need to wait on some resource, for example, where you know it only takes 1 second but there's no good way to detect when it's ready.

This package is better than many other similar packages as it's not a native Node.js addon, but instead uses modern JavaScript features.

## Install

```
$ npm install sleep-synchronously
```

## Usage

```js
const sleepSynchronously = require('sleep-synchronously');

console.log(new Date());
//=> Sun Aug 16 2020 14:28:54 GMT+0200 (Central European Summer Time)

sleepSynchronously(2000);

console.log(new Date());
//=> Sun Aug 16 2020 14:28:56 GMT+0200 (Central European Summer Time)
```

## API

### sleepSynchronously(milliseconds)

Block the main thread for the given amount of milliseconds.

No other code will execute while it's sleeping, not even asynchronous code.

## Related

- [delay](https://github.com/sindresorhus/delay) - Delay a promise a given amount of time
- [make-synchronous](https://github.com/sindresorhus/make-synchronous) - Make an asynchronous function synchronous
