const toggleSwitch = document.querySelector(".theme-switch-container");
function switchTheme() {
    const rootElem = document.documentElement
    let dataTheme = rootElem.getAttribute("data-theme"), 
        newTheme
    newTheme = (dataTheme === "light") ? "dark" : "light";
    rootElem.setAttribute("data-theme", newTheme);

    localStorage.setItem("theme", newTheme);
}
toggleSwitch.addEventListener("click", switchTheme);

const menu = document.querySelector(".navi-dropdown-content");
function showDropdownMenu() {
    menu.classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches(".navi-dropdown-btn")) {
        var dropdowns = document.querySelectorAll(".navi-dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
}