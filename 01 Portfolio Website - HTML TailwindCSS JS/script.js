const sideMenu = document.querySelector("#sideMenu");
const navbar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu() {
  sideMenu.style.transform = "translateX(-16rem)";
}

function closeMenu() {
  sideMenu.style.transform = "translateX(16rem)";
}

window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    navbar.classList.add(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm"
    );
    navLinks.classList.remove(
        "bg-white",
        "shadow-sm",
        "bg-opacity-50"
    )
} else {
    navbar.classList.remove(
        "bg-white",
        "bg-opacity-50",
        "backdrop-blur-lg",
        "shadow-sm"
    );
    navLinks.classList.add(
        "bg-white",
        "shadow-sm",
        "bg-opacity-50"
    )
}
});
