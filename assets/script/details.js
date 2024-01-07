let id = new URLSearchParams(window.location.search).get("id");
let cards = document.querySelector("#cardsdet")
let url = "http://localhost:3000/data/";

async function adver(id){
    let res = await axios.get(url+id);
    let data = await res.data;
    cards.innerHTML+=`
    <div class="cards">
    <div class="img">
        <img src="${data.img}" alt="">
    </div>
    <p class="data">${data.date}</p>
    <h2>${data.nam}</h2>
    </div>`
}
adver(id);