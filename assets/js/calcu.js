/* Integrantes:
Angelo Gonzalez
Adrian Espinoza
Yistler Duran
Victor Tapia
Iván Guerrero
 */
document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar los elementos necesarios
    const num1 = document.getElementById('numero1');
    const num2 = document.getElementById('numero2');
    const btnSumar = document.getElementById('sumar');
    const btnRestar = document.getElementById('restar');
    const resultado = document.querySelector('.resultado');

    // Función para sumar
    btnSumar.addEventListener('click', function () {
        const suma = parseFloat(num1.value) + parseFloat(num2.value);
        resultado.textContent = `Resultado: ${suma}`;
    });

    // Función para restar
    btnRestar.addEventListener('click', function () {
        let resta = parseFloat(num1.value) - parseFloat(num2.value);
        // Si el resultado es negativo, mostrar 0
        if (resta < 0) {
            resta = 0;
        }
        resultado.textContent = `Resultado: ${resta}`;
    });
});