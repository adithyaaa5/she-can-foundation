document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

document.querySelector(".volunteer-btn").addEventListener("click", () => {
  alert("Thank you for your interest in volunteering with She Can Foundation!");
});