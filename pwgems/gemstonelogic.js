function calculate() {
	
	// Calculate gems from fish
	var totalgems = 0
	totalgems += document.getElementById("topt").value * 3;
	totalgems += document.getElementById("tops").value * 6;
	totalgems += document.getElementById("topm").value * 12;
	totalgems += document.getElementById("topl").value * 30;
	totalgems += document.getElementById("toph").value * 90;
	totalgems += document.getElementById("emet").value * 5;
	totalgems += document.getElementById("emes").value * 10;
	totalgems += document.getElementById("emem").value * 20;
	totalgems += document.getElementById("emel").value * 50;
	totalgems += document.getElementById("emeh").value * 150;
	totalgems += document.getElementById("sapt").value * 10;
	totalgems += document.getElementById("saps").value * 20;
	totalgems += document.getElementById("sapm").value * 40;
	totalgems += document.getElementById("sapl").value * 100;
	totalgems += document.getElementById("saph").value * 300;
	totalgems += document.getElementById("rubt").value * 20;
	totalgems += document.getElementById("rubs").value * 40;
	totalgems += document.getElementById("rubm").value * 80;
	totalgems += document.getElementById("rubl").value * 200;
	totalgems += document.getElementById("rubh").value * 600;
	totalgems += document.getElementById("diat").value * 30;
	totalgems += document.getElementById("dias").value * 60;
	totalgems += document.getElementById("diam").value * 120;
	totalgems += document.getElementById("dial").value * 300;
	totalgems += document.getElementById("diah").value * 900;

	if (totalgems > 999999999999) {
		var totalgems = 999999999999
	}
	document.getElementById("gemtotal").innerHTML = totalgems;
	
	// Calculate Worldlocks
	document.getElementById("wltotal").innerHTML = Math.round(totalgems / 2500);
	
	//Calculate Bytecoins based on Worldlocks
	document.getElementById("bytetotal").innerHTML = Math.round(totalgems / 8.333333333333)
	
		generatelink();
}

function generatelink() {
	var link = window.location.href.split('#')[0] + "#";
	var inputs = document.getElementsByClassName("geminput");
	var i
	for (i=0; i < inputs.length; i++) {
		if (inputs[i].value > 0) {
			var str = inputs[i].id + "=" + inputs[i].value + "&";
			link += str;
		}
		
	}
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
	alert("Link Copied to Clipboard!: \n" + copyText.value + "\n Thanks for Using Pixelworlds Gems!");
}

function loader() {
	var hashParams = window.location.hash.substr(1).split('&'); // substr(1) to remove the `#`
	for(var i = 0; i < hashParams.length; i++){
		var p = hashParams[i].split('=');
		document.getElementById(p[0]).value = decodeURIComponent(p[1]);;
	}
	calculate();
}