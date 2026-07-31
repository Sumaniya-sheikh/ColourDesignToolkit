// document.addEventListener('DOMContentLoaded', () => {
//     // Get the theme toggle checkbox
//     const toggle = document.getElementById('theme-toggle');

//     // Define light and dark theme colors
//     const lightTheme = {
//         backgroundColor: 'linear-gradient(to bottom, #baebf8, #62d0e7)', // Light background
//         textColor: '#000000',       // Light text
//         headerBackground:  'linear-gradient(to right, #024F55, #3c949e)', // Header background for light theme
//         headerTextColor: ' #23c1e8', // Header text color for light theme
//         footerBackground: '#f8f8f8', // Footer background for light theme
//         footerTextColor: '#333'      // Footer text color for light theme
//     };

//     const darkTheme = {
//         backgroundColor: '#121212',  // Dark background
//         textColor: '#ffffff',         // Dark text
//         headerBackground: 'linear-gradient(to right, #000000, #3c949e)', // Header background for dark theme
//         headerTextColor: '#ffffff',   // Header text color for dark theme
//         footerBackground: '#1c1c1c',   // Footer background for dark theme
//         footerTextColor: '#f8f8f8'     // Footer text color for dark theme
//     };

//     // Function to apply theme
//     const applyTheme = (theme) => {
//         document.body.style.backgroundColor = theme.backgroundColor;
//         document.body.style.color = theme.textColor;
        
//         // Apply header styles
//         const header = document.querySelector('header');
//         header.style.background = theme.headerBackground;
//         header.style.color = theme.headerTextColor;
        
//         // Apply footer styles
//         const footer = document.querySelector('footer');
//         footer.style.backgroundColor = theme.footerBackground;
//         footer.style.color = theme.footerTextColor;
//     };

//     // Set default theme on load
//     applyTheme(lightTheme); // Default to light theme

//     // Event listener for theme toggle
//     toggle.addEventListener('change', () => {
//         if (toggle.checked) {
//             applyTheme(darkTheme);
//         } else {
//             applyTheme(lightTheme);
//         }
//     });
// });
// //  toggle function //  toggle function


// Account Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const accountBtn = document.getElementById('account-btn');
    const modal = document.getElementById('account-modal');
    const closeBtn = document.querySelector('.close-btn');

    accountBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});

// Account Modal Functionality and toggle// Account Modal Functionality and toggle

let isUserLoggedIn = true; // Set to true for testing purposes (login functionality mock-up)
const savedPalettes = []; // Mock database


// color picker save and share button code  // color picker save and share button code
// Initialize the iro.js color picker
const colorWheel = new iro.ColorPicker('#color-picker', { 
    width: 320,
    color: "#f00"
});

// Add live color preview
colorWheel.on('color:change', function (color) {
    document.getElementById('color-preview').style.backgroundColor = color.hexString;
});

// Event listener to add multiple colors
document.getElementById('add-color-btn').addEventListener('click', () => {
    const selectedColor = colorWheel.color.hexString;
    addColorToPalette(selectedColor);
});

// Add color to palette and preview
function addColorToPalette(color) {
    const colorBox = document.createElement('div');
    colorBox.className = 'color-box';
    colorBox.style.backgroundColor = color;
    colorBox.style.width = '100px';
    colorBox.style.height = '100px';
    colorBox.style.borderRadius = '15px';
    colorBox.style.margin = '10px';  // Added margin for spacing
    document.getElementById('palette-preview').appendChild(colorBox);
}
// Event listener for saving the palette
document.getElementById('save-palette-btn').addEventListener('click', () => {
    if (isUserLoggedIn) {
        const paletteColors = Array.from(document.getElementById('palette-preview').children).map(colorBox => colorBox.style.backgroundColor);
        savedPalettes.push(paletteColors);
      showMessage(
    document.getElementById("save-palette-btn"),
    "Palette Saved!"
);
    } else {
      showMessage(
    document.getElementById("save-palette-btn"),
    "Please log in first!"
);
    }
});
// Event listener for sharing the palette
document.getElementById('share-palette-btn').addEventListener('click', () => {
    document.getElementById('share-section').style.display = 'block';
});
// Share palette via copy link
document.getElementById('copy-link-btn').addEventListener('click', () => {
    const paletteColors = Array.from(document.getElementById('palette-preview').children).map(colorBox => colorBox.style.backgroundColor).join(', ');
    const link = `https://color-toolkit.com/share?colors=${encodeURIComponent(paletteColors)}`;
   navigator.clipboard.writeText(link).then(() => {

    showMessage(
        document.getElementById("copy-link-btn"),
        "Link Copied!"
    );

}).catch(err => {
    console.error(err);
});
});
// color picker save and share button code ends // color picker save and share button code ends

