//<!-- Name:Markus Sasalovici
//     Matrikel:256027
//     Datum:07.01.17
//     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//     Er wurde nicht kopiert und nicht diktiert.-->

namespace Aufgabe11 {
    window.addEventListener("load", init);
    
    //AuswahlBoxen
    let baumtyp: HTMLSelectElement = document.createElement("select");
    let halterungtyp: HTMLSelectElement = document.createElement("select");
    let lieferopttyp: HTMLSelectElement = document.createElement("select");
    var korb: HTMLDivElement = document.createElement("div");

    //Pers�hnlich
    let persName: HTMLInputElement = document.createElement("input");
    let persVorname: HTMLInputElement = document.createElement("input");
    let persMail: HTMLInputElement = document.createElement("input");
    let persAdresse: HTMLInputElement = document.createElement("input");
    let persPlz: HTMLInputElement = document.createElement("input");

    //Button
    let prufen: HTMLDivElement = document.createElement("div");

    var gesamtpreis: number = 0;


    function init(): void {
        
        //Warenkorb Definieren und Anhängen
        let h2: HTMLHeadingElement = document.createElement("h2");
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
        baumtyp.name = "baumtyp";

        for (let i: number = 0; i < baumdaten.length; i++) {
            let option: HTMLOptionElement = document.createElement("option");
            option.innerText = baumdaten[i].name;
            baumtyp.id = baumdaten[i].element; //Typ bzw ID Des Elements zuweisen, siehe Daten.ts
            baumtyp.appendChild(option);
        }



        //Halterungen Selektor          
        halterungtyp.addEventListener("change", AuswahlAuslesen);
        document.getElementById("halterung").appendChild(halterungtyp);
        halterungtyp.name = "halterungtyp";
        

        for (let i: number = 0; i < halterungdaten.length; i++) {
            let option: HTMLOptionElement = document.createElement("option");
            option.innerText = halterungdaten[i].name;
            halterungtyp.id = halterungdaten[i].element; //Typ bzw ID Des Elements zuweisen, siehe Daten.ts
            halterungtyp.appendChild(option);
        }

       
        //Kugel Selektor       
        for (let i: number = 0; i < kugeldaten.length; i++) {
            let kugeltyp: HTMLInputElement = document.createElement("input");
            kugeltyp.type = "checkbox";
            kugeltyp.id = kugeldaten[i].element;
            kugeltyp.name = "kugeltyp";
            kugeltyp.addEventListener("change", function(): void { //Anonyme Funktion erforderlich um Parameter zu �bergeben
                ChkKugelnAuslesen(kugeltyp, "1");
            });
                           
            document.getElementById("kugeln").appendChild(kugeltyp);

            //Labels hinzufügen
            let kugellabel: HTMLLabelElement = document.createElement("label");
            kugellabel.innerText = kugeldaten[i].name;
            document.getElementById("kugeln").appendChild(kugellabel);

            //Anzahl Selektor
            let kugelanz: HTMLInputElement = document.createElement("input");
            kugelanz.type = "number";
            kugelanz.step = "1";
            kugelanz.min = "0";
            kugelanz.value = "1";
            kugelanz.style.marginRight = "1.5em";
            kugelanz.addEventListener("change", function(): void { //Anonyme Funktion erforderlich um Parameter zu �bergeben
                kugeltyp.checked = true; //Chekbox Anhaken wenn wert ge�ndert wird
                ChkKugelnAuslesen(kugeltyp, kugelanz.value);
            });
            document.getElementById("kugeln").appendChild(kugelanz);
        }



        //Kerzen Selektor       
        for (let i: number = 0; i < kerzendaten.length; i++) {
            let kerzetyp: HTMLInputElement = document.createElement("input");
            kerzetyp.type = "checkbox";
            kerzetyp.id = kerzendaten[i].element;
                    kerzetyp.name = "kerzetyp";
            kerzetyp.addEventListener("change", function(): void { //Anonyme Funktion erforderlich um Parameter zu �bergeben
                ChkKerzenAuslesen(kerzetyp, "1");
            });
                   
            document.getElementById("kerzen").appendChild(kerzetyp);

            //Label Hinzufügen
            let kerzelabel: HTMLLabelElement = document.createElement("label");
            kerzelabel.innerText = kerzendaten[i].name;
            document.getElementById("kerzen").appendChild(kerzelabel);

            //Anzahl
            let kerzenanz: HTMLInputElement = document.createElement("input");
            kerzenanz.type = "number";
            kerzenanz.step = "1";
            kerzenanz.min = "0";
            kerzenanz.value = "1";
            kerzenanz.style.marginRight = "1.5em";
            kerzenanz.addEventListener("change", function(): void { //Anonyme Funktion erforderlich um Parameter zu �bergeben
                kerzetyp.checked = true; //Chekbox Anhaken wenn wert ge�ndert wird
                ChkKerzenAuslesen(kerzetyp, kerzenanz.value);
            });
            document.getElementById("kerzen").appendChild(kerzenanz);
        }



        //Lieferoption Selektor       
        lieferopttyp.addEventListener("change", AuswahlAuslesen);
        document.getElementById("lieferoption").appendChild(lieferopttyp);
        lieferopttyp.name = "lieferoption";

        for (let i: number = 0; i < lieferoptionen.length; i++) {
            let option: HTMLOptionElement = document.createElement("option");
            option.innerText = lieferoptionen[i].name;
            lieferopttyp.id = lieferoptionen[i].element;
            lieferopttyp.appendChild(option);
        }


//Persönliche Daten Eingeben
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
        let button: HTMLButtonElement = document.createElement("button");
        button.type = "submit";
        button.innerText = "Bestellung Prüfen";
        button.addEventListener("click", PrufeDaten);
        button.style.marginTop = "10px";
        document.getElementById("prufenbutton").appendChild(button);
    }


