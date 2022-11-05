let pgh;
let pgbtn;
var i = 0;
var images = []; //array
var time = 3000;
images[0] = "url(.//img/benner/benner-3.jpg)";
images[1] = "url(.//img/benner/benner-2.jpg)";
images[2] = "url(.//img/benner/benner-1.jpg)";
images[3] = "url(.//img/benner/benner-4.jpg)";
images[4] = "url(.//img/benner/benner-5.jpg)";
images[5] = "url(.//img/benner/benner-6.jpeg)";
images[6] = "url(.//img/benner/benner-7.jpg)";
images[7] = "url(.//img/benner/benner-8.jpg)";
images[8] = "url(.//img/benner/benner-9.jpg)";
images[9] = "url(.//img/benner/benner-10.jpg)";
images[10] = "url(.//img/benner/benner-11.jpg)";
images[11] = "url(.//img/benner/lax-bhasan.jpg)";
images[12] = "url(.//img/benner/lax-office.jpg)";

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
// let pagehov = document.querySelectorAll("div.page-edit");
// let pageho = document.querySelectorAll("div.page-edit:nth-child(-n+5)");
let addClcCrose = document.querySelector(".menu i");
let plusbtn = document.querySelectorAll(".transition a p");
let listToggle = document.querySelectorAll(".transition.page-hov.po-rel");
const myStyles = `
position: absolute;
right: 0;`;
// const element = document.querySelector('.demo');
// var faq = document.getElementsByClassName("faq-page");



menuclc.addEventListener("click", () => {
    menutlg.classList.toggle("ul-gap");

    menutlg.classList.toggle("mob-d-menu-toogle");
    addClcCrose.classList.toggle("crose");
    // plusbtn[].
    // for (let pgh = 0; pgh < pagehov.length; pgh++) {
    //     pagehov[pgh].classList.add("D-none");
    //     pagehov[pgh].addEventListener("click", function () {
    //         /* Toggle between adding and removing the "active" class,
    //         to highlight the button that controls the panel */
    //         this.classList.toggle("flex");
    //         /* Toggle between hiding and showing the active panel */
    //         // var body = this.nextElementSibling;
    //         // if (body.style.display === "block") {
    //         //     body.style.display = "none";
    //         // } else {
    //         //     body.style.display = "block";
    //         // }
    //     });
    // }

    // for (let pgbtn = 0; pgbtn < plusbtn.length; pgbtn++) {
    //     plusbtn[pgbtn].classList.toggle("pluse01");
    //     plusbtn[pgbtn].classList.remove("D-none");

    // }
    // plusbtn.style.cssText = myStyles;

});