// Share on social media section starts here// Share on social media section starts here
// Share on social media (mock)
document.getElementById("share-social-btn").addEventListener("click", () => {

    showMessage(
        document.getElementById("share-social-btn"),
        "Shared!"
    );

});
// Share on social media section ends here  // Share on social media section ends here


// Event listener for generating the gradient // Event listener for generating the gradient
document.getElementById('generate-gradient-btn').addEventListener('click', () => {
    const color1 = document.getElementById('gradient-color1').value;
    const color2 = document.getElementById('gradient-color2').value;
    const gradientType = document.getElementById('gradient-type').value;
    const gradientPreview = document.getElementById('gradient-preview');
    const gradientCodeElement = document.getElementById('gradient-code');

    let gradientCSS = '';

    // Determine the gradient type
    switch (gradientType) {
        case 'linear':
            gradientCSS = `linear-gradient(${color1}, ${color2})`;
            break;
        case 'linear-to-right':
            gradientCSS = `linear-gradient(to right, ${color1}, ${color2})`;
            break;
        case 'linear-to-bottom':
            gradientCSS = `linear-gradient(to bottom, ${color1}, ${color2})`;
            break;
        case 'linear-to-diagonal':
            gradientCSS = `linear-gradient(135deg, ${color1}, ${color2})`;
            break;
        case 'radial':
            gradientCSS = `radial-gradient(circle, ${color1}, ${color2})`;
            break;
        case 'conic':
            gradientCSS = `conic-gradient(${color1}, ${color2})`;
            break;
        default:
            gradientCSS = `linear-gradient(${color1}, ${color2})`;
    }

    // Apply the generated gradient to the preview box
    gradientPreview.style.background = gradientCSS;

    // Display the gradient CSS code
    gradientCodeElement.textContent = `background: ${gradientCSS};`;
    gradientCodeElement.style.display = 'block';
});
// Copy the gradient CSS to clipboard
document.getElementById('copy-gradient-btn').addEventListener('click', () => {
    const gradientCode = document.getElementById('gradient-code').textContent;
    if (gradientCode) {
       navigator.clipboard.writeText(gradientCode).then(() => {

    showMessage(
        document.getElementById("copy-gradient-btn"),
        "Gradient Copied!"
    );

});
    } else {
      showMessage(
    document.getElementById("generate-gradient-btn"),
    "Generate a gradient first!"
);
    }
});
// Event listener for generating the gradient // Event listener for generating the gradient


