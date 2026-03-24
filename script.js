$(document).ready(function(){
// add smooth scrolling to all links
    $("a").on('click', function(event) {

        // make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // prevent default anchor click behavior
            event.preventDefault();

            // store hash
            const hash = this.hash;

            // jQuery's animate() method adds smooth scrolling
            // number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                // Add hash (#) to URL when done scrolling (default click behavior)
                globalThis.location.hash = hash;
            });
        }
    });


    let lStorage = localStorage.getItem("theme"),
        setTheme = lStorage;
    /* user preference sets theme if local storage has no item */
    if(!lStorage){setTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";}
    document.documentElement.dataset.theme = setTheme;
        

    const toggleSwitch = $(".theme-switch-container");
    toggleSwitch.on("click", switchTheme);
    function switchTheme() {
        const rootElem = document.documentElement
        let dataTheme = rootElem.dataset.theme, 
            newTheme
        newTheme = (dataTheme === "light") ? "dark" : "light";
        rootElem.dataset.theme = newTheme;

        localStorage.setItem("theme", newTheme);
    }
    
    const dropdownBtn = $(".navi-dropdown-btn");
    dropdownBtn.on("click", showDropdownMenu);
    function showDropdownMenu() {
        const menu = $(".navi-dropdown-content");     
        menu.toggleClass("show");
    }

    globalThis.onclick = function(event) {
        if (!event.target.matches(".navi-dropdown-btn")) {
            let dropdowns = $(".navi-dropdown-content");
            let i;
            for (i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains("show")) {
                    openDropdown.classList.remove("show");
                }
            }
        }
    }

});