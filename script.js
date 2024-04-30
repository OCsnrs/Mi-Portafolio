// Detectar el desplazamiento y añadir la clase scrolled al cuerpo
window.addEventListener("scroll", function() {
    const scrolled = window.scrollY > 0;
    document.body.classList.toggle("scrolled", scrolled);
});

document.addEventListener('DOMContentLoaded', function () {
    // Función para validar el formulario
    function validarFormulario(evento) {
        evento.preventDefault();

        // Obtener los valores de los campos del formulario
        const formulario = document.forms['form'];
        const nombre = formulario.nombre.value.trim();
        const email = formulario.email.value.trim();
        const asunto = formulario.asunto.value.trim();
        const mensaje = formulario.mensaje.value.trim();

        // Validar que todos los campos estén completos
        if (!nombre || !email || !asunto || !mensaje) {
            alert('Por favor, completa todos los campos del formulario.');
            return;
        }

        // Validar que el mensaje no exceda los 300 caracteres
        if (mensaje.length > 300) {
            alert('El mensaje no puede exceder los 300 caracteres.');
            return;
        }

        // Si todas las validaciones son exitosas, enviar el formulario
        alert('¡Esto sólo fue un simulacro! Puedes contactarme por mis redes sociales."');
        formulario.reset();
    }

    // Agregar un event listener al formulario para ejecutar la función de validación cuando se envíe
    document.forms['form'].addEventListener('submit', validarFormulario);
});



