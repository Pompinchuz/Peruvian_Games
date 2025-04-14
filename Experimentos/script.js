window.addEventListener('load', () => {
  // Mostrar efectos de vapor y contenido después de la animación
  setTimeout(() => {
    document.querySelector('.steam-effect').style.display = 'block';  // Mostrar vapor
  }, 500);  // Comienza la animación de vapor 500ms después de cargar la página

  setTimeout(() => {
    document.querySelector('.content').style.display = 'block';  // Mostrar contenido
  }, 3000);  // Aparece el contenido después de 3 segundos
});
