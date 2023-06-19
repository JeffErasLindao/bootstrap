const toggleButton = document.getElementById('toggleButton');
const navbarMenu = document.getElementById('navbarMenu');

toggleButton.addEventListener('click', function() {
  navbarMenu.classList.toggle('show');
});