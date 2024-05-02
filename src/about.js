import owners from "./asstets/fake-owners.jpg";
import beerfoam from "./asstets/beer-foam.jpg";

const content = document.querySelector("#content");

function About() {
  const aboutUs = document.createElement("div");
  aboutUs.classList.add("about-us");

  const heading = document.createElement("h1");
  heading.textContent = "About us";

  const part1 = document.createElement("div");
  part1.classList.add("part1");

  const ownersElem = document.createElement("img");
  ownersElem.src = owners;
  ownersElem.alt = "";
  ownersElem.classList.add("round-image");

  const para1 = document.createElement("p");
  para1.textContent =
    "At our craft brewery, we're more than just passionate beer enthusiasts—we're two friends united by our love for quality brews and the community that surrounds us. What started as a shared dream over pints at our local pub has blossomed into a vibrant brewery dedicated to crafting exceptional beers that reflect the unique flavors of our region. With each batch, we infuse our beers with the spirit of camaraderie and the essence of our local terroir, ensuring that every sip tells a story of friendship and locality.";

  const part2 = document.createElement("div");
  part2.classList.add("part2");

  const para2 = document.createElement("p");
  para2.textContent =
    "Here at [Brewery Name], freshness isn't just a buzzword—it's a way of life. We believe that great beer starts with great ingredients, which is why we're committed to sourcing only the freshest, highest-quality produce from local farmers and suppliers. From crisp hops grown in nearby fields to rich barley harvested just miles away, every element of our brewing process reflects our dedication to supporting local agriculture and reducing our carbon footprint. By harnessing the bounty of our region, we not only create beers of unparalleled freshness and flavor but also champion the vibrant community that sustains us. Join us on our journey as we raise a glass to friendship, flavor, and the endless possibilities of craft brewing. Cheers!";

  const beerfoamElem = document.createElement("img");
  beerfoamElem.src = beerfoam;
  beerfoamElem.alt = "";
  beerfoamElem.classList.add("round-image");

  aboutUs.appendChild(heading);
  aboutUs.appendChild(part1);
  aboutUs.appendChild(part2);

  part1.appendChild(ownersElem);
  part1.appendChild(para1);

  part2.appendChild(para2);
  part2.appendChild(beerfoamElem);

  content.appendChild(aboutUs);
}
export default About;
