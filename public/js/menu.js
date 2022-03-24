// Top right hand menu functionality
var userMenuDiv = document.getElementById("userMenu");
var userMenuBtn = document.getElementById("userButton");

var navMenuDiv = document.getElementById("nav-content");
var navMenu = document.getElementById("nav-toggle");

const logoutBtn = document.getElementById('logout');
const homeBtn = document.getElementById('home');
const dashboardBtn = document.getElementById('dashboard');
const questionBtn = document.getElementById('question');

const homeFav = document.getElementById('fav-home');
const dashboardFav = document.getElementById('fav-dashboard');
const questionFav = document.getElementById('fav-question');
const homeA = document.querySelector('.home');
const dashboardA = document.querySelector('.dashboard');
const questionA = document.querySelector('.question');


const check = (e) => {
  var target = (e && e.target) || (event && event.srcElement);

  //User Menu
  if (!checkParent(target, userMenuDiv)) {
    // click NOT on the menu
    if (checkParent(target, userMenu)) {
      // click on the link
      if (userMenuDiv.classList.contains("invisible")) {
        userMenuDiv.classList.remove("invisible");
      } else {
        userMenuDiv.classList.add("invisible");
      }
    } else {
      // click both outside link and outside menu, hide menu
      userMenuDiv.classList.add("invisible");
    }
  }

  //Nav Menu
  if (!checkParent(target, navMenuDiv)) {
    // click NOT on the menu
    if (checkParent(target, navMenu)) {
      // click on the link
      if (navMenuDiv.classList.contains("hidden")) {
        navMenuDiv.classList.remove("hidden");
      } else {
        navMenuDiv.classList.add("hidden");
      }
    } else {
      // click both outside link and outside menu, hide menu
      navMenuDiv.classList.add("hidden");
    }
  }
}

const checkParent = (t, elm) => {
  while (t.parentNode) {
    if (t == elm) {
      return true;
    }
    t = t.parentNode;
  }
  return false;
}

const logout = () => {

}

const home = () => {
  homeFav.classList.add('text-blue-400');
  dashboardFav.classList.remove('text-blue-400');
  questionFav.classList.remove('text-blue-400');
  homeA.classList.replace('text-gray-500', 'text-blue-400');
  homeA.classList.replace('border-gray-900', 'border-blue-400');
  homeA.classList.replace('hover:border-pink-400', 'hover:border-blue-400');
  dashboardA.classList.replace('text-blue-400', 'text-gray-500');
  dashboardA.classList.replace('border-blue-400', 'border-gray-900');
  dashboardA.classList.replace('hover:border-blue-400', 'hover:border-pink-400');
  questionA.classList.replace('text-blue-400', 'text-gray-500');
  questionA.classList.replace('border-blue-400', 'border-gray-900');
  questionA.classList.replace('hover:border-blue-400', 'hover:border-pink-400');
}

const dashboard = () => {
  dashboardFav.classList.add('text-blue-400');
  homeFav.classList.remove('text-blue-400');
  questionFav.classList.remove('text-blue-400');
  dashboardA.classList.replace('text-gray-500', 'text-blue-400');
  dashboardA.classList.replace('border-gray-900', 'border-blue-400');
  dashboardA.classList.replace('hover:border-pink-400', 'hover:border-blue-400');
  homeA.classList.replace('text-blue-400', 'text-gray-500');
  homeA.classList.replace('border-blue-400', 'border-gray-900');
  homeA.classList.replace('hover:border-blue-400', 'hover:border-pink-400');
  questionA.classList.replace('text-blue-400', 'text-gray-500');
  questionA.classList.replace('border-blue-400', 'border-gray-900');
  questionA.classList.replace('hover:border-blue-400', 'hover:border-pink-400');
}

const question = () => {
  questionFav.classList.add('text-blue-400');
  homeFav.classList.remove('text-blue-400');
  dashboardFav.classList.remove('text-blue-400');
  questionA.classList.replace('text-gray-500', 'text-blue-400');
  questionA.classList.replace('border-gray-900', 'border-blue-400');
  questionA.classList.replace('hover:border-pink-400', 'hover:border-blue-400');
  dashboardA.classList.replace('text-blue-400', 'text-gray-500');
  dashboardA.classList.replace('border-blue-400', 'border-gray-900');
  dashboardA.classList.replace('hover:border-blue-400', 'hover:border-pink-400');
  homeA.classList.replace('text-blue-400', 'text-gray-500');
  homeA.classList.replace('border-blue-400', 'border-gray-900');
  homeA.classList.replace('hover:border-blue-400', 'hover:border-pink-400');
}

userMenuBtn.addEventListener('click', check)

logoutBtn.addEventListener('click', logout)

homeBtn.addEventListener('click', home)

dashboardBtn.addEventListener('click', dashboard)

questionBtn.addEventListener('click', question)