// Custom palette code // Custom palette code // Custom palette code // Custom palette code
function runCustomPalette() {
    const customColorInputOne = document.getElementById("customColor1");
    const customColorInputTwo = document.getElementById("customColor2");
    const customPaletteCount = document.getElementById("custom-palette-count-input");

    [customColorInputOne, customColorInputTwo, customPaletteCount].forEach((input) => {
        input.addEventListener("input", function () {
            generateCustomPalette(customColorInputOne.value, customColorInputTwo.value, customPaletteCount.value);
        });
    });

    // Generate initial palette on page load
    generateCustomPalette(customColorInputOne.value, customColorInputTwo.value, customPaletteCount.value);
}
function generateCustomPalette(color1, color2, paletteCount) {
    const customPaletteContainer = document.getElementById("custom-palette");

    // Clear any existing palette items
    customPaletteContainer.innerHTML = "";

    // Create color palette using Chroma.js
    const colorPalette = chroma.scale([color1, color2]).mode("lch").colors(paletteCount);

    colorPalette.forEach((color) => {
        const customPaletteItem = document.createElement("div");

        // Create span to display the color value (HEX code)
        const customPaletteColorValue = document.createElement("span");
        customPaletteColorValue.classList.add("custom-palette-color-value");

        const contrastColor = chroma.contrast(color, "black") > 4.5 ? "black" : "white";
        customPaletteColorValue.style.setProperty("--name-color", contrastColor);
        customPaletteColorValue.appendChild(document.createTextNode(color));

        customPaletteItem.appendChild(customPaletteColorValue);
        customPaletteItem.classList.add("custom-palette-item");
        customPaletteItem.style.setProperty("--palette-color", color);

        // Add click event to copy color code and show "Copied!" message
        customPaletteItem.addEventListener("click", function () {
            copyToClipboard(color);

showMessage(customPaletteItem, "Copied!"); // Show the "Copied!" message
        });

        // Append the palette item to the container
        customPaletteContainer.appendChild(customPaletteItem);
    });
}
// Function to copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .catch(err => console.error("Copy failed:", err));
}
// Function to show the "Copied!" message
// function showCopiedMessage(paletteItem) {
//     const copiedMessage = document.createElement("span");
//     copiedMessage.textContent = "Copied!";
//     copiedMessage.classList.add("copied-message");

//     // Append the copied message to the palette item
//     paletteItem.appendChild(copiedMessage);

//     // Remove the message after 1.5 seconds (1500 ms)
//     setTimeout(() => {
//         copiedMessage.remove();
//     }, 1500);
// }
// Run the script once the window has loaded
window.addEventListener("load", () => {
    runCustomPalette();
});
//Custom palette code ends Here  Custom palette code ends Here  Custom palette code ends Here


