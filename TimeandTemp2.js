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
        document.getElementById("temperatureValue").value
    );

    // Get selected units
    let fromUnit =
        document.getElementById("temperatureFrom").value;

    let toUnit =
        document.getElementById("temperatureTo").value;

    let result;


    // Make sure something was entered
    if (document.getElementById("temperatureValue").value === "") {

        document.getElementById("temperatureResult").textContent =
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
    document.getElementById("temperatureResult").textContent =
        value + " " + fromUnit +
        " = " +
        result + " " + toUnit;
}



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



// ========================================
// SWAP TEMPERATURE UNITS
// ========================================

function swapTemperatureUnits() {

    let fromBox =
        document.getElementById("temperatureFrom");

    let toBox =
        document.getElementById("temperatureTo");


    let temp = fromBox.value;

    fromBox.value = toBox.value;
    toBox.value = temp;
}