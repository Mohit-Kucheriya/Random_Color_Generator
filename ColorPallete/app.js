const ulContainer = document.querySelector(".container"); //ul tag
const changeBtn = document.querySelector(".changeBtn"); //button for changing color

const maxColorBox = 24

const generatePallete = () => {
    ulContainer.innerHTML = "";
    for (let i = 0; i < maxColorBox; i++) {
        // Generating random hexcolor code
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, 0)}`;

        // creating an new "li element" and then append it to "ul"
        const li = document.createElement("li");
        li.classList.add("color");
        li.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
        <span class="hex-value">${randomHex}</span>`;
        ulContainer.append(li);
    }

}
generatePallete()

changeBtn.addEventListener("click", generatePallete);