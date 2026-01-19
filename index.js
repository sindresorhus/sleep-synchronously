const buffer = new Int32Array(new SharedArrayBuffer(4));

export default function sleepSynchronously(milliseconds) {
	if (milliseconds <= 0) {
		return;
	}

	Atomics.wait(buffer, 0, 0, milliseconds);
}
