window.addEventListener("load", init); //Wie DOMContentLoaded, wartet aber bist alles geladen ist
function init() {
    (document.getElementsByTagName("canvas")[0]);
    let canvas = document.getElementsByTagName("canvas")[0]; //Array, enth�lt alle Canvas Elemente
    console.log(canvas);
    let crc2 = canvas.getContext("2d"); //
    console.log(crc2);
    //Das ist die API
    crc2.fillStyle = "#ff0000"; //Viereck Zeichnen
    crc2.fillRect(0, 0, 100, 100);
    crc2.beginPath(); //Zu Zeichnenden Pfad Definieren
    crc2.moveTo(0, 0); //Startpunkt
    crc2.lineTo(400, 400); //Endpunkt
    crc2.stroke(); //Zeichenbefehl
    crc2.beginPath();
    crc2.moveTo(100, 100);
    crc2.lineTo(120, 70);
    crc2.lineTo(70, 130);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#0000ff";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(200, 50, 40, 0, 2 * Math.PI);
    crc2.fill();
}
//# sourceMappingURL=Main.js.map