const burgerMenu = document.getElementById("burgerMenu");
const leftPanel = document.getElementById("leftPanel");
const closePanel = document.getElementById("closePanel");

// Відкрити панель (ставимо в нуль, щоб вона виїхала зліва)
burgerMenu.addEventListener("click", (e) => {
    e.preventDefault(); // щоб сторінка не стрибала вгору
    leftPanel.style.transform = "translateX(0)";
});

// Закрити панель (ховаємо назад вліво на всю її ширину)
closePanel.addEventListener("click", () => {
    leftPanel.style.transform = "translateX(-100%)";
});
