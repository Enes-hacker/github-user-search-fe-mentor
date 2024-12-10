const toggle = function (e) {
    const newColorMode = e.currentTarget.getAttribute("data-color-mode");
    document.documentElement.setAttribute("color-mode", newColorMode);
    localStorage.setItem("color-mode", newColorMode);
    updateButtonVisibility();
};

const updateButtonVisibility = () => {
    const currentMode = localStorage.getItem("color-mode") || "light";
    document.querySelectorAll(".color-mode__btn").forEach(btn => {
        const btnColorMode = btn.getAttribute("data-color-mode");
        if (btnColorMode === currentMode) {
            btn.classList.add("hidden");
        } else {
            btn.classList.remove("hidden");
        }
    });
};

document.addEventListener("DOMContentLoaded", () => {
    const savedColorMode = localStorage.getItem("color-mode") || "light";
    document.documentElement.setAttribute("color-mode", savedColorMode);
    updateButtonVisibility();
});

document.querySelectorAll(".color-mode__btn").forEach(btn => {
    btn.addEventListener("click", toggle);
});
