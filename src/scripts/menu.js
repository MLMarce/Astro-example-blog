let hamburgerElement = document.querySelector(".hamburger");
      hamburgerElement.addEventListener("click", (e) => {
        document.querySelector(".nav").classList.toggle("expanded");
        hamburgerElement.classList.toggle('closer');
      });

