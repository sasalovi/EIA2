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
    var counter = 120;
    var counterID;
    var reloadButton = document.createElement("button");
    var image;
    function shooter() {
        let canvas = document.getElementsByTagName("canvas")[0]; //Array f�r den Fall dass mehrere Canvas vorhanden sind
        abschluss2.crc2 = canvas.getContext("2d");
        //Statische Objekte zeichnen
        punkteAnzeige = document.getElementById("punkte");
        punkteAnzeige.style.position = "absolute";
        punkteAnzeige.style.left = "20px";
        punkteAnzeige.style.top = "10px";
        punkteAnzeige.style.fontSize = "2em";
        punkteAnzeige.style.margin = "0";
        punkteAnzeige.style.color = "white";
        punkteAnzeige.innerText = punkte.toString() + " Punkte";
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
        reloadButton.style.top = (607).toString() + "px";
        reloadButton.style.left = (955).toString() + "px";
        reloadButton.style.width = "290px";
        reloadButton.style.height = "100px";
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
        reloadButton.style.backgroundColor = "rgba(0,0,0,0)";
        reloadButton.style.border = "none";
        reloadButton.style.outline = "none";
        document.body.appendChild(reloadButton);
        addListener();
        startCountdown();
        image = abschluss2.crc2.getImageData(0, 0, 1280, 720); //Bild speichern
        animate();
    }
    function startCountdown() {
        //            for (let counter: number = 10; counter >= 0; counte        
        if (counter > 0) {
            counter = counter - 1;
        }
        else if (counter == 0) {
            alert("Deine Punktzahl beträgt " + punkte);
        }
        // counterID.innerText = counter.toString();
        counterID = document.getElementById("timer");
        counterID.style.position = "absolute";
        counterID.style.left = "20px";
        counterID.style.top = "45px";
        counterID.style.fontSize = "2em";
        counterID.style.margin = "0";
        counterID.style.color = "white";
        counterID.innerText = counter.toString() + " Sekunden";
        window.setTimeout(startCountdown, 1000);
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