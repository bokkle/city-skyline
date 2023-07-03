const bodyElement = document.body;
let isDarkMode = false;

const toggleDarkMode = () => {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    bodyElement.classList.add("dark-mode");
  } else {
    bodyElement.classList.remove("dark-mode");
  }
};

bodyElement.addEventListener("click", toggleDarkMode);
