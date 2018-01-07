//<!-- Name:Markus Sasalovici
//     Matrikel:256027
//     Datum:07.01.17
//     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//     Er wurde nicht kopiert und nicht diktiert.-->
var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", init);
    //AuswahlBoxen
    let baumtyp = document.createElement("select");
    let halterungtyp = document.createElement("select");
    let lieferopttyp = document.createElement("select");
    var korb = document.createElement("div");
    //Persönlich
    let persName = document.createElement("input");
    let persVorname = document.createElement("input");
    let persMail = document.createElement("input");
    let persAdresse = document.createElement("input");
    let persPlz = document.createElement("input");
    //Button
    let prufen = document.createElement("div");
    var gesamtpreis = 0;
    function init() {
        //Warenkorb Definieren und Anhängen
        let h2 = document.createElement("h2");
        h2.innerText = "Warenkorb";
        h2.style.position = "absolute";
        h2.style.right = "390px";
        h2.style.top = "0px";
        h2.style.zIndex = "99";
        document.getElementById("korbid").appendChild(h2);
        korb.style.display = "inline-block";
        korb.style.position = "absolute";
        korb.style.right = "10px";
        korb.style.top = "10px";
        korb.style.width = "500px";
        korb.style.height = "500px";
        korb.style.backgroundColor = "#c8ce86";
        korb.style.paddingTop = "40px";
        korb.style.paddingLeft = "10px";
        document.getElementById("korbid").appendChild(korb);
        //Baum Definieren und Anhängen        
        baumtyp.addEventListener("change", AuswahlAuslesen);
        document.getElementById("baumtyp").appendChild(baumtyp);
        for (let i = 0; i < Aufgabe10.baumdaten.length; i++) {
            let option = document.createElement("option");
            option.innerText = Aufgabe10.baumdaten[i].name;
            baumtyp.id = Aufgabe10.baumdaten[i].element; //Typ bzw ID Des Elements zuweisen, siehe Daten.ts
            baumtyp.appendChild(option);
        }
        //Halterungen Selektor          
        halterungtyp.addEventListener("change", AuswahlAuslesen);
        document.getElementById("halterung").appendChild(halterungtyp);
        for (let i = 0; i < Aufgabe10.halterungdaten.length; i++) {
            let option = document.createElement("option");
            option.innerText = Aufgabe10.halterungdaten[i].name;
            halterungtyp.id = Aufgabe10.halterungdaten[i].element; //Typ bzw ID Des Elements zuweisen, siehe Daten.ts
            halterungtyp.appendChild(option);
        }
        //Kugel Selektor       
        for (let i = 0; i < Aufgabe10.kugeldaten.length; i++) {
            let kugeltyp = document.createElement("input");
            kugeltyp.type = "checkbox";
            kugeltyp.id = Aufgabe10.kugeldaten[i].element;
            kugeltyp.addEventListener("change", function () {
                ChkKugelnAuslesen(kugeltyp, "1");
            });
            document.getElementById("kugeln").appendChild(kugeltyp);
            //Labels hinzufügen
            let kugellabel = document.createElement("label");
            kugellabel.innerText = Aufgabe10.kugeldaten[i].name;
            document.getElementById("kugeln").appendChild(kugellabel);
            //Anzahl Selektor
            let kugelanz = document.createElement("input");
            kugelanz.type = "number";
            kugelanz.step = "1";
            kugelanz.min = "0";
            kugelanz.value = "1";
            kugelanz.style.marginRight = "1.5em";
            kugelanz.addEventListener("change", function () {
                kugeltyp.checked = true; //Chekbox Anhaken wenn wert ge�ndert wird
                ChkKugelnAuslesen(kugeltyp, kugelanz.value);
            });
            document.getElementById("kugeln").appendChild(kugelanz);
        }
        //Kerzen Selektor       
        for (let i = 0; i < Aufgabe10.kerzendaten.length; i++) {
            let kerzetyp = document.createElement("input");
            kerzetyp.type = "checkbox";
            kerzetyp.id = Aufgabe10.kerzendaten[i].element;
            kerzetyp.addEventListener("change", function () {
                ChkKerzenAuslesen(kerzetyp, "1");
            });
            document.getElementById("kerzen").appendChild(kerzetyp);
            //Label Hinzufügen
            let kerzelabel = document.createElement("label");
            kerzelabel.innerText = Aufgabe10.kerzendaten[i].name;
            document.getElementById("kerzen").appendChild(kerzelabel);
            //Anzahl
            let kerzenanz = document.createElement("input");
            kerzenanz.type = "number";
            kerzenanz.step = "1";
            kerzenanz.min = "0";
            kerzenanz.value = "1";
            kerzenanz.style.marginRight = "1.5em";
            kerzenanz.addEventListener("change", function () {
                kerzetyp.checked = true; //Chekbox Anhaken wenn wert ge�ndert wird
                ChkKerzenAuslesen(kerzetyp, kerzenanz.value);
            });
            document.getElementById("kerzen").appendChild(kerzenanz);
        }
        //Lieferoption Selektor       
        lieferopttyp.addEventListener("change", AuswahlAuslesen);
        document.getElementById("lieferoption").appendChild(lieferopttyp);
        for (let i = 0; i < Aufgabe10.lieferoptionen.length; i++) {
            let option = document.createElement("option");
            option.innerText = Aufgabe10.lieferoptionen[i].name;
            lieferopttyp.id = Aufgabe10.lieferoptionen[i].element;
            lieferopttyp.appendChild(option);
        }
        //Persönliche Daten Eingeben
        persName.type = "text";
        persName.placeholder = "Name";
        persName.required = true;
        persName.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(persName);
        persVorname.type = "text";
        persVorname.placeholder = "Vorname";
        persVorname.required = true;
        persVorname.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(persVorname);
        persMail.type = "email"; //Um nutzung von @ vorauszusetzen
        persMail.placeholder = "Email, bitte @ nicht vergessen";
        persMail.required = true;
        persMail.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(persMail);
        persAdresse.type = "text";
        persAdresse.placeholder = "Adresse";
        persAdresse.required = true;
        persAdresse.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(persAdresse);
        persPlz.type = "text";
        persPlz.placeholder = "PLZ";
        persPlz.required = true;
        document.getElementById("persdaten").appendChild(persPlz);
        //Button generieren
        let button = document.createElement("button");
        button.innerText = "Bestellung Prüfen";
        button.addEventListener("click", PrufeDaten);
        button.style.marginTop = "10px";
        document.getElementById("prufenbutton").appendChild(button);
    }
    function ChkKugelnAuslesen(chkElement, anzahl) {
        for (let i = 0; i < Aufgabe10.kugeldaten.length; i++) {
            if (Aufgabe10.kugeldaten[i].element == chkElement.id) {
                Warenkorb(chkElement.id, Aufgabe10.kugeldaten[i].name, Aufgabe10.kugeldaten[i].preis, parseInt(anzahl), chkElement.checked);
            }
        }
    }
    function ChkKerzenAuslesen(chkElement, anzahl) {
        for (let i = 0; i < Aufgabe10.kerzendaten.length; i++) {
            if (Aufgabe10.kerzendaten[i].element == chkElement.id) {
                Warenkorb(chkElement.id, Aufgabe10.kerzendaten[i].name, Aufgabe10.kerzendaten[i].preis, parseInt(anzahl), chkElement.checked);
            }
        }
    }
    function AuswahlAuslesen() {
        var baumname = baumtyp.value; //baumtyp.value == ausgewählter Wert im DropDown
        if (baumname != "") {
            ZuWarenkorb(Aufgabe10.baumdaten, true, baumname); //true --> element ist ausgewählt
        }
        else {
            ZuWarenkorb(Aufgabe10.baumdaten, false, baumname); //false --> Element wurde abgewählt
        }
        var halterungname = halterungtyp.value;
        if (halterungname != "") {
            ZuWarenkorb(Aufgabe10.halterungdaten, true, halterungname);
        }
        else {
            ZuWarenkorb(Aufgabe10.halterungdaten, false, halterungname);
        }
        var lieferant = lieferopttyp.value;
        if (lieferant != "") {
            ZuWarenkorb(Aufgabe10.lieferoptionen, true, lieferant);
        }
    }
    //Wird von DropDown genutzt
    function ZuWarenkorb(daten, ischeckt, elementname) {
        for (let i = 0; i < daten.length; i++) {
            if (daten[i].name == elementname) {
                Warenkorb(daten[i].element, elementname, daten[i].preis, 1, ischeckt); //1 --> da nur ein Element ausgewählt werden kann
            }
        }
    }
    function Warenkorb(elementId, value, preis, anzahl, selected) {
        var preisElement;
        preisElement = anzahl * preis;
        //Wird erst bei zweitem Durchgang ausgef�hrt, zu Beginn keine Elemente in Korb vorhanden
        for (let i = 0; i < korb.getElementsByTagName("p").length; i++) {
            if (korb.getElementsByTagName("p")[i].id == elementId) {
                var innerPreis = korb.getElementsByTagName("p")[i].innerText.split("=")[1]; //Preis extrahieren
                korb.getElementsByTagName("p")[i].remove(); //Wenn vorhanden Element löschen
                gesamtpreis = gesamtpreis - parseInt(innerPreis); //Gesamtpreis bereinigen
            }
            //Gesamtpreis p entfernen um später aktualisiert zurück einzufügen
            if (korb.getElementsByTagName("p")[i].id == "gesamtpreisid") {
                korb.getElementsByTagName("p")[i].remove();
            }
        }
        if (selected) {
            var p = document.createElement("p");
            p.id = elementId;
            p.innerText = value + "  = " + preisElement + "€";
            korb.appendChild(p);
        }
        //Gesamtpreis wieder hinzufügen
        gesamtpreis = gesamtpreis + preisElement;
        var pGesamt = document.createElement("p");
        pGesamt.id = "gesamtpreisid";
        pGesamt.innerText = "Gesamtpreis =  " + gesamtpreis + "€";
        pGesamt.style.position = "absolute";
        pGesamt.style.bottom = "0";
        pGesamt.style.paddingTop = "10px";
        pGesamt.style.borderTop = "2px solid grey";
        korb.appendChild(pGesamt);
    }
    function PrufeDaten() {
        prufen.innerText = "";
        if (persName.checkValidity() == false || persVorname.checkValidity() == false || persMail.checkValidity() == false || persPlz.checkValidity() == false || persAdresse.checkValidity() == false) {
            prufen.innerText = "Deine Eingabe war leider fehlerhaft! Überprüfe sie noch einmal.";
            prufen.style.color = "red";
            document.body.appendChild(prufen);
        }
        else {
            prufen.innerText = "Deine Bestellung wurde erfolgreich verifiziert!";
            prufen.style.color = "green";
            document.body.appendChild(prufen);
        }
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=main.js.map