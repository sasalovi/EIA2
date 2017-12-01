var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        //Student Objekt vom Typ StudentData erstellen
        let stringToSplit = _input.split(",", 6); //string wird in 6 Teile gesplitted
        if (parseInt(stringToSplit[0]) == NaN) {
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
        else if (parseInt(stringToSplit[4]) != 1 && parseInt(stringToSplit[4]) != 0) {
            return "'Geschlecht' bitte mit 0 oder 1 eingeben";
        }
        else if (stringToSplit[5] == "") {
            return "'Kommentar' als W�rter eingeben";
        }
        else {
            let student = {
                matrikelnummer: parseInt(stringToSplit[0]),
                name: stringToSplit[1],
                vorname: stringToSplit[2],
                alter: parseInt(stringToSplit[3]),
                geschlecht: parseInt(stringToSplit[4]) == 1,
                kommentar: stringToSplit[5]
            };
            students.push(student);
            console.log(students);
            return "Erfolgreich gespeichert";
        }
    }
    function queryData(_matrikel) {
        for (var i = 0; i < students.length; i++) {
            if (students[i].matrikelnummer == _matrikel) {
                let matrikelAus = "Matrikelnummer:" + students[i].matrikelnummer;
                let vornameAus = "test" + students[i].vorname;
                let nameAus = "test " + students[i].name;
                let alterAus = "Alter: " + students[i].alter;
                let geschlechtAus;
                if (students[i].geschlecht)
                    geschlechtAus = " m�nnlich";
                else
                    geschlechtAus = " weiblich";
                let kommentarAus = students[i].kommentar;
                return matrikelAus + vornameAus + nameAus + alterAus + geschlechtAus + kommentarAus;
            }
        }
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=main.js.map