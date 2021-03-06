var aufgabe5;
(function (aufgabe5) {
    //Aufgabe: Aufgabe 5
    //Name: Markus Sasalovici
    //Matrikel: 256027
    //Datum: 17.11.2017 
    //    
    //Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    window.addEventListener("load", ski2);
    let snowClass = []; //Arrays erstellen
    let skiClass = [];
    let cloudClass = [];
    let liftClass = [];
    var image;
    function ski2() {
        let canvas = document.getElementsByTagName("canvas")[0]; //Array f�r den Fall dass mehrere Canvas vorhanden sind
        aufgabe5.crc2 = canvas.getContext("2d");
        //Statische Objekte zeichnen
        //Himmel
        aufgabe5.crc2.fillStyle = "#26e2dc";
        aufgabe5.crc2.fillRect(0, 0, 800, 600);
        //Berg2
        aufgabe5.crc2.fillStyle = "#a9a9a9";
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(250, 100);
        aufgabe5.crc2.lineTo(425, 450);
        aufgabe5.crc2.lineTo(75, 450);
        aufgabe5.crc2.fill();
        //Berg3
        aufgabe5.crc2.fillStyle = "#a9a9a9";
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(450, 10);
        aufgabe5.crc2.lineTo(625, 450);
        aufgabe5.crc2.lineTo(275, 450);
        aufgabe5.crc2.fill();
        //Boden  
        aufgabe5.crc2.fillStyle = "#d7e4e5";
        aufgabe5.crc2.fillRect(0, 500, 800, 200);
        //Berg
        aufgabe5.crc2.fillStyle = "#d7e4e5";
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(0, 230);
        aufgabe5.crc2.lineTo(800, 500);
        aufgabe5.crc2.lineTo(-800, 500);
        aufgabe5.crc2.fill();
        //B�ume Zufallsgenerator
        for (let i = 0; i < 3; i++) {
            let x = 50 + Math.random() * 300;
            let y = 350 + Math.random() * 30;
            drawTree(x, y, "#008000");
        }
        //Werte werden Klassen �bergeben
        for (let i = 0; i < 1; i++) {
            let s = new aufgabe5.Lift(0, 100); //Instanz der Methode wird erstellt, new �bergibt die Werte an den Constructor der Klasse Lift                             
            liftClass[i] = s;
        }
        for (let i = 0; i < 3; i++) {
            let s = new aufgabe5.Ski(0, 230); //Instanz der Methode wird erstellt, new �bergibt die Werte an den Constructor der Klasse Ski
            skiClass[i] = s;
        }
        for (let i = 0; i < 140; i++) {
            let s = new aufgabe5.Schnee(0, 0); //Instanz der Methode wird erstellt, new �bergibt die Werte an den Constructor der Klasse Schnee
            snowClass[i] = s;
        }
        for (let i = 0; i < 3; i++) {
            let s = new aufgabe5.Wolke(0, 0); //Instanz der Methode wird erstellt
            cloudClass[i] = s; //Wolke wird in das Array geladen
        }
        image = aufgabe5.crc2.getImageData(0, 0, 800, 600); //Bild speichern
        animate();
    }
    function animate() {
        aufgabe5.crc2.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren
        aufgabe5.crc2.putImageData(image, 0, 0); //gespeichertes Bild wieder einf�gen
        //Zeichnen mit zuvor �bergebenen Werten
        for (let i = 0; i < skiClass.length; i++) {
            let s = skiClass[i]; //Ski an Stelle [i] aus dem Array laden und per s.update an die Klasse �bergeben
            s.update();
        }
        //Snowflakes
        for (let i = 0; i < snowClass.length; i++) {
            let s = snowClass[i]; //Wolke an Stelle [i] aus dem Array laden und per s.update an die Klasse �bergeben
            s.update(); //Methodenaufruf 
        }
        //Wolke
        for (let i = 0; i < cloudClass.length; i++) {
            let s = cloudClass[i]; //s definiert eine variable welche dem Objekt i der Klasse wolke entspricht und updated dieses objekt
            //Wolke an Stelle [i] aus dem Array laden und per s.update an die Klasse �bergeben
            s.update();
        }
        for (let i = 0; i < liftClass.length; i++) {
            let s = liftClass[i]; //Wolke an Stelle [i] aus dem Array laden und per s.update an die Klasse �bergeben
            s.update();
        }
        window.setTimeout(animate, 20); //
    }
    //B�ume
    function drawTree(_x, _y, _color) {
        aufgabe5.crc2.fillStyle = "#a52a2a";
        aufgabe5.crc2.fillRect(_x + 60, _y - 85, 20, 150);
        aufgabe5.crc2.fillStyle = _color;
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(_x, _y);
        aufgabe5.crc2.lineTo(_x + 140, _y);
        aufgabe5.crc2.lineTo(_x + 70, _y - 50);
        aufgabe5.crc2.fill();
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(_x + 20, _y - 30);
        aufgabe5.crc2.lineTo(_x + 120, _y - 30);
        aufgabe5.crc2.lineTo(_x + 70, _y - 80);
        aufgabe5.crc2.fill();
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(_x + 40, _y - 60);
        aufgabe5.crc2.lineTo(_x + 100, _y - 60);
        aufgabe5.crc2.lineTo(_x + 70, _y - 110);
        aufgabe5.crc2.fill();
    }
})(aufgabe5 || (aufgabe5 = {}));
//# sourceMappingURL=aufgabe5.js.map