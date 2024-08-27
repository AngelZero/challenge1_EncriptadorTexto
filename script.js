const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


function validarEntrada(texto) {
    const regex = /^[a-zñ0-9\s]*$/;
    return regex.test(texto);
}

function reset() {
    textArea.value = "";
    mensaje.value = "";
    mensaje.style.backgroundImage = "url('/assets/Muneco.png')"; 
    document.getElementById('nomessage').style.display = 'block';
}

function btnEncriptar(){
    const texto = textArea.value;
    
    if (!validarEntrada(texto)) {
        reset();
        alert('El texto contiene caracteres no permitidos. Solo se aceptan letras minúsculas, números y la letra ñ.');
        return;
    }
    if (texto === "") {
        reset();
        alert('El texto no puede estar vacío.');
        return;
    }

    const textoEncriptado = encriptar(texto);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"; 
    document.getElementById('nomessage').style.display = 'none';
}

function btnDesencriptar(){
    const texto = textArea.value;

    if (!validarEntrada(texto)) {
        reset();
        alert('El texto contiene caracteres no permitidos. Solo se aceptan letras minúsculas, números y la letra ñ.');
        return;
    }
    if (texto === "") {
        reset();
        alert('El texto no puede estar vacío.');
        return;
    }

    const textoEncriptado = desencriptar(texto);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"; 
    document.getElementById('nomessage').style.display = 'none';
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}


function copiarTexto() {
    navigator.clipboard.writeText(mensaje.value)
        .then(() => {
            alert('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}
