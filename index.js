const reusedBuf = new Int32Array(new SharedArrayBuffer(4));
export default function sleepSynchronously(milliseconds) {
	if (milliseconds <= 0) return;
	Atomics.wait(reusedBuf, 0, 0, milliseconds);
}
