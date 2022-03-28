// Top right hand menu functionality
const logoutBtn = document.getElementById("logout");
const homeBtn = document.getElementById("home");
const dashboardBtn = document.getElementById("dashboard");
const questionBtn = document.getElementById("question");

const homeFav = document.getElementById("fav-home");
const dashboardFav = document.getElementById("fav-dashboard");
const questionFav = document.getElementById("fav-question");
const homeA = document.querySelector(".home");
const dashboardA = document.querySelector(".dashboard");
const questionA = document.querySelector(".question");

const home = () => {
  homeFav.classList.add("text-blue-400");
  dashboardFav.classList.remove("text-blue-400");
  questionFav.classList.remove("text-blue-400");
  homeA.classList.replace("text-gray-500", "text-blue-400");
  homeA.classList.replace("border-gray-900", "border-blue-400");
  homeA.classList.replace("hover:border-red-400", "hover:border-blue-400");
  dashboardA.classList.replace("text-blue-400", "text-gray-500");
  dashboardA.classList.replace("border-blue-400", "border-gray-900");
  dashboardA.classList.replace("hover:border-blue-400", "hover:border-red-400");
  questionA.classList.replace("text-blue-400", "text-gray-500");
  questionA.classList.replace("border-blue-400", "border-gray-900");
  questionA.classList.replace("hover:border-blue-400", "hover:border-red-400");
};

const dashboard = () => {
  dashboardFav.classList.add("text-blue-400");
  homeFav.classList.remove("text-blue-400");
  questionFav.classList.remove("text-blue-400");
  dashboardA.classList.replace("text-gray-500", "text-blue-400");
  dashboardA.classList.replace("border-gray-900", "border-blue-400");
  dashboardA.classList.replace("hover:border-red-400", "hover:border-blue-400");
  homeA.classList.replace("text-blue-400", "text-gray-500");
  homeA.classList.replace("border-blue-400", "border-gray-900");
  homeA.classList.replace("hover:border-blue-400", "hover:border-red-400");
  questionA.classList.replace("text-blue-400", "text-gray-500");
  questionA.classList.replace("border-blue-400", "border-gray-900");
  questionA.classList.replace("hover:border-blue-400", "hover:border-red-400");
};

const question = () => {
  questionFav.classList.add("text-blue-400");
  homeFav.classList.remove("text-blue-400");
  dashboardFav.classList.remove("text-blue-400");
  questionA.classList.replace("text-gray-500", "text-blue-400");
  questionA.classList.replace("border-gray-900", "border-blue-400");
  questionA.classList.replace("hover:border-red-400", "hover:border-blue-400");
  dashboardA.classList.replace("text-blue-400", "text-gray-500");
  dashboardA.classList.replace("border-blue-400", "border-gray-900");
  dashboardA.classList.replace("hover:border-blue-400", "hover:border-red-400");
  homeA.classList.replace("text-blue-400", "text-gray-500");
  homeA.classList.replace("border-blue-400", "border-gray-900");
  homeA.classList.replace("hover:border-blue-400", "hover:border-red-400");
};

homeBtn.addEventListener("click", home);

dashboardBtn.addEventListener("click", dashboard);

questionBtn.addEventListener("click", question);
