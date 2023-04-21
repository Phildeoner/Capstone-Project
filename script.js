function toggleMenu() {
    var menu = document.getElementById("menu");
    var menuIcon = document.querySelector(".menu-icon");
    menu.classList.toggle("active");
    menuIcon.classList.toggle("active");
  }
menuIcon.addEventListener("click", toggleMenu)  