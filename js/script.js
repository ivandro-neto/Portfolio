const tabs = document.querySelectorAll(".tabs");
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
let src = brand.src;

function show(img) {
  brand.style.width = "100%";
  brand.style.transform = "scaleX(0px) scaleY(0px) scaleZ(0px)";
  brand.style.opacity = "0";
  setTimeout(() => {
    brand.src = img.src;
    brand.style.transform = "scaleX(20px) scaleY(100px) scaleZ(-30px)";
    brand.style.opacity = "100%";
  }, 1000);
}

function hide() {
  brand.style.width = "50%";
  brand.style.opacity = "0";
  setTimeout(() => {
    brand.src = src;
    brand.style.opacity = "100%";
  }, 1000);
}

let switcher = 1;

function contact_btn() {
  switcher = 3;
}
tabs.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.id === about.id + "-link") {
      switcher = 1;
      // selected_tab.style.width= `15%`;
    } else if (element.id === project.id + "-link") {
      switcher = 2;
      //selected_tab.style.width= `23%`;
    } else if (element.id === contact.id + "-link") {
      switcher = 3;
      //selected_tab.style.width= `23%`;
    }
  });
});

const TabSwitcher = () => {
  //Tab bar behavior
  switch (switcher) {
    case 1:
      tabs.forEach((element) => element.classList.remove("selected"));
      tabs[0].classList.add("selected");
      content.style.transform = `translateX(0px)`;
      if (window.innerWidth <= 768) {
        about.style.display = "flex";
        project.style.display = "none";
        contact.style.display = "none";
      }
      about.style.opacity = "100%";
      project.style.opacity = "0";
      contact.style.opacity = "0";
      break;
    case 2:
      tabs.forEach((element) => element.classList.remove("selected"));
      tabs[1].classList.add("selected");
      content.style.transform = `translateX(0vw)`;
      if (window.innerWidth <= 768) {
        about.style.display = "none";
        project.style.display = "flex";
        contact.style.display = "none";
      }

      project.style.opacity = "100%";
      about.style.opacity = "0";
      contact.style.opacity = "0";
      break;
    case 3:
      tabs.forEach((element) => element.classList.remove("selected"));
      tabs[2].classList.add("selected");
      content.style.transform = `translateX(0vw)`;
      if (window.innerWidth <= 768) {
        about.style.display = "none";
        project.style.display = "none";
        contact.style.display = "flex";
      }
      contact.style.opacity = "100%";
      about.style.opacity = "0";
      project.style.opacity = "0";
      break;
    default:
      break;
  }
};

setInterval(() => {
  TabSwitcher();
}, 1);
