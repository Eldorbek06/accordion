let modalActive = document.querySelector(".active-modal")
let modalTxt = document.querySelector(".modal-txt")
let modals = document.querySelectorAll(".modal")

modals.forEach(modal =>{
    modal.onclick = () => {
        modalTxt.classList.toggle("active-modal")
    }
})