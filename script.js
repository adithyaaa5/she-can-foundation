document
  .getElementById("volunteerForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const volunteerData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };

    const response = await fetch("/volunteer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(volunteerData)
    });

    const result = await response.text();

    alert(result);

    document.getElementById("volunteerForm").reset();
  });