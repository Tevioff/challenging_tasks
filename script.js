const car = document.getElementById('car');
const car1 = document.getElementById('car1');

let count = 0;
let idInterval;
let active = true;

const speedAnimation = () => {
	count++;
	idInterval = requestAnimationFrame(speedAnimation);
	if (count < 710) {
		car.style.left = count * 3.4 + 'px';
		car1.style.left = count * 3 + 'px';
	} else {
		cancelAnimationFrame(idInterval);
	}
};
speedAnimation();
document.addEventListener('click', () => {
	if(active) {
		cancelAnimationFrame(idInterval);
		active = false;
	} else {
		idInterval = requestAnimationFrame(speedAnimation);
		active = true;
	}
});