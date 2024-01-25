import { criptareCezar, criptareSubstitutie, criptareVigenere, criptareTranspozitie } from './encrypt.js';
import { showCezarModal, showSubstitutieModal, showVigenereModal, showTranspozitieModal } from './modals.js';

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

            case "vigenere":
                showVigenereModal();
                break;

            case "transpozitie":
                showTranspozitieModal();
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
                } 
                else {
                    alert("Introduceți cifrul cheii de criptare (26 de litere)!");
                    return;
                }
                break;

            case "vigenere":
                const vigenereKey = document.getElementById("vigenereKeyInput").value;
                if (vigenereKey !== ""){
                    input = document.getElementById("input").value;
                    output = criptareVigenere(input, vigenereKey);
                }
                else {
                    alert("Introduceți cheia pentru Vigenere!");
                    return;
                }
                break;

            case "transpozitie":
                const transpozitieInput = document.getElementById("transpozitieInput").value;
                input = document.getElementById("input").value;
                output = criptareTranspozitie(input, transpozitieInput);
                break;

            default:
                console.error("Metoda invalida.");
                return;
        }

        document.getElementById("output").value = output;
        modal.style.display = "none";
    }
});