window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");
    loader.addEventListener("transitionend", () => { document.body.removeChild("loader") })
})

function hover(Item_Primogem) {
    Item_Primogem.src = "img/genesis.png";
}

function hoverOut(Item_Primogem) {
    Item_Primogem.src = "img/Item_Primogem.png";
}