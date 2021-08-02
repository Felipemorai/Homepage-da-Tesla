window.onload = () => {
    /* Load menu structure */
    startEfectMenu()

    controlSubmenu()
}

function startEfectMenu() {
    /* Code */
    let menu = document.querySelector('.menu')

    window.onscroll = manipulateMenu


    function manipulateMenu() {
        let positionScroll = window.pageYOffset

        if (positionScroll > 60) {
            menu.classList.add('dark-menu')
        }
        else {
            menu.classList.remove('dark-menu')
        }

        menu.style.backgroundColor = "rgba(255, 255, 255, " + positionScroll / 100 + ")"
    }
}

function controlSubmenu() {
    let menuItems = document.querySelectorAll('.menu-item')

    menuItems.forEach(element => {
        element.addEventListener('mouseover', )
    });
}