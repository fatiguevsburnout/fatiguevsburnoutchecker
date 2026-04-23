function checkResult() {
    let total = 0;

    for (let i = 1; i <= 8; i++) {
        total += parseInt(document.getElementById("q" + i).value);
    }

    let level = "";
    let message = "";
    let color = "";

    if (total <= 2) {
        level = "LOW RISK";
        message = "You are functioning well. Maintain healthy habits.";
        color = "green";
    } 
    else if (total <= 5) {
        level = "MODERATE FATIGUE";
        message = "You may need rest and lifestyle adjustment.";
        color = "orange";
    } 
    else if (total <= 7) {
        level = "HIGH FATIGUE / STRESS";
        message = "Stress management is recommended.";
        color = "red";
    } 
    else {
        level = "POSSIBLE BURNOUT";
        message = "Seek professional or clinical consultation.";
        color = "darkred";
    }

    localStorage.setItem("level", level);
    localStorage.setItem("message", message);
    localStorage.setItem("color", color);

    window.location.href = "results.html";
}