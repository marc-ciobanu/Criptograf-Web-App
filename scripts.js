// scripts.js

import { criptareCezar, criptareSubstitutie } from './encrypt.js';

document.addEventListener("DOMContentLoaded", function(){
    const butonCriptare = document.getElementById("butonCriptare");
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modalContent");
    const modalSubmit = document.getElementById("modalSubmit");

    butonCriptare.addEventListener("click", function(){
        const metodaCriptare = document.getElementById("meniu").value;

        switch(metodaCriptare) {
            case "cezar":
                showCezarModal();
                break;

            case "substitutie":
                showSubstitutieModal();
                break;

            default:
                console.error("Metoda invalida.");
                return;
        }
    });

    modalSubmit.addEventListener("click", function(){
        handleModalSubmit();
    });

    window.addEventListener("click", function(event){
        if(event.target === modal){
            modal.style.display = "none";
        }
    });

    function showCezarModal() {
        modalContent.innerHTML = `
            <label for="shiftInput">Introduceți valoarea de shift:</label> <br>
            <input type="number" id="shiftInput">
        `;
        modal.style.display = "flex";
    }

    function showSubstitutieModal() {
        modalContent.innerHTML = `
            <label for="substitutieInput">Introduceți cifrul cheii de criptare (26 de litere):</label> <br>
            <input type="text" id="substitutieInput">
        `;
        modal.style.display = "flex";
    }

    function handleModalSubmit() {
        const metodaCriptare = document.getElementById("meniu").value;
        let input, output;

        switch(metodaCriptare) {
            case "cezar":
                const shift = document.getElementById("shiftInput").value;

                if(shift !== ""){
                    input = document.getElementById("input").value;
                    output = criptareCezar(input, parseInt(shift,10));
                }
                else {
                    alert("Introduceți valoarea de shift!");
                    return;
                }
                break;

            case "substitutie":
                const substitutieInput = document.getElementById("substitutieInput").value;
                if (substitutieInput.length === 26) {
                    input = document.getElementById("input").value;
                    output = criptareSubstitutie(input, substitutieInput.toUpperCase());
                } else {
                    alert("Introduceți cifrul cheii de criptare (26 de litere)!");
                    return;
                }
                break;

            default:
                console.error("Metoda invalida.");
                return;
        }

        document.getElementById("output").value = output;
        modal.style.display = "none";
    }
});