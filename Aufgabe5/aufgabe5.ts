namespace aufgabe5 {

    //Aufgabe: Aufgabe 5
    //Name: Markus Sasalovici
    //Matrikel: 256027
    //Datum: 17.11.2017 
    //    
    //Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

    window.addEventListener("load", ski2);

    export let crc2: CanvasRenderingContext2D; //variable Dateien im selben Namespace zugänglich machen

    let snowClass: Schnee[] = []; //Arrays erstellen
    let skiClass: Ski[] = [];
    let cloudClass: Wolke[] = [];
    let liftClass: Lift[] = [];


    var image: any;


    function ski2(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0]; //Array für den Fall dass mehrere Canvas vorhanden sind

        crc2 = canvas.getContext("2d");

        //Statische Objekte zeichnen
        
        //Himmel
        crc2.fillStyle = "#26e2dc";
        crc2.fillRect(0, 0, 800, 600);

        //Berg2
        crc2.fillStyle = "#a9a9a9";
        crc2.beginPath();
        crc2.moveTo(250, 100);
        crc2.lineTo(425, 450);
        crc2.lineTo(75, 450);
        crc2.fill();

        //Berg3
        crc2.fillStyle = "#a9a9a9";
        crc2.beginPath();
        crc2.moveTo(450, 10);
        crc2.lineTo(625, 450);
        crc2.lineTo(275, 450);
        crc2.fill();

        //Boden  
        crc2.fillStyle = "#d7e4e5";
        crc2.fillRect(0, 500, 800, 200);

        //Berg
        crc2.fillStyle = "#d7e4e5";
        crc2.beginPath();
        crc2.moveTo(0, 230);
        crc2.lineTo(800, 500);
        crc2.lineTo(-800, 500);
        crc2.fill();


        //Bäume Zufallsgenerator
        for (let i: number = 0; i < 3; i++) {
            let x: number = 50 + Math.random() * 300;
            let y: number = 350 + Math.random() * 30;
            drawTree(x, y, "#008000");
        }

        
        //Werte werden Klassen übergeben
        
        for (let i: number = 0; i < 1; i++) {
            let s: Lift = new Lift(0, 100); //Instanz der Methode wird erstellt, new übergibt die Werte an den Constructor der Klasse Lift                             
            liftClass[i] = s;

        }

        for (let i: number = 0; i < 3; i++) {
            let s: Ski = new Ski(0, 230); //Instanz der Methode wird erstellt, new übergibt die Werte an den Constructor der Klasse Ski
            skiClass[i] = s;
        }


        for (let i: number = 0; i < 140; i++) {
            let s: Schnee = new Schnee(0, 0); //Instanz der Methode wird erstellt, new übergibt die Werte an den Constructor der Klasse Schnee
            snowClass[i] = s;
        }

        for (let i: number = 0; i < 3; i++) {
            let s: Wolke = new Wolke(0, 0); //Instanz der Methode wird erstellt
            cloudClass[i] = s; //Wolke wird in das Array geladen

        }


        image = crc2.getImageData(0, 0, 800, 600); //Bild speichern

        animate();
    }

    function animate(): void {
        crc2.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren
        crc2.putImageData(image, 0, 0); //gespeichertes Bild wieder einfügen

        //Zeichnen mit zuvor übergebenen Werten
        
        for (let i: number = 0; i < skiClass.length; i++) {
            let s: Ski = skiClass[i]; //Ski an Stelle [i] aus dem Array laden und per s.update an die Klasse übergeben
            s.update();
        }
        
        //Snowflakes
        for (let i: number = 0; i < snowClass.length; i++) {
            let s: Schnee = snowClass[i]; //Wolke an Stelle [i] aus dem Array laden und per s.update an die Klasse übergeben
            s.update(); //Methodenaufruf 
        }

        //Wolke
        for (let i: number = 0; i < cloudClass.length; i++) {
            let s: Wolke = cloudClass[i]; //s definiert eine variable welche dem Objekt i der Klasse wolke entspricht und updated dieses objekt
                                            //Wolke an Stelle [i] aus dem Array laden und per s.update an die Klasse übergeben
            s.update();
        }
        
        for (let i: number = 0; i < liftClass.length; i++) {
            let s: Lift = liftClass[i]; //Wolke an Stelle [i] aus dem Array laden und per s.update an die Klasse übergeben
            s.update();
        }


        window.setTimeout(animate, 20); //
    }

    //Bäume
    function drawTree(_x: number, _y: number, _color: string): void {
        crc2.fillStyle = "#a52a2a";
        crc2.fillRect(_x + 60, _y - 85, 20, 150);
        crc2.fillStyle = _color;
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 140, _y);
        crc2.lineTo(_x + 70, _y - 50);
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_x + 20, _y - 30);
        crc2.lineTo(_x + 120, _y - 30);
        crc2.lineTo(_x + 70, _y - 80);
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_x + 40, _y - 60);
        crc2.lineTo(_x + 100, _y - 60);
        crc2.lineTo(_x + 70, _y - 110);
        crc2.fill();

    }

}