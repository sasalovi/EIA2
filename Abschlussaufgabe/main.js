var abschluss2;
(function (abschluss2) {
    //Aufgabe: Abschlussaufgabe
    //Name: Markus Sasalovici
    //Matrikel: 256027
    //Datum: 14.02.2018 
    //    
    //Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    window.addEventListener("load", shooter);
    window.addEventListener("keydown", reload);
    let shapes = [];
    let muni = [];
    var punkte = 0;
    var punkteAnzeige;
    var clicked = 0;
    var maxMun = 6;
    var munizahl = 0;
    var counter = 10;
    var counterID;
    let counterStop = false;
    var reloadButton = document.createElement("button");
    let canvasWidth;
    let width;
    let height;
    let relation;
    let heightRel;
    var image;
    function shooter() {
        canvasWidth = document.getElementById("canvas");
        width = canvasWidth.scrollWidth;
        height = canvasWidth.scrollHeight;
        relation = width / canvasWidth.width;
        heightRel = height / canvasWidth.height;
        if (window.innerHeight > window.innerWidth) {
            alert("Bitte drehe dein Gerät!");
        }
        let canvas = document.getElementsByTagName("canvas")[0]; //Array f�r den Fall dass mehrere Canvas vorhanden sind
        abschluss2.crc2 = canvas.getContext("2d");
        //Statische Objekte zeichnen
        punkteAnzeige = document.getElementById("punkte");
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
        }
        else if (window.innerWidth > 768) {
            punkteAnzeige.style.fontSize = "1.5em";
        }
        else if (window.innerWidth > 570) {
            punkteAnzeige.style.fontSize = "0.5em";
        }
        else {
            punkteAnzeige.style.fontSize = "0.6em";
        }
        //Himmel
        var skygradient = abschluss2.crc2.createLinearGradient(0, 0, 0, 420);
        skygradient.addColorStop(0, "#0099ff");
        skygradient.addColorStop(0.9, "#99ccff");
        abschluss2.crc2.fillStyle = skygradient;
        abschluss2.crc2.fillRect(0, 0, 1280, 720);
        let b = new abschluss2.Background(0, 0);
        b.drawMountain(100, 100);
        for (let i = 0; i < 10; i++) {
            let s = new abschluss2.Raumschiff(0, 0); //Instanz der Klasse wird erstellt
            shapes.push(s); //Raumschiff wird in das Array geladen
            s.start();
        }
        var xOffset = 950;
        for (let i = 0; i < maxMun; i++) {
            let m = new abschluss2.Munition(xOffset, 0); //Instanz der Klasse wird erstellt
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
        reloadButton.addEventListener("click", function () {
            var r = document.getElementById("reload");
            r.load();
            r.play();
            clicked = 0;
            munizahl = 0;
            for (let i = 0; i < muni.length; i++) {
                muni[i].setRemoveValue(true);
            }
        });
        reloadButton.addEventListener("touchstart", function () {
            var r = document.getElementById("reload");
            r.load();
            r.play();
            clicked = 0;
            munizahl = 0;
            for (let i = 0; i < muni.length; i++) {
                muni[i].setRemoveValue(true);
            }
        });
        //        reloadButton.style.backgroundColor = "rgba(0,0,0,0)";
        //        reloadButton.style.border = "none";
        //        reloadButton.style.outline = "none";
        document.body.appendChild(reloadButton);
        addListener();
        startCountdown();
        image = abschluss2.crc2.getImageData(0, 0, 1280, 720); //Bild speichern
        animate();
    }
    function startCountdown() {
        if (counter > 0) {
            counter = counter - 1;
        }
        else if (counter == 0 && counterStop == false) {
            counterStop = true;
            endscreen();
        }
        //Counter Styling
        counterID = document.getElementById("timer");
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
        }
        else if (window.innerWidth > 768) {
            counterID.style.fontSize = "1.5em";
        }
        else if (window.innerWidth > 570) {
            counterID.style.fontSize = "0.5em";
        }
        else {
            counterID.style.fontSize = "0.6em";
            counterID.style.top = 40 * relation + "px";
        }
    }
    function endscreen() {
        //Clickflächen aufräumen
        for (let i = 0; i < document.getElementsByTagName("div").length; i++) {
            let div = document.getElementsByTagName("div")[i];
            div.removeEventListener("click", remove);
        }
        document.getElementById("reloadButton").remove();
        canvasWidth.style.filter = "blur(5px)";
        counterID.style.display = "none";
        punkteAnzeige.style.display = "none";
        let h2 = document.createElement("h2");
        h2.innerText = "Deine Punktzahl beträgt " + punkte + " Punkte!";
        h2.style.position = "absolute";
        h2.style.top = "0";
        h2.style.color = "white";
        h2.style.left = 20 * relation + "px";
        h2.style.marginTop = "0";
        h2.id = "endscreenH2";
        let newGame = document.createElement("button");
        newGame.addEventListener("click", initialize);
        newGame.innerText = "Neues Spiel";
        newGame.style.position = "absolute";
        newGame.style.top = (590 * heightRel).toString() + "px";
        newGame.style.left = (955 * relation).toString() + "px";
        newGame.id = "endscreenButton";
        //        document.body.appendChild(div1);
        document.body.appendChild(h2);
        document.body.appendChild(newGame);
    }
    function initialize() {
        document.getElementById("endscreenH2").remove();
        document.getElementById("endscreenButton").remove();
        for (let i = 0; i < shapes.length; i++) {
            shapes[1].init();
        }
        shapes = [];
        muni = [];
        counter = 10;
        counterStop = false;
        canvasWidth.style.filter = "blur(0px)";
        for (let i = 10; i == document.getElementsByTagName("div").length; i--) {
            if (i > 0) {
                let e = document.getElementsByTagName("div")[i - 1];
                e.remove();
            }
        }
        shooter();
    }
    function addListener() {
        for (let i = 0; i < document.getElementsByTagName("div").length; i++) {
            let div = document.getElementsByTagName("div")[i];
            div.addEventListener("click", remove);
            div.addEventListener("touchstart", remove);
            div.id = i + "";
        }
    }
    function reload(_event) {
        if (_event.keyCode == 82) {
            var r = document.getElementById("reload");
            r.load();
            r.play();
            clicked = 0;
            munizahl = 0;
            for (let i = 0; i < muni.length; i++) {
                muni[i].setRemoveValue(true);
            }
        }
    }
    function animate() {
        abschluss2.crc2.clearRect(0, 0, 1280, 720); // hier Hintergrund restaurieren
        abschluss2.crc2.putImageData(image, 0, 0); //gespeichertes Bild wieder einf�gen
        for (let i = 0; i < shapes.length; i++) {
            let s = shapes[i];
            s.update();
            s.moveDiv(i);
        }
        for (let i = 0; i < muni.length; i++) {
            muni[i].draw();
        }
        window.setTimeout(animate, 20); //
    }
    function remove(_event) {
        if (clicked < maxMun) {
            var x = document.getElementById("gunshot");
            x.load();
            let id = _event.target;
            id.style.display = "none";
            let n = parseInt(id.id);
            shapes[n].setRaumschiffTod(true);
            id.removeEventListener("click", remove);
            id.removeEventListener("touchstart", remove);
            //Punkte Berechnen und munition abziehen
            punkte = punkte + 30;
            punkteAnzeige.innerText = punkte.toString() + " Punkte";
            clicked = clicked + 1;
            muni[munizahl].setRemoveValue(false);
            munizahl++;
            let s = new abschluss2.Raumschiff(0, 0); //Instanz der Klasse wird erstellt
            shapes.push(s); //Raumschiff wird in das Array geladen
            s.start();
            addListener();
            x.play();
        }
    }
})(abschluss2 || (abschluss2 = {}));
//# sourceMappingURL=main.js.map