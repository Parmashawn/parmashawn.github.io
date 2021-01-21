
function calculate() { //main calculation function

	var fish_total = 0;
	var clan_modifier = document.getElementById("option_clan").value; 
	var worldlock_rate = document.getElementById("option_rate").value; //this will be an option for the rate of worldlocks
	var total_amount = 0;
	document.getElementById("label_option_rate").innerHTML = "Gems per World Lock: " + worldlock_rate;

	// Herring
	fish_total += (document.getElementById("het").value * 10) * clan_modifier;
	fish_total += (document.getElementById("hes").value * 40) * clan_modifier;
	fish_total += (document.getElementById("hem").value * 70) * clan_modifier;
	fish_total += (document.getElementById("hel").value * 100) * clan_modifier;
	fish_total += (document.getElementById("heh").value * 300) * clan_modifier;

	// Kingfish
	fish_total += (document.getElementById("kit").value * 10) * clan_modifier;
	fish_total += (document.getElementById("kis").value * 40) * clan_modifier;
	fish_total += (document.getElementById("kim").value * 70) * clan_modifier;
	fish_total += (document.getElementById("kil").value * 100) * clan_modifier;
	fish_total += (document.getElementById("kih").value * 300) * clan_modifier;

	// Butterflyfish
	fish_total += (document.getElementById("but").value * 15) * clan_modifier;
	fish_total += (document.getElementById("bus").value * 60) * clan_modifier;
	fish_total += (document.getElementById("bum").value * 105) * clan_modifier;
	fish_total += (document.getElementById("bul").value * 150) * clan_modifier;
	fish_total += (document.getElementById("buh").value * 450) * clan_modifier;

	// Goldfish
	fish_total += (document.getElementById("got").value * 15) * clan_modifier;
	fish_total += (document.getElementById("gos").value * 60) * clan_modifier;
	fish_total += (document.getElementById("gom").value * 105) * clan_modifier;
	fish_total += (document.getElementById("gol").value * 150) * clan_modifier;
	fish_total += (document.getElementById("goh").value * 450) * clan_modifier;

	// Carp
	fish_total += (document.getElementById("cat").value * 20) * clan_modifier;
	fish_total += (document.getElementById("cas").value * 80) * clan_modifier;
	fish_total += (document.getElementById("cam").value * 140) * clan_modifier;
	fish_total += (document.getElementById("cal").value * 200) * clan_modifier;
	fish_total += (document.getElementById("cah").value * 600) * clan_modifier;

	// Halibut
	fish_total += (document.getElementById("hat").value * 20) * clan_modifier;
	fish_total += (document.getElementById("has").value * 80) * clan_modifier;
	fish_total += (document.getElementById("ham").value * 140) * clan_modifier;
	fish_total += (document.getElementById("hal").value * 200) * clan_modifier;
	fish_total += (document.getElementById("hah").value * 600) * clan_modifier;

	// Sea Angler
	fish_total += (document.getElementById("set").value * 30) * clan_modifier;
	fish_total += (document.getElementById("ses").value * 120) * clan_modifier;
	fish_total += (document.getElementById("sem").value * 210) * clan_modifier;
	fish_total += (document.getElementById("sel").value * 300) * clan_modifier;
	fish_total += (document.getElementById("seh").value * 900) * clan_modifier;
	
	// Tuna
	fish_total += (document.getElementById("tut").value * 40) * clan_modifier;
	fish_total += (document.getElementById("tus").value * 160) * clan_modifier;
	fish_total += (document.getElementById("tum").value * 280) * clan_modifier;
	fish_total += (document.getElementById("tul").value * 400) * clan_modifier;
	fish_total += (document.getElementById("tuh").value * 1200) * clan_modifier;

	// Acid
	fish_total += (document.getElementById("act").value * 80) * clan_modifier;
	fish_total += (document.getElementById("acs").value * 320) * clan_modifier;
	fish_total += (document.getElementById("acm").value * 560) * clan_modifier;
	fish_total += (document.getElementById("acl").value * 800) * clan_modifier;
	fish_total += (document.getElementById("ach").value * 2400) * clan_modifier;

	// Dumbfish
	fish_total += (document.getElementById("dut").value * 5) * clan_modifier;
	fish_total += (document.getElementById("dus").value * 10) * clan_modifier;
	fish_total += (document.getElementById("dum").value * 30) * clan_modifier;
	fish_total += (document.getElementById("dul").value * 50) * clan_modifier;
	fish_total += (document.getElementById("duh").value * 100) * clan_modifier;

	// Piranha
	fish_total += (document.getElementById("pit").value * 30) * clan_modifier;
	fish_total += (document.getElementById("pis").value * 120) * clan_modifier;
	fish_total += (document.getElementById("pim").value * 210) * clan_modifier;
	fish_total += (document.getElementById("pil").value * 300) * clan_modifier;
	fish_total += (document.getElementById("pih").value * 900) * clan_modifier;

	// Topaz
	fish_total += (document.getElementById("tot").value * 3);
	fish_total += (document.getElementById("tos").value * 6);
	fish_total += (document.getElementById("tom").value * 12);
	fish_total += (document.getElementById("tol").value * 30);
	fish_total += (document.getElementById("toh").value * 90);

	// Emerald
	fish_total += (document.getElementById("emt").value * 5);
	fish_total += (document.getElementById("ems").value * 10);
	fish_total += (document.getElementById("emm").value * 20);
	fish_total += (document.getElementById("eml").value * 50);
	fish_total += (document.getElementById("emh").value * 150);

	// Sapphire
	fish_total += (document.getElementById("sat").value * 10);
	fish_total += (document.getElementById("sas").value * 20);
	fish_total += (document.getElementById("sam").value * 40);
	fish_total += (document.getElementById("sal").value * 100);
	fish_total += (document.getElementById("sah").value * 300);

	// Ruby
	fish_total += (document.getElementById("rut").value * 20);
	fish_total += (document.getElementById("rus").value * 40);
	fish_total += (document.getElementById("rum").value * 80);
	fish_total += (document.getElementById("rul").value * 200);
	fish_total += (document.getElementById("ruh").value * 600);

	// Diamond
	fish_total += (document.getElementById("dit").value * 30);
	fish_total += (document.getElementById("dis").value * 60);
	fish_total += (document.getElementById("dim").value * 120);
	fish_total += (document.getElementById("dil").value * 300);
	fish_total += (document.getElementById("dih").value * 900);

	
	
	// Find and set the boxes for total gems, total wls, and total byte
	var total_gems = document.getElementById("total_gems");
	var total_wl = document.getElementById("total_wl");
	var total_bc = document.getElementById("total_bc");
	
	total_gems.value = Math.round(fish_total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	total_wl.value = Math.round(fish_total / worldlock_rate).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	total_bc.value = Math.round(fish_total / (worldlock_rate / 300)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // byte is set to 300, but a option might be added in the future
	
	generatelink();
}

function generatelink() {
	var link = window.location.href.split('#')[0] + "#";
	var inputs = document.getElementsByClassName("calc-input");
	var i
	for (i=0; i < inputs.length; i++) { // adds all fish and gemstones to link if value above zero
		if (inputs[i].value > 0) {
			inputs[i].style.background = "#c2ffd2";
			var str = inputs[i].id + "=" + inputs[i].value + "&";
			link += str;
		} else {inputs[i].style.background = "white";}
		
		}
	if (document.getElementById("option_rate").value != 2500) {var str = "option_rate" + "=" + document.getElementId("option_rate").value + "&"; link += str;}
	if (link.slice(0, -1) == window.location.href.split('#')[0]) {document.getElementById("share").value = "...";}
	else {document.getElementById("share").value = link.slice(0, -1);}
	
}

function load() {
	var hashParams = window.location.hash.substr(1).split('&'); // substr(1) to remove the `#`
		for(var i = 0; i < hashParams.length; i++){
			var p = hashParams[i].split('=');
			document.getElementById(p[0]).value = decodeURIComponent(p[1]);
		}
		calculate();
}

function copylink() {
	var copyText = document.getElementById("share");
	copyText.select();
	copyText.setSelectionRange(0, 99999); /* For mobile devices */
	 document.execCommand("copy");
}

