import {expectType} from 'tsd';
import sleepSynchronously from './index.js';

expectType<void>(sleepSynchronously(200));
