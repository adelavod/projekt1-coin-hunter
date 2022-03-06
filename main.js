// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program


	window.addEventListener("load", ()=> {
let panacek = document.getElementById("panacek");

		panacek.style.position = "absolute";
	panacek.style.left= 10+"px";
	panacek.style.top= 50+"px";

	});

window.addEventListener("keydown", (e) => {
	let panacek = document.getElementById("panacek");
	let hlaska = "Tam nelze jít";
	
		switch (e.key) {
			
	 		case "ArrowLeft":
				if (parseInt(panacek.style.left) > 7 ) {
					panacek.style.left = parseInt(panacek.style.left) - 7 + "px";
				} 
				else {panacek.style.left=7+"px";
					console.log(hlaska)};
				break;
			
			case "ArrowRight":
				if (parseInt(panacek.style.left) < (parseInt(window.innerWidth)-70) ) {
					panacek.style.left = parseInt(panacek.style.left) + 7 + "px";
				}
				else {console.log(hlaska)};
			break;
			
			case "ArrowUp":
				if (parseInt(panacek.style.top) > 50 ) {
					panacek.style.top = parseInt(panacek.style.top) - 7 + "px";
				}
				else {console.log(hlaska)};
			break;

			case "ArrowDown":
				if (parseInt(panacek.style.top) < (parseInt(window.innerHeight)-90) ) {
					panacek.style.top = parseInt(panacek.style.top) + 7 + "px";
				}
				else {console.log(hlaska)};
			break;
				}
			});