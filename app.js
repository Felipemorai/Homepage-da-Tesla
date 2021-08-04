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
    let submenus = document.querySelectorAll('.submenu')

    menuItems.forEach(element => {
        element.addEventListener('mouseover', showSubmenu)
        element.addEventListener('mouseout', hideSubmenu)
    });

    submenus.forEach(element => {
        element.addEventListener('mouseover', showSubmenuToSubmenu)
        element.addEventListener('mouseleave', hideSubmenuToSubmenu)
    })

    function showSubmenu(e) {
        let submenu = e.target.parentElement.nextElementSibling
        submenu.classList.add('toshow')
    }

    function hideSubmenu(e) {
        let submenu = e.target.parentElement.nextElementSibling
        submenu.classList.remove('toshow')
    }

    function showSubmenuToSubmenu(e) {
        e.target.classList.add('toshow')
    }

    function hideSubmenuToSubmenu(e) {
        e.target.classList.remove('toshow')
    }
}