var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButton = document.querySelectorAll('.plan button');
var modalNoButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var sideMenu = document.querySelector('.mobile-nav');

const hideModal = () => {
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    // sideMenu.style.display = 'none'
    backdrop.classList.remove('open');
    sideMenu.classList.remove('open');
    if (modal) {
        modal.classList.remove('open');
    }
}

for (var i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', () => {
        // backdrop.style.display = 'block';
        // modal.style.display = 'block';
        backdrop.classList.add('open');
        modal.classList.add('open');
    });

}

const showSideMenu = () => {
    // sideMenu.style.display = 'block';
    // backdrop.style.display = 'block';
    backdrop.classList.add('open');
    sideMenu.classList.add('open');
}

if (modalNoButton) {
    modalNoButton.addEventListener('click', hideModal);
}


backdrop.addEventListener('click', hideModal);

toggleButton.addEventListener('click', showSideMenu);

