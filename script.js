function doPost(e) {

  // GET CURRENT ACTIVE SHEET
  var sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getActiveSheet();

  // READ JSON DATA FROM WEBSITE
  var data = JSON.parse(e.postData.contents);

  // ADD NEW ROW TO SHEET
  sheet.appendRow([

    new Date(),

    data.q1,
    data.q2,
    data.q3,
    data.q4,
    data.q5,
    data.q6,
    data.q7,
    data.q8,

    data.result

  ]);

  // RETURN SUCCESS RESPONSE
  return ContentService
    .createTextOutput(
      JSON.stringify({
        status: "success"
      })
    )
    .setMimeType(ContentService.MimeType.JSON);
}

fetch("https://script.google.com/macros/s/AKfycbxHfhFXBFWqC8x0Uv2A6xMChCwS-ZBoe9Tx9kN6a23Zjpkjsg8avd1OeI1HiFTdzGvh/exec", {

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

    setTimeout(() => {

        window.location.href = "results.html";

    }, 1000);

})
.catch(error => {

    console.error(error);

    alert("Failed to save response.");

});