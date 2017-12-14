namespace Aufgabe8 {
    window.addEventListener("load", init);
    //    window.addEventListener("keydown", keypress);
    //    function keypress(_event: KeyboardEvent): void {
    //        console.log(_event.keyCode);
    //    }


    function init(): void {
        var anzahl: string = prompt("Eingabe der gewünschten Anzahl");
        var anzahlNumb: number = parseInt(anzahl); //String in Number umwandeln

        var width: string = prompt("Width in px");

        var height: string = prompt("Height in px");

        if (anzahlNumb >= 10 && anzahlNumb <= 100) { //Auf Bereich zwischen 10 und 100 pr�fen
            for (var i: number = 0; i < anzahlNumb; i++) {
                drawRect(Math.random() * 800, Math.random() * 600, "hsl(" + Math.random() * 360 + ", 100%, 50%)", width, height); //x,y und farbe an die Zeichenfunktion �bergeben
            }
        } else {
            window.alert("Die Zahl muss zwischen 10 und 100 liegen"); //Warnung bei falscher Eingabe und neu laden der Funktion
            init();

        }
    }

    function drawRect(_x: number, _y: number, _color: string, _width: string, _height: string): void {

        let div: HTMLDivElement = document.createElement("div"); //div vom Typ HTMLDivElement erstellen
        div.style.width = _width + "px";
        div.style.height = _height + "px";
        div.style.left = _x.toString() + "px"; //_x in einen String umwandeln, da h.style nur strings entgegen nehmen kann
        div.style.top = _y.toString() + "px";
        div.style.backgroundColor = _color; //Zufallsfarbe
        document.body.appendChild(div); //html ELement in den Code einfügen lassen / anhängen
    }
}
