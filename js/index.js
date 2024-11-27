import baseurl from "./baseurl.js";
import { GetAllSuppliers } from "./requests.js";

let row = document.querySelector(".row")


function GetData() {
    GetAllSuppliers(`${baseurl}phones`)
    .then(res => showallphones(res.response))
}

GetData()


function showallphones (array) {
    row.innerHTML = ""
    array.forEach(element => {
        row.innerHTML += `
        <div class="col">
          <div class="card" style="width: 18rem">
            <img src="image.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${element.brand}</h5>
              <p class="card-text">${element.model}</p>
              <p class="card-text">Operating system: ${element.operatingSystem}</p>
              <p class="card-text">Year: ${element.year}</p>
              <p class="card-text">Price:${element.price}</p>
              <div class="card-buttons">
                <a href="#" class="btn btn-primary">Get More Details >>></a>
                <a class="fav-icon"><button><i class="fa-regular fa-heart"></i></button></a>
                <a class="fav-icon"><button><i class="fa-solid fa-basket-shopping"></i></button></a>
              </div>
            </div>
          </div>
        </div>
        `
    });
}