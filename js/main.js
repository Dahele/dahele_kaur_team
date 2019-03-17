(() => {
	let toHarwin = document.querySelector(".changeH"),
		toPrabh = document.querySelector(".changeP");

	function changeH() {
		document.getElementById("memberImg1").src="images/hh.jpg";
		document.querySelector(".partNo1").classList.add("hidden");
		document.querySelector(".partNo2").classList.remove("hidden");
		document.querySelector(".changeMyText").textContent="CHANGE TO PRABHJOT";
		document.querySelector(".buttonH").classList.add("hidden");
		document.querySelector(".buttonP").classList.remove("hidden");
	}

	toHarwin.addEventListener("click", changeH);

	function changeP() {
		document.getElementById("memberImg1").src="images/pp.jpg";
		document.querySelector(".partNo2").classList.add("hidden");
		document.querySelector(".partNo1").classList.remove("hidden");
		document.querySelector(".changeMyText").textContent="CHANGE TO HARWINDER";
		document.querySelector(".buttonH").classList.remove("hidden");
		document.querySelector(".buttonP").classList.add("hidden");
	}

	toPrabh.addEventListener("click", changeP);


})();