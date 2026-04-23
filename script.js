function checkResult() {
    let answers = [];
    let total = 0;

    for (let i = 1; i <= 8; i++) {
        let val = document.getElementById("q" + i).value;
        val = val ? parseInt(val) : 0;

        answers.push(val);
        total += val;
    }

    let level = "";
    let message = "";
    let color = "";

    if (total <= 2) {
        level = "LOW RISK";
        message = "You are functioning well.";
        color = "green";
    } 
    else if (total <= 5) {
        level = "MODERATE FATIGUE";
        message = "You may need rest.";
        color = "orange";
    } 
    else if (total <= 7) {
        level = "HIGH FATIGUE / STRESS";
        message = "Manage stress.";
        color = "red";
    } 
    else {
        level = "POSSIBLE BURNOUT";
        message = "Seek consultation.";
        color = "darkred";
    }

    // ✅ SEND TO SHEETDB (SAFE)
fetch("https://sheetdb.io/api/v1/lpw80svq8kkxr", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        data: [
            {
                q1: answers[0],
                q2: answers[1],
                q3: answers[2],
                q4: answers[3],
                q5: answers[4],
                q6: answers[5],
                q7: answers[6],
                q8: answers[7],
                result: level
            }
        ]
    })
})
.then(res => console.log("Sent to sheet"))
.catch(err => console.log("Error:", err));

    // ✅ SAVE FOR RESULTS PAGE
    localStorage.setItem("level", level);
    localStorage.setItem("message", message);
    localStorage.setItem("color", color);

    // ✅ REDIRECT ALWAYS WORKS
    window.location.href = "results.html";
}