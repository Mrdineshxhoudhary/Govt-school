// gallary
const myStyles = `
  background: #00000099;
    position: fixed;
    top: 0px;
    margin: auto;
    width: 100%;
    z-index: 1122;
    display: flex;
    height: 112%;
    justify-content: center;
    align-items: center;`;
const Crosecss = `position: absolute;
top: 25%;
background: gold;
padding: 6px;
cursor:pointer;`;
const imgTar = document.querySelectorAll(".gallary .img-clc"),
 imgper = document.querySelector(".img-clc img"),
 previewbox = document.querySelector(".previewbox"),
 previewboxImg = previewbox.querySelector(".previewbox img")
 ;

let imgpar = document.querySelector(".img-clc");
let crose = document.querySelector(".crose-ico");

window.onload = () => {
    for (let i = 0; i < imgTar.length; i++) {

        imgTar[i].onclick = () => {
            let imgprew = imgTar[i].querySelector("img").src;
            previewboxImg.src = imgprew;
            previewbox.style.cssText = (myStyles);
            crose.classList.add("o-icon-w");
            crose.style.cssText = (Crosecss);
            previewboxImg.classList.add('flex', 'm-auto', 'w-full', 'h-56', 'a-l-i-cen');
            crose.addEventListener("click", () => {
                // previewbox.classList.add('po-f', 'flex', 'z-in', 'a-l-i-cen', 'j-con-cen', 'h-full', 'w-full');
                previewbox.style.cssText = (myStyles).remove;
            });
            // console.log(i);
            console.log(i);
            

        }
    }
}

//getting all required elements
