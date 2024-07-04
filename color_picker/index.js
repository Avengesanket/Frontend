// Get DOM elements
const colorPick = document.getElementById('colorpick');
const seedColorwithsymbol = document.getElementById('seedcolor');
const colorPalette = document.getElementById('colorpalette');
const button = document.getElementById('btn');

// Event listener for button click
button.addEventListener('click', handleButtonClick);

// Function to handle button click
function handleButtonClick() {
    const seedColor = seedColorwithsymbol.value.replace('#', '');
    const selectedScheme = colorPick.value;
    console.log(seedColor, selectedScheme);
    console.log('Button clicked');

    fetchColorPalette(seedColor, selectedScheme)
        .then(displayColorPalette)
        .catch(error => {
            console.error('Error:', error);
        });
}

// Function to fetch color palette
async function fetchColorPalette(color, scheme) {
    const url = `https://www.thecolorapi.com/scheme?hex=${color}&mode=${scheme}&count=5`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}

// Function to display color palette
function displayColorPalette(data) {
    const colors = data.colors;

    if (!colors || !Array.isArray(colors)) {
        console.error('Invalid color data:', colors);
        return;
    }

    colorPalette.innerHTML = ''; // Clear previous color palette

    colors.forEach(color => {
        const colorContainer = document.createElement('div');
        colorContainer.classList.add('color-container'); // Add a class for styling

        const colorBox = document.createElement('div');
        colorBox.style.backgroundColor = color.hex.value;
        colorBox.classList.add('color-box');

        const hexText = document.createElement('p');
        hexText.textContent = color.hex.value;

        colorContainer.appendChild(colorBox);
        colorContainer.appendChild(hexText);
        colorPalette.appendChild(colorContainer);
    });
}

