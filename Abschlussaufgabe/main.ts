namespace abschluss2 {

    //Aufgabe: Abschlussaufgabe
    //Name: Markus Sasalovici
    //Matrikel: 256027
    //Datum: 14.02.2018 
    //    
    //Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

    window.addEventListener("load", shooter);
    window.addEventListener("keydown", reload);

    export let crc2: CanvasRenderingContext2D; //variable Dateien im selben Namespace zug�nglich machen

    let shapes: Movingshapes[] = [];
    let muni: Munition[] = [];
    var punkte: number = 0;
    var punkteAnzeige: HTMLParagraphElement;
    var clicked: number = 0;
    var maxMun: number = 6;
    var munizahl: number = 0;
    var counter: number = 120;
    var counterID: HTMLParagraphElement;
    var reloadButton: HTMLButtonElement = document.createElement("button");

    let canvasWidth: HTMLCanvasElement;
    let width: number;
    let height: number;
    let relation: number;
    let heightRel: number;


    var image: any;


    function shooter(): void {

        canvasWidth = <HTMLCanvasElement>document.getElementById("canvas");
        width = canvasWidth.scrollWidth;
        height = canvasWidth.scrollHeight;
        relation = width / canvasWidth.width;
        heightRel = height / canvasWidth.height;

        if ((window.innerHeight / window.innerWidth) < 1 && window.innerWidth < 768) {
            alert("Bitte drehe dein Gerät");
        }
        alert(window.innerWidth);

        

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0]; //Array f�r den Fall dass mehrere Canvas vorhanden sind

        crc2 = canvas.getContext("2d");

        //Statische Objekte zeichnen

        punkteAnzeige = <HTMLParagraphElement>document.getElementById("punkte");
        punkteAnzeige.style.position = "absolute";
        punkteAnzeige.style.left = 20*relation + "px";
        punkteAnzeige.style.top = 5*relation + "%";
        punkteAnzeige.style.margin = "0";
        punkteAnzeige.style.color = "white";
        punkteAnzeige.innerText = punkte.toString() + " Punkte";

        if (window.innerWidth > 1280) {
            punkteAnzeige.style.fontSize = "2em";
            punkteAnzeige.style.top = 2*relation + "%";
        } else if (window.innerWidth > 768) {
            punkteAnzeige.style.fontSize = "1.5em";
        } else if (window.innerWidth > 570) {
            punkteAnzeige.style.fontSize = "1em";
        } else {
            punkteAnzeige.style.fontSize = "0.5em";
        }




        //Himmel
        var skygradient = crc2.createLinearGradient(0, 0, 0, 420);
        skygradient.addColorStop(0, "#0099ff");
        skygradient.addColorStop(0.9, "#99ccff");



        crc2.fillStyle = skygradient;
        crc2.fillRect(0, 0, 1280, 720);


        let b: Background = new Background(0, 0);
        b.drawMountain(100, 100);


        for (let i: number = 0; i < 10; i++) {
            let s: Raumschiff = new Raumschiff(0, 0); //Instanz der Klasse wird erstellt
            shapes.push(s); //Raumschiff wird in das Array geladen
            s.start();
        }

        var xOffset: number = 950;
        for (let i: number = 0; i < maxMun; i++) {

            let m: Munition = new Munition(xOffset, 0); //Instanz der Klasse wird erstellt
            muni.push(m);
            m.draw();
            xOffset = xOffset + 50;
        }

        //Nachladebutton generieren für Handy ansicht   




        reloadButton.style.position = "absolute";
        reloadButton.style.top = (590 * heightRel).toString() + "px";
        reloadButton.style.left = (955 * relation).toString() + "px";
        reloadButton.style.width = 290 * relation + "px";
        reloadButton.style.height = 100 * heightRel + "px";
        reloadButton.addEventListener("click", function(): void { //Anonyme Funktion erforderlich um Parameter zu �bergeben

            var r: HTMLMediaElement = <HTMLMediaElement>document.getElementById("reload");
            r.load();
            r.play();
            clicked = 0;
            munizahl = 0;

            for (let i: number = 0; i < muni.length; i++) {
                muni[i].setRemoveValue(true);
            }
        });

        reloadButton.addEventListener("touchstart", function(): void { //Anonyme Funktion erforderlich um Parameter zu �bergeben

            var r: HTMLMediaElement = <HTMLMediaElement>document.getElementById("reload");
            r.load();
            r.play();
            clicked = 0;
            munizahl = 0;

            for (let i: number = 0; i < muni.length; i++) {
                muni[i].setRemoveValue(true);
            }
        });
        //        reloadButton.style.backgroundColor = "rgba(0,0,0,0)";
        //        reloadButton.style.border = "none";
        //        reloadButton.style.outline = "none";


        document.body.appendChild(reloadButton);


        addListener();
        startCountdown();




        image = crc2.getImageData(0, 0, 1280, 720); //Bild speichern

        animate();
    }






    function startCountdown() {

        //            for (let counter: number = 10; counter >= 0; counte        
        if (counter > 0) {



            counter = counter - 1;


        } else if (counter == 0) {

            alert("Deine Punktzahl beträgt " + punkte);
        }
        // counterID.innerText = counter.toString();
        counterID = <HTMLParagraphElement>document.getElementById("timer");
        counterID.style.position = "absolute";
        counterID.style.left = 20*relation + "px";
        counterID.style.top = 15*relation + "%";
        counterID.style.fontSize = "2em";
        counterID.style.margin = "0";
        counterID.style.color = "white";
        counterID.innerText = counter.toString() + " Sekunden";
        window.setTimeout(startCountdown, 1000);


        if (window.innerWidth > 1280) {
            counterID.style.fontSize = "2em";
            counterID.style.top = 8*relation + "%";
        } else if (window.innerWidth > 768) {
            counterID.style.fontSize = "1.5em";
        } else if (window.innerWidth > 570) {
            counterID.style.fontSize = "1em";
        } else {
            counterID.style.fontSize = "0.5em";
        }


    }

    function addListener(): void {
        for (let i: number = 0; i < document.getElementsByTagName("div").length; i++) {

            let div: HTMLDivElement = document.getElementsByTagName("div")[i];
            div.addEventListener("click", remove);
            div.addEventListener("touchstart", remove);
            div.id = i + "";

        }
    }


    function reload(_event: KeyboardEvent): void {
        if (_event.keyCode == 82) {

            var r: HTMLMediaElement = <HTMLMediaElement>document.getElementById("reload");
            r.load();
            r.play();
            clicked = 0;
            munizahl = 0;

            for (let i: number = 0; i < muni.length; i++) {
                muni[i].setRemoveValue(true);
            }
        }
    }




    function animate(): void {
        crc2.clearRect(0, 0, 1280, 720); // hier Hintergrund restaurieren
        crc2.putImageData(image, 0, 0); //gespeichertes Bild wieder einf�gen

        for (let i: number = 0; i < shapes.length; i++) {
            let s: Movingshapes = shapes[i];
            s.update();
            s.moveDiv(i);

        }

        for (let i: number = 0; i < muni.length; i++) {
            muni[i].draw();
        }





        window.setTimeout(animate, 20); //
    }

    function remove(_event: Event): void {
        if (clicked < maxMun) {

            var x: HTMLMediaElement = <HTMLMediaElement>document.getElementById("gunshot");
            x.load();

            let id: HTMLDivElement = <HTMLDivElement>_event.target;
            id.style.display = "none";
            let n: number = parseInt(id.id);
            shapes[n].setRaumschiffTod(true);
            id.removeEventListener("click", remove);
            id.removeEventListener("touchstart", remove);

            //Punkte Berechnen und munition abziehen
            punkte = punkte + 30;
            punkteAnzeige.innerText = punkte.toString() + " Punkte";
            clicked = clicked + 1;
            muni[munizahl].setRemoveValue(false);
            munizahl++;

            let s: Raumschiff = new Raumschiff(0, 0); //Instanz der Klasse wird erstellt
            shapes.push(s); //Raumschiff wird in das Array geladen
            s.start();
            addListener();




            x.play();


        }
    }

}