const modal = document.querySelector(".modal")
const mask = document.querySelector(".mask-modal")

function mostrarModal(){
    modal.style.left = '50%'
    mask.style.visibility = "visible"
}

function esconderModal(){
     modal.style.left = '-30%'
    mask.style.visibility = "hidden"
}
