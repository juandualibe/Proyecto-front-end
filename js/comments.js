
    function postComment() {
        const username = document.getElementById('username').value;
        const commentText = document.getElementById('comment').value;

        if (username && commentText) {
            const commentContainer = document.getElementById('comments-container');
            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment-box'; // Agregamos una clase para el estilo
            commentDiv.innerHTML = `
                <p><strong>${username}:</strong> ${commentText}</p>
            `;
            commentContainer.appendChild(commentDiv);

            // Aquí puedes enviar el comentario a tu backend para almacenarlo en una base de datos.
            // Puedes usar AJAX o Fetch API para esto.

            // Limpiar el formulario después de publicar el comentario.
            document.getElementById('username').value = '';
            document.getElementById('comment').value = '';
        } else {
            alert('Por favor, complete todos los campos.');
        }
    }


