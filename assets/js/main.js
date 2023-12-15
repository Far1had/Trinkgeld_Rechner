function checkData() {
    // Holen der Werte von Eingabe und Radio
    const input = parseFloat(document.getElementById('input').value);
    const input2 = parseFloat(document.getElementById('input2').value);
    const gutServ = document.getElementById('okay').checked;
    const badServ = document.getElementById('nichtOkay').checked;


    // Überprüfen, ob ein serviceFeld ausgewählt wurden
    let selectedOption = document.getElementById("service").value;

    if (selectedOption === "wieServ") {
        alert("Bitte wählen Sie Servicequalität aus!");
        return;
    }

    // Berechnung des Mehrwertsteuerbetrags und Bruttobetrags
    let mehrwertsteuersatz = neunZehn ? 0.19 : 0.07;

    if (aufschlag) {
        const aufschlagBetrag = input * mehrwertsteuersatz;
        const bruttoBetrag = input + aufschlagBetrag;

        // Aktion ausführen
        document.getElementById('result-mw').textContent = aufschlagBetrag.toFixed(2);
        document.getElementById('resultEnd').textContent = bruttoBetrag.toFixed(2);
    } else if (abzug) {
        const abzugBetrag = input / (1 + mehrwertsteuersatz);
        const mehrwertsteuerBetrag = input - abzugBetrag;

        // Aktion ausführen
        document.getElementById('result-mw').textContent = mehrwertsteuerBetrag.toFixed(2);
        document.getElementById('resultEnd').textContent = abzugBetrag.toFixed(2);
    } else {
        alert("!XXX!");
    }
}
