namespace aufgabe9 {
    window.addEventListener("load", init);
    window.addEventListener("keydown", handleKeydown);
    let buchstaben: string[];
    let clicked: string = "";
    let text: HTMLElement;


    function init(): void {

        buchstaben = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


        //Buchstabenfelder oben
        for (let i: number = 0; i < buchstaben.length; i++) {
            let h: HTMLDivElement = document.createElement("div");
            h.style.width = "50px";
            h.style.margin = "5px";
            h.style.display = "inline";
            h.style.backgroundColor = "black";
            h.style.color = "white";
            h.style.fontSize = " 30px";
            h.style.textAlign = "center";
            h.innerText = buchstaben[i];
            h.id = buchstaben[i].toLowerCase();
            h.addEventListener("mousedown", handleMouseDown);
            document.body.appendChild(h);
        }

        //Große Eingabebox   
        let b: HTMLDivElement = document.createElement("div");
        b.style.backgroundColor = "grey";
        b.style.color = "white";
        b.style.width = "1500px";
        b.style.height = "800px";
        b.addEventListener("mousedown", handleMouseDown2);
        document.body.appendChild(b);

    }


    //Anklicken von Buchstaben in der Leiste
    function handleMouseDown(_event: MouseEvent): void {
        if (clicked == "") {
            let h: HTMLDivElement = <HTMLDivElement>_event.target;
            h.style.color = "red";
            h.style.backgroundColor = "green";
            clicked = h.id.toUpperCase();
        }
    }


    //Große Box reinklicken
    function handleMouseDown2(_event: MouseEvent): void {
        if (clicked == "")
            return;

        text = document.createElement("div");
        text.innerText = clicked;
        text.style.position = "absolute";
        text.style.fontSize = "30px"; 
        text.style.padding = "0 5px 0 5px";
        text.style.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        text.style.backgroundColor = "black";
        text.style.left = _event.pageX.toString();
        text.style.top = _event.pageY.toString();
        text.addEventListener("mousedown", handleMouseDownDelete);
        document.body.appendChild(text);


        let clickedDiv: HTMLDivElement = <HTMLDivElement>document.getElementById(clicked.toLowerCase());
        clickedDiv.style.color = "white";
        clickedDiv.style.backgroundColor = "black";
        clicked = "";
    }

    
    //Tastatureingabe
    function handleKeydown(_event: KeyboardEvent): void {
        if (buchstaben.indexOf(_event.key.toUpperCase()) != -1) {
            let h: HTMLDivElement = <HTMLDivElement>document.getElementById(_event.key);
            h.style.color = "#A4A4A4";
            h.style.backgroundColor = "white";
            clicked = _event.key.toUpperCase();
        }
    }

    //Löschen durch drücken des ALT Key
    function handleMouseDownDelete(_event: MouseEvent): void {
        if (_event.altKey == false)
            return;

        if (_event.altKey == true) {
            let h: HTMLDivElement = <HTMLDivElement>_event.target;
            document.body.removeChild(h);
        }
    }
}