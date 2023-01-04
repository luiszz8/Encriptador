function encriptar(){
    texto= document.getElementById("textoEntrada").value
    if (texto=="") {
        document.getElementById("copiador").style.visibility = 'hidden';
        document.getElementById('texto1').style.display = 'block';
        document.getElementById('texto2').style.display = 'block';
        document.getElementById('fotoL').style.display = 'block';    
        document.getElementById('textoSalida').style.display = 'none';
        return
    }
    document.getElementById("copiador").style.visibility = 'visible';
    document.getElementById('texto1').style.display = 'none';
    document.getElementById('texto2').style.display = 'none';
    document.getElementById('fotoL').style.display = 'none';
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
    document.getElementById('textoSalida').style.display = 'block';
    document.getElementById("textoSalida").value=salida
    
}

function desencriptar(){
    let salida=document.getElementById("textoEntrada").value
    if (salida=="") {
        document.getElementById("copiador").style.visibility = 'hidden';
        document.getElementById('texto1').style.display = 'block';
        document.getElementById('texto2').style.display = 'block';
        document.getElementById('fotoL').style.display = 'block';    
        document.getElementById('textoSalida').style.display = 'none';
        return
    }
    document.getElementById("copiador").style.visibility = 'visible';
    document.getElementById('texto1').style.display = 'none';
    document.getElementById('texto2').style.display = 'none';
    document.getElementById('fotoL').style.display = 'none';
    salida=salida.replaceAll('ai','a');
    salida=salida.replaceAll('enter','e');
    salida=salida.replaceAll('imes','i');
    salida=salida.replaceAll('ober','o');
    salida=salida.replaceAll('ufat','u');
    console.log(salida)
    document.getElementById('textoSalida').style.display = 'block';
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

