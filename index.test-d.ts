import {expectType} from 'tsd';
import sleepSynchronously from './index.js';

// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
expectType<void>(sleepSynchronously(200));
