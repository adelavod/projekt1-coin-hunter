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
	panacek.style.left= (parseInt(window.innerWidth)/2)+"px"; //panacek se zobrazi uprostred stranky
	panacek.style.top= (parseInt(window.innerHeight)/2)+"px"; // -\\-
	let mince = document.getElementById("mince");
	mince.style.position = "absolute";

	zobrazMinci();
});

let scorecount = 0;

function zobrazMinci() {
	let mince = document.getElementById("mince");
	// minceX, minceY - náhodné souřadnice pro zobrazení v okně
	let minceX = 10+(Math.ceil(Math.random()*(parseInt((window.innerWidth-110))))); // minceX vrací random číslo mezi 0 a šířkou okna 
	let minceY = 50+(Math.ceil(Math.random()*(parseInt((window.innerHeight-90))))); // minceY vrací random číslo mezi 0 a šířkou okna
	
	mince.style.left = minceX+"px";
	mince.style.top = minceY+"px";
};

window.addEventListener("keydown", (e) => {
	let panacek = document.getElementById("panacek");
	let mince = document.getElementById("mince");
	let hlaska = "Tam nelze jít";

	let x = parseInt(panacek.style.left);
	let y = parseInt(panacek.style.top);
	let panacekSirka = panacek.width;
	let panacekVyska = panacek.height;

	let minceSirka = mince.width;
	let minceVyska = mince.height;
	let minceX = parseInt(mince.style.left);
	let minceY = parseInt(mince.style.top);

	let score = document.getElementById("score");

	// nasledujici if - spousti se, dojde-li k prekryvu panacka a mince
	if (
		!((x + panacekSirka < minceX) || (minceX + minceSirka < x) || (y + panacekVyska < minceY) || (minceY + minceVyska < y))) {
	playaudio("#zvukmince"); //prehrava se zvuk mince
	scorecount = scorecount + 1; //zvysi se score
	if (scorecount == 5){playaudio("#zvukfanfara")}; //pri score 5 zazni fanfara
	score.innerHTML = scorecount; //prepise se score
	zobrazMinci(); // zobrazi se nova mince
	};
	
	// switch - reaguje na stisk tlacitek sipek, pokud hrozi ze by vysel z okna pryc, pohyb se neprovede a spusti se console log
	switch (e.key) {

	 	case "ArrowLeft":
			panacek.setAttribute('src','obrazky/panacek-vlevo.png');
			if (x > 7 ) {
				x = (x-7);} 
			else {x=7;
				console.log(hlaska)};
		break;
			
		case "ArrowRight":
			panacek.setAttribute('src','obrazky/panacek-vpravo.png');
			if (x < (parseInt(window.innerWidth)-70) ) {
				x = x + 7;}
			else {console.log(hlaska)};
		break;
			
		case "ArrowUp":
			panacek.setAttribute('src','obrazky/panacek-nahoru.png');
			if (y > 50) {
				y = y - 7;}
			else {console.log(hlaska)};
		break;

		case "ArrowDown":
			panacek.setAttribute('src','obrazky/panacek.png');
			if (y < (parseInt(window.innerHeight)-80) ) {
				y = y + 7;}
			else {console.log(hlaska)};
		break;
		}

	panacek.style.left = x + "px";
	panacek.style.top = y + "px";
	playaudio("#hudba");

	// pouze kontrolni vypis promennych v console.log
	console.log(panacekSirka, panacekVyska, minceSirka, minceVyska, minceX, minceY, x, y, scorecount);
			}); 

	// univerzalni funkce playaudio pouzitelna s ruznymi parametry(ruzne zvuky)
	function playaudio(elementSelector) {
		document.querySelector(elementSelector).play();
	}

