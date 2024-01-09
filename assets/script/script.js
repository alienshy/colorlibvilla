window.addEventListener("scroll",()=>{
    if(window.scrollY > 200){
        document.querySelector(".getstart").style.right = "40px";
    }
    else{
        document.querySelector(".getstart").style.right = "-200px";
    }
})




///////menu/////
document.querySelector(".bi-list").addEventListener("click",()=>{
    document.querySelector(".menu").style.display = "flex";
})
document.querySelector(".bi-x").addEventListener("click", () => {
    document.querySelector(".menu").style.display = "none";
})


let url = "http://localhost:3000/data/";



let card =  document.querySelector("#cardsdiv");
let search =  document.querySelector("#search");
let filter = [];
let copy = [];
let maxl = 3;
let load =  document.querySelector("#load");

async function cagirma (){
    let res = await axios.get(url)
    let data = await res.data;
    copy =  data;

card.innerHTML="";
filter=filter.length || search.value ? filter : data;


filter.slice(0,maxl).forEach(el =>{
    card.innerHTML+=`
    <div class="cards">
    <div class="img">
        <img src="${el.img}" alt="">
    </div>
    <p class="data">${el.date}</p>
    <i class="bi bi-heart-fill"></i>
    <h2>${el.nam}</h2>
    <div class="info"><i class="bi bi-trash2-fill" onclick="deletecards(${el.id})"></i><i class="bi bi-arrow-down-square-fill"></i><a href="./details.htm?id=${el.id}"><i class="bi bi-info-circle-fill"></i></a></div>
</div>
    `
})
}
cagirma();

///////load//////

load.addEventListener("click",() => {
    math();
    double();
    cagirma();
})

function double(){
    if( maxl >= copy.length){
        load.innerHTML = "show less"
    }
    else{
        load.innerHTML = "load more"
    }
}

 function math (){
    if(load.innerHTML=="show less"){
        maxl=3;
    }
    else{
        maxl+=3;
    }
 }



 ///////search////

 search.addEventListener("input",(e)=>{
    filter = copy;
    filter = filter.filter((y)=>{
        return y.nam.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    })
    cagirma();
 })

 async function deletecards(id){
    let res = await axios.delete(url + id)
    window.location.reload();
    return res.data;
 }