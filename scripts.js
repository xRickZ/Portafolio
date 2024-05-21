//BOTON PARA COPIAR EL CORREO
function copiarUrl(){
    let url=document.getElementById('url');
    let i=document.getElementById('botonCopiar');

    navigator.clipboard.writeText(url.textContent);
    alert("Copiaste el correo")
}