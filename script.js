// 1. DOM y variables
const formularioContacto = document.querySelector('#contacto form');
const inputNombre = document.getElementById('nombre');
const inputMensaje = document.getElementById('mensaje');

// 2. Función submit
const manejarEnvio = (evento) =>
{
    evento.preventDefault(); // Previene envío

    // Valores y limpieza
    const nombre = inputNombre.value.trim();
    const mensaje = inputMensaje.value.trim();

    let esValido = true;
    let errores = [];

    // Reset estilos
    inputNombre.style.border = '1px solid #ccc';
    inputMensaje.style.border = '1px solid #ccc';

    // 3. Validación
    if (nombre.length === 0)
    {
        esValido = false;
        errores.push('El campo Nombre/Nickname es obligatorio.');
        inputNombre.style.border = '2px solid #e60012';
    }

    if (mensaje.length < 10)
    {
        esValido = false;
        errores.push('El Reporte/Mensaje debe contener al menos 10 caracteres para ser descriptivo.');
        inputMensaje.style.border = '2px solid #e60012';
    }

    // 4. Resultado
    if (esValido)
    {
        // Éxito
        console.log('Formulario validado y procesado. Datos:', { Nombre: nombre, Mensaje: mensaje });
        alert(`¡Gracias ${nombre}!.\n\nEste es un formulario de prueba. Si tienes un reporte o intento de comunciación real, por favor dirígete al servidor de Discord.`);
        formularioContacto.reset();
    }
    else
    {
        // Errores
        console.error('Fallo en la validación:', errores);
        alert('Error: Por favor, corregí los siguientes campos:\n- ' + errores.join('\n- '));
    }
};

// 5. Asignar evento
if (formularioContacto)
{
    formularioContacto.addEventListener('submit', manejarEnvio);
}
