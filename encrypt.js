// encrypt.js

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
    const mesajUpperCase = mesaj.toUpperCase(); // Declare mesajUpperCase using const
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