// predefined palette code ends Here // predefined palette code ends Here // predefined palette code ends Here
const predefinedPalettes = [
        { colors: ["#FFF1F1", "#FFE6E6", "#FFDCDC", "#FFCCCB", "#FFB3B3"] },  // Light Blossom
        { colors: ["#FFFAF0", "#FFF0E5", "#FFE4C4", "#FFDAB9", "#FFC8A2"] },  // Soft Peach
        { colors: ["#FFF4F4", "#FFECEC", "#FFDADA", "#FFC2C2", "#FFA8A8"] },  // Baby Pink
        { colors: ["#F0FFF0", "#DFFFDF", "#BFFFBF", "#AFFF9F", "#8FFF8F"] },  // Pastel Green
        { colors: ["#FFF9E6", "#FFF2CC", "#FFEB99", "#FFE066", "#FFD633"] },  // Soft Sunshine
        { colors: ["#FDFDFD", "#FCFCFC", "#FAFAFA", "#F7F7F7", "#F3F3F3"] },  // Baby White
        { colors: ["#FFFAFA", "#FFF5F5", "#FFEDED", "#FFDDDD", "#FFCCCC"] },  // Sweet Blush
        { colors: ["#F6FAFF", "#EBF5FF", "#DDEFFF", "#CDE8FF", "#B8E0FF"] },  // Soft Sky
        { colors: ["#FDF7FF", "#F9ECFF", "#F5DFFF", "#F2D1FF", "#EDC3FF"] },  // Soft Orchid
        { colors: ["#FFF7E6", "#FFEBCC", "#FFE0B3", "#FFD699", "#FFCC80"] },  // Light Apricot
        { colors: ["#FDEFF2", "#FADCD9", "#F5BFD2", "#F4A7B9", "#E89CAE"] },  // Pastel Pink
        { colors: ["#FFFAF0", "#FDE2E4", "#FAD4D8", "#F7BBC2", "#F5A7B8"] },  // Pastel Rose
        { colors: ["#E0F7FA", "#B2EBF2", "#80DEEA", "#4DD0E1", "#26C6DA"] },  // Pastel Aqua
        { colors: ["#FFFBEA", "#FFF3E2", "#FFE9D6", "#FFDFC4", "#FFD5B2"] },  // Soft Pastel Peach
        { colors: ["#F3F9FB", "#E0F4F8", "#CDEEF3", "#B9E5F0", "#A5DCEB"] },  // Pastel Blue
        { colors: ["#FFF7F7", "#FFEFEF", "#FFE7E7", "#FFD7D7", "#FFB7B7"] },  // Delicate Rose
        { colors: ["#FFF7FA", "#FFEFF5", "#FFE7F0", "#FFD7E4", "#FFC7D8"] },  // Baby Blossom
        { colors: ["#FAF3FF", "#F5EFFF", "#EADFFF", "#E0CCFF", "#D3B2FF"] },  // Light Lavender
        { colors: ["#F3F8FF", "#E6F0FF", "#D9E7FF", "#CCE0FF", "#BFD9FF"] },  // Baby Blue
        { colors: ["#F8F7FF", "#F0EFFA", "#E7E5F5", "#DAD6EF", "#CCC4E6"] },  // Soft Lilac
        { colors: ["#FFFBF2", "#FFF4DF", "#FFE8BF", "#FFDA99", "#FFCC66"] },  // Soft Butter
        { colors: ["#FDFDF2", "#F3FAE5", "#E9F6D8", "#DEF2CB", "#D4EFBC"] },  // Pastel Green
        { colors: ["#FFF7E6", "#FFE8CC", "#FFD5A3", "#FFC078", "#FFA94D"] },  // Pastel Orange
        { colors: ["#FFE8F5", "#FFCCE0", "#FFB3D0", "#FF9EC0", "#FF80AC"] },  // Pastel Petal Pink
        { colors: ["#FFF9EC", "#FFF4D5", "#FFEAB8", "#FFD898", "#FFC474"] },  // Pastel Golden Peach
        { colors: ["#E6F7F9", "#C4EBF5", "#A0DFF2", "#7CD2ED", "#58C6E9"] },  // Pastel Ocean Blue
        { colors: ["#FF6B6B", "#F06543", "#D9BF77", "#7A8450", "#40531B"] },  // Desert Heat
        { colors: ["#FFE66D", "#F6AE2D", "#F26419", "#2F4858", "#4C6A92"] },  // Citrus Burst
        { colors: ["#001F3F", "#0074D9", "#7FDBFF", "#39CCCC", "#3D9970"] },  // Deep Sea Dive
        { colors: ["#023E7D", "#0466C8", "#0353A4", "#023047", "#001845"] },  // Midnight Blue
        { colors: ["#672F54", "#A5446F", "#B7748B", "#DEAB90", "#FFDDC1"] },  // Vintage Pink
        { colors: ["#FFB703", "#FB8500", "#FF4E00", "#D62828", "#6A040F"] },  // Fiery Sun
        { colors: ["#000000", "#0A090C", "#22333B", "#E63946", "#F1FAEE"] },  // Mysterious Night
        { colors: ["#E9D8A6", "#94D2BD", "#EE9B00", "#CA6702", "#BB3E03"] },  // Warm Harvest
        { colors: ["#F8F7F9", "#AAB9CF", "#656D78", "#2F343A", "#1C2023"] },  // Industrial Chic
        { colors: ["#C9D6DF", "#F6F5F5", "#DBE2EF", "#3F72AF", "#112D4E"] },  // Quiet Rain
        { colors: ["#FFFBF2", "#FFF4E0", "#FFEAC8", "#FFDFAF", "#FFD09B"] },  // Pastel Buttercream
        { colors: ["#E9F6F6", "#C8EBEB", "#A6E1E1", "#82D6D6", "#5FCCFF"] },  // Soft Pastel Turquoise
        { colors: ["#FFF7F0", "#FFEDE0", "#FFE1D0", "#FFD3BF", "#FFC4A8"] },  // Pastel Coral
        { colors: ["#FFF9F3", "#FFEEE0", "#FFE1CC", "#FFD4B8", "#FFB2A6"] },  // Light Pastel Peach
        { colors: ["#F3F4F6", "#E2E4E9", "#D1D6DF", "#C0C8D4", "#AFBACC"] },  // Soft Pastel Gray
        { colors: ["#FAF4FF", "#F3E6FF", "#EBD7FF", "#E3C8FF", "#D9B7FF"] },  // Pastel Lavender
        { colors: ["#FDFDFD", "#F2F2F2", "#E6E6E6", "#D9D9D9", "#CCCCCC"] },  // Pastel White
        { colors: ["#FFF7F8", "#FFE7E9", "#FFCCD2", "#FFA3AB", "#FF7784"] },  // Pastel Blush
        { colors: ["#FFF8F0", "#FFEDD5", "#FFD9A8", "#FFC585", "#FFB364"] },  // Pastel Apricot
        { colors: ["#582C4D", "#7A5975", "#D0B7A3", "#F3F3F4", "#C5D5E4"] },  // Cozy Winter
        { colors: ["#F9C74F", "#90BE6D", "#43AA8B", "#577590", "#F94144"] },  // Tropical Sunset
        { colors: ["#D1495B", "#EDAE49", "#E2C044", "#00798C", "#30638E"] },  // Harvest Glow
        { colors: ["#D8E2DC", "#FFE5D9", "#FFCAD4", "#F4ACB7", "#9D8189"] },  // Rose Garden
        { colors: ["#2E1F27", "#4A253A", "#804E71", "#C08DAA", "#E9D2DB"] },  // Dark Romance
        { colors: ["#D72638", "#3F88C5", "#F49D37", "#140F2D", "#F22B29"] },  // Retro Pop
        { colors: ["#8FBC94", "#52796F", "#354F52", "#2F3E46", "#CAD2C5"] },  // Forest Shadow
        { colors: ["#DAD7CD", "#A3B18A", "#588157", "#3A5A40", "#344E41"] },  // Olive Grove
        { colors: ["#AACCFF", "#FF66CC", "#FFCC00", "#00FFCC", "#FF0033"] },  // Neon Dream
        { colors: ["#FDEDEC", "#FED7C3", "#FDB79D", "#FD887B", "#DD4646"] },  // Peach Sorbet    
        { colors: ["#2B2D42", "#3D405B", "#6D597A", "#B56576", "#E56B6F"] },  // Universe
        { colors: ["#081C15", "#1B4332", "#2D6A4F", "#40916C", "#52B788"] },  // Forest
        { colors: ["#0D1B2A", "#1B263B", "#415A77", "#778DA9", "#E0E1DD"] },  // Earth
        { colors: ["#003B46", "#07575B", "#66A5AD", "#C4DFE6", "#EDF7F3"] },  // Ocean
        { colors: ["#620E00", "#B53A3A", "#DC6363", "#F0A5A5", "#FDEDED"] },  // Love
        { colors: ["#4E0000", "#8E0E00", "#B40000", "#E60000", "#FF7272"] },  // Hate
        { colors: ["#FFB3BA", "#FF677D", "#FFC6A8", "#FFAAA5", "#FFD6D6"] },  // Like
        { colors: ["#372772", "#54328B", "#704EAE", "#8A77D1", "#C9B5E7"] },  // Dislike
        { colors: ["#D4A373", "#B08968", "#9C6644", "#6C584C", "#402E2A"] },  // Wind
        { colors: ["#264653", "#2A9D8F", "#E9C46A", "#F4A261", "#E76F51"] },  // Tropical
        { colors: ["#0A9396", "#94D2BD", "#E9D8A6", "#EE9B00", "#CA6702"] },  // Wilderness
        { colors: ["#3A506B", "#5BC0BE", "#6FFFE9", "#F3FFE2", "#1C2541"] },  // Culture
        { colors: ["#1F2041", "#4B3F72", "#7E827A", "#A1C181", "#619B8A"] },  // Comic
        { colors: ["#2A1B3D", "#512A63", "#914D76", "#DD9A8B", "#FFB6B9"] },  // Graphics
        { colors: ["#0D0D0D", "#3C3C3C", "#757575", "#AEAEAE", "#E1E1E1"] },  // AI
        { colors: ["#B5E48C", "#99D98C", "#76C893", "#52B788", "#34A0A4"] },  // Nature
        { colors: ["#546E7A", "#455A64", "#37474F", "#263238", "#11171A"] },  // Modern
        { colors: ["#A18D74", "#836958", "#605647", "#3D2C23", "#241712"] },  // Old Money
        { colors: ["#F5CB5C", "#F4A261", "#E76F51", "#E9C46A", "#2A9D8F"] },  // New Generation
        { colors: ["#FFB6B9", "#FAE3D9", "#BBDED6", "#61C0BF", "#A5E1AD"] },  // Millennials
        { colors: ["#231942", "#5E548E", "#9F86C0", "#BE95C4", "#E0B1CB"] },  // Fleeting Emotion
        { colors: ["#E63946", "#F1FAEE", "#A8DADC", "#457B9D", "#1D3557"] },  // Earthy Love
        { colors: ["#264653", "#2A9D8F", "#E9C46A", "#F4A261", "#E76F51"] },  // Ocean Breeze
        { colors: ["#E9D8A6", "#F4A261", "#E76F51", "#2A9D8F", "#264653"] },  // Nature’s Fire
        { colors: ["#D9BF77", "#A68D60", "#695A4A", "#45342C", "#1D1A18"] },  // Vintage Earth
        { colors: ["#0D1B2A", "#1B263B", "#415A77", "#778DA9", "#E0E1DD"] },  // Twilight Sky
        { colors: ["#393E46", "#00ADB5", "#AAD8D3", "#EEEEEE", "#EEEEEE"] },  // Night Vibes
        { colors: ["#42273B", "#693D3D", "#AA6F73", "#E4A0A1", "#FFC9C9"] },  // Blush Romance
        { colors: ["#F72585", "#B5179E", "#7209B7", "#560BAD", "#3A0CA3"] },  // Cosmic Dreams
        { colors: ["#ECF39E", "#A9DEF9", "#E4C1F9", "#F694C1", "#F4A261"] },  // Happy Feelings
        { colors: ["#9B5DE5", "#F15BB5", "#FEE440", "#00BBF9", "#00F5D4"] },  // Digital World
        { colors: ["#E63946", "#F1FAEE", "#A8DADC", "#457B9D", "#1D3557"] },  // Organic Warmth
        { colors: ["#F4A261", "#E76F51", "#264653", "#2A9D8F", "#E9C46A"] },  // Sunset Beach
        { colors: ["#2C7DA0", "#468FAF", "#61A5C2", "#89C2D9", "#A9D6E5"] },  // Ocean Calm
        { colors: ["#D9BF77", "#A68D60", "#695A4A", "#45342C", "#1D1A18"] },  // Earthy Wealth
        { colors: ["#011627", "#023047", "#219EBC", "#FFB703", "#FB8500"] },  // Bold Horizon
        { colors: ["#252627", "#2D2E2E", "#5D646F", "#939597", "#D9D9D9"] },  // Shadows & Light
        { colors: ["#D3F8E2", "#E4C1F9", "#F694C1", "#EDE7B1", "#A9DEF9"] },  // Tender Emotions
        { colors: ["#8338EC", "#3A0CA3", "#7209B7", "#F72585", "#FFAA00"] },  // Universe Burst
        { colors: ["#FF595E", "#FFCA3A", "#8AC926", "#1982C4", "#6A4C93"] },  // Universal Energy
        { colors: ["#8D99AE", "#2B2D42", "#EF233C", "#D90429", "#EDF2F4"] },  // Windy Night
        { colors: ["#1D3557", "#457B9D", "#A8DADC", "#F1FAEE", "#E63946"] },  // Glacial Morning
        { colors: ["#CDB4DB", "#FFC8DD", "#FFAFCC", "#BDE0FE", "#A2D2FF"] },  // Whimsical
        { colors: ["#2E2D88", "#4B43AD", "#6761CA", "#8581ED", "#B8B2FF"] },  // Galactic Cool
        { colors: ["#1C1B1A", "#403D39", "#756F6C", "#A39791", "#D4D3C3"] },  // Cosmic Sand
        { colors: ["#DDA15E", "#BC6C25", "#606C38", "#283618", "#FEFAE0"] },  // Earthy Calm
        { colors: ["#05668D", "#028090", "#00A896", "#02C39A", "#F0F3BD"] },  // Coastal Breeze
        { colors: ["#FCBF49", "#F77F00", "#D62828", "#003049", "#1D3557"] },  // Ancient Desert
        { colors: ["#C4B5FD", "#A78BFA", "#8B5CF6", "#7C3AED", "#6D28D9"] },  // Mystic Universe
        { colors: ["#14213D", "#FCA311", "#E5E5E5", "#F5F5F5", "#FFFFFF"] },  // Desert Storm
    ];
