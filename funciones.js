function encriptar(){
    texto= document.getElementById("textoEntrada").value
    document.getElementById("copiador").style.visibility = 'visible';
    document.getElementById('texto1').style.visibility = 'hidden';
    //document.getElementById('texto2').style.visibility = 'hidden';
    document.getElementById('fotoL').style.visibility = 'hidden';
    let salida=""
    for (let i = 0; i < texto.length; i++) {
        switch(texto.charAt(i)){
            case 'a':
                salida=salida+"ai";
                break;
            case 'e':
                salida=salida+"enter";
                break;
            case 'i':
                salida=salida+"imes";
                break;
            case 'o':
                salida=salida+"ober";
                break;
            case 'u':
                salida=salida+"ufat";
                break;
            default:
                salida=salida+texto.charAt(i);
                break;
        }
    }
    console.log(salida)
    document.getElementById("texto2").value=salida
    
}

function desencriptar(){
    let salida=document.getElementById("textoEntrada").value
    salida=salida.replaceAll('ai','a');
    salida=salida.replaceAll('enter','e');
    salida=salida.replaceAll('imes','i');
    salida=salida.replaceAll('ober','o');
    salida=salida.replaceAll('ufat','u');
    console.log(salida)
    document.getElementById("textoSalida").value=salida
    
}

function updateClipboard() {
    let text=document.getElementById("textoSalida").value
    navigator.clipboard.writeText(text).then(() => {
      alert("Texto copiado")
    }, () => {
      /* clipboard write failed */
    });
  }

