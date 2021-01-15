
function addRow() { // adds a new entry to the table
	
    var fish_amount = document.getElementById("fish_amount");
    var fish_type = document.getElementById("fish_type");
    var fish_size = document.getElementById("fish_size");
	var table = document.getElementById("fish_table");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML = '<i class="fas fa-trash-alt" onClick="deleteRow(this)"></i>';
    row.insertCell(1).innerHTML = +fish_amount.value;
    row.insertCell(2).innerHTML = fish_type.value;
	row.insertCell(3).innerHTML = fish_size.value;
	
	console.log("Added " + fish_amount.value + " " + fish_size.value + " " + fish_type.value + " to the table"); //prints to console
	
	calculate();
}

function deleteRow(obj) { // function for the delte button on a table entry
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("fish_table");
    table.deleteRow(index);
	
	console.log("Removed entry from table") //prints to console
    
	calculate();
}

function calculate() { //main calculation function

	var fish_total = 0;
	var clan_modifier = document.getElementById("option_clan").value; 
	var worldlock_rate = document.getElementById("option_rate").value; //this will be an option for the rate of worldlocks
	var table = document.getElementById("fish_table");
	
	document.getElementById("label_option_rate").innerHTML = "Gems per World Lock: " + worldlock_rate
	
	var i;
	for (i=1;i < table.rows.length;i++) {
		var tablecells =  table.rows[i].cells;
		var fish_amount = parseInt(tablecells[1].innerHTML);
		var fish_type = tablecells[2].innerHTML;
		var fish_size = tablecells[3].innerHTML;
		
		console.log(fish_amount);
		console.log(fish_type);
		console.log(fish_size);
		
		//Calculate Herring
		if (fish_type == "Herring" && fish_size == "Tiny") {var fish_type_modifier = 10; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("tiny checkpoint")}
		if (fish_type == "Herring" && fish_size == "Small") {var fish_type_modifier = 40; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("small checkpoint")}
		if (fish_type == "Herring" && fish_size == "Medium") {var fish_type_modifier = 70; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("medium checkpoint")}
		if (fish_type == "Herring" && fish_size == "Large") {var fish_type_modifier = 100; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("large checkpoint")}
		if (fish_type == "Herring" && fish_size == "Huge") {var fish_type_modifier = 300; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("huge checkpoint")}
		
		//Calculate Kingfish
		if (fish_type == "Kingfish" && fish_size == "Tiny") {var fish_type_modifier = 10; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("tiny checkpoint")}
		if (fish_type == "Kingfish" && fish_size == "Small") {var fish_type_modifier = 40; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("small checkpoint")}
		if (fish_type == "Kingfish" && fish_size == "Medium") {var fish_type_modifier = 70; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("medium checkpoint")}
		if (fish_type == "Kingfish" && fish_size == "Large") {var fish_type_modifier = 100; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("large checkpoint")}
		if (fish_type == "Kingfish" && fish_size == "Huge") {var fish_type_modifier = 300; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("huge checkpoint")}
		
		//Calculate Goldfish
		if (fish_type == "Goldfish" && fish_size == "Tiny") {var fish_type_modifier = 15; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("tiny checkpoint")}
		if (fish_type == "Goldfish" && fish_size == "Small") {var fish_type_modifier = 60; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("small checkpoint")}
		if (fish_type == "Goldfish" && fish_size == "Medium") {var fish_type_modifier = 105; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("medium checkpoint")}
		if (fish_type == "Goldfish" && fish_size == "Large") {var fish_type_modifier = 150; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("large checkpoint")}
		if (fish_type == "Goldfish" && fish_size == "Huge") {var fish_type_modifier = 600; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("huge checkpoint")}
		
		//Calculate Butterflyfish
		if (fish_type == "Butterflyfish" && fish_size == "Tiny") {var fish_type_modifier = 15; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("tiny checkpoint")}
		if (fish_type == "Butterflyfish" && fish_size == "Small") {var fish_type_modifier = 60; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("small checkpoint")}
		if (fish_type == "Butterflyfish" && fish_size == "Medium") {var fish_type_modifier = 105; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("medium checkpoint")}
		if (fish_type == "Butterflyfish" && fish_size == "Large") {var fish_type_modifier = 150; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("large checkpoint")}
		if (fish_type == "Butterflyfish" && fish_size == "Huge") {var fish_type_modifier = 600; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("huge checkpoint")}
		
		//Calculate Carp
		if (fish_type == "Carp" && fish_size == "Tiny") {var fish_type_modifier = 20; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("tiny checkpoint")}
		if (fish_type == "Carp" && fish_size == "Small") {var fish_type_modifier = 80; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("small checkpoint")}
		if (fish_type == "Carp" && fish_size == "Medium") {var fish_type_modifier = 140; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("medium checkpoint")}
		if (fish_type == "Carp" && fish_size == "Large") {var fish_type_modifier = 200; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("large checkpoint")}
		if (fish_type == "Carp" && fish_size == "Huge") {var fish_type_modifier = 600; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("huge checkpoint")}
		
		//Calculate Halibut
		if (fish_type == "Halibut" && fish_size == "Tiny") {var fish_type_modifier = 20; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("tiny checkpoint")}
		if (fish_type == "Halibut" && fish_size == "Small") {var fish_type_modifier = 80; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("small checkpoint")}
		if (fish_type == "Halibut" && fish_size == "Medium") {var fish_type_modifier = 140; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("medium checkpoint")}
		if (fish_type == "Halibut" && fish_size == "Large") {var fish_type_modifier = 200; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("large checkpoint")}
		if (fish_type == "Halibut" && fish_size == "Huge") {var fish_type_modifier = 600; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("huge checkpoint")}
		
		//Calculate Sea Angler
		if (fish_type == "Sea Angler" && fish_size == "Tiny") {var fish_type_modifier = 30; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("tiny checkpoint")}
		if (fish_type == "Sea Angler" && fish_size == "Small") {var fish_type_modifier = 120; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("small checkpoint")}
		if (fish_type == "Sea Angler" && fish_size == "Medium") {var fish_type_modifier = 210; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("medium checkpoint")}
		if (fish_type == "Sea Angler" && fish_size == "Large") {var fish_type_modifier = 300; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("large checkpoint")}
		if (fish_type == "Sea Angler" && fish_size == "Huge") {var fish_type_modifier = 900; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("huge checkpoint")}
		
		//Calculate Tuna
		if (fish_type == "Tuna" && fish_size == "Tiny") {var fish_type_modifier = 40; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("tiny checkpoint")}
		if (fish_type == "Tuna" && fish_size == "Small") {var fish_type_modifier = 160; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("small checkpoint")}
		if (fish_type == "Tuna" && fish_size == "Medium") {var fish_type_modifier = 280; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("medium checkpoint")}
		if (fish_type == "Tuna" && fish_size == "Large") {var fish_type_modifier = 400; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("large checkpoint")}
		if (fish_type == "Tuna" && fish_size == "Huge") {var fish_type_modifier = 1200; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("huge checkpoint")}
		
		//Calculate Acid Puffer
		if (fish_type == "Acid Puffer" && fish_size == "Tiny") {var fish_type_modifier = 80; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("tiny checkpoint")}
		if (fish_type == "Acid Puffer" && fish_size == "Small") {var fish_type_modifier = 320; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("small checkpoint")}
		if (fish_type == "Acid Puffer" && fish_size == "Medium") {var fish_type_modifier = 560; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("medium checkpoint")}
		if (fish_type == "Acid Puffer" && fish_size == "Large") {var fish_type_modifier = 800; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("large checkpoint")}
		if (fish_type == "Acid Puffer" && fish_size == "Huge") {var fish_type_modifier = 2400; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("huge checkpoint")}
		
		//Calculate Dumbfish
		if (fish_type == "Dumbfish" && fish_size == "Tiny") {var fish_type_modifier = 5; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("tiny checkpoint")}
		if (fish_type == "Dumbfish" && fish_size == "Small") {var fish_type_modifier = 10; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("small checkpoint")}
		if (fish_type == "Dumbfish" && fish_size == "Medium") {var fish_type_modifier = 30; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("medium checkpoint")}
		if (fish_type == "Dumbfish" && fish_size == "Large") {var fish_type_modifier = 50; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("large checkpoint")}
		if (fish_type == "Dumbfish" && fish_size == "Huge") {var fish_type_modifier = 100; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("huge checkpoint")}
		
		//Calculate Piranha
		if (fish_type == "Piranha" && fish_size == "Tiny") {var fish_type_modifier = 30; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("tiny checkpoint")}
		if (fish_type == "Piranha" && fish_size == "Small") {var fish_type_modifier = 120; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("small checkpoint")}
		if (fish_type == "Piranha" && fish_size == "Medium") {var fish_type_modifier = 210; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("medium checkpoint")}
		if (fish_type == "Piranha" && fish_size == "Large") {var fish_type_modifier = 300; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("large checkpoint")}
		if (fish_type == "Piranha" && fish_size == "Huge") {var fish_type_modifier = 900; fish_total += (fish_amount * fish_type_modifier) * clan_modifier; console.log("huge checkpoint")}
		
		//Calculate Topaz
		if (fish_type == "Topaz" && fish_size == "Tiny") {var fish_type_modifier = 3; fish_total += (fish_amount * fish_type_modifier); console.log("tiny checkpoint")}
		if (fish_type == "Topaz" && fish_size == "Small") {var fish_type_modifier = 6; fish_total += (fish_amount * fish_type_modifier); console.log("small checkpoint")}
		if (fish_type == "Topaz" && fish_size == "Medium") {var fish_type_modifier = 12; fish_total += (fish_amount * fish_type_modifier); console.log("medium checkpoint")}
		if (fish_type == "Topaz" && fish_size == "Large") {var fish_type_modifier = 30; fish_total += (fish_amount * fish_type_modifier); console.log("large checkpoint")}
		if (fish_type == "Topaz" && fish_size == "Huge") {var fish_type_modifier = 90; fish_total += (fish_amount * fish_type_modifier); console.log("huge checkpoint")}
		
		//Calculate Emerald
		if (fish_type == "Emerald" && fish_size == "Tiny") {var fish_type_modifier = 5; fish_total += (fish_amount * fish_type_modifier); console.log("tiny checkpoint")}
		if (fish_type == "Emerald" && fish_size == "Small") {var fish_type_modifier = 10; fish_total += (fish_amount * fish_type_modifier); console.log("small checkpoint")}
		if (fish_type == "Emerald" && fish_size == "Medium") {var fish_type_modifier = 20; fish_total += (fish_amount * fish_type_modifier); console.log("medium checkpoint")}
		if (fish_type == "Emerald" && fish_size == "Large") {var fish_type_modifier = 50; fish_total += (fish_amount * fish_type_modifier); console.log("large checkpoint")}
		if (fish_type == "Emerald" && fish_size == "Huge") {var fish_type_modifier = 150; fish_total += (fish_amount * fish_type_modifier); console.log("huge checkpoint")}
		
		//Calculate Sapphire
		if (fish_type == "Sapphire" && fish_size == "Tiny") {var fish_type_modifier = 10; fish_total += (fish_amount * fish_type_modifier); console.log("tiny checkpoint")}
		if (fish_type == "Sapphire" && fish_size == "Small") {var fish_type_modifier = 20; fish_total += (fish_amount * fish_type_modifier); console.log("small checkpoint")}
		if (fish_type == "Sapphire" && fish_size == "Medium") {var fish_type_modifier = 40; fish_total += (fish_amount * fish_type_modifier); console.log("medium checkpoint")}
		if (fish_type == "Sapphire" && fish_size == "Large") {var fish_type_modifier = 100; fish_total += (fish_amount * fish_type_modifier); console.log("large checkpoint")}
		if (fish_type == "Sapphire" && fish_size == "Huge") {var fish_type_modifier = 300; fish_total += (fish_amount * fish_type_modifier); console.log("huge checkpoint")}
		
		//Calculate Ruby
		if (fish_type == "Ruby" && fish_size == "Tiny") {var fish_type_modifier = 20; fish_total += (fish_amount * fish_type_modifier); console.log("tiny checkpoint")}
		if (fish_type == "Ruby" && fish_size == "Small") {var fish_type_modifier = 60; fish_total += (fish_amount * fish_type_modifier); console.log("small checkpoint")}
		if (fish_type == "Ruby" && fish_size == "Medium") {var fish_type_modifier = 80; fish_total += (fish_amount * fish_type_modifier); console.log("medium checkpoint")}
		if (fish_type == "Ruby" && fish_size == "Large") {var fish_type_modifier = 200; fish_total += (fish_amount * fish_type_modifier); console.log("large checkpoint")}
		if (fish_type == "Ruby" && fish_size == "Huge") {var fish_type_modifier = 600; fish_total += (fish_amount * fish_type_modifier); console.log("huge checkpoint")}
		
		//Calculate Diamond
		if (fish_type == "Diamond" && fish_size == "Tiny") {var fish_type_modifier = 30; fish_total += (fish_amount * fish_type_modifier); console.log("tiny checkpoint")}
		if (fish_type == "Diamond" && fish_size == "Small") {var fish_type_modifier = 60; fish_total += (fish_amount * fish_type_modifier); console.log("small checkpoint")}
		if (fish_type == "Diamond" && fish_size == "Medium") {var fish_type_modifier = 120; fish_total += (fish_amount * fish_type_modifier); console.log("medium checkpoint")}
		if (fish_type == "Diamond" && fish_size == "Large") {var fish_type_modifier = 300; fish_total += (fish_amount * fish_type_modifier); console.log("large checkpoint")}
		if (fish_type == "Diamond" && fish_size == "Huge") {var fish_type_modifier = 900; fish_total += (fish_amount * fish_type_modifier); console.log("huge checkpoint")}
		
	}
	
	// Find and set the boxes for total gems, total wls, and total byte
	var total_gems = document.getElementById("total_gems");
	var total_wl = document.getElementById("total_wl");
	var total_bc = document.getElementById("total_bc");
	
	total_gems.value = Math.round(fish_total);
	total_wl.value = Math.round(fish_total / worldlock_rate);
	total_bc.value = Math.round(fish_total / (worldlock_rate / 300)); // byte is temporarily same as wls because im too tired to think of the math right now.
	
}