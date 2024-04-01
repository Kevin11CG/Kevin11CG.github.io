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