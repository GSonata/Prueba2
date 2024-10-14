document.querySelector("#openForm").addEventListener("click",()=>{
    document.querySelector("header").classList.add("show");
});

document.querySelector("#closeForm").addEventListener("click",()=>{
    document.querySelector("header").classList.remove("show");
});