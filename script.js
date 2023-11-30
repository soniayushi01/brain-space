const hoverDisplay = () => {
    document.querySelector(`#container-four`).addEventListener("mouseenter",()=>{
        document.querySelector(`#fixed`).style.display = "block";
    });
    document.querySelector(`#container-four`).addEventListener("mouseleave",()=>{
        document.querySelector(`#fixed`).style.display = "none";
    });
}
hoverDisplay();

const viweImage = () => {
    const display = document.querySelectorAll(`.display`)
display.forEach((dets)=>{
    dets.addEventListener("mousemove",()=>{
        const imges = dets.getAttribute("data-img");
        document.querySelector(`#fixed`).style.backgroundImage = `URL(${imges})`;
    })
})
}
viweImage();
