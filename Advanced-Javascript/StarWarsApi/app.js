const fetchPlanetsBtn = document.querySelector("#btn");
const nextPage = document.querySelector("#nextPage");
const previousPage = document.querySelector("#previousPage");
const table = document.querySelector("#mainTable");
const tableBody = document.getElementsByTagName("tbody")[0];

previousPage.style.display = "none"
nextPage.style.display = "none"
table.style.display = "none"

let currentPage = 1;


async function getAllPosts(pageNumber) {
    const response = await fetch(`https://swapi.dev/api/planets/?page=${pageNumber}`);
    const data = await response.json();
      let planet = data.results;

      tableBody.innerHTML = "";
      for (let i = 0; i < 10; i++) {
        const row = tableBody.insertRow();
        const nameCell = row.insertCell();
        const populationCell = row.insertCell();
        const climateCell = row.insertCell();
        const gravityCell = row.insertCell();
        nameCell.innerHTML = planet[i].name;
        populationCell.innerHTML = planet[i].population;
        climateCell.innerHTML = planet[i].climate;
        gravityCell.innerHTML = planet[i].gravity;
      }
  if (currentPage === 1) {
    previousPage.style.display = "none";
} else{
    previousPage.style.display = "";
}
    nextPage.style.display = "";
      
}

fetchPlanetsBtn.addEventListener("click", function(){
table.style.display = ""
getAllPosts(1);
});

nextPage.addEventListener("click", function(){
currentPage++;
getAllPosts(currentPage);
});

previousPage.addEventListener("click", function(){
currentPage--;
getAllPosts(currentPage);

});