// 🌟 Typing Effect in Hero Section
const heroText = document.querySelector(".hero h2");
const phrases = ["design", "develop", "innovate"];
let phraseIndex = 0;
let charIndex = 0;
let typing = true;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  if (typing) {
    heroText.innerHTML = `I <span>${currentPhrase.slice(0, charIndex)}</span>`;
    charIndex++;
    if (charIndex > currentPhrase.length) {
      typing = false;
      setTimeout(typeEffect, 1000);
    } else {
      setTimeout(typeEffect, 100);
    }
  } else {
    charIndex--;
    heroText.innerHTML = `I <span>${currentPhrase.slice(0, charIndex)}</span>`;
    if (charIndex === 0) {
      typing = true;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
    setTimeout(typeEffect, 50);
  }
}
typeEffect();

// 🔦 Active Section Highlighting
const navLinks = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("main section");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
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

// 🌗 Theme Toggle Button
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "🌙";
toggleBtn.style.position = "fixed";
toggleBtn.style.bottom = "20px";
toggleBtn.style.right = "20px";
toggleBtn.style.padding = "10px";
toggleBtn.style.borderRadius = "50%";
toggleBtn.style.border = "none";
toggleBtn.style.cursor = "pointer";
toggleBtn.style.fontSize = "1.5rem";
toggleBtn.style.zIndex = "1000";
document.body.appendChild(toggleBtn);

let darkMode = true;
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  darkMode = !darkMode;
  toggleBtn.textContent = darkMode ? "🌙" : "☀️";
});

// 🧪 Scroll Reveal Animation
const revealElements = document.querySelectorAll(".card, .project, .service-card");

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", () => {
  revealElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 0.6s ease-out";
  });
  revealOnScroll();
});

// 📬 Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const status = document.getElementById("formStatus");
  status.textContent = "Sending...";
  setTimeout(() => {
    status.textContent = "Message sent successfully!";
    this.reset();
  }, 1500);
});

// 🔢 Counter Animation
const counters = document.querySelectorAll(".counter");
const speed = 200;

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 50);
    } else {
      counter.innerText = target;
    }
  };

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      updateCount();
      observer.disconnect();
    }
  });

  observer.observe(counter);
});
