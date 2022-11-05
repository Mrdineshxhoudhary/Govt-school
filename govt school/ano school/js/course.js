
var i = 0;
var images = []; //array
var time = 3000;
images[0] = "url(.././img/benner/benner-3.jpg)";
images[1] = "url(.././img/benner/benner-2.jpg)";
images[2] = "url(.././img/benner/benner-1.jpg)";
images[3] = "url(.././img/benner/benner-4.jpg)";
images[4] = "url(.././img/benner/benner-5.jpg)";
images[5] = "url(.././img/benner/benner-6.jpeg)";
images[6] = "url(.././img/benner/benner-7.jpg)";
images[7] = "url(.././img/benner/benner-8.jpg)";
images[8] = "url(.././img/benner/benner-9.jpg)";
images[9] = "url(.././img/benner/benner-10.jpg)";
images[10] = "url(.././img/benner/benner-11.jpg)";
images[11] = "url(.././img/benner/lax-bhasan.jpg)";
images[12] = "url(.././img/benner/lax-office.jpg)";

function changeImage() {
    var el = document.querySelector('.benner');
    el.style.backgroundImage = images[i];
    //    images[2].style.backgroundSize = "1000px";
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    // setTimeout('changeImage()', time);
}
window.onload = changeImage;
let menuclc = document.querySelector(".menu");
let menutlg = document.querySelector(".ul-gap");
let addClcCrose = document.querySelector(".menu i");
let plusbtn = document.querySelectorAll(".transition a p");
let listToggle = document.querySelectorAll(".transition.page-hov.po-rel");

menuclc.addEventListener("click", () => {
    menutlg.classList.toggle("ul-gap");

    menutlg.classList.toggle("mob-d-menu-toogle");
    addClcCrose.classList.toggle("crose");

});



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
        }
    }


//getting all required elements





