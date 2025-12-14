document.addEventListener("DOMContentLoaded", () => {

  // Smooth scrolling for anchor links (if used)
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: "smooth"
        });
      }
    });
  });

  // Active nav highlighting for main page only
  const sections = document.querySelectorAll("main section[id]");
  if (sections.length > 0) {
    const navLinks = document.querySelectorAll("nav ul li a");
    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 70;
        if (pageYOffset >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
          link.classList.add("active");
        }
      });
    });
  }

  // Simple form validation for contact page
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

  // Hero float animation on main page
  const hero = document.querySelector(".hero");
  if (hero) {
    let offset = 0;
    setInterval(() => {
      offset = (offset + 0.5) % 10;
      hero.style.backgroundPosition = `center ${offset}px`;
    }, 100);
  }

});
