document.addEventListener("DOMContentLoaded", function () {

  // Button
  const openFormBtn = document.getElementById("openFormBtn");

  // Form
  const volunteerForm = document.getElementById("volunteerForm");

  // Popup
  const popup = document.getElementById("successPopup");
  const closePopupBtn = document.getElementById("closePopup");


  // Open volunteer form
  openFormBtn.addEventListener("click", function () {
    volunteerForm.style.display = "flex";

    volunteerForm.scrollIntoView({
      behavior: "smooth"
    });
  });


  // Close popup
  closePopupBtn.addEventListener("click", function () {

    popup.style.display = "none";

    volunteerForm.style.display = "none";

    openFormBtn.style.display = "inline-block";

  });

  // Submit form
  volunteerForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    try {
      const response = await fetch("/volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          message
        })
      });

      if (response.ok) {

        popup.style.display = "flex";

        volunteerForm.reset();
        volunteerForm.style.display = "none";
        openFormBtn.style.display = "none";

      } else {
        alert("Submission failed. Please try again.");
      }

    } catch (error) {
      console.error(error);
      alert("Server error");
    }

  });

});