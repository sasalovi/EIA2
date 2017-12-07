var Aufgabe8;
(function (Aufgabe8) {
    window.addEventListener("load", init);
    //    window.addEventListener("keydown", keypress);
    //    function keypress(_event: KeyboardEvent): void {
    //        console.log(_event.keyCode);
    //    }
    function init() {
        var anzahl = prompt("Eingabe der gewünschten Anzahl");
        var anzahlNumb = parseInt(anzahl); //String in Number umwandeln
        var width = prompt("Width in px");
        var widthNumb = parseInt(width); //String in Number umwandeln
        var height = prompt("Height in px");
        var heightNumb = parseInt(height); //String in Number umwandeln
        if (anzahlNumb >= 10 && anzahlNumb <= 100) {
            for (var i = 0; i < anzahlNumb; i++) {
                drawRect(Math.random() * 800, Math.random() * 600, "hsl(" + Math.random() * 360 + ", 100%, 50%)", widthNumb, heightNumb); //x,y und farbe an die Zeichenfunktion �bergeben
            }
        }
        else {
            window.alert("Die Zahl muss zwischen 10 und 100 liegen"); //Warnung bei falscher Eingabe und neu laden der Funktion
            init();
        }
    }
    function drawRect(_x, _y, _color, _width, _height) {
        let div = document.createElement("div"); //div erstellen
        div.style.width = _width.toString();
        div.style.height = _height.toString();
        div.style.marginLeft = _x.toString(); //_x in einen String umwandeln, da h.style nur strings entgegen nehmen kann
        div.style.marginTop = _y.toString();
        div.style.backgroundColor = _color; //Zufallsfarbe
        document.body.appendChild(div); //html ELement in den Code einf�gen lassen
    }
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=index.js.map