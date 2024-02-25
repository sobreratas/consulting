const homeBtn = document.querySelector(".home-btn");
const aboutBtn = document.querySelector(".about-btn");
const aboutBox = document.querySelector(".about-box");
const projectsBtn = document.querySelector(".projects-btn");
const projectsBox = document.querySelector(".projects-box");
const contactBtn = document.querySelector(".contact-btn");
const contactBox = document.querySelector(".contact-box");
const here = document.querySelector(".here");
const body = document.querySelector("body");
const navBtns = document.querySelectorAll(".nav-btn");

homeBtn.addEventListener("click", (e) => {
  showHomeBox();
  manageNavBtnActiveState(e);
});

contactBtn.addEventListener("click", (e) => {
  showContactBox();
  manageNavBtnActiveState(e);
});

projectsBtn.addEventListener("click", (e) => {
  showProjectsBox();
  manageNavBtnActiveState(e);
});

aboutBtn.addEventListener("click", (e) => {
  showAboutBox();
  manageNavBtnActiveState(e);
});

here.addEventListener("click", () => {
  showContactBox();
});

function manageNavBtnActiveState(e){
  navBtns.forEach(navBtn => {
    navBtn.classList.remove("active");
  })
  e.target.classList.add("active");
}

function showHomeBox() {
  aboutBox.style.top = "100%";
  projectsBox.style.top = "100%";
  contactBox.style.top = "100%";
}

function showContactBox() {
  aboutBox.style.top = "100%";
  projectsBox.style.top = "100%";
  contactBox.style.top = "70px";
}

function showProjectsBox() {
  aboutBox.style.top = "100%";
  contactBox.style.top = "100%";
  projectsBox.style.top = "70px";
}

function showAboutBox() {
  contactBox.style.top = "100%";
  projectsBox.style.top = "100%";
  aboutBox.style.top = "70px";
}
