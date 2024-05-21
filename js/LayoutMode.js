const langIcon = document.querySelector("#iconLang");
const icon = document.querySelector("#iconMode");

/* Default theme set */
document.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme");

  if (theme) {
    document.body.classList.add(theme);
  } else {
    // Check if user prefers dark mode and apply dark theme
    //console.log(window.matchMedia);
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.body.classList.add("dark-theme");
    } 
  } 
});

setInterval(() => {
  if (document.body.classList.contains("dark-mode")) {
    brand.src = src = "images/Brand/Logo-extended---white.png";
    icon.src = "images/icons/imoon.png";
    currentTheme = "dark-mode";
  } else {
    brand.src = src = "images/Brand/Logo-extended---black.png";
    icon.src = "images/icons/isun.png";
    currentTheme = "";
  }
}, 1);

icon.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  let currentTheme = "";
  localStorage.setItem("theme", currentTheme);
});

if (!localStorage.getItem("language")) {
  localStorage.setItem("language", "en");
}

langIcon.textContent = localStorage.getItem("language").toUpperCase();

const UpdateResume = (content) => {
  const aboutSection = document.querySelector("#about .description");

  //Update About Resume Content
  for (let i = 0; i < aboutSection.childNodes.length; i++) {
    if (i % 2 == 1) {
      aboutSection.childNodes[i].innerHTML = content[i];
    }
  }
};

const UpdateTabs = (about, project, contact) => {
  document.querySelector("#about-link").innerText = about;
  document.querySelector("#project-link").innerText = project;
  document.querySelector("#contact-link").innerText = contact;
};

const UpdateContact = (text, btnText) => {
  document.querySelector("#contact").childNodes[1].innerText = text;
  document
    .querySelectorAll("#btn a")
    .forEach((button) => (button.innerText = btnText));
};

const ChangeLanguage = (selectedLanguage) => {
  const textArray = [];
  const language = languagesRole.find(
    (item) => item.Role.toLowerCase() === selectedLanguage
  );
  const { SectionAbout, SectionContact } = language.content;
  if (language) {
    const aboutContentResume = SectionAbout.Resume.split("*");
    for (let i = 0; i < aboutContentResume.length; i++) {
      textArray.push(null);
      textArray.push(aboutContentResume[i]);
    }
  }
  const { About, Projects, Contact } = language.content.Tabs;
  //Updates
  UpdateTabs(About, Projects, Contact);
  UpdateResume(textArray);
  UpdateContact(SectionContact.Message, SectionContact.ButtonText);
};

langIcon.addEventListener("click", () => {
  const currentLanguage = localStorage.getItem("language");
  const newLanguage = currentLanguage === "en" ? "pt" : "en";

  localStorage.setItem("language", newLanguage);
  langIcon.textContent = newLanguage.toUpperCase();

  ChangeLanguage(newLanguage);
});

ChangeLanguage(localStorage.getItem("language"));
