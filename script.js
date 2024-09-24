// Humburger 
function toggleMenu() {
  const navLinks = document.querySelector('.navright ul');
  navLinks.classList.toggle('active');
}
// Subscription Modal
const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModal = document.getElementsByClassName('close')[0];

openModalBtn.onclick = function (){
  modal.style.display = 'flex';
}
closeModal.onclick = function (){
  modal.style.display = 'none';
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}