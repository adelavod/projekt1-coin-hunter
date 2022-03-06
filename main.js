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

let mince = document.getElementById("mince");
mince.style.position = "absolute";


zobrazMinci();
});

function zobrazMinci() {
	let mince = document.getElementById("mince");
	// minceX, minceY - náhodné souřadnice pro zobrazení v okně
	let minceX = 10+(Math.ceil(Math.random()*(parseInt((window.innerWidth-110))))); // minceX vrací random číslo mezi 0 a šířkou okna 
	let minceY = 50+(Math.ceil(Math.random()*(parseInt((window.innerHeight-90))))); // minceY vrací random číslo mezi 0 a šířkou okna
	console.log(minceX, minceY);
	
	mince.style.left = minceX+"px";
	mince.style.top = minceY+"px";
};



window.addEventListener("keydown", (e) => {
	let panacek = document.getElementById("panacek");
	let mince = document.getElementById("mince");
	let hlaska = "Tam nelze jít";
	let x = parseInt(panacek.style.left);
	let y = parseInt(panacek.style.top);
	let panacekSirka = document.getElementById("panacek").width;
	let panacekVyska = document.getElementById("panacek").height;
	let minceSirka = document.getElementById("mince").width;
	let minceVyska = document.getElementById("mince").height;
	let minceX = parseInt(mince.style.left);
	let minceY = parseInt(mince.style.top);

	
if (!((x + panacekSirka < minceX) || (minceX + minceSirka < x) || (y + panacekVyska < minceY) || (minceY + minceVyska < y))) {
	console.log("HURÁ");
};
	
	
	switch (e.key) {
			
	 		case "ArrowLeft":
				 panacek.setAttribute('src','obrazky/panacek-vlevo.png');
				if (parseInt(x) > 7 ) {
					x = parseInt((x - 7) + "px");} 
				else {x=parseInt(7+"px");
					console.log(hlaska)};
				break;
			
			case "ArrowRight":
				panacek.setAttribute('src','obrazky/panacek-vpravo.png');
				if (parseInt(x) < (parseInt(window.innerWidth)-70) ) {
					x = parseInt((x + 7) + "px");
				}
				else {console.log(hlaska)};
			break;
			
			case "ArrowUp":
				panacek.setAttribute('src','obrazky/panacek-nahoru.png');
				if (parseInt(y) > 50 ) {
					y = parseInt((y - 7) + "px");
				}
				else {console.log(hlaska)};
			break;

			case "ArrowDown":
				panacek.setAttribute('src','obrazky/panacek.png');
				if (parseInt(y) < (parseInt(window.innerHeight)-80) ) {
					y = parseInt((y + 7) + "px");
				}
				else {console.log(hlaska)};
			break;
		}
panacek.style.left = x + "px";
panacek.style.top = y + "px";

console.log(panacekSirka, panacekVyska, minceSirka, minceVyska, minceX, minceY, x, y);
			});