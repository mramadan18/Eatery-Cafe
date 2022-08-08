const navbar = document.querySelector(".navbar");

const handleScrolling = () => {
  if (scrollY > 0) {
    navbar.classList.add("bg-light");
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("bg-light");
    navbar.classList.remove("active");
  }
};

handleScrolling();

window.onscroll = () => {
  handleScrolling();
};

new WOW().init();
