
export const ToggleModule = () => {

    //Write solution to the Toggle task inside this ToggleModule function.
    console.log('checking toggle...');

    let butn = document.querySelector("#switch");
    let indicator = document.querySelector("#indicator");

    //a check to see if the switch is on or off and display appropriately
    let on_Check = () => {
        for(let i=0; i<indicator.classList.length; i++){
            if(indicator.classList[i] === "on"){indicator.innerText = "ON"}
            else{indicator.innerText = "OFF"};
        };
    };

    butn.addEventListener("click", () => {
        indicator.classList.toggle("on");
        on_Check();
    });
}

