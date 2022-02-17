const openAllMicrosoft = document.querySelector('.show-all-microsoft');
const ModalContainer = document.querySelector('.modal-container');

openAllMicrosoft.addEventListener('click', function () {
    ModalContainer.classList.toggle('show-modal');
    ModalContainer.classList.toggle('hidden');
});

ModalContainer.addEventListener('click', function (event) {
    if (event.target != this) return;
    ModalContainer.classList.remove('show-modal');
    ModalContainer.classList.add('hidden');
});