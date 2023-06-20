let menuBar = document.getElementById("showMenu");
menuBar.onclick = function () {
    showMenu();
}
let navLink = document.getElementById("navLinks")
function showMenu() {
    navLink.classList.toggle("show_nav_links")
};

