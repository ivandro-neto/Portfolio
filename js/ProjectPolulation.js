const projectArea = document.querySelector(".project-area");
//Creating Item
const CreateItem = (title, webURL, image) => {
  const BodyCard = document.createElement("div");
  const WebURL = document.createElement("a");
  const Title = document.createElement("p");
  const Image = document.createElement("img");

  BodyCard.classList.add("item");
  WebURL.href = webURL;
  WebURL.target = "_blank"
  Image.src = image;
  Image.ariaLabel = title;
  WebURL.appendChild(Image);
  WebURL.addEventListener("mouseover", (e) => show(e.target));
  WebURL.addEventListener("mouseout", () => hide());
  Title.innerText = title;
  BodyCard.appendChild(WebURL);
  BodyCard.appendChild(Title);
  return BodyCard;
};

const PopulateList = () => {
  if (projects.length > 0) {
    for (let i = 0; i < projects.length; i++) {
      const item = document.createElement("li");
      item.appendChild(
        CreateItem(projects[i].Title, projects[i].WebURL, projects[i].ImageURL)
      );
      projectArea.appendChild(item);
    }
  } else projectArea.innerHTML = "Oops! No Project Found here.";
};

PopulateList();
