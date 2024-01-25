export function showCezarModal() {
    modalContent.innerHTML = `
        <label for="shiftInput">Introduceți valoarea de shift:</label> <br> <br>
        <input type="number" id="shiftInput">
        `;
    modal.style.display = "flex";
}

export function showSubstitutieModal() {
    modalContent.innerHTML = `
        <label for="substitutieInput">Introduceți cifrul cheii de criptare (26 de litere):</label> <br>
        <p>Ex: ZYXWVUTSRQPONMLKJIHGFEDCBA</p>
        <input type="text" id="substitutieInput">
        `;
     modal.style.display = "flex";
}

export function showVigenereModal() {
    modalContent.innerHTML = `
        <label for="vigenereKeyInput">Introduceți cheia pentru Vigenere:</label> <br> <br>
        <input type="text" id="vigenereKeyInput">
        `;
    modal.style.display = "flex";
}

export function showTranspozitieModal() {
    modalContent.innerHTML = `
        <label for="transpozitieInput">Introduceți cheia de criptare:</label> <br> <br>
        <input type="text" id="transpozitieInput">
    `;
    modal.style.display = "flex";
}