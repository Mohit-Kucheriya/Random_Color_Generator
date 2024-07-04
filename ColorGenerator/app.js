const colorCode = document.querySelector("#colorCode");
const btnColor = document.querySelector("#btnColor");

const getRandom = () => {
    let randomColor = Math.floor(Math.random() * 16777215); //to generate random number
    let getCode = "#" + randomColor.toString(16); //to convert it into hexcode
    document.body.style.backgroundColor = getCode;
    let h3 = document.querySelector("h3");
    h3.innerHTML = getCode.toUpperCase();

    navigator.clipboard.writeText(getCode); //Color code will get automatically copy to our clipboard.
};

btnColor.addEventListener("click", getRandom);
getRandom();


// another method to generate random color 
let hex = `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`;
console.log(hex);
