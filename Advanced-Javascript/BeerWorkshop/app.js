const showFive = document.querySelector(".showFive").value;
const showTen = document.querySelector(".showTen");
const showFifteen = document.querySelector(".showFifteen");
const divCard = document.querySelector(".card");
const moreDetailsBtn = document.querySelector("#moreDetailsBtn");
const nextPageBtn = document.querySelector(".nextBtn");
const pageSize = document.querySelector(".selectedOption");

// console.log(showFive);

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
}

getDataFromApi();



