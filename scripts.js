document.addEventListener("DOMContentLoaded", () => {

  // Smooth scrolling for nav links and footer CTA
  const navLinks = document.querySelectorAll('nav ul li a, footer .cta-button');

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const href = link.getAttribute("href");
      if (href.startsWith("#")) {
        const targetSection = document.querySelector(href);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: "smooth"
          });
        }
      } else {
        window.location.href = href;
      }
    });
  });

  // Highlight active nav item
  const sections = document.querySelectorAll("main section[id]");
  if (sections.length > 0) {
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

  // Form validation
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

  // Hero float animation
  const hero = document.querySelector(".hero");
  if (hero) {
    let offset = 0;
    setInterval(() => {
      offset = (offset + 0.5) % 10;
      hero.style.backgroundPosition = `center ${offset}px`;
    }, 100);
  }

});
