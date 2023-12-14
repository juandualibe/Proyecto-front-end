function validateForm() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;
  var acceptTerms = document.getElementById("accept-terms").checked;

  if (username === "" || email === "" || password === "" || confirmPassword === "") {
      alert("Por favor, complete todos los campos obligatorios.");
      return false;
  }

  if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden. Vuelve a intentar.");
      return false;
  }

  if (!acceptTerms) {
      alert("Debes aceptar los Términos y Condiciones.");
      return false;
  }

  return true;
}
  