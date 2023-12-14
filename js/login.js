const loginForm = document.getElementById('loginForm');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const usernameValidation = document.getElementById('usernameValidation');
        const passwordValidation = document.getElementById('passwordValidation');

        loginForm.addEventListener('submit', function (event) {
            // Verificar si los campos de usuario y contraseña están vacíos
            if (usernameInput.value.trim() === '') {
                usernameValidation.textContent = 'Por favor, ingrese su nombre de usuario.';
                usernameValidation.style.display = 'block'; // Mostrar el mensaje de validación
                usernameInput.classList.add('error-field'); // Resaltar el campo con error
                event.preventDefault(); // Evitar que se envíe el formulario
            } else {
                usernameValidation.style.display = 'none'; // Ocultar el mensaje de validación si el campo es válido
                usernameInput.classList.remove('error-field'); // Eliminar el resaltado del campo
            }

            if (passwordInput.value.trim() === '') {
                passwordValidation.textContent = 'Por favor, ingrese su contraseña.';
                passwordValidation.style.display = 'block'; // Mostrar el mensaje de validación
                passwordInput.classList.add('error-field'); // Resaltar el campo con error
                event.preventDefault(); // Evitar que se envíe el formulario
            } else {
                passwordValidation.style.display = 'none'; // Ocultar el mensaje de validación si el campo es válido
                passwordInput.classList.remove('error-field'); // Eliminar el resaltado del campo
            }
        });