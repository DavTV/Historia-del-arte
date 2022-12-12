const btnOpen = document.querySelector("#open");
const btnClose = document.querySelector("#close");
const nav = document.querySelector("#nav");
const ul = document.querySelector("#ul");
btnOpen.addEventListener("click",()=>{
    nav.classList.toggle("open");
})
btnClose.addEventListener("click",()=>{
    nav.classList.toggle("open");
})
ul.addEventListener("click",(e)=>{
    // e.preventDefault()
    if(e.target.classList.contains("li") || e.target.parentElement.classList.contains("li") ){
        // alert()
    nav.classList.toggle("open");

    }
})