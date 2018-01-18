//<!-- Name:Markus Sasalovici
//     Matrikel:256027
//     Datum:07.01.17
//     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//     Er wurde nicht kopiert und nicht diktiert.-->
var Aufgabe11;
(function (Aufgabe11) {
    window.addEventListener("load", init);
    //AuswahlBoxen
    let baumtyp = document.createElement("select");
    let halterungtyp = document.createElement("select");
    let lieferopttyp = document.createElement("select");
    var korb = document.createElement("div");
    //Persöhnlich
    let persName = document.createElement("input");
    let persVorname = document.createElement("input");
    let persMail = document.createElement("input");
    let persAdresse = document.createElement("input");
    let persPlz = document.createElement("input");
    //Button
    let prufen = document.createElement("div");
    var gesamtpreis = 0;
    var gesamtpreisVar = document.createElement("input");
    // gesamtpreisVar.name = "Gesamtpreis " + gesamtpreis;
    // korb.appendChild(gesamtpreisVar);
    gesamtpreisVar.style.display = "none";
    function init() {
        //Warenkorb Definieren und AnhÃ¤ngen
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
        //Baum Definieren und AnhÃ¤ngen        
        baumtyp.addEventListener("change", AuswahlAuslesen);
        document.getElementById("baumtyp").appendChild(baumtyp);
        //        baumtyp.name = "Baumtyp";
        for (let i = 0; i < Aufgabe11.baumdaten.length; i++) {
            let option = document.createElement("option");
            option.innerText = Aufgabe11.baumdaten[i].name;
            baumtyp.id = Aufgabe11.baumdaten[i].element; //Typ bzw ID Des Elements zuweisen, siehe Daten.ts
            baumtyp.appendChild(option);
        }
        //Halterungen Selektor          
        halterungtyp.addEventListener("change", AuswahlAuslesen);
        document.getElementById("halterung").appendChild(halterungtyp);
        //        halterungtyp.name = "Halterungtyp";
        for (let i = 0; i < Aufgabe11.halterungdaten.length; i++) {
            let option = document.createElement("option");
            option.innerText = Aufgabe11.halterungdaten[i].name;
            halterungtyp.id = Aufgabe11.halterungdaten[i].element; //Typ bzw ID Des Elements zuweisen, siehe Daten.ts
            halterungtyp.appendChild(option);
        }
        //Kugel Selektor       
        for (let i = 0; i < Aufgabe11.kugeldaten.length; i++) {
            let kugeltyp = document.createElement("input");
            kugeltyp.type = "checkbox";
            kugeltyp.id = Aufgabe11.kugeldaten[i].element;
            kugeltyp.name = "Kugeltyp: " + Aufgabe11.kugeldaten[i].name;
            kugeltyp.addEventListener("change", function () {
                ChkKugelnAuslesen(kugeltyp, "1");
            });
            document.getElementById("kugeln").appendChild(kugeltyp);
            //Labels hinzufÃ¼gen
            let kugellabel = document.createElement("label");
            kugellabel.innerText = Aufgabe11.kugeldaten[i].name;
            document.getElementById("kugeln").appendChild(kugellabel);
            //Anzahl Selektor
            let kugelanz = document.createElement("input");
            kugelanz.type = "number";
            kugelanz.step = "1";
            kugelanz.min = "0";
            kugelanz.value = "1";
            kugelanz.style.marginRight = "1.5em";
            kugelanz.addEventListener("change", function () {
                kugeltyp.checked = true; //Chekbox Anhaken wenn wert geï¿½ndert wird
                ChkKugelnAuslesen(kugeltyp, kugelanz.value);
            });
            document.getElementById("kugeln").appendChild(kugelanz);
        }
        //Kerzen Selektor       
        for (let i = 0; i < Aufgabe11.kerzendaten.length; i++) {
            let kerzetyp = document.createElement("input");
            kerzetyp.type = "checkbox";
            kerzetyp.id = Aufgabe11.kerzendaten[i].element;
            kerzetyp.name = "Kerzentyp: " + Aufgabe11.kerzendaten[i].name;
            kerzetyp.addEventListener("change", function () {
                ChkKerzenAuslesen(kerzetyp, "1");
            });
            document.getElementById("kerzen").appendChild(kerzetyp);
            //Label HinzufÃ¼gen
            let kerzelabel = document.createElement("label");
            kerzelabel.innerText = Aufgabe11.kerzendaten[i].name;
            document.getElementById("kerzen").appendChild(kerzelabel);
            //Anzahl
            let kerzenanz = document.createElement("input");
            kerzenanz.type = "number";
            kerzenanz.step = "1";
            kerzenanz.min = "0";
            kerzenanz.value = "1";
            kerzenanz.style.marginRight = "1.5em";
            kerzenanz.addEventListener("change", function () {
                kerzetyp.checked = true; //Chekbox Anhaken wenn wert geï¿½ndert wird
                ChkKerzenAuslesen(kerzetyp, kerzenanz.value);
            });
            document.getElementById("kerzen").appendChild(kerzenanz);
        }
        //Lieferoption Selektor       
        lieferopttyp.addEventListener("change", AuswahlAuslesen);
        document.getElementById("lieferoption").appendChild(lieferopttyp);
        lieferopttyp.name = "Lieferoption";
        for (let i = 0; i < Aufgabe11.lieferoptionen.length; i++) {
            let option = document.createElement("option");
            option.innerText = Aufgabe11.lieferoptionen[i].name;
            lieferopttyp.id = Aufgabe11.lieferoptionen[i].element;
            lieferopttyp.appendChild(option);
        }
        //PersÃ¶nliche Daten Eingeben
        persName.type = "text";
        persName.name = "Name";
        persName.placeholder = "Name";
        persName.required = true;
        persName.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(persName);
        persVorname.type = "text";
        persVorname.name = "Vorname";
        persVorname.placeholder = "Vorname";
        persVorname.required = true;
        persVorname.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(persVorname);
        persMail.type = "email"; //Um nutzung von @ vorauszusetzen
        persMail.name = "Mail";
        persMail.placeholder = "Email, bitte @ nicht vergessen";
        persMail.required = true;
        persMail.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(persMail);
        persAdresse.type = "text";
        persAdresse.name = "Adresse";
        persAdresse.placeholder = "Adresse";
        persAdresse.required = true;
        persAdresse.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(persAdresse);
        persPlz.type = "text";
        persName.name = "PLZ";
        persPlz.placeholder = "PLZ";
        persPlz.required = true;
        document.getElementById("persdaten").appendChild(persPlz);
        //Button generieren
        let button = document.createElement("button");
        button.type = "submit";
        button.innerText = "Bestellung Prüfen";
        button.addEventListener("click", PrufeDaten);
        button.style.marginTop = "10px";
        document.getElementById("prufenbutton").appendChild(button);
    }
    function ChkKugelnAuslesen(chkElement, anzahl) {
        for (let i = 0; i < Aufgabe11.kugeldaten.length; i++) {
            if (Aufgabe11.kugeldaten[i].element == chkElement.id) {
                Warenkorb(chkElement.id, Aufgabe11.kugeldaten[i].name, Aufgabe11.kugeldaten[i].preis, parseInt(anzahl), chkElement.checked);
            }
        }
    }
    function ChkKerzenAuslesen(chkElement, anzahl) {
        for (let i = 0; i < Aufgabe11.kerzendaten.length; i++) {
            if (Aufgabe11.kerzendaten[i].element == chkElement.id) {
                Warenkorb(chkElement.id, Aufgabe11.kerzendaten[i].name, Aufgabe11.kerzendaten[i].preis, parseInt(anzahl), chkElement.checked);
            }
        }
    }
    function AuswahlAuslesen() {
        var baumname = baumtyp.value; //baumtyp.value == ausgewÃ¤hlter Wert im DropDown
        if (baumname != "") {
            baumtyp.name = "Baumtyp";
            ZuWarenkorb(Aufgabe11.baumdaten, true, baumname); //true --> element ist ausgewÃ¤hlt
        }
        else {
            ZuWarenkorb(Aufgabe11.baumdaten, false, baumname); //false --> Element wurde abgewÃ¤hlt
        }
        var halterungname = halterungtyp.value;
        if (halterungname != "") {
            halterungtyp.name = "Halterungtyp";
            ZuWarenkorb(Aufgabe11.halterungdaten, true, halterungname);
        }
        else {
            ZuWarenkorb(Aufgabe11.halterungdaten, false, halterungname);
        }
        var lieferant = lieferopttyp.value;
        if (lieferant != "") {
            ZuWarenkorb(Aufgabe11.lieferoptionen, true, lieferant);
        }
    }
    //Wird von DropDown genutzt
    function ZuWarenkorb(daten, ischeckt, elementname) {
        for (let i = 0; i < daten.length; i++) {
            if (daten[i].name == elementname) {
                Warenkorb(daten[i].element, elementname, daten[i].preis, 1, ischeckt); //1 --> da nur ein Element ausgewÃ¤hlt werden kann
            }
        }
    }
    function Warenkorb(elementId, value, preis, anzahl, selected) {
        var preisElement;
        preisElement = anzahl * preis;
        //Wird erst bei zweitem Durchgang ausgefï¿½hrt, zu Beginn keine Elemente in Korb vorhanden
        for (let i = 0; i < korb.getElementsByTagName("p").length; i++) {
            if (korb.getElementsByTagName("p")[i].id == elementId) {
                var innerPreis = korb.getElementsByTagName("p")[i].innerText.split("=")[1]; //Preis extrahieren
                korb.getElementsByTagName("p")[i].remove(); //Wenn vorhanden Element lÃ¶schen
                gesamtpreis = gesamtpreis - parseInt(innerPreis); //Gesamtpreis bereinigen
            }
            //Gesamtpreis p entfernen um spÃ¤ter aktualisiert zurÃ¼ck einzufÃ¼gen
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
        //Gesamtpreis wieder hinzufÃ¼gen
        gesamtpreis = gesamtpreis + preisElement;
        var pGesamt = document.createElement("p");
        pGesamt.id = "gesamtpreisid";
        pGesamt.innerText = "Gesamtpreis =  " + gesamtpreis + "€";
        pGesamt.style.position = "absolute";
        pGesamt.style.bottom = "0";
        pGesamt.style.paddingTop = "10px";
        pGesamt.style.borderTop = "2px solid grey";
        korb.appendChild(pGesamt);
        gesamtpreisVar.name = "Gesamtpreis " + gesamtpreis;
        korb.appendChild(gesamtpreisVar);
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
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=main.js.map