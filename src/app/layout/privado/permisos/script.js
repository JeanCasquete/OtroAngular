
// Aquí va el código Javascript que carga el XML y llena el select
// con los datos de la respuesta
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var xmlDoc = this.responseXML;
    var selector = document.getElementById("selector");
    var opciones = xmlDoc.getElementsByTagName("formato");
    for (var i = 0; i < opciones.length; i++) {
      var opcion = opciones[i].firstChild.nodeValue;
      selector.innerHTML += "<option>" + opcion + "</option>";
    }
  }
};
xhttp.open("GET", "elemento.xml", true);
xhttp.send();