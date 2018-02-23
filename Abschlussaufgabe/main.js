var abschluss2;
(function (abschluss2) {
    //Aufgabe: Abschlussaufgabe
    //Name: Markus Sasalovici
    //Matrikel: 256027
    //Datum: 14.02.2018 
    //    
    //Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    window.addEventListener("load", shooter);
    window.addEventListener("keydown", reloadKeyR);
    let shapes = [];
    let muni = [];
    var punkte = 0;
    var punkteAnzeige;
    var usedAmmo = 0;
    var maxMun = 6;
    var counter = 20;
    var counterID;
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
            alert("Bitte drehe dein Gerät und drücke dann auf OK!");
        }
        alert("Erledige die UFOs durch einen Klick auf sie. Nachladen kannst du durch Klicken der 'R' Taste oder auf die Munition unten rechts");
        let canvas = document.getElementsByTagName("canvas")[0];
        abschluss2.crc2 = canvas.getContext("2d");
        //Punkte Anzeige initialisieren
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
        //Restliche Objekte Zeichnen
        let b = new abschluss2.Background();
        b.drawSky();
        b.drawTree();
        b.drawStreet();
        b.drawGrass();
        //UFO Instanzen erstellen
        for (let i = 0; i < (Math.floor(Math.random() * 20 + 3)); i++) {
            let s = new abschluss2.Raumschiff(0, 0);
            shapes.push(s);
            s.start();
        }
        //Munition Instanzen erstellen
        var xOffset = 950;
        for (let i = 0; i < maxMun; i++) {
            let m = new abschluss2.Munition(xOffset, 0);
            muni.push(m);
            m.draw();
            xOffset = xOffset + 50;
        }
        //Nachladebutton generieren für Handy Ansicht   
        reloadButton.style.position = "absolute";
        reloadButton.style.top = (590 * heightRel).toString() + "px";
        reloadButton.style.left = (955 * relation).toString() + "px";
        reloadButton.style.width = 290 * relation + "px";
        reloadButton.style.height = 100 * heightRel + "px";
        reloadButton.id = "reloadButton";
        reloadButton.style.border = "none";
        reloadButton.style.outline = "none";
        reloadButton.style.opacity = "0";
        reloadButton.addEventListener("click", reload);
        reloadButton.addEventListener("touchstart", reload);
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
        else {
            counter = counter - 1;
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
        //Kondition um Timer bei Ablauf der Zeit zu beenden
        if (counter >= 0) {
            window.setTimeout(startCountdown, 1000);
        }
        //Responsive Styling
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
    function addListener() {
        //Alle vorhandenen DIVs mit EventListenern ausstatten
        for (let i = 0; i < document.getElementsByTagName("div").length; i++) {
            let div = document.getElementsByTagName("div")[i];
            div.addEventListener("click", remove);
            div.addEventListener("touchstart", remove);
            div.id = i + "";
        }
    }
    function reloadKeyR(_event) {
        if (_event.keyCode == 82) {
            reload();
        }
    }
    function reload() {
        var r = document.getElementById("reload");
        r.load();
        r.play();
        usedAmmo = 0;
        for (let i = 0; i < muni.length; i++) {
            muni[i].setRemoveValue(false); //Färbt Munition wieder rot
        }
    }
    function animate() {
        abschluss2.crc2.clearRect(0, 0, 1280, 720);
        abschluss2.crc2.putImageData(image, 0, 0);
        for (let i = 0; i < shapes.length; i++) {
            let s = shapes[i];
            s.update();
            s.moveDiv(i);
        }
        for (let i = 0; i < muni.length; i++) {
            muni[i].draw();
        }
        if (counter >= 0) {
            window.setTimeout(animate, 20);
        }
    }
    function remove(_event) {
        if (usedAmmo < maxMun) {
            //Sound
            var gunshotAudio = document.getElementById("gunshot");
            gunshotAudio.load();
            let id = _event.target;
            id.style.display = "none";
            let n = parseInt(id.id);
            shapes[n].setRaumschiffTod(true); //Raumschiff ausblenden
            id.removeEventListener("click", remove);
            id.removeEventListener("touchstart", remove);
            //Punkte Berechnen und munition abziehen
            punkte = punkte + 30;
            punkteAnzeige.innerText = punkte.toString() + " Punkte";
            muni[usedAmmo].setRemoveValue(true);
            usedAmmo = usedAmmo + 1;
            let s = new abschluss2.Raumschiff(0, 0);
            shapes.push(s);
            s.start();
            addListener();
            gunshotAudio.play();
        }
    }
    function endscreen() {
        //Clickflächen aufräumen
        for (let i = 0; i < document.getElementsByTagName("div").length; i++) {
            let div = document.getElementsByTagName("div")[i];
            div.removeEventListener("click", remove);
            div.removeEventListener("click", remove);
        }
        //Inhalte des Spiels ausblenden
        document.getElementById("reloadButton").remove();
        canvasWidth.style.filter = "blur(7px)";
        counterID.style.display = "none";
        punkteAnzeige.style.display = "none";
        //Initialisieren des Endscreen
        let h2 = document.createElement("h2");
        h2.innerText = "Deine Punktzahl beträgt " + punkte + " Punkte!";
        h2.style.position = "absolute";
        h2.style.top = "0";
        h2.style.color = "white";
        h2.style.left = 20 * relation + "px";
        h2.style.margin = "0";
        h2.id = "endscreenH2";
        let newGame = document.createElement("button");
        newGame.addEventListener("click", initialize);
        newGame.innerText = "Neues Spiel";
        newGame.style.position = "absolute";
        newGame.style.top = (590 * heightRel).toString() + "px";
        newGame.style.left = (945 * relation).toString() + "px";
        newGame.id = "endscreenButton";
        //Responsive Styling
        if (window.innerWidth > 1280) {
            h2.style.fontSize = "3em";
            h2.style.top = 10 * relation + "px";
            newGame.style.fontSize = "3em";
        }
        else if (window.innerWidth > 768) {
            h2.style.fontSize = "1.5em";
            newGame.style.fontSize = "1.2em";
        }
        else if (window.innerWidth > 570) {
            h2.style.fontSize = "1.3em";
        }
        else {
            h2.style.fontSize = "0.7em";
            h2.style.top = 40 * relation + "px";
            newGame.style.left = (750 * relation).toString() + "px";
            newGame.style.fontSize = "0.7em";
        }
        document.body.appendChild(h2);
        document.body.appendChild(newGame);
    }
    function initialize() {
        document.getElementById("endscreenH2").remove();
        document.getElementById("endscreenButton").remove();
        shapes = [];
        muni = [];
        usedAmmo = 0;
        counter = 20;
        canvasWidth.style.filter = "blur(0px)";
        for (let i = document.getElementsByTagName("div").length; i == document.getElementsByTagName("div").length; i--) {
            if (i > 0) {
                let e = document.getElementsByTagName("div")[i - 1];
                e.remove();
            }
        }
        counterID.style.display = "inline";
        punkteAnzeige.style.display = "inline";
        shooter();
    }
})(abschluss2 || (abschluss2 = {}));
//# sourceMappingURL=main.js.map