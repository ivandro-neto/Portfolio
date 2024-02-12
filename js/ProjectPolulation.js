const projectArea = document.querySelector(".project-area");
//Creating Item
const CreateItem = (title, webURL, image) => {
  const BodyCard = document.createElement("div");
  const WebURL = document.createElement("a");
  const Title = document.createElement("p");
  const Image = document.createElement("img");

  BodyCard.classList.add("item");
  WebURL.href = webURL;
  Image.src = image;
  Image.ariaLabel = title;
  WebURL.appendChild(Image);
  WebURL.addEventListener("mouseover", (e) =>
    show(e.target)
  );
  WebURL.addEventListener("mouseout", () => hide());
  Title.innerText = title;
  BodyCard.appendChild(WebURL);
  BodyCard.appendChild(Title);
  return BodyCard;
};

const PopulateList = () => {
  for (let i = 0; i < projects.length; i++) {
    const item = document.createElement("li");
    item.appendChild(
      CreateItem(projects[i].Title, projects[i].WebURL, projects[i].ImageURL)
    );
    projectArea.appendChild(item);
  }
};

PopulateList();
