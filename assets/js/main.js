function checkData() {
    // Holen der Werte von Eingabe
    const input = parseFloat(document.getElementById('input').value);
    const input2 = parseFloat(document.getElementById('input2').value);


    // Überprüfen, ob ein serviceFeld ausgewählt wurde
    let selectedOption = document.getElementById("service").value;

    if (selectedOption === "wieServ") {
        alert("Bitte wählen Sie Servicequalität aus!");
        return;
    }

    // Weitere Überprüfungen können hier eingefügt werden, falls erforderlich

    // Berechnungen durchführen
    let trinkgeld = 0;
    let gesamtsumme = 0;
    let preisProPerson = 0;

    // Beispielhafte Berechnung basierend auf Servicequalität mit switch
    switch (selectedOption) {
        case "superServ":
            trinkgeld = 0.2 * input; // 20% Trinkgeld für Super Service
            break;
        case "gutServ":
            trinkgeld = 0.1 * input; // 10% Trinkgeld für OKAY
            break;
        case "badServ":
            trinkgeld = 0.02 * input; // 2% Trinkgeld für schlechten Service     
            break;
        // Weitere Fälle für zusätzliche Optionen können hier hinzugefügt werden
    }

    gesamtsumme = input + trinkgeld;
    preisProPerson = gesamtsumme / input2;

    // Ergebnisse anzeigen
    document.getElementById("resultTg").textContent = trinkgeld.toFixed(2);
    document.getElementById("resultTot").textContent = gesamtsumme.toFixed(2);
    document.getElementById("resultPp").textContent = preisProPerson.toFixed(2);
}

