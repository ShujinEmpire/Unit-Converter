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

// ========================================
// UNIT CONVERTER
// ========================================


// ========================================
// TIME CONVERTER
// ========================================

function convertTime() {

    // Get the user's input
    let value = Number(document.getElementById("timeValue").value);

    // Get the selected units
    let fromUnit = document.getElementById("timeFrom").value;
    let toUnit = document.getElementById("timeTo").value;

    let seconds;
    let result;


    // Check if the user entered a number
    if (document.getElementById("timeValue").value === "") {
        document.getElementById("timeResult").textContent =
            "Please enter a value.";

        return;
    }


    // -------------------------------
    // Convert FROM unit into seconds
    // -------------------------------

    if (fromUnit === "seconds") {
        seconds = value;
    }

    else if (fromUnit === "minutes") {
        seconds = value * 60;
    }

    else if (fromUnit === "hours") {
        seconds = value * 3600;
    }

    else if (fromUnit === "days") {
        seconds = value * 86400;
    }


    // -------------------------------
    // Convert seconds INTO new unit
    // -------------------------------

    if (toUnit === "seconds") {
        result = seconds;
    }

    else if (toUnit === "minutes") {
        result = seconds / 60;
    }

    else if (toUnit === "hours") {
        result = seconds / 3600;
    }

    else if (toUnit === "days") {
        result = seconds / 86400;
    }


    // Display the answer
    document.getElementById("timeResult").textContent =
        value + " " + fromUnit +
        " = " +
        result + " " + toUnit;
}



// ========================================
// TEMPERATURE CONVERTER
// ========================================

function convertTemperature() {

    // Get user's input
    let value = Number(
        document.getElementById("tempValue").value
    );

    // Get selected units
    let fromUnit =
        document.getElementById("fromTemp").value;

    let toUnit =
        document.getElementById("toTemp").value;

    let result;


    // Make sure something was entered
    if (document.getElementById("tempValue").value === "") {

        document.getElementById("tempResult").textContent =
            "Please enter a value.";

        return;
    }


    // Same units
    if (fromUnit === toUnit) {
        result = value;
    }


    // Fahrenheit -> Celsius
    else if (
        fromUnit === "fahrenheit" &&
        toUnit === "celsius"
    ) {
        result = (value - 32) * 5 / 9;
    }


    // Celsius -> Fahrenheit
    else if (
        fromUnit === "celsius" &&
        toUnit === "fahrenheit"
    ) {
        result = (value * 9 / 5) + 32;
    }


    // Celsius -> Kelvin
    else if (
        fromUnit === "celsius" &&
        toUnit === "kelvin"
    ) {
        result = value + 273.15;
    }


    // Kelvin -> Celsius
    else if (
        fromUnit === "kelvin" &&
        toUnit === "celsius"
    ) {
        result = value - 273.15;
    }


    // Fahrenheit -> Kelvin
    else if (
        fromUnit === "fahrenheit" &&
        toUnit === "kelvin"
    ) {
        result = (value - 32) * 5 / 9 + 273.15;
    }


    // Kelvin -> Fahrenheit
    else if (
        fromUnit === "kelvin" &&
        toUnit === "fahrenheit"
    ) {
        result = (value - 273.15) * 9 / 5 + 32;
    }


    // Round answer to 2 decimal places
    result = Math.round(result * 100) / 100;


    // Display answer
    document.getElementById("tempResult").textContent =
        value + " " + fromUnit +
        " = " +
        result + " " + toUnit;
}

//Transfer Units 