function generatePredefinedPalettes() {
    const palettesContainer = document.getElementById("predefined-palettes-container");
    palettesContainer.innerHTML = "";

    predefinedPalettes.forEach((palette) => {
        for (let i = 0; i < 1; i++) { // Use the same palette multiple times
            const paletteDiv = document.createElement("div");
            paletteDiv.classList.add("palette");

            const colors = chroma.scale(palette.colors).mode("lch").colors(5);

            colors.forEach((color) => {
                const paletteItem = document.createElement("div");
                paletteItem.classList.add("palette-item");
                paletteItem.style.setProperty("--palette-color", color);
                paletteItem.style.backgroundColor = color; // Fix background color

                const paletteColorValue = document.createElement("span");
                paletteColorValue.classList.add("palette-color-value");
                paletteColorValue.textContent = color; // Display the color code

                const contrastColor = chroma.contrast(color, "black") > 8.32 ? "black": "white"; 
                paletteColorValue.style.color = contrastColor; // Set text color based on contrast

                paletteItem.appendChild(paletteColorValue);

                paletteItem.addEventListener("click", function () {
    copyToClipboard(color);
    showMessage(paletteItem, "Copied!");
});
                paletteDiv.appendChild(paletteItem);
            });

            palettesContainer.appendChild(paletteDiv);
        }
    });
}
window.addEventListener("load", generatePredefinedPalettes);
// function copyToClipboard(text) {
//     const tempInput = document.createElement("input");
//     document.body.appendChild(tempInput);
//     tempInput.value = text;
//     tempInput.select();
//     document.execCommand("copy");
//     document.body.removeChild(tempInput);
// }
// function showCopiedMessage(paletteItem) {
//     const copiedMessage = document.createElement("span");
//     copiedMessage.textContent = "Copied!";
//     copiedMessage.classList.add("copied-message");

//     paletteItem.appendChild(copiedMessage);

//     setTimeout(() => {
//         copiedMessage.remove();
//     }, 1500);
// }

function showMessage(element, message = "Success!") {

    const messageBox = document.createElement("span");

    messageBox.textContent = message;

    messageBox.className = "copied-message";

    element.appendChild(messageBox);

    setTimeout(() => {
        messageBox.remove();
    }, 1500);
}
// predefined palette code ends Here // predefined palette code ends Here// predefined palette code ends Here
