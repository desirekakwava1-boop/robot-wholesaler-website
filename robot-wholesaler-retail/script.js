const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const form = document.querySelector("#contact-form");
const statusMessage = document.querySelector("#form-status");

if (form && statusMessage) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(`Product enquiry: ${data.get("product")}`);
    const body = encodeURIComponent(
      [
        `Name: ${data.get("name")}`,
        `Phone: ${data.get("phone") || "Not provided"}`,
        `Email: ${data.get("email")}`,
        `Product enquiry: ${data.get("product")}`,
        "",
        `Message: ${data.get("message")}`
      ].join("\n")
    );

    statusMessage.textContent = "Opening your email app with the enquiry details.";
    window.location.href = `mailto:Kiyyatiyya25@gmail.com?subject=${subject}&body=${body}`;
  });
}
