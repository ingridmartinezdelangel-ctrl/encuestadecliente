// Obtener el contenedor principal y el botón de enviar
const surveyContainer = document.querySelector('.survey-container');
const submitButton = document.getElementById('submit-btn');

// ----------------------------------------------------
// FUNCIÓN PRINCIPAL: Se ejecuta al presionar el botón
// ----------------------------------------------------
submitButton.addEventListener('click', function() {
    
    // 1. Mostrar las respuestas en la Consola del Navegador (para prueba)
    // NOTA: Para registrar las respuestas en una base de datos, esta es la parte
    // donde se enviaría la información a un servidor (lo que es más avanzado).
    const formData = obtenerRespuestas();
    console.log('--- Respuestas Capturadas ---');
    console.log(formData);
    console.log('-----------------------------');

    // 2. Mostrar el mensaje de agradecimiento
    mostrarMensajeAgradecimiento();
});

// ----------------------------------------------------
// Función para capturar las respuestas
// ----------------------------------------------------
function obtenerRespuestas() {
    const respuestas = {};
    
    // Capturar la satisfacción (radio buttons)
    const satisfaccion = document.querySelector('input[name="satisfaccion"]:checked');
    respuestas.satisfaccion = satisfaccion ? satisfaccion.value : 'No respondida';

    // Capturar las mejoras (checkboxes)
    const mejorasSeleccionadas = document.querySelectorAll('input[name="mejora"]:checked');
    respuestas.mejoras = Array.from(mejorasSeleccionadas).map(cb => cb.value);

    // Capturar la recomendación (radio buttons)
    const recomendar = document.querySelector('input[name="recomendar"]:checked');
    respuestas.recomendar = recomendar ? recomendar.value : 'No respondida';
    
    return respuestas;
}


// ----------------------------------------------------
// Función para reemplazar la encuesta con el mensaje
// ----------------------------------------------------
function mostrarMensajeAgradecimiento() {
    // Crear el nuevo contenido HTML (el mensaje de agradecimiento)
    const mensajeHTML = `
        <div class="thank-you-message" style="text-align: center; padding: 50px 20px;">
            <h1>¡Gracias por tu opinión!</h1>
            <p style="font-size: 18px; color: #555;">Tus comentarios son muy valiosos para nosotros.</p>
            <p style="margin-top: 30px; font-size: 14px; color: #999;">El formulario se ha enviado correctamente.</p>
        </div>
    `;
    
    // Reemplazar todo el contenido del contenedor con el mensaje
    surveyContainer.innerHTML = mensajeHTML;
}
