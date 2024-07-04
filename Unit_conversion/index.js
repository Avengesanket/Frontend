/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
    // const convertButton = document.querySelector('.btn');
    // const inputEl = document.getElementById('inp');
    // const mfel = document.getElementById('m-f');
    // const lgel = document.getElementById('l-g');
    // const kpel = document.getElementById('k-p');

    // convertButton.addEventListener('click', function () {
    //     const meter = parseFloat(inputEl.value);
    //     // Convert meter to feet (1 meter = 3.28084 feet)
    //     const feetValue = meter * 3.28084;
    //     const meterValue = feetValue / 3.28084; 
    //     mfel.textContent = `${inputEl} meters = ${feetValue.toFixed(3)} feet |
    //                         ${inputEl} feet = ${meterValue.toFixed(3)} meters`;

    //     // Convert liter to gallon (1 liter ≈ 0.264172 gallon)
    //     const litre = parseFloat(inputEl.value);
    //     const gallonValue = litre * 0.264172;
    //     const literValue = gallonValue / 0.264172;
    //     lgel.textContent = `${inputEl} liters = ${gallonValue.toFixed(3)} gallons |
    //                         ${inputEl} gallons = ${literValue.toFixed(3)} liters`;

    //     // Convert kilogram to pound (1 kilogram ≈ 2.20462 pounds)
    //     const kilo = parseFloat(inputEl.value);
    //     const poundValue = kilo * 2.20462;
    //     const kiloValue = poundValue / 2.20462; 
    //     kpel.textContent = `${inputEl} kilograms = ${poundValue.toFixed(3)} pounds |
    //                         ${inputEl} pounds = ${kiloValue.toFixed(3)} kilograms`;
    // });
    document.addEventListener("DOMContentLoaded", function () {
        const convertButton = document.querySelector('.btn');
        const inputElement = document.getElementById('inp');
        const mfel = document.getElementById('m-f');
        const lgel = document.getElementById('l-g');
        const kpel = document.getElementById('k-p');
    
        convertButton.addEventListener('click', function () {
            const inputValue = parseFloat(inputElement.value);
    
            // Convert meter to feet (1 meter = 3.28084 feet)
            const feetValue = inputValue * 3.28084;
            const meterValue = feetValue / 3.28084;
            mfel.textContent = `${inputValue} meters = ${feetValue.toFixed(3)} feet | ${inputValue} feet = ${meterValue.toFixed(3)} meters`;
    
            // Convert liter to gallon (1 liter ≈ 0.264172 gallon)
            const gallonValue = inputValue * 0.264172;
            const literValue = gallonValue / 0.264172;
            lgel.textContent = `${inputValue} liters = ${gallonValue.toFixed(3)} gallons | ${inputValue} gallons = ${literValue.toFixed(3)} liters`;
    
            // Convert kilogram to pound (1 kilogram ≈ 2.20462 pounds)
            const poundValue = inputValue * 2.20462;
            const kiloValue = poundValue / 2.20462;
            kpel.textContent = `${inputValue} kilograms = ${poundValue.toFixed(3)} pounds | ${inputValue} pounds = ${kiloValue.toFixed(3)} kilograms`;
        });
    });
    