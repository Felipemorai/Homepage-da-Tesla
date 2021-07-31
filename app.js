window.onload = () => {
    /* Load menu structure */
    startEfectMenu();
}

function startEfectMenu() {
    /* Code */
    let menu = document.querySelector('.menu')

    window.onscroll = manipulateMenu


    function manipulateMenu() {
        console.log("scroll", window.pageYOffset)
    }
}