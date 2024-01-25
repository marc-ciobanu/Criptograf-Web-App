export function criptareCezar(mesaj, shift) {
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


export function criptareSubstitutie(mesaj, subKey) {
    const alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const mesajUpperCase = mesaj.toUpperCase();
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

export function criptareVigenere(mesaj, cheie) {
    const alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let mesajCriptat = "";
    let cheieUpperCase = cheie.toUpperCase();
    let cheieIndex = 0;

    for (let i = 0; i < mesaj.length; i++) {
        let char = mesaj[i];
        if (alfabet.includes(char.toUpperCase())) {
            let charUpperCase = char.toUpperCase();
            let index = alfabet.indexOf(charUpperCase);
            let shift = alfabet.indexOf(cheieUpperCase[cheieIndex]);
            cheieIndex = (cheieIndex + 1) % cheieUpperCase.length;

            let newIndex = (index + shift) % 26;

            if (char === charUpperCase) {
                mesajCriptat += alfabet[newIndex];
            } else {
                mesajCriptat += alfabet[newIndex].toLowerCase();
            }
        } else {
            mesajCriptat += char;
        }
    }

    return mesajCriptat;
}

export function criptareTranspozitie(mesaj, cheie) {
    let mesajCriptat = "";
    let lungimeCheie = cheie.length;

    let coloane = new Array(lungimeCheie);

    for (let i = 0; i < lungimeCheie; i++) {
        coloane[i] = "";
    }

    for (let i = 0; i < mesaj.length; i++) {
        let char = mesaj[i];
        coloane[i % lungimeCheie] += char;
    }

    let sortedCheie = Array.from(cheie).sort().join("");
    for (let i = 0; i < lungimeCheie; i++) {
        let index = sortedCheie.indexOf(cheie[i]);
        mesajCriptat += coloane[index];
    }

    return mesajCriptat;
}

