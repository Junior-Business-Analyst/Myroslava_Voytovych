const burgerMenu = document.getElementById("burgerMenu");
const leftPanel = document.getElementById("leftPanel");
const closePanel = document.getElementById("closePanel");

burgerMenu.addEventListener("click", (e) => {
    e.preventDefault();
    leftPanel.style.transform = "translateX(0)"; // Виїжджає в нуль
});

closePanel.addEventListener("click", () => {
    leftPanel.style.transform = "translateX(-100%)"; // Ховається повністю вліво
});
