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

    // SAVE RESULTS FOR RESULTS PAGE
    localStorage.setItem("level", level);
    localStorage.setItem("message", message);
    localStorage.setItem("color", color);

    // GOOGLE FORM URL
    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSeh4bxFJ02FL1Cr8aQRTZ30fmGXHT7JAzoQxVPRga14RT5v3g/formResponse";

    // CREATE FORM DATA
    const formData = new FormData();

    // SEND ANSWERS
    formData.append("entry.1609505913", answers[0]);
    formData.append("entry.1585437042", answers[1]);
    formData.append("entry.130621211", answers[2]);
    formData.append("entry.286152385", answers[3]);
    formData.append("entry.1823814258", answers[4]);
    formData.append("entry.1706614793", answers[5]);
    formData.append("entry.1879999563", answers[6]);
    formData.append("entry.2127118600", answers[7]);

    // SEND RESULT
    formData.append("entry.185364177", level);

    // SUBMIT TO GOOGLE FORM
    fetch(formURL, {

        method: "POST",
        mode: "no-cors",
        body: formData

    })
    .catch(error => console.error(error))
    .finally(() => {

        // GO TO RESULTS PAGE
        window.location.href = "results.html";

    });

}