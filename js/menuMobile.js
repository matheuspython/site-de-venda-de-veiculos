function apareceMenu() {
    let listaMenu = document.querySelector('ul.menu-mobile').style

    if (listaMenu.display == 'block') {
        listaMenu.display = 'none'
        return
    } else {
        listaMenu.display = 'block'

    }


}