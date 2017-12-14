namespace StudiVZ {
    interface StudentData {
        matrikelnummer: number;
        name: string;
        vorname: string;
        alter: number;
        geschlecht: boolean;
        kommentar: string;
    }
    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben"); //PopUp mit Eingabemöglichkeit, nimmt Strings entgegen

        switch (action) { //wenn Buchstabe xy gedrückt wird, führe aktion xy aus
            case "n": //in case n has been tipped, execute ...
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input)); //saveData wird aufgerufen und die Eingegeben Werte übertragen und dem Nutzer eine Bestätigung als alert angezeigt (der return wert)
                break; //springt an dieser Stelle raus
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer")); //umwandlung in Number
                alert(queryData(matrikel)); //aufruf queryData, übergabe Matrikelnummer
                break;
            case "s":
            case "S":
                stop = true;
        }
    }


    function saveData(_input: string): string {

        let stringToSplit: string[] = _input.split(",", 6);   //.split --> string wird in 6 Teile gesplitted, ausgehend von der kommasetzung


        if (Number.isNaN(parseInt(stringToSplit[0]))) { //prüfen ob matrikelnummer zahl ist (isNotANumber)
            return "'Matrikelnummer' muss eine Zahl sein";
        }
        else if (stringToSplit[1] == "") {
            return "'Name' muss ein Wort sein";
        }
        else if (stringToSplit[2] == "") {
            return "'Vorname' muss ein Wort sein";
        }
        else if (parseInt(stringToSplit[3]) == NaN) {
            return "'Alter' muss eine Zahl sein";
        }
        else if (parseInt(stringToSplit[4]) != 1 && parseInt(stringToSplit[4]) != 0) { //0 false, 1 true --> boolean
            return "'Geschlecht' bitte mit 0=w oder 1=m eingeben";
        }
        else if (stringToSplit[5] == "") {
            return "'Kommentar' als Wörter eingeben";
        }
        else {
            let student: StudentData = { //Werte in die Variablen des Interface speichern
                matrikelnummer: parseInt(stringToSplit[0]),          //parseInt wandelt string in number um
                name: stringToSplit[1],
                vorname: stringToSplit[2],
                alter: parseInt(stringToSplit[3]),
                geschlecht: parseInt(stringToSplit[4]) == 1, //0 ==1 --> false 1 == 1--> true;;; boolean wert
                kommentar: stringToSplit[5]
            };
            students.push(student); //student in das students array pushen
            console.log(students);
            return "Erfolgreich gespeichert";
        }
    }
    function queryData(_matrikel: number): string {
        for (var i: number = 0; i < students.length; i++) {
            if (students[i].matrikelnummer == _matrikel) { //Einzelne gespeicherte Daten auf Matrikelnummer prüfen
                let matrikelAus: string = " Matrikelnummer:" + students[i].matrikelnummer; //Ausgabe der zugehörigen Daten
                let vornameAus: string = " Vorname" + students[i].vorname;
                let nameAus: string = " Name " + students[i].name;
                let alterAus: string = " Alter: " + students[i].alter;
                let kommentarAus: string = " Kommentar: " + students[i].kommentar;
                let geschlechtAus: string;


                if (students[i].geschlecht) //If prüft hier automatisch auf den boolean wert true, klammern nicht nötig da if immer die nachfolgende Zeile heranzieht
                    geschlechtAus = " männlich";
                else
                    geschlechtAus = " weiblich";







                return matrikelAus + vornameAus + nameAus + alterAus + geschlechtAus + kommentarAus; //Ausgabe auf der Console
            }
        }



    }
}
