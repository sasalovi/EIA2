var aufgabe6;
(function (aufgabe6) {
    //Aufgabe: Aufgabe 6
    //Name: Markus Sasalovici
    //Matrikel: 256027
    //Datum: 24.11.2017 
    //    
    //Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    window.addEventListener("load", ski2);
    let shapes = [];
    var image;
    function ski2() {
        let canvas = document.getElementsByTagName("canvas")[0]; //Array f�r den Fall dass mehrere Canvas vorhanden sind
        aufgabe6.crc2 = canvas.getContext("2d");
        //Statische Objekte zeichnen
        //Himmel
        aufgabe6.crc2.fillStyle = "#26e2dc";
        aufgabe6.crc2.fillRect(0, 0, 800, 600);
        //Berg2
        aufgabe6.crc2.fillStyle = "#a9a9a9";
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(250, 100);
        aufgabe6.crc2.lineTo(425, 450);
        aufgabe6.crc2.lineTo(75, 450);
        aufgabe6.crc2.fill();
        //Berg3
        aufgabe6.crc2.fillStyle = "#a9a9a9";
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(450, 10);
        aufgabe6.crc2.lineTo(625, 450);
        aufgabe6.crc2.lineTo(275, 450);
        aufgabe6.crc2.fill();
        //Boden  
        aufgabe6.crc2.fillStyle = "#d7e4e5";
        aufgabe6.crc2.fillRect(0, 500, 800, 200);
        //Berg
        aufgabe6.crc2.fillStyle = "#d7e4e5";
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(0, 230);
        aufgabe6.crc2.lineTo(800, 500);
        aufgabe6.crc2.lineTo(-800, 500);
        aufgabe6.crc2.fill();
        //B�ume Zufallsgenerator
        for (let i = 0; i < 3; i++) {
            let x = 50 + Math.random() * 300;
            let y = 350 + Math.random() * 30;
            drawTree(x, y, "#008000");
        }
        //Werte werden Klassen �bergeben
        for (let i = 0; i < 1; i++) {
            let s = new aufgabe6.Lift(0, 100); //Instanz der Klasse wird erstellt, new �bergibt die Werte an den Constructor der Klasse Lift                             
            shapes.push(s);
        }
        for (let i = 0; i < 3; i++) {
            let s = new aufgabe6.Ski(0, 230); //Instanz der Klasse wird erstellt, new �bergibt die Werte an den Constructor der Klasse Ski
            shapes.push(s);
        }
        for (let i = 0; i < 140; i++) {
            let s = new aufgabe6.Schnee(0, 0); //Instanz der Klasse wird erstellt, new �bergibt die Werte an den Constructor der Klasse Schnee
            shapes.push(s);
        }
        for (let i = 0; i < 3; i++) {
            let s = new aufgabe6.Wolke(0, 0); //Instanz der Klasse wird erstellt
            shapes.push(s); //Wolke wird in das Array geladen
        }
        image = aufgabe6.crc2.getImageData(0, 0, 800, 600); //Bild speichern
        animate();
    }
    function animate() {
        aufgabe6.crc2.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren
        aufgabe6.crc2.putImageData(image, 0, 0); //gespeichertes Bild wieder einf�gen
        for (let i = 0; i < shapes.length; i++) {
            let s = shapes[i];
            s.update();
        }
        window.setTimeout(animate, 20); //
    }
    //B�ume
    function drawTree(_x, _y, _color) {
        aufgabe6.crc2.fillStyle = "#a52a2a";
        aufgabe6.crc2.fillRect(_x + 60, _y - 85, 20, 150);
        aufgabe6.crc2.fillStyle = _color;
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(_x, _y);
        aufgabe6.crc2.lineTo(_x + 140, _y);
        aufgabe6.crc2.lineTo(_x + 70, _y - 50);
        aufgabe6.crc2.fill();
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(_x + 20, _y - 30);
        aufgabe6.crc2.lineTo(_x + 120, _y - 30);
        aufgabe6.crc2.lineTo(_x + 70, _y - 80);
        aufgabe6.crc2.fill();
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(_x + 40, _y - 60);
        aufgabe6.crc2.lineTo(_x + 100, _y - 60);
        aufgabe6.crc2.lineTo(_x + 70, _y - 110);
        aufgabe6.crc2.fill();
    }
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=aufgabe6.js.map