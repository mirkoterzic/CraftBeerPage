// Import your images
import beer1019 from "./asstets/1019.png";
import albino from "./asstets/albino.png";
import benedict from "./asstets/benedict.png";
import dockersBRA from "./asstets/DockersBrazil.png";
import damaticnjak from "./asstets/dramaticnjak.png";
import flyingDogma from "./asstets/flyingDogma.png";
import hoptopod from "./asstets/hoptopod.png";
import lokalac from "./asstets/lokalac.png";
import svetionik from "./asstets/svetionik.png";
import trkac from "./asstets/trkac.png";

const content = document.querySelector("#content");

function Menu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const menuItems = [
    beer1019,
    albino,
    benedict,
    dockersBRA,
    damaticnjak,
    flyingDogma,
    hoptopod,
    lokalac,
    svetionik,
    trkac,
  ];

  menuItems.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const image = document.createElement("img");
    image.src = item;
    image.alt = "";
    image.srcset = ""; // You can set the srcset attribute if needed

    menuItem.appendChild(image);
    menu.appendChild(menuItem);
  });

  content.appendChild(menu);
}
export default Menu;
