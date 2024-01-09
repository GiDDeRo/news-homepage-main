const open = document.getElementById("open");
const close = document.getElementById("close");
const icon = document.getElementById("icons");
const sideBar = document.querySelector("nav ul")

function sideBarToggle () {
    icon.classList.toggle("active")
    if (icon.classList.contains("active")) {
        open.style.display = "none";
        close.style.display = "block";
        close.style.animation = "closeAnimation .3s linear";
        sideBar.style.display = "flex";
        sideBar.style.right = "0";
        sideBar.style.transition = "all .25s ease";
        sideBar.style.boxShadow = "0 0 0 10000px rgba(0, 0, 0, .5)";
    } else {
        open.style.display = "block";
        open.style.animation = "openAnimation .2s linear";
        close.style.display = "none";
        sideBar.style.right = "-30rem";
        sideBar.style.transition = "all .2s ease";
        sideBar.style.boxShadow = "none";
    }
}

icon.addEventListener("click", e => {
        sideBarToggle();
});




