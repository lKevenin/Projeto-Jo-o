const lupaIcon = document.getElementById("lupa-icon");
const lupaContainer = document.getElementById("lupa-container");

lupaIcon.addEventListener("click", function() {
    lupaContainer.classList.toggle("hidden");
});