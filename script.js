document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    alert(`Email Sent!\nFrom: ${email}\nMessage: ${message}`);
    event.target.reset();
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const showMoreBtn = document.getElementById("showMoreBtn");
    const hiddenCards = document.querySelector(".hidden-cards");
  
    showMoreBtn.addEventListener("click", () => {
      // Toggle visibility of hidden cards
      if (hiddenCards.style.display === "none") {
        hiddenCards.style.display = "flex";
        showMoreBtn.textContent = "Show Less";
      } else {
        hiddenCards.style.display = "none";
        showMoreBtn.textContent = "Show More";
      }
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const lines = document.querySelectorAll(".intro-line");
    lines.forEach((line, index) => {
      setTimeout(() => {
        line.style.opacity = "1.5";
      }, index * 1000); // Delay each line by 1 second
    });
  });

  
  

  document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");
  
    // Apply increasing delay to each element
    fadeElements.forEach((el, index) => {
      el.style.transitionDelay = `${index * 0.2}s`; // 0.2s delay for each element
    });
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );
  
    fadeElements.forEach((el) => observer.observe(el));
  });

  


  document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");
  
    // Apply increasing delay to each element
    fadeElements.forEach((el, index) => {
      el.style.transitionDelay = `${index * 0.15}s`; // Staggered animation delay
    });
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );
  
    fadeElements.forEach((el) => observer.observe(el));
  });
  



  document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");
  
    // Apply increasing delay to each element
    fadeElements.forEach((el, index) => {
      el.style.transitionDelay = `${index * 0.15}s`; // Staggered delay (0.5s per element)
    });
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );
  
    fadeElements.forEach((el) => observer.observe(el));
  });
  

  