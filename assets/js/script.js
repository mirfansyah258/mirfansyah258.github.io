const chk = document.getElementById('chk');

// Check the current theme preference in local storage
const isDarkMode = localStorage.getItem("darkMode") === "true";

// Set the initial theme based on the user's preference
if (isDarkMode) {
  document.body.setAttribute("data-bs-theme", "dark");
  chk.checked = true;
} else {
  document.body.removeAttribute("data-bs-theme");
}

chk.addEventListener('change', () => {
  if (document.body.hasAttribute("data-bs-theme")) {
    document.body.removeAttribute("data-bs-theme");
    localStorage.setItem("darkMode", "false");
  } else {
    document.body.setAttribute("data-bs-theme", "dark");
    localStorage.setItem("darkMode", "true");
  }
});