function createTable() {
    var numColumns = prompt("Enter the number of columns:");
    var numRows = prompt("Enter the number of rows:");
  
    var table = document.createElement("table");
  
    for (var i = 0; i < numRows; i++) {
      var row = document.createElement("tr");
      for (var j = 0; j < numColumns; j++) {
        var cell = document.createElement("td");
        cell.innerHTML = "Row-" + (i+1) + " Column-" + (j+1);
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
  
    document.body.appendChild(table);
  }

  createTable();
