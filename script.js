let timer = document.getElementById("timer");

setInterval(
	function () {
		let currentDate = new Date();

		timer.innerHTML = currentDate.toLocaleString();
	},1000
)
