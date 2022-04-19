const car = document.getElementById('car');
const car1 = document.getElementById('car1');
const car3 = document.getElementById('car3');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');




let count = 0;
let idInterval;
let active = true;

const speedAnimation = () => {
	count++;
	idInterval = requestAnimationFrame(speedAnimation);
	if (count < 710) {
		car.style.left = count * 3.1 + 'px';
		car1.style.left = count * 3.5 + 'px';
		car3.style.left = count * 3 + 'px';

	} else {
		cancelAnimationFrame(idInterval);
	}
};
speedAnimation();
pause.addEventListener('click', () => {
	if(active) {
		cancelAnimationFrame(idInterval);
		active = false;
	} else {
		idInterval = requestAnimationFrame(speedAnimation);
		active = true;
	}
});

reset.addEventListener('click', () => {
	count = 0;
});