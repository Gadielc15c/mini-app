document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el botón por su clase
    const ctaButton = document.querySelector(".cta-button");
    
    // Añade un evento de clic al botón
    ctaButton.addEventListener("click", function() {
        alert("Consultando médico...");
    });

    // Selecciona el texto informativo por su clase
    const infoText = document.querySelector(".info-text");
    
    // Añade un evento de clic al texto informativo
    infoText.addEventListener("click", function() {
        alert("Realizando prueba...");
    });
});
