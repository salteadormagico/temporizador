document.addEventListener('DOMContentLoaded', function() {
	const numero = document.getElementById('num');
	let num = 0
	setInterval(() => numero.innerHTML = num++, 1000);
});