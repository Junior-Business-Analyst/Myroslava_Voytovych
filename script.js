const burgerMenu = document.getElementById("burgerMenu");
const leftPanel = document.getElementById("leftPanel");
const closePanel = document.getElementById("closePanel");

burgerMenu.addEventListener("click", (e) => {
    e.preventDefault();
    leftPanel.classList.add("open"); // Додаємо клас, який ставить translateX(0)
});

closePanel.addEventListener("click", () => {
    leftPanel.classList.remove("open"); // Прибираємо клас, повертається translateX(-100%)
});
