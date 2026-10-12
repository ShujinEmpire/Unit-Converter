const cards = document.querySelectorAll(".category-box button");
const converters = document.querySelectorAll(".converter");
const buttons = document.querySelectorAll(".home-btn");
const home = document.querySelector(".category-box");
const hero = document.querySelector(".hero");

cards.forEach(function (card) {
    card.addEventListener("click", function () {
        home.style.display = "none";
        hero.style.display = "none";
        converters.forEach(function (converter) {
            converter.classList.remove("active");
        });
        const category = card.getAttribute("data-category");
        const converterTitle = document.getElementById("converterTitle");
        const converterDescription = document.getElementById("converterDescription");
        const converterIcon = document.getElementById("converterIcon");
        if (category === "time") {
            converterTitle.textContent = "Time Converter";
            converterDescription.textContent = "Convert seconds, minutes, and hours";
            converterIcon.setAttribute("data-lucide", "clock");
        }
        if (category === "temp") {
            converterTitle.textContent = "Temperature Converter";
            converterDescription.textContent = "Convert celsius, fahrenheit, and kelvin";
            converterIcon.setAttribute("data-lucide", "thermometer");
        }
        if (category === "transfer") {
            converterTitle.textContent = "Data Transfer Converter";
            converterDescription.textContent = "Convert bits per second and more";
            converterIcon.setAttribute("data-lucide", "activity");
        }
        if (category === "storage") {
            converterTitle.textContent = "Storage Converter";
            converterDescription.textContent = "Convert bytes, KB , MB, GB, and more";
            converterIcon.setAttribute("data-lucide", "database");
        }
        lucide.createIcons();

        let converterId = category;
        if (category === "time") {
            converterId = "converter";
        }
        const selectedConverter = document.getElementById(converterId);
        if (selectedConverter !== null) {
            selectedConverter.classList.add("active");
        }

    });
});

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        converters.forEach(function (converter) {
            converter.classList.remove("active");

        });
        home.style.display = "grid";
        hero.style.display = "block";

    });
});
window.addEventListener("load", function () {
    lucide.createIcons();
});