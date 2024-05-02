import Home from "./home.js";
import About from "./about.js";
import Menu from "./menu.js";

const nav = document.querySelector("nav");
const btns = document.querySelectorAll("button");
const content = document.querySelector("#content");
Home();
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    content.textContent = "";
    if (btn.textContent === "Home") {
      Home();
    } else if (btn.textContent === "Menu") {
      Menu();
    } else if (btn.textContent === "About") {
      About();
    }
  });
});
