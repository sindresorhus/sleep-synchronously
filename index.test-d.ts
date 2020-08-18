import {expectType} from 'tsd';
import sleepSynchronously = require('.');

expectType<void>(sleepSynchronously(200));
