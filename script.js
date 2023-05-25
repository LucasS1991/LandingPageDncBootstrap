var modal = document.getElementById("modal");
var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementsByClassName("close")[0];

// Função para abrir o modal
function openModal() {
  modal.style.display = "block";
}

// Função para fechar o modal
function closeModal() {
  modal.style.display = "none";
}

// Event listeners para abrir e fechar o modal
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

openModal()
closeModal()