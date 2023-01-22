function createTable() {
    let numColumns = prompt("Enter the number of columns:");
    let numRows = prompt("Enter the number of rows:");
  
    let table = document.createElement("table");
  
    for (let i = 0; i < numRows; i++) {
      let row = document.createElement("tr");
      for (let j = 0; j < numColumns; j++) {
        let cell = document.createElement("td");
        cell.innerHTML = "Row-" + (i+1) + " Column-" + (j+1);
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
  
    document.body.appendChild(table);
  }

  createTable();
