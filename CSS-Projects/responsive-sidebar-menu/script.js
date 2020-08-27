function toggleMenu() {
    let navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active');

    let toggle = document.querySelector('.toggle');
    toggle.classList.toggle('active');
}