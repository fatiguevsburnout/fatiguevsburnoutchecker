function checkResult() {
    let q1 = document.getElementById("q1").value;
    let q2 = document.getElementById("q2").value;
    let q3 = document.getElementById("q3").value;

    let result = "";

    if (q1 === "low" && q3 === "short") {
        result = "Physical fatigue detected. Recommendation: Rest.";
    } 
    else if (q2 === "stress" && q3 === "long") {
        result = "Possible burnout. Recommendation: Stress management.";
    } 
    else {
        result = "Consider consulting a clinic.";
    }

    document.getElementById("result").innerText = result;
}