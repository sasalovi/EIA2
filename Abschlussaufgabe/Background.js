var abschluss2;
(function (abschluss2) {
    class Background {
        drawSky() {
            var skygradient = abschluss2.crc2.createLinearGradient(0, 0, 0, 420);
            skygradient.addColorStop(0, "#0099ff");
            skygradient.addColorStop(0.9, "#99ccff");
            abschluss2.crc2.fillStyle = skygradient;
            abschluss2.crc2.fillRect(0, 0, 1280, 720);
        }
        drawTree() {
            //B�ume links
            for (let i = 0; i < 620; i++) {
                abschluss2.crc2.fillStyle = "brown";
                abschluss2.crc2.fillRect(i - 5, 420, 10, -90);
                abschluss2.crc2.beginPath();
                abschluss2.crc2.fillStyle = "green";
                abschluss2.crc2.arc(i + 10, 360, 15, 0, 2 * Math.PI);
                abschluss2.crc2.arc(i - 10, 360, 15, 0, 2 * Math.PI);
                abschluss2.crc2.arc(i, 340, 15, 0, 2 * Math.PI);
                abschluss2.crc2.fill();
                i = i + Math.random() * 150;
            }
            //B�ume rechts
            for (let i = 660; i < 1280; i++) {
                abschluss2.crc2.fillStyle = "brown";
                abschluss2.crc2.fillRect(i - 5, 420, 10, -90);
                abschluss2.crc2.beginPath();
                abschluss2.crc2.fillStyle = "green";
                abschluss2.crc2.arc(i + 10, 360, 15, 0, 2 * Math.PI);
                abschluss2.crc2.arc(i - 10, 360, 15, 0, 2 * Math.PI);
                abschluss2.crc2.arc(i, 340, 15, 0, 2 * Math.PI);
                abschluss2.crc2.fill();
                i = i + Math.random() * 150;
            }
        }
        drawStreet() {
            //Weg
            abschluss2.crc2.fillStyle = "grey";
            abschluss2.crc2.beginPath();
            abschluss2.crc2.moveTo(340, 720);
            abschluss2.crc2.lineTo(620, 420);
            abschluss2.crc2.lineTo(660, 420);
            abschluss2.crc2.lineTo(940, 720);
            abschluss2.crc2.fill();
            abschluss2.crc2.strokeStyle = "darkgrey";
            abschluss2.crc2.lineWidth = 5;
            abschluss2.crc2.stroke();
        }
        drawGrass() {
            //Gras Links
            abschluss2.crc2.fillStyle = "green";
            abschluss2.crc2.beginPath();
            abschluss2.crc2.moveTo(0, 720);
            abschluss2.crc2.lineTo(0, 420);
            abschluss2.crc2.lineTo(620, 420);
            abschluss2.crc2.lineTo(340, 720);
            abschluss2.crc2.lineWidth = 1;
            abschluss2.crc2.fill();
            //Gras Rechts
            abschluss2.crc2.fillStyle = "green";
            abschluss2.crc2.beginPath();
            abschluss2.crc2.moveTo(940, 720);
            abschluss2.crc2.lineTo(1280, 720);
            abschluss2.crc2.lineTo(1280, 420);
            abschluss2.crc2.lineTo(660, 420);
            abschluss2.crc2.fill();
            //Grashalme links
            for (let i = 0; i < 620; i++) {
                abschluss2.crc2.strokeStyle = "darkgreen";
                abschluss2.crc2.beginPath();
                abschluss2.crc2.moveTo(i, 420);
                abschluss2.crc2.lineTo(i + 1, 420 - Math.random() * 8);
                abschluss2.crc2.stroke();
            }
            //Grashalme rechts
            for (let i = 660; i < 1280; i++) {
                abschluss2.crc2.strokeStyle = "darkgreen";
                abschluss2.crc2.beginPath();
                abschluss2.crc2.moveTo(i, 420);
                abschluss2.crc2.lineTo(i + 1, 420 - Math.random() * 8);
                abschluss2.crc2.stroke();
            }
        }
    }
    abschluss2.Background = Background;
})(abschluss2 || (abschluss2 = {}));
//# sourceMappingURL=Background.js.map