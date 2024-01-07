let file = document.querySelector("#file");
let form = document.querySelector(".form");
let img = document.querySelector("#img");
let date = document.querySelector("#date");
let name = document.querySelector("#name");
file.addEventListener("change", () => {
    let src = file.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(src);
    reader.onload = function (e) {
        img.src = e.target.result;
    }
})
form.addEventListener("submit",(event)=>{
event.preventDefault();
let obj={};
let src = file.files[0]
const reader = new FileReader();
reader.onload = function (e) {
    obj = {
        img: e.target.result,
        nam: name.value,
        date:date.value
    }
    axios.post("http://localhost:3000/data", obj).then(res => console.log(res.data))
}
console.log(obj);
reader.readAsDataURL(src);
window.location.reload;

})