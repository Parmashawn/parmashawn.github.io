function calculate() {

	var wlrate = document.getElementById("rate").value;
	var clanmodifier = document.getElementById("clanlevel").value;
	var bytemodifier = document.getElementById("byterate").value;

// Calculate gems from fish
	var fishgems = 0;

	fishgems += document.getElementById("hert").value * 10;
	fishgems += document.getElementById("hers").value * 40;
	fishgems += document.getElementById("herm").value * 70;
	fishgems += document.getElementById("herl").value * 100;
	fishgems += document.getElementById("herh").value * 300;
	fishgems += document.getElementById("kint").value * 10;
	fishgems += document.getElementById("kins").value * 40;
	fishgems += document.getElementById("kinm").value * 70;
	fishgems += document.getElementById("kinl").value * 100;
	fishgems += document.getElementById("kinh").value * 300;
	fishgems += document.getElementById("butt").value * 15;
	fishgems += document.getElementById("buts").value * 60;
	fishgems += document.getElementById("butm").value * 105;
	fishgems += document.getElementById("butl").value * 150;
	fishgems += document.getElementById("buth").value * 600;
	fishgems += document.getElementById("golt").value * 15;
	fishgems += document.getElementById("gols").value * 60;
	fishgems += document.getElementById("golm").value * 105;
	fishgems += document.getElementById("goll").value * 150;
	fishgems += document.getElementById("golh").value * 600;
	fishgems += document.getElementById("cart").value * 20;
	fishgems += document.getElementById("cars").value * 80;
	fishgems += document.getElementById("carm").value * 140;
	fishgems += document.getElementById("carl").value * 200;
	fishgems += document.getElementById("carh").value * 600;
	fishgems += document.getElementById("halt").value * 20;
	fishgems += document.getElementById("hals").value * 80;
	fishgems += document.getElementById("halm").value * 140;
	fishgems += document.getElementById("hall").value * 200;
	fishgems += document.getElementById("halh").value * 600;
	fishgems += document.getElementById("angt").value * 30;
	fishgems += document.getElementById("angs").value * 120;
	fishgems += document.getElementById("angm").value * 210;
	fishgems += document.getElementById("angl").value * 300;
	fishgems += document.getElementById("angh").value * 900;
	fishgems += document.getElementById("tunt").value * 40;
	fishgems += document.getElementById("tuns").value * 160;
	fishgems += document.getElementById("tunm").value * 280;
	fishgems += document.getElementById("tunl").value * 400;
	fishgems += document.getElementById("tunh").value * 1200;
	fishgems += document.getElementById("pirt").value * 30;
	fishgems += document.getElementById("pirs").value * 120;
	fishgems += document.getElementById("pirm").value * 210;
	fishgems += document.getElementById("pirl").value * 300;
	fishgems += document.getElementById("pirh").value * 900;
	fishgems += document.getElementById("acit").value * 80;
	fishgems += document.getElementById("acis").value * 320;
	fishgems += document.getElementById("acim").value * 560;
	fishgems += document.getElementById("acil").value * 800;
	fishgems += document.getElementById("acih").value * 2400;
	fishgems += document.getElementById("dumt").value * 5;
	fishgems += document.getElementById("dums").value * 10;
	fishgems += document.getElementById("dumm").value * 30;
	fishgems += document.getElementById("duml").value * 50;
	fishgems += document.getElementById("dumh").value * 100;

	var mininggems = 0;

	mininggems += document.getElementById("topt").value * 3;
	mininggems += document.getElementById("tops").value * 6;
	mininggems += document.getElementById("topm").value * 12;
	mininggems += document.getElementById("topl").value * 30;
	mininggems += document.getElementById("toph").value * 90;
	mininggems += document.getElementById("emet").value * 5;
	mininggems += document.getElementById("emes").value * 10;
	mininggems += document.getElementById("emem").value * 20;
	mininggems += document.getElementById("emel").value * 50;
	mininggems += document.getElementById("emeh").value * 150;
	mininggems += document.getElementById("sapt").value * 10;
	mininggems += document.getElementById("saps").value * 20;
	mininggems += document.getElementById("sapm").value * 40;
	mininggems += document.getElementById("sapl").value * 100;
	mininggems += document.getElementById("saph").value * 300;
	mininggems += document.getElementById("rubt").value * 20;
	mininggems += document.getElementById("rubs").value * 40;
	mininggems += document.getElementById("rubm").value * 80;
	mininggems += document.getElementById("rubl").value * 200;
	mininggems += document.getElementById("rubh").value * 600;
	mininggems += document.getElementById("diat").value * 30;
	mininggems += document.getElementById("dias").value * 60;
	mininggems += document.getElementById("diam").value * 120;
	mininggems += document.getElementById("dial").value * 300;
	mininggems += document.getElementById("diah").value * 900;

	var totalgems = fishgems + mininggems;

	if (fishgems + mininggems > 999999999999) {
		var totalgems = 999999999999
	}


	// Calculate Total Gems
	document.getElementById("gemtotal").innerHTML = totalgems.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	// Calculate Extra Clan Gems
	var extragems = Math.round(fishgems * clanmodifier);
	if (extragems > 9999999999) {
		extragems = 9999999999;
	}
	if (extragems == 0) {
		document.getElementById("clanbonusgems").innerHTML = "";
	} else {document.getElementById("clanbonusgems").innerHTML = "+" + extragems.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");}
	
	
	// Calculate Worldlocks
	document.getElementById("wltotal").innerHTML = Math.round(totalgems / wlrate).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	
	//Calculate Bytecoins based on Worldlocks
	var byterate = wlrate / bytemodifier
	document.getElementById("bytetotal").innerHTML = Math.round(totalgems / byterate).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	//Generates new link
	generatelink();
}

function generatelink() {
	var rate = document.getElementById("rate")
	var byterate = document.getElementById("byterate")
	var link = window.location.href.split('#')[0] + "#";
	var inputs = document.getElementsByClassName("fishinput");
	var i
	for (i=0; i < inputs.length; i++) {
		if (inputs[i].value > 0) {
			var str = inputs[i].id + "=" + inputs[i].value + "&";
			link += str;
		}}
	var inputs = document.getElementsByClassName("geminput");
	var i
	for (i=0; i < inputs.length; i++) {
		if (inputs[i].value > 0) {
			var str = inputs[i].id + "=" + inputs[i].value + "&";
			link += str;
		}}
	if (rate.value != 2500) {link += rate.id + "=" + rate.value + "&";}
	if (byterate.value != 300) {link += byterate.id + "=" + byterate.value + "&";}
	

	document.getElementById("sharebox").value = link.slice(0, -1);
}

function copylink() {

  document.getElementById("sharebutton").src = "img/emoji/share-hover.png"

  /* Get the text field */
  var copyText = document.getElementById("sharebox");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  if (document.getElementById("sharebox").value) {
	alert("Copied Link to Clipboard: \n" + copyText.value)
  } else {alert("Add some fish or gemstones to create a link!")}
}

function loader() {
	var hashParams = window.location.hash.substr(1).split('&'); // substr(1) to remove the `#`
	for(var i = 0; i < hashParams.length; i++){
		var p = hashParams[i].split('=');
		document.getElementById(p[0]).value = decodeURIComponent(p[1]);;
	}
	calculate();
}

// for the price guide search
function pricesearch() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("pricetable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function reset() {
var inputs = document.getElementsByClassName("fishinput");
	var i;
	for (i=0; i < inputs.length; i++) {
		if (inputs[i].value > 0) {
			inputs[i].value = "";
		}}
	var inputs = document.getElementsByClassName("geminput");
	var i
	for (i=0; i < inputs.length; i++) {
		if (inputs[i].value > 0) {
			inputs[i].value = "";
		}}
	document.getElementById("byterate").value = 300
	document.getElementById("clanlevel").value = 0
	document.getElementById("rate").value = 2500
	calculate();
}