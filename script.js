function checkResult() {

    let answers = [];
    let total = 0;

    // GET ANSWERS
    for (let i = 1; i <= 8; i++) {

        let val = document.getElementById("q" + i).value;

        val = val ? parseInt(val) : 0;

        answers.push(val);

        total += val;
    }

    // RESULT VARIABLES
    let level = "";
    let message = "";
    let color = "";

    // TRIAGE ALGORITHM
    if (total <= 2) {

        level = "LOW RISK";
        message = "You are functioning well. Continue maintaining healthy sleep, stress management, and self-care habits.";
        color = "green";

    } 
    else if (total <= 5) {

        level = "MODERATE FATIGUE";
        message = "You may be experiencing physical fatigue. Proper rest, hydration, nutrition, and stress management are recommended.";
        color = "orange";

    } 
    else if (total <= 7) {

        level = "HIGH FATIGUE / STRESS";
        message = "Your responses suggest elevated stress or fatigue levels. Consider stress management strategies and reducing workload when possible.";
        color = "red";

    } 
    else {

        level = "POSSIBLE BURNOUT";
        message = "Your responses may indicate burnout or prolonged exhaustion. Seeking guidance from a healthcare professional or clinic consultation is recommended.";
        color = "darkred";
    }

    // SAVE RESULT FOR RESULTS PAGE
    localStorage.setItem("level", level);
    localStorage.setItem("message", message);
    localStorage.setItem("color", color);

    // SEND TO GOOGLE SHEETS
    fetch("https://script.google.com/macros/s/AKfycbyAz6llWYxu9jrd7RF8rISd7s4_7EJgwHOfSdkWN0lPWm4NDy1gAXqIwdJGgl5ghfZyAw/exec", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            q1: answers[0],
            q2: answers[1],
            q3: answers[2],
            q4: answers[3],
            q5: answers[4],
            q6: answers[5],
            q7: answers[6],
            q8: answers[7],
            result: level

        })

    })

    .then(response => response.text())
    .then(data => {

        console.log("Saved to Sheets");

    })

    .catch(error => {

        console.error(error);

    })

    .finally(() => {

        // ALWAYS GO TO RESULTS PAGE
        window.location.href = "results.html";

    });

}