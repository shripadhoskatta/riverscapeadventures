const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
const navbar_links = document.querySelectorAll('.navbar-link');

nav_header.classList.remove('active');

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", toggleNavbar);

// Add event listeners for each navbar link
navbar_links.forEach(link => {
  link.addEventListener("click", () => {
    // Close the mobile menu when a link is clicked
    nav_header.classList.remove("active");
  });
});
