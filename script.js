const burgerMenu = document.getElementById("burgerMenu");
const leftPanel = document.getElementById("leftPanel");
const closePanel = document.getElementById("closePanel");

// Відкрити
burgerMenu.addEventListener("click", (e) => {
    e.preventDefault();
    leftPanel.classList.add("active");
});

// Закрити
closePanel.addEventListener("click", () => {
    leftPanel.classList.remove("active");
});
