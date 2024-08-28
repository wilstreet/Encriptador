// script.js
function encryptText() {
    const inputText = document.getElementById("inputText").value;
    let encryptedText = '';

    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);
        // Verifica si el carácter es una letra mayúscula
        if (charCode >= 65 && charCode <= 90) {
            encryptedText += String.fromCharCode(((charCode - 65 + 3) % 26) + 65);
        } 
        // Verifica si el carácter es una letra minúscula
        else if (charCode >= 97 && charCode <= 122) {
            encryptedText += String.fromCharCode(((charCode - 97 + 3) % 26) + 97);
        } 
        // Deja los demás caracteres sin cambios
        else {
            encryptedText += inputText[i];
        }
    }

    document.getElementById("outputText").value = encryptedText;
}

function decryptText() {
    const inputText = document.getElementById("inputText").value;
    let decryptedText = '';

    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);
        // Verifica si el carácter es una letra mayúscula
        if (charCode >= 65 && charCode <= 90) {
            decryptedText += String.fromCharCode(((charCode - 65 - 3 + 26) % 26) + 65);
        } 
        // Verifica si el carácter es una letra minúscula
        else if (charCode >= 97 && charCode <= 122) {
            decryptedText += String.fromCharCode(((charCode - 97 - 3 + 26) % 26) + 97);
        } 
        // Deja los demás caracteres sin cambios
        else {
            decryptedText += inputText[i];
        }
    }

    document.getElementById("outputText").value = decryptedText;
}
