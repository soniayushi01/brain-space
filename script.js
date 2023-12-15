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

const viwe = () => {
    document.querySelector(`.top-text`).addEventListener("click",(dets)=>{
        // update the image and change the color of h1 while pressing the h1
        if(dets.target.innerHTML === "Design"){ 
            console.log(dets.target.innerHTML);
            document.querySelector(`.top-line .innner-line`).style.transform = "translate(0%, 0%)";
            document.querySelector(`.top-line .innner-line`).style.top = `0%`;
            document.querySelector(`.top-text h1:nth-child(1)`).style.color = `white`;
            console.log(flag);
            // document.querySelector(`.right-cont`).style.backgroundImage = `URL(${})`;
        }else if(dets.target.innerHTML === "Project"){
            document.querySelector(`.top-text h1:nth-child(2)`).style.color = `white`;
            document.querySelector(`.top-line .innner-line`).style.top = `25%`;
            document.querySelector(`.top-line .innner-line`).style.transform = "translate(0%, 25%)";
            flag = 2
            // document.querySelector(`.right-cont`).style.backgroundImage = `URL(${https://uploads-ssl.webflow.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d0_Project.webp})`;
            console.log(dets.target.innerHTML);
        }else if(dets.target.innerHTML === "Execution"){
            document.querySelector(`.top-text h1:nth-child(3)`).style.color = `white`;
            document.querySelector(`.top-line .innner-line`).style.top = `50%`;
            document.querySelector(`.top-line .innner-line`).style.transform = "translate(0%, 50%)";
            console.log(dets.target.innerHTML);
        }
    })
}
viwe();
