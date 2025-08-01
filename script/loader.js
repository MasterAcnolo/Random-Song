 window.addEventListener("load", () => {
        const loader = document.querySelector(".loader");
        loader.classList.add("fade-out");

        setTimeout(() => {
          loader.remove();
        }, 800); 
      });