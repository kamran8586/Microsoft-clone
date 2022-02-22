const openAllMicrosoft = document.querySelector(".show-all-microsoft");
const ModalContainer = document.querySelector(".modal-container");
const menuBar = document.getElementById("menuBar");
const closeMenuBar = document.querySelector(".closeMenuBar");
const openMenuBar = document.querySelector(".openMenuBar");
let children = document.querySelector(".parent").children;
const closeIconClasses = ["fa", "fa-times"];
const menuIconClasses = ["fa-solid", " fa-bars"];
openAllMicrosoft.addEventListener("click", (event) => showModal());
menuBar.addEventListener("click", (event) => {
	showModal();
	menuBar.classList.add("hidden");
	closeMenuBar.classList.remove("hidden");
});

ModalContainer.addEventListener("click", function (event) {
	if (event.target != this) return;
	ModalContainer.classList.remove("show-modal");
	ModalContainer.classList.add("hidden");
	closeMenuBar.classList.add("hidden");
	menuBar.classList.remove("hidden");
});

function showModal() {
	ModalContainer.classList.toggle("show-modal");
	ModalContainer.classList.toggle("hidden");
}