function convertDataTransfer() {


    let value = Number(
        document.getElementById("transferValue").value
    );

    // Get selected units
    let fromUnit =
        document.getElementById("fromTransfer").value;

    let toUnit =
        document.getElementById("toTransfer").value;

    let result;


    // Make sure something was entered
    if (document.getElementById("transferValue").value === "") {

        document.getElementById("transferResult").textContent =
            "Please enter a value.";

        return;
    }


    // Same units
    if (fromUnit === toUnit) {
        result = value;
    }


    const transferFactors = {
        bps: 1,
        Bps: 8,
        kbps: 1e3,
        mbps: 1e6,
        gbps: 1e9
    };

    result = value * (transferFactors[fromUnit] / transferFactors[toUnit]);

   // let exresult = result.toExponential(3);


    // Display answer
    document.getElementById("transferResult").textContent =
        value + " " + fromUnit +
        " = " +
        result + " " + toUnit;
}


function convertDataStorage() {
    let value = Number(
        document.getElementById("storageValue").value
    );

    // Get selected units
    let fromUnit =
        document.getElementById("fromStorage").value;

    let toUnit =
        document.getElementById("toStorage").value;

    let result;


    // Make sure something was entered
    if (document.getElementById("storageValue").value === "") {

        document.getElementById("storageResult").textContent =
            "Please enter a value.";

        return;
    }


    // Same units
    if (fromUnit === toUnit) {
        result = value;
    }


    const transferFactors = {
        bytes: 1,
        kb: 1e3,
        mb: 1e6,
        gb: 1e9,
        tb: 1e12
    };

    result = value * (transferFactors[fromUnit] / transferFactors[toUnit]);

   // let exresult = result.toExponential(3);


    // Display answer
    document.getElementById("storageResult").textContent =
        value + " " + fromUnit +
        " = " +
        result + " " + toUnit;

}


function swapStorageBtn() {

    let fromBox =
        document.getElementById("fromStorage");

    let toBox =
        document.getElementById("toStorage");


    let temp = fromBox.value;

    fromBox.value = toBox.value;
    toBox.value = temp;
}

const storageConvertBtn =
    document.getElementById("storageConvertBtn");

storageConvertBtn.addEventListener(
    "click",
    convertDataStorage
);

const storageSwapBtn = 
    document.getElementById("storageSwapBtn");

storageSwapBtn.addEventListener(
    "click",
    swapStorageBtn
);


function swapTransferUnits() {

    let fromBox =
        document.getElementById("fromTransfer");

    let toBox =
        document.getElementById("toTransfer");


    let temp = fromBox.value;

    fromBox.value = toBox.value;
    toBox.value = temp;
}

const transferConvertBtn =
    document.getElementById("transferConvertBtn");

transferConvertBtn.addEventListener(
    "click",
    convertDataTransfer
);

const TransferSwapBtn = 
    document.getElementById("TransferSwapBtn");

TransferSwapBtn.addEventListener(
    "click",
    swapTransferUnits
);


// ========================================
// SWAP TIME UNITS
// ========================================

function swapTimeUnits() {

    let fromBox = document.getElementById("timeFrom");
    let toBox = document.getElementById("timeTo");

    let temp = fromBox.value;

    fromBox.value = toBox.value;
    toBox.value = temp;
}

const timeConvertBtn =
    document.getElementById("timeConvertBtn");

timeConvertBtn.addEventListener(
    "click",
    convertTime
);

const timeSwapBtn = 
    document.getElementById("timeSwapBtn");

timeSwapBtn.addEventListener(
    "click",
    swapTimeUnits
);


// ========================================
// SWAP TEMPERATURE UNITS
// ========================================

function swapTemperatureUnits() {

    let fromBox =
        document.getElementById("fromTemp");

    let toBox =
        document.getElementById("toTemp");


    let temp = fromBox.value;

    fromBox.value = toBox.value;
    toBox.value = temp;
}

const tempConvertBtn =
    document.getElementById("tempConvertBtn");

tempConvertBtn.addEventListener(
    "click",
    convertTemperature
);

const tempSwapBtn = 
    document.getElementById("tempSwapBtn");

tempSwapBtn.addEventListener(
    "click",
    swapTemperatureUnits
);
