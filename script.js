
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const themeButton = document.getElementById("theme-toggle");
  const year = document.getElementById("year");

  // Automatically update the footer year.
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Dark mode is enabled when the website first opens.
  document.body.classList.add("dark");

  // Set the initial theme icon.
  function updateThemeButton() {
    const isDark = document.body.classList.contains("dark");
    const icon = themeButton?.querySelector("i");

    if (icon) {
      icon.className = isDark
        ? "fa-solid fa-sun"
        : "fa-solid fa-moon";
    }

    if (themeButton) {
      themeButton.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
      );
    }
  }

  updateThemeButton();

  // Switch between dark mode and light mode.
  if (themeButton) {
    themeButton.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      updateThemeButton();
    });
  }

  // Open and close the mobile navigation.
  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");

      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
      );
    });

    // Close the menu after selecting a navigation link.
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open menu");
      });
    });
  }
});
