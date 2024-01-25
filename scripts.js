function criptareCezar(mesaj, shift) {
    const alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let mesajCriptat = "";

    for (let i = 0; i < mesaj.length; i++) {
        let char = mesaj[i].toUpperCase();

        if (alfabet.includes(char)) {
            let index = alfabet.indexOf(char);
            let newIndex = (index + shift) % 26;

            if (newIndex < 0) {
                newIndex += 26;
            }

            if (char === mesaj[i]) {
                mesajCriptat += alfabet[newIndex];
            } else {
                mesajCriptat += alfabet[newIndex].toLowerCase();
            }
        } else {
            mesajCriptat += mesaj[i];
        }
    }

    return mesajCriptat;
}


function criptareSubstitutie(mesaj, subKey) {
    const alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    mesajUpperCase = mesaj.toUpperCase();
    let mesajCriptat = "";

    for(let i = 0; i < mesaj.length; i++){
        let char = mesajUpperCase[i];

        if(alfabet.includes(char)){
            let index = alfabet.indexOf(char);
            let charCriptat = subKey[index];

            if(mesaj[i] === mesajUpperCase[i]){
                mesajCriptat += charCriptat.toUpperCase();
            }
            else{
                mesajCriptat += charCriptat.toLowerCase();
            }
        }
        else {
            mesajCriptat += char;
        }
    }
    return mesajCriptat;
}

document.addEventListener("DOMContentLoaded", function(){
    const butonCriptare = document.getElementById("butonCriptare");

    butonCriptare.addEventListener("click", function () {
        const input = document.getElementById("input").value;
        const metodaCriptare = document.getElementById("meniu").value;

        let output;

        switch(metodaCriptare) {
            case "cezar":
                const shift = prompt("Introduceți valoarea de shift: ");
                output = criptareCezar(input, parseInt(shift,10));
                break;

            case "substitutie":
                const subKey = prompt("Introduceți cifru cheia de criptare (26 de litere): ");
                output = criptareSubstitutie(input, subKey.toUpperCase());
                break;

            default:
                console.error("Metoda invalida.");
                return;
        }

        document.getElementById("output").value = output;
    })
})