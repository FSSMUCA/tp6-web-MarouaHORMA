const form = document.getElementById("calcForm");
const errorDiv = document.getElementById("errorMessages");
const historyDiv = document.getElementById("historyList");
let history = [];

form.addEventListener("submit", function(e) {
    e.preventDefault();
    errorDiv.innerHTML = "";

    const a = parseFloat(document.getElementById("nombreA").value);
    const b = parseFloat(document.getElementById("nombreB").value);
    const op = document.getElementById("operation").value;

    // Validation
    if (isNaN(a) || isNaN(b)) {
        errorDiv.textContent = "Veuillez remplir tous les champs avec des nombres valides.";
        return;
    }
    if (op === "/" && b === 0) {
        errorDiv.textContent = "Division par zéro impossible.";
        return;
    }

    // Calcul
    let result;
    switch(op) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/": result = a / b; break;
    }

    // Ajouter à l'historique
    const operationStr = `${a} ${op} ${b} = ${result}`;
    history.push(operationStr);
    updateHistory();
});

function updateHistory() {
    historyDiv.innerHTML = "";
    history.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("history-card");
        card.textContent = item;
        historyDiv.appendChild(card);
    });
}
