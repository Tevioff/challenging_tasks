const input = document.getElementById('input');
const p = document.getElementById('p');

const print = () => {
	p.textContent = '';
	p.textContent += input.value;
};

const debounce = function (f, t) {
	return function () {
		let previousCall = this.lastCall;
		this.lastCall = Date.now();

		if (previousCall && ((this.lastCall - previousCall) <= t)) {
			clearTimeout(this.lastCallTimer);
		}
		this.lastCallTimer = setTimeout(f, t);
	};
};

input.addEventListener('input', debounce(print, 300));