    function ChkKugelnAuslesen(chkElement: HTMLInputElement, anzahl: string): void {
        for (let i: number = 0; i < kugeldaten.length; i++) {
            if (kugeldaten[i].element == chkElement.id) {

                Warenkorb(chkElement.id, kugeldaten[i].name, kugeldaten[i].preis, parseInt(anzahl), chkElement.checked);

            }
        }
    }

    function ChkKerzenAuslesen(chkElement: HTMLInputElement, anzahl: string): void {
        for (let i: number = 0; i < kerzendaten.length; i++) {
            if (kerzendaten[i].element == chkElement.id) {
                Warenkorb(chkElement.id, kerzendaten[i].name, kerzendaten[i].preis, parseInt(anzahl), chkElement.checked);
            }
        }
    }


    function AuswahlAuslesen(): void {
        var baumname: string = baumtyp.value; //baumtyp.value == ausgewählter Wert im DropDown
        if (baumname != "") {
            ZuWarenkorb(baumdaten, true, baumname); //true --> element ist ausgewählt
        }
        else {
            ZuWarenkorb(baumdaten, false, baumname); //false --> Element wurde abgewählt
        }


        var halterungname: string = halterungtyp.value;
        if (halterungname != "") {
            ZuWarenkorb(halterungdaten, true, halterungname);
        } else {
            ZuWarenkorb(halterungdaten, false, halterungname);
        }



        var lieferant: string = lieferopttyp.value;
        if (lieferant != "") {
            ZuWarenkorb(lieferoptionen, true, lieferant);
        }
    }

    //Wird von DropDown genutzt
    function ZuWarenkorb(daten: Daten[], ischeckt: boolean, elementname: string): void { 

        for (let i: number = 0; i < daten.length; i++) {
            if (daten[i].name == elementname) {
                Warenkorb(daten[i].element, elementname, daten[i].preis, 1, ischeckt); //1 --> da nur ein Element ausgewählt werden kann
            }
        }
    }


    function Warenkorb(elementId: string, value: string, preis: number, anzahl: number, selected: boolean): void {

        var preisElement: number;
        preisElement = anzahl * preis;

        //Wird erst bei zweitem Durchgang ausgef�hrt, zu Beginn keine Elemente in Korb vorhanden
        for (let i: number = 0; i < korb.getElementsByTagName("p").length; i++) { //Warenkorb auf vorhandene p pr�fen
            if (korb.getElementsByTagName("p")[i].id == elementId) { //Vergleicht Elemente im Warenkorb mit ausgewähltem Element
                var innerPreis: string = korb.getElementsByTagName("p")[i].innerText.split("=")[1]; //Preis extrahieren
                korb.getElementsByTagName("p")[i].remove(); //Wenn vorhanden Element löschen

                gesamtpreis = gesamtpreis - parseInt(innerPreis); //Gesamtpreis bereinigen
            }
            
            //Gesamtpreis p entfernen um später aktualisiert zurück einzufügen
            if (korb.getElementsByTagName("p")[i].id == "gesamtpreisid") {
                korb.getElementsByTagName("p")[i].remove();
            }
        }

        if (selected) {
            var p: HTMLParagraphElement = document.createElement("p");
            p.id = elementId;
            p.innerText = value + "  = " + preisElement + "€";
            korb.appendChild(p);
        }

        //Gesamtpreis wieder hinzufügen
        gesamtpreis = gesamtpreis + preisElement;
        var pGesamt: HTMLParagraphElement = document.createElement("p");
        pGesamt.id = "gesamtpreisid";
        pGesamt.innerText = "Gesamtpreis =  " + gesamtpreis + "€";
        pGesamt.style.position = "absolute";
        pGesamt.style.bottom = "0";
        pGesamt.style.paddingTop = "10px";
        pGesamt.style.borderTop = "2px solid grey";
        korb.appendChild(pGesamt);
    }


    function PrufeDaten(): void {   
        

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





}