//Active Nav-link
const links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
  link.addEventListener("click", function () {
    links.forEach((l) => l.classList.remove("active")); // remove active from all
    this.classList.add("active"); // add active to clicked link
  });
});


//Top to Bottom button
const toTopBtn = document.getElementById("toTopBtn");

    // Show button when scrolling down
    window.onscroll = function() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        toTopBtn.style.display = "block";
      } else {
        toTopBtn.style.display = "none";
      }
    };

    // Scroll to top when clicked
    toTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });


