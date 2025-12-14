document.addEventListener("DOMContentLoaded", () => {

  // Hero animation only if .hero exists (index.html)
  const hero = document.querySelector(".hero");
  if (hero) {
    let offset = 0;
    setInterval(() => {
      offset = (offset + 0.5) % 10;
      hero.style.backgroundPosition = `center ${offset}px`;
    }, 100);
  }

  // Form validation only if form exists (contact.html)
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", e => {
      const name = form.querySelector("#name");
      const email = form.querySelector("#email");
      const message = form.querySelector("#message");
      if (!name.value || !email.value || !message.value) {
        e.preventDefault();
        alert("Please fill out all fields before submitting.");
      }
    });
  }

});
