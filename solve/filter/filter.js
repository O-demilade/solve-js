
export const FilterModule = () => {

    //Write solution to the Filter task inside this FilterModule function.
    
    //link all control buttons
    let allOnBtn = document.querySelector("#allColr");
    let onlyRedBtn = document.querySelector("#onlyRed");
    let onlyYlwBtn = document.querySelector("#onlyYlw");
    let onlyGrnBtn = document.querySelector("#onlyGrn");

    allOnBtn.addEventListener("click", ()=>{
        document.querySelectorAll(".colrDiv").forEach(element=>element.style.display="flex")
    });

    onlyRedBtn.addEventListener("click", ()=>{
        document.querySelectorAll(".colrDiv").forEach(element=>element.style.display="none"), 
        document.querySelectorAll(".red").forEach(element=>element.style.display="flex")
    });

    onlyYlwBtn.addEventListener("click", ()=>{
        document.querySelectorAll(".colrDiv").forEach(element=>element.style.display="none"), 
        document.querySelectorAll(".yellow").forEach(element=>element.style.display="flex")
    });

    onlyGrnBtn.addEventListener("click", ()=>{
        document.querySelectorAll(".colrDiv").forEach(element=>element.style.display="none"), 
        document.querySelectorAll(".green").forEach(element=>element.style.display="flex")
    });

    [].forEach
}