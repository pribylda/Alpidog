window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("shrunk");
    } else {
      navbar.classList.remove("shrunk");
    }
  });
  