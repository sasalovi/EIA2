namespace Aufgabe8 {
    window.addEventListener("load", init);
    //    window.addEventListener("keydown", keypress);
    //    function keypress(_event: KeyboardEvent): void {
    //        console.log(_event.keyCode);
    //    }


    function init(): void {
        var anzahl: string = prompt("Eingabe der gewünschten Anzahl");
        var anzahlNumb: number = parseInt(anzahl); //String in Number umwandeln

        if (anzahlNumb >= 10 && anzahlNumb <= 100) { //Auf Bereich zwischen 10 und 100 prüfen
            for (var i: number = 0; i < anzahlNumb; i++) {
                drawRect(Math.random() * 800, Math.random() * 600, "hsl(" + Math.random() * 360 + ", 100%, 50%)"); //x,y und farbe an die Zeichenfunktion übergeben
            }
        } else {
            window.alert("Die Zahl muss zwischen 10 und 100 liegen"); //Warnung bei falscher Eingabe und neu laden der Funktion
            init();

        }
    }

    function drawRect(_x: number, _y: number, _color: string): void {

        let div: HTMLDivElement = document.createElement("div"); //div erstellen
        div.style.marginLeft = _x.toString(); //_x in einen String umwandeln, da h.style nur strings entgegen nehmen kann
        div.style.marginTop = _y.toString();
        div.style.backgroundColor = _color; //Zufallsfarbe
        document.body.appendChild(div); //html ELement in den Code einfügen lassen
    }
}