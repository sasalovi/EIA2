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
    var counter: number = 30;
    var counterID: HTMLParagraphElement;
    let counterStop: boolean = false;
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

        if (window.innerHeight > window.innerWidth) {
            alert("Bitte drehe dein Gerät und drücke dann auf OK!");
        }




        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0]; //Array f�r den Fall dass mehrere Canvas vorhanden sind

        crc2 = canvas.getContext("2d");

        //Statische Objekte zeichnen

        punkteAnzeige = <HTMLParagraphElement>document.getElementById("punkte");
        punkteAnzeige.style.position = "absolute";
        punkteAnzeige.style.left = 20 * relation + "px";
        punkteAnzeige.style.top = 5 * relation + "px";
        punkteAnzeige.style.margin = "0";
        punkteAnzeige.style.color = "white";
        punkteAnzeige.innerText = punkte.toString() + " Punkte";
        punkteAnzeige.style.zIndex = "99";

        if (window.innerWidth > 1280) {
            punkteAnzeige.style.fontSize = "2em";
            punkteAnzeige.style.top = 5 * relation + "px";
        } else if (window.innerWidth > 768) {
            punkteAnzeige.style.fontSize = "1.5em";
        } else if (window.innerWidth > 570) {
            punkteAnzeige.style.fontSize = "0.5em";
        } else {
            punkteAnzeige.style.fontSize = "0.6em";
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
        reloadButton.id = "reloadButton";
        reloadButton.style.border = "none";
        reloadButton.style.outline = "none";
        reloadButton.style.opacity = "0";
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


        document.body.appendChild(reloadButton);


        addListener();
        startCountdown();



        image = crc2.getImageData(0, 0, 1280, 720); //Bild speichern

        animate();
    }






    function startCountdown() {


        if (counter > 0) {
            counter = counter - 1;
        } else if (counter == 0 && counterStop == false) {

            counterStop = true;
            endscreen();

        }

        //Counter Styling
        counterID = <HTMLParagraphElement>document.getElementById("timer");
        counterID.style.position = "absolute";
        counterID.style.left = 20 * relation + "px";
        counterID.style.top = 60 * relation + "px";
        counterID.style.fontSize = "2em";
        counterID.style.margin = "0";
        counterID.style.color = "white";
        counterID.innerText = counter.toString() + " Sekunden";
        counterID.style.zIndex = "99";


        if (counterStop == false) {
            window.setTimeout(startCountdown, 1000);
        }

        if (window.innerWidth > 1280) {
            counterID.style.fontSize = "2em";
            counterID.style.top = 37 * relation + "px";
        } else if (window.innerWidth > 768) {
            counterID.style.fontSize = "1.5em";
        } else if (window.innerWidth > 570) {
            counterID.style.fontSize = "0.5em";
        } else {
            counterID.style.fontSize = "0.6em";
            counterID.style.top = 40 * relation + "px";
        }


    }





    function endscreen() {

        //Clickflächen aufräumen
        for (let i: number = 0; i < document.getElementsByTagName("div").length; i++) {
            let div: HTMLDivElement = document.getElementsByTagName("div")[i];
            div.removeEventListener("click", remove);
            div.removeEventListener("click", remove);
        }

        document.getElementById("reloadButton").remove();
        canvasWidth.style.filter = "blur(7px)";
        counterID.style.display = "none";
        punkteAnzeige.style.display = "none";


        let h2: HTMLHeadingElement = document.createElement("h2");
        h2.innerText = "Deine Punktzahl beträgt " + punkte + " Punkte!";
        h2.style.position = "absolute";
        h2.style.top = "0";
        h2.style.color = "white";
        h2.style.left = 20 * relation + "px";
        h2.style.margin = "0";
        h2.id = "endscreenH2";









        let newGame: HTMLButtonElement = document.createElement("button");
        newGame.addEventListener("click", initialize);
        newGame.innerText = "Neues Spiel";
        newGame.style.position = "absolute";
        newGame.style.top = (590 * heightRel).toString() + "px";
        newGame.style.left = (945 * relation).toString() + "px";
        newGame.id = "endscreenButton";


        if (window.innerWidth > 1280) {
            h2.style.fontSize = "3em";
            h2.style.top = 10 * relation + "px";
            newGame.style.fontSize = "3em";
        } else if (window.innerWidth > 768) {
            h2.style.fontSize = "1.5em";
            newGame.style.fontSize = "1.2em";
        } else if (window.innerWidth > 570) {
            h2.style.fontSize = "1.3em";
        } else {
            h2.style.fontSize = "0.7em";
            h2.style.top = 40 * relation + "px";
            newGame.style.left = (750 * relation).toString() + "px";
            newGame.style.fontSize = "0.7em";
        }




        //        document.body.appendChild(div1);
        document.body.appendChild(h2);
        document.body.appendChild(newGame);
    }

    function initialize() {
        document.getElementById("endscreenH2").remove();
        document.getElementById("endscreenButton").remove();
        shapes = [];
        muni = [];
        counter = 10;
        counterStop = false;
        canvasWidth.style.filter = "blur(0px)";
        for (let i: number = 10; i == document.getElementsByTagName("div").length; i--) {
            if (i > 0) {
                let e = document.getElementsByTagName("div")[i - 1];
                e.remove();
            }
        }

        counterID.style.display = "inline";
        punkteAnzeige.style.display = "inline";

        shooter();



    }


    function addListener(): void {

        for (let i: number = 0; i < document.getElementsByTagName("div").length; i++) {

            let div: HTMLDivElement = document.getElementsByTagName("div")[i];
            div.addEventListener("click", remove);
            div.removeEventListener("touchstart", remove);

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




        if (counterStop == false) {
            window.setTimeout(animate, 20);
        }

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