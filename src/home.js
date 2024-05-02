import beerpour from "./asstets/beer-pour.jpg";
const content = document.querySelector("#content");

function Home() {
  const home = document.createElement("div");
  const heading = document.createElement("h1");
  const para = document.createElement("p");
  const space = document.createElement("div");

  home.classList.add("home");
  home.style.backgroundImage = `url('${beerpour}')`;
  space.classList.add("break");
  heading.textContent = "Discover the World of Craft Beer";
  para.textContent =
    "Explore a wide selection of artisanal brews from around the globe. From hoppy IPAs to rich stouts, we have something for every beer lover.";
  content.appendChild(home);
  home.appendChild(heading);
  home.appendChild(space);
  home.appendChild(para);
}

export default Home;
