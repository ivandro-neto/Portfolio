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
  brand.style.width = "20em";
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
      selected_tab.style.width = "15%";

      content.style.transform = `translateX(0px)`;
      if (window.innerWidth <= 768) {
        selected_tab.style.transform =
          localStorage.getItem("language") === "en"
            ? `translateX(50px)`
            : `translateX(30px)`;
        about.style.display = "flex";
        project.style.display = "none";
        contact.style.display = "none";
      } else
        selected_tab.style.transform =
          localStorage.getItem("language") === "en"
            ? `translateX(75px)`
            : `translateX(53px)`;
      about.style.opacity = "100%";
      project.style.opacity = "0";
      contact.style.opacity = "0";
      break;
    case 2:
      selected_tab.style.transform =
        localStorage.getItem("language") === "en"
          ? `translateX(250px)`
          : `translateX(236px)`;
      selected_tab.style.width = `20%`;
      content.style.transform = `translateX(0vw)`;
      if (window.innerWidth <= 768) {
        selected_tab.style.transform =
          localStorage.getItem("language") === "en"
            ? `translateX(143px)`
            : `translateX(117px)`;
        selected_tab.style.width =
          localStorage.getItem("language") === "en" ? `25%` : `30%`;
        about.style.display = "none";
        project.style.display = "flex";
        contact.style.display = "none";
      }

      project.style.opacity = "100%";
      about.style.opacity = "0";
      contact.style.opacity = "0";
      break;
    case 3:
      selected_tab.style.width =
        localStorage.getItem("language") === "en" ? `18%` : `22%`;
      content.style.transform = `translateX(0vw)`;
      if (window.innerWidth <= 768) {
        selected_tab.style.width =
          localStorage.getItem("language") === "en" ? `25%` : `28%`;
        selected_tab.style.transform = `translateX(267px)`;
        about.style.display = "none";
        project.style.display = "none";
        contact.style.display = "flex";
      } else
        selected_tab.style.transform =
          localStorage.getItem("language") === "en"
            ? `translateX(463px)`
            : `translateX(457px)`;
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
