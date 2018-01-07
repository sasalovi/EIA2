var aufgabe9;
(function (aufgabe9) {
    window.addEventListener("load", init);
    window.addEventListener("keydown", handleKeydown);
    let buchstaben;
    let clicked = "";
    let text;
    function init() {
        buchstaben = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        //Buchstabenfelder oben
        for (let i = 0; i < buchstaben.length; i++) {
            let h = document.createElement("div");
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
        //Gro�e Eingabebox   
        let b = document.createElement("div");
        b.style.backgroundColor = "grey";
        b.style.color = "white";
        b.style.width = "1500px";
        b.style.height = "800px";
        b.addEventListener("mousedown", handleMouseDown2);
        document.body.appendChild(b);
    }
    //Anklicken von Buchstaben in der Leiste
    function handleMouseDown(_event) {
        if (clicked == "") {
            let h = _event.target;
            h.style.color = "red";
            h.style.backgroundColor = "green";
            clicked = h.id.toUpperCase();
        }
    }
    //Gro�e Box reinklicken
    function handleMouseDown2(_event) {
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
        let clickedDiv = document.getElementById(clicked.toLowerCase());
        clickedDiv.style.color = "white";
        clickedDiv.style.backgroundColor = "black";
        clicked = "";
    }
    //Tastatureingabe
    function handleKeydown(_event) {
        if (buchstaben.indexOf(_event.key.toUpperCase()) != -1) {
            let h = document.getElementById(_event.key);
            h.style.color = "#A4A4A4";
            h.style.backgroundColor = "white";
            clicked = _event.key.toUpperCase();
        }
    }
    //L�schen durch dr�cken des ALT Key
    function handleMouseDownDelete(_event) {
        if (_event.altKey == false)
            return;
        if (_event.altKey == true) {
            let h = _event.target;
            document.body.removeChild(h);
        }
    }
})(aufgabe9 || (aufgabe9 = {}));
//# sourceMappingURL=main.js.map