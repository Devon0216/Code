import { countdown } from './timer.mjs';
import { sessionTime } from './timer.mjs';

let seconds = 57;
sessionTime(seconds);

console.log(countdown());
setInterval(countdown, 1000);