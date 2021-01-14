let fish_list = []

function addRow() {
          
    var fish_amount = document.getElementById("fish_amount");
    var fish_type = document.getElementById("fish_type");
    var fish_size = document.getElementById("fish_size");
	var table = document.getElementById("fish_table");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= '<i class="fas fa-trash-alt" onClick="deleteRow(this)"></i>';
    row.insertCell(1).innerHTML= fish_amount.value;
    row.insertCell(2).innerHTML= fish_type.value;
	row.insertCell(3).innerHTML= fish_size.value;
 
}

function deleteRow(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("fish_table");
    table.deleteRow(index);
    
}