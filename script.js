document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contacto");
  const mensaje = document.getElementById("mensaje");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = document.getElementById("nombre").value;
      mensaje.textContent = `¡Gracias, ${nombre}! Reserva enviada con éxito.`;
      mensaje.style.color = "green";
      form.reset();
    });
  }
});
