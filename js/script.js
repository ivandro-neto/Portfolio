const tabs = document.querySelectorAll(".tabs");
const selected_tab = document.querySelector(".selected-tab");
const about = document.querySelector("#about");
const project = document.querySelector("#project");
const contact = document.querySelector("#contact");
const content = document.querySelector(".content");
const brand = document.querySelector(".brand img");
const info = document.querySelector(".informations");
let links = document.querySelector(".informations header ul li");
const background_brand = document.querySelector(".brand");
const btn = document.querySelector("#btn");
const container = document.querySelector(".container");
const socialIcons = document.querySelector(".footer a");
let src = brand.src;

function show(img) {
  brand.style.width = '100%'
  brand.style.transform = "scaleX(0px) scaleY(0px) scaleZ(0px)";
  brand.style.opacity = "0";
  setTimeout(() => {
    brand.src = img.firstElementChild.src;
    brand.style.transform = "scaleX(20px) scaleY(100px) scaleZ(-30px)";
    brand.style.opacity = "100%";
  }, 1000);
}
console.log(links);
function hide() {
  brand.style.width = '450px'
  brand.style.opacity = "0";
  setTimeout(() => {
    brand.src = src;
    brand.style.opacity = "100%";
  }, 1000);
}

let switcher = 0;
function onload() {
  switcher = 1;
}


function contact_btn() {
  switcher = 3;
}
tabs.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.id === about.id + "-link") {
      console.log(about.id);
      switcher = 1;
      // selected_tab.style.width= `15%`;
    } else if (element.id === project.id + "-link") {
      console.log(project.id);

      switcher = 2;
      //selected_tab.style.width= `23%`;
    } else if (element.id === contact.id + "-link") {
      console.log(contact.id);
      switcher = 3;
      //selected_tab.style.width= `23%`;
    }
  });
});

setInterval(() => {
  if (switcher === 1) {
    selected_tab.style.width = `10%`;
    content.style.transform = `translateX(0px)`;
    if (window.innerWidth <= 768) {
      selected_tab.style.transform = `translateX(-140px)`;
      about.style.display = "flex";
      project.style.display = "none";
      contact.style.display = "none";
    } else selected_tab.style.transform = `translateX(-190px)`;
    about.style.opacity = "100%";
    project.style.opacity = "0";
    contact.style.opacity = "0";
  } else if (switcher === 2) {
    selected_tab.style.transform = `translateX(-10px)`;
    selected_tab.style.width = `12%`;
    content.style.transform = `translateX(0vw)`;
    if (window.innerWidth <= 768) {
      about.style.display = "none";
      project.style.display = "flex";
      contact.style.display = "none";
    }

    project.style.opacity = "100%";
    about.style.opacity = "0";
    contact.style.opacity = "0";
  } else if (switcher === 3) {
    selected_tab.style.width = `11%`;
    content.style.transform = `translateX(0vw)`;
    if (window.innerWidth <= 768) {
      selected_tab.style.transform = `translateX(128px)`;
      about.style.display = "none";
      project.style.display = "none";
      contact.style.display = "flex";
    } else selected_tab.style.transform = `translateX(178px)`;
    contact.style.opacity = "100%";
    about.style.opacity = "0";
    project.style.opacity = "0";
  }
  
  
}, 1);
