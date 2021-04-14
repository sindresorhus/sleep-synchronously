import test from 'ava';
import timeSpan from 'time-span';
import inRange from 'in-range';
import sleepSynchronously from './index.js';

test('main', t => {
	const end = timeSpan();
	sleepSynchronously(200);
	t.true(inRange(end(), {start: 190, end: 210}));
});
