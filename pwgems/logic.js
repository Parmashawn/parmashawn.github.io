function calculate() {
	
	// Calculate gems from fish
	var totalgems = 0
	totalgems += document.getElementById("hert").value * 10;
	totalgems += document.getElementById("hers").value * 40;
	totalgems += document.getElementById("herm").value * 70;
	totalgems += document.getElementById("herl").value * 100;
	totalgems += document.getElementById("herh").value * 300;
	totalgems += document.getElementById("kint").value * 10;
	totalgems += document.getElementById("kins").value * 40;
	totalgems += document.getElementById("kinm").value * 70;
	totalgems += document.getElementById("kinl").value * 100;
	totalgems += document.getElementById("kinh").value * 300;
	totalgems += document.getElementById("butt").value * 15;
	totalgems += document.getElementById("buts").value * 60;
	totalgems += document.getElementById("butm").value * 105;
	totalgems += document.getElementById("butl").value * 150;
	totalgems += document.getElementById("buth").value * 600;
	totalgems += document.getElementById("golt").value * 15;
	totalgems += document.getElementById("gols").value * 60;
	totalgems += document.getElementById("golm").value * 105;
	totalgems += document.getElementById("goll").value * 150;
	totalgems += document.getElementById("golh").value * 600;
	totalgems += document.getElementById("cart").value * 20;
	totalgems += document.getElementById("cars").value * 80;
	totalgems += document.getElementById("carm").value * 140;
	totalgems += document.getElementById("carl").value * 200;
	totalgems += document.getElementById("carh").value * 600;
	totalgems += document.getElementById("halt").value * 20;
	totalgems += document.getElementById("hals").value * 80;
	totalgems += document.getElementById("halm").value * 140;
	totalgems += document.getElementById("hall").value * 200;
	totalgems += document.getElementById("halh").value * 600;
	totalgems += document.getElementById("angt").value * 30;
	totalgems += document.getElementById("angs").value * 120;
	totalgems += document.getElementById("angm").value * 210;
	totalgems += document.getElementById("angl").value * 300;
	totalgems += document.getElementById("angh").value * 900;
	totalgems += document.getElementById("tunt").value * 40;
	totalgems += document.getElementById("tuns").value * 160;
	totalgems += document.getElementById("tunm").value * 280;
	totalgems += document.getElementById("tunl").value * 400;
	totalgems += document.getElementById("tunh").value * 1200;
	totalgems += document.getElementById("pirt").value * 30;
	totalgems += document.getElementById("pirs").value * 120;
	totalgems += document.getElementById("pirm").value * 210;
	totalgems += document.getElementById("pirl").value * 300;
	totalgems += document.getElementById("pirh").value * 900;
	totalgems += document.getElementById("acit").value * 80;
	totalgems += document.getElementById("acis").value * 320;
	totalgems += document.getElementById("acim").value * 560;
	totalgems += document.getElementById("acil").value * 800;
	totalgems += document.getElementById("acih").value * 2400;
	totalgems += document.getElementById("dumt").value * 5;
	totalgems += document.getElementById("dums").value * 10;
	totalgems += document.getElementById("dumm").value * 30;
	totalgems += document.getElementById("duml").value * 50;
	totalgems += document.getElementById("dumh").value * 100;

	if (totalgems > 999999999999) {
		var totalgems = 999999999999
	}
	document.getElementById("gemtotal").innerHTML = totalgems;
	
	// Calculate Worldlocks
	document.getElementById("wltotal").innerHTML = Math.round(totalgems / 2500);
	
	//Calculate Bytecoins based on Worldlocks
	document.getElementById("bytetotal").innerHTML = Math.round(totalgems / 8.333333333333);
	
	generatelink();
}

function generatelink() {
	var link = window.location.href.split('#')[0] + "#";
	var inputs = document.getElementsByClassName("fishinput");
	var i
	for (i=0; i < inputs.length; i++) {
		if (inputs[i].value > 0) {
			var str = inputs[i].id + "=" + inputs[i].value + "&";
			link += str;
		}
		
	}
	link = link.slice(0, -1)
	document.getElementById("linkbox").value = link;
}

function copylink() {
	generatelink();
	document.getElementById("pixelbot").src = "images/bot2.png";
	
	/* Get the text field */
	var copyText = document.getElementById("linkbox");

	/* Select the text field */
	copyText.select();
	copyText.setSelectionRange(0, 99999); /* For mobile devices */

	/* Copy the text inside the text field */
	document.execCommand("copy");

	/* Alert the copied text */
	alert("Link Copied to Clipboard!: " + copyText.value + "\n Thanks for Using Pixelworlds Gems!");
}

function loader() {
	var hashParams = window.location.hash.substr(1).split('&'); // substr(1) to remove the `#`
	for(var i = 0; i < hashParams.length; i++){
		var p = hashParams[i].split('=');
		document.getElementById(p[0]).value = decodeURIComponent(p[1]);;
	}
	calculate();
}

