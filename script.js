function checkResult() {
    let total = 0;

    for (let i = 1; i <= 8; i++) {
        total += parseInt(document.getElementById("q" + i).value);
    }

    let result = "";

    if (total <= 2) {
        result = "Low fatigue. Maintain healthy habits.";
    } 
    else if (total <= 5) {
        result = "Moderate fatigue. Recommendation: Rest and lifestyle adjustment.";
    } 
    else if (total <= 7) {
        result = "High stress or fatigue. Recommendation: Stress management.";
    } 
    else {
        result = "Possible burnout. Recommendation: Seek clinical consultation.";
    }

    document.getElementById("result").innerText = result;
}