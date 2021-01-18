
function calculate() { //main calculation function

	var fish_total = 0;
	var clan_modifier = document.getElementById("option_clan").value; 
	var worldlock_rate = document.getElementById("option_rate").value; //this will be an option for the rate of worldlocks
	var total_amount = 0;
	document.getElementById("label_option_rate").innerHTML = "Gems per World Lock: " + worldlock_rate;

	// Herring
	fish_total += (document.getElementById("Herring_Tiny").value * 10) * clan_modifier;
	fish_total += (document.getElementById("Herring_Small").value * 40) * clan_modifier;
	fish_total += (document.getElementById("Herring_Medium").value * 70) * clan_modifier;
	fish_total += (document.getElementById("Herring_Large").value * 100) * clan_modifier;
	fish_total += (document.getElementById("Herring_Huge").value * 300) * clan_modifier;

	// Kingfish
	fish_total += (document.getElementById("Kingfish_Tiny").value * 10) * clan_modifier;
	fish_total += (document.getElementById("Kingfish_Small").value * 40) * clan_modifier;
	fish_total += (document.getElementById("Kingfish_Medium").value * 70) * clan_modifier;
	fish_total += (document.getElementById("Kingfish_Large").value * 100) * clan_modifier;
	fish_total += (document.getElementById("Kingfish_Huge").value * 300) * clan_modifier;

	// Butterflyfish
	fish_total += (document.getElementById("Butterflyfish_Tiny").value * 15) * clan_modifier;
	fish_total += (document.getElementById("Butterflyfish_Small").value * 60) * clan_modifier;
	fish_total += (document.getElementById("Butterflyfish_Medium").value * 105) * clan_modifier;
	fish_total += (document.getElementById("Butterflyfish_Large").value * 150) * clan_modifier;
	fish_total += (document.getElementById("Butterflyfish_Huge").value * 450) * clan_modifier;

	// Goldfish
	fish_total += (document.getElementById("Goldfish_Tiny").value * 15) * clan_modifier;
	fish_total += (document.getElementById("Goldfish_Small").value * 60) * clan_modifier;
	fish_total += (document.getElementById("Goldfish_Medium").value * 105) * clan_modifier;
	fish_total += (document.getElementById("Goldfish_Large").value * 150) * clan_modifier;
	fish_total += (document.getElementById("Goldfish_Huge").value * 450) * clan_modifier;

	// Carp
	fish_total += (document.getElementById("Carp_Tiny").value * 20) * clan_modifier;
	fish_total += (document.getElementById("Carp_Small").value * 80) * clan_modifier;
	fish_total += (document.getElementById("Carp_Medium").value * 140) * clan_modifier;
	fish_total += (document.getElementById("Carp_Large").value * 200) * clan_modifier;
	fish_total += (document.getElementById("Carp_Huge").value * 600) * clan_modifier;

	// Halibut
	fish_total += (document.getElementById("Halibut_Tiny").value * 20) * clan_modifier;
	fish_total += (document.getElementById("Halibut_Small").value * 80) * clan_modifier;
	fish_total += (document.getElementById("Halibut_Medium").value * 140) * clan_modifier;
	fish_total += (document.getElementById("Halibut_Large").value * 200) * clan_modifier;
	fish_total += (document.getElementById("Halibut_Huge").value * 600) * clan_modifier;

	// Sea Angler
	fish_total += (document.getElementById("Sea_Tiny").value * 30) * clan_modifier;
	fish_total += (document.getElementById("Sea_Small").value * 120) * clan_modifier;
	fish_total += (document.getElementById("Sea_Medium").value * 210) * clan_modifier;
	fish_total += (document.getElementById("Sea_Large").value * 300) * clan_modifier;
	fish_total += (document.getElementById("Sea_Huge").value * 900) * clan_modifier;
	
	// Tuna
	fish_total += (document.getElementById("Tuna_Tiny").value * 40) * clan_modifier;
	fish_total += (document.getElementById("Tuna_Small").value * 160) * clan_modifier;
	fish_total += (document.getElementById("Tuna_Medium").value * 280) * clan_modifier;
	fish_total += (document.getElementById("Tuna_Large").value * 400) * clan_modifier;
	fish_total += (document.getElementById("Tuna_Huge").value * 1200) * clan_modifier;

	// Acid
	fish_total += (document.getElementById("Acid_Tiny").value * 80) * clan_modifier;
	fish_total += (document.getElementById("Acid_Small").value * 320) * clan_modifier;
	fish_total += (document.getElementById("Acid_Medium").value * 560) * clan_modifier;
	fish_total += (document.getElementById("Acid_Large").value * 800) * clan_modifier;
	fish_total += (document.getElementById("Acid_Huge").value * 2400) * clan_modifier;

	// Dumbfish
	fish_total += (document.getElementById("Dumbfish_Tiny").value * 5) * clan_modifier;
	fish_total += (document.getElementById("Dumbfish_Small").value * 10) * clan_modifier;
	fish_total += (document.getElementById("Dumbfish_Medium").value * 30) * clan_modifier;
	fish_total += (document.getElementById("Dumbfish_Large").value * 50) * clan_modifier;
	fish_total += (document.getElementById("Dumbfish_Huge").value * 100) * clan_modifier;

	// Piranha
	fish_total += (document.getElementById("Piranha_Tiny").value * 30) * clan_modifier;
	fish_total += (document.getElementById("Piranha_Small").value * 120) * clan_modifier;
	fish_total += (document.getElementById("Piranha_Medium").value * 210) * clan_modifier;
	fish_total += (document.getElementById("Piranha_Large").value * 300) * clan_modifier;
	fish_total += (document.getElementById("Piranha_Huge").value * 900) * clan_modifier;

	// Topaz
	fish_total += (document.getElementById("Topaz_Tiny").value * 3);
	fish_total += (document.getElementById("Topaz_Small").value * 6);
	fish_total += (document.getElementById("Topaz_Medium").value * 12);
	fish_total += (document.getElementById("Topaz_Large").value * 30);
	fish_total += (document.getElementById("Topaz_Huge").value * 90);

	// Emerald
	fish_total += (document.getElementById("Emerald_Tiny").value * 5);
	fish_total += (document.getElementById("Emerald_Small").value * 10);
	fish_total += (document.getElementById("Emerald_Medium").value * 20);
	fish_total += (document.getElementById("Emerald_Large").value * 50);
	fish_total += (document.getElementById("Emerald_Huge").value * 150);

	// Sapphire
	fish_total += (document.getElementById("Sapphire_Tiny").value * 10);
	fish_total += (document.getElementById("Sapphire_Small").value * 20);
	fish_total += (document.getElementById("Sapphire_Medium").value * 40);
	fish_total += (document.getElementById("Sapphire_Large").value * 100);
	fish_total += (document.getElementById("Sapphire_Huge").value * 300);

	// Ruby
	fish_total += (document.getElementById("Ruby_Tiny").value * 20);
	fish_total += (document.getElementById("Ruby_Small").value * 40);
	fish_total += (document.getElementById("Ruby_Medium").value * 80);
	fish_total += (document.getElementById("Ruby_Large").value * 200);
	fish_total += (document.getElementById("Ruby_Huge").value * 600);

	// Diamond
	fish_total += (document.getElementById("Diamond_Tiny").value * 30);
	fish_total += (document.getElementById("Diamond_Small").value * 60);
	fish_total += (document.getElementById("Diamond_Medium").value * 120);
	fish_total += (document.getElementById("Diamond_Large").value * 300);
	fish_total += (document.getElementById("Diamond_Huge").value * 900);

	
	
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
			var str = inputs[i].id + "=" + inputs[i].value + "&";
			link += str;
		}}
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