/**
Block the main thread for the given amount of milliseconds.

No other code will execute while it's sleeping, not even asynchronous code.

@example
```
import sleepSynchronously from 'sleep-synchronously';

console.log(new Date());
//=> Sun Aug 16 2020 14:28:54 GMT+0200 (Central European Summer Time)

sleepSynchronously(2000);

console.log(new Date());
//=> Sun Aug 16 2020 14:28:56 GMT+0200 (Central European Summer Time)
```
*/
export default function sleepSynchronously(milliseconds: number): void;
