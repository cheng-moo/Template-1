// Variable Start
const hamburgerIcon = document.querySelector('.icon');
const linksMenu = document.querySelector('.links ul');
const links = document.querySelector('.links');
// Variable End
// Functions Start
    // Header
    function toggleMenu (e) {
        linksMenu.classList.toggle('active-menu');
        hamburgerIcon.classList.toggle('active-menu');
    }
// Functions End
// Events Start
    //Header
    links.addEventListener('click', toggleMenu);
// Events End


