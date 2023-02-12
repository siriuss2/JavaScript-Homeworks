const astronautImg = document.querySelector(".cosmonautImg");
const rocketImg = document.querySelector(".rocketImg");
const tableHead = document.getElementsByTagName("thead")[0];
const tablePeople = document.querySelector(".tablePeople");
const tableBodyPeople = document.querySelector("#peopleTableBody");
const tableShips = document.querySelector(".tableShips");
const tableShipsBody = document.querySelector(".tableShipsBody");
const nextPageBtn = document.querySelector(".nextPageBtn");
const previousPageBtn = document.querySelector(".previousPageBtn");
const nextBtnForShips = document.querySelector(".nextPageBtnForShips");
const previousBtnForShips = document.querySelector(".previousPageBtnForShips");
tablePeople.style.display = "none";
tableShips.style.display = "none";

let currentPage = 1;
let shipsCurrentPage = 1;

async function getDataForAstronauts(pageNumber) {
  const response = await fetch(
    `https://swapi.dev/api/people/?page=${pageNumber}`
  );
  const data = await response.json();
  let astronaut = data.results;


  tablePeople.style.display = "inline-block";
  tableBodyPeople.innerHTML = "";

  for (i = 0; i < 10; i++) {
    tableBodyPeople.innerHTML += `
    <tr>
        <td>${astronaut[i].name}</td>
        <td>${astronaut[i].height}</td>
        <td>${astronaut[i].mass}</td>
        <td>${astronaut[i].gender}</td>
        <td>${astronaut[i].birth_year}</td>
        <td>${astronaut[i].films.length}</td>
    </tr>`;
  }
}

astronautImg.addEventListener(`click`, () => {
    tableShips.style.display = "none";
    nextBtnForShips.style.display = "none";
    previousBtnForShips.style.display = "none";
  getDataForAstronauts(1);

  nextPageBtn.style.display = "block";
});

nextPageBtn.addEventListener(`click`, () => {
    previousPageBtn.style.display = "block"
    currentPage++
    getDataForAstronauts(currentPage);
})

previousPageBtn.addEventListener(`click`, () => {
    currentPage--
    getDataForAstronauts(currentPage);
    if(currentPage === 1){
        previousPageBtn.style.display = "none";
    }
})

//------------------------------------------------------------------------------------------------------------------
async function getDataForShips(pageNumber){
    const response = await fetch(`https://swapi.dev/api/starships/?page=${pageNumber}`);
    const data = await response.json();
    let ships = data.results;

    tableShips.style.display = "inline-block";
    tableShipsBody.innerHTML = "";

    for(i = 0; i < 10; i++){
        tableShipsBody.innerHTML += `
        <tr>
        <td>${ships[i].name}</td>
        <td>${ships[i].model}</td>
        <td>${ships[i].manufacturer}</td>
        <td>${ships[i].cost_in_credits}</td>
        <td>${ships[i].crew + ships[i].passengers}</td>
        <td>${ships[i].starship_class}</td>
        </tr>`
    }
}

rocketImg.addEventListener(`click`, () => {
    tablePeople.style.display = "none";
    nextPageBtn.style.display = "none";
    previousPageBtn.style.display = "none";
    getDataForShips(shipsCurrentPage);

    nextBtnForShips.style.display = "block";
})

nextBtnForShips.addEventListener(`click`, () => {
    shipsCurrentPage++
    getDataForShips(shipsCurrentPage);
    previousBtnForShips.style.display = "block";
})

previousBtnForShips.addEventListener(`click`, () => {
    shipsCurrentPage--
    getDataForShips(shipsCurrentPage);
    if(shipsCurrentPage === 1){
        previousBtnForShips.style.display = "none";
    }
})