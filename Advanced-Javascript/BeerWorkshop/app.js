const showFive = document.querySelector("#showFive");
const showTen = document.querySelector("#showTen");
const showFifteen = document.querySelector("#showFifteen");
const divCard = document.querySelector(".card");
const moreDetailsBtn = document.querySelector("#moreDetailsBtn");
const nextPageBtn = document.querySelector(".nextBtn");
const pageSize = document.querySelector(".selectedOption");
const moreDetailsContainer = document.querySelector(".moreDetails");

async function getDataFromApi(){
    const response = await fetch (`https://api.punkapi.com/v2/beers`)
    const data = await response.json();


    for(i = 0;  i < data.length; i++){
        divCard.innerHTML += `
        <div class="card-body" id = "${data[i].id}">
            <img src="${data[i].image_url}" class="card-img-top img" width="25px">
          <h5 class="card-title">${data[i].name}</h5>
          <p class="card-text">${data[i].description.slice(0, 50) + ".."}</p>
          <a href="#" class="btn btn-primary" id="moreDetails">More Details</a>
        </div>
        `
    }

    showFive.addEventListener(`click`, () => {
       divCard.innerHTML = "";

       for(i = 0;  i < 5; i++){
        divCard.innerHTML += `
        <div class="card-body" id = "${data[i].id}">
            <img src="${data[i].image_url}" class="card-img-top img" width="25px">
          <h5 class="card-title">${data[i].name}</h5>
          <p class="card-text">${data[i].description.slice(0, 50) + ".."}</p>
          <a href="#" class="btn btn-primary" id="moreDetails">More Details</a>
        </div>
        `
    }
    })
    showTen.addEventListener(`click`, () => {
       divCard.innerHTML = "";

       for(i = 0;  i < 10; i++){
        divCard.innerHTML += `
        <div class="card-body" id = "${data[i].id}">
            <img src="${data[i].image_url}" class="card-img-top img" width="25px">
          <h5 class="card-title">${data[i].name}</h5>
          <p class="card-text">${data[i].description.slice(0, 50) + ".."}</p>
          <a href="#" class="btn btn-primary" id="moreDetails">More Details</a>
        </div>
        `
    }
    })
    showFifteen.addEventListener(`click`, () => {
       divCard.innerHTML = "";

       for(i = 0;  i < 15; i++){
        divCard.innerHTML += `
        <div class="card-body" id = "${data[i].id}">
            <img src="${data[i].image_url}" class="card-img-top img" width="25px">
          <h5 class="card-title">${data[i].name}</h5>
          <p class="card-text">${data[i].description.slice(0, 50) + ".."}</p>
          <a href="#" class="btn btn-primary" id="moreDetails">More Details</a>
        </div>
        `
    }
    })
}




divCard.addEventListener("click", function (event) {
  if (event.target.id === "moreDetails") {
    fetchDataById(event.target.getAttribute("data-id"));
  }
});

async function fetchDataById(id) {
  const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
  const data = await response.json();
  // console.log(data);
  moreDetailsDisplay(data[0]);
}

function moreDetailsDisplay(data){
  divCard.style.display = "none";
  moreDetailsContainer.innerHTML = `
  <img src="${data.image_url}" alt="" class="singleBearImage">
  <div class="all">
    <p class="name" style="font-weight: bold;">${data.name}</p>
    <hr>
    <p class="description">${data.description}</p>
    <br>
    <p>Brewed: ${data.first_brewed}<p>
    <p>Alcohol: ${data.abv}%<p>
    <p>Bitterness: ${data.ibu} IBU<p>
    <br>
    <div class="foodPairing" style="font-weight: bold;">Food Pairing</div>
    <br>
    <div style="border: 0.1px solid grey; padding: 10px;" border-radius = 6%>
      <p class="FoodParing">${data.food_pairing
        .map((fp) => `"${fp}"`)
        .join("<hr>")}</p>
    </div>
  </div>
  `

}

getDataFromApi();



