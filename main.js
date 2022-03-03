// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

/* function panacekDoprava(udalost) {
	let panacek = document.getElementById("panacek");
	console.log(udalost);
	panacek.style.left = "100px";
}; */
let panacek = document.getElementById("panacek");


	window.addEventListener("load", ()=> {
		panacek.style.position = "absolute";
		panacek.style.left=10+"px";
		panacek.style.top=10+"px";
	});

window.addEventListener("keydown", (e) => {
	
		switch (e.key) {
			
	 		case "ArrowLeft":
				if (parseInt(panacek.style.left) >= 10 ) {panacek.style.left = parseInt(panacek.style.left) - 7 + "px";
				break;} 
				else {console.log("Tam nelze jít")}
			
				case "ArrowRight":
					if (parseInt(panacek.style.right) >= 10 ) {panacek.style.left = parseInt(panacek.style.left) + 7 + "px";
				break;}
				else {console.log("Tam nelze jít")}
			}

	if (parseInt(panacek.style.top) >= 10 ) {
			switch (e.key) {				
			case "ArrowUp":
				panacek.style.top = parseInt(panacek.style.top) - 7 + "px";
				break;
			case "ArrowDown":
				panacek.style.top = parseInt(panacek.style.top) + 7 + "px";
				break};
			} else {console.log("Tam nelze jít")};
			
		
});