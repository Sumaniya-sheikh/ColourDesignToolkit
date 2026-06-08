const predefinedPalettes = [
    { colors: ["#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#F44336"] },  // Bright
    { colors: ["#212121", "#424242", "#616161", "#757575", "#9E9E9E"] },  // Dark
    { colors: ["#F0F8FF", "#E0FFFF", "#AFEEEE", "#B0E0E6", "#ADD8E6"] },  // Snow
    { colors: ["#FF5722", "#FF9800", "#FFC107", "#FFEB3B", "#FFEB3B"] },  // Sunset
    { colors: ["#FFB6C1", "#FF69B4", "#FF1493", "#DB7093", "#C71585"] },  // Flower
    { colors: ["#A8DADC", "#457B9D", "#1D3557", "#F1FAEE", "#F1FAEE"] },  // Natural
    { colors: ["#2E1A47", "#3A0D65", "#6B1F9A", "#9B2A8D", "#B2676B"] },  // Gothic
    { colors: ["#FFB6C1", "#FF69B4", "#FF1493", "#DB7093", "#C71585"] },  // Love
    { colors: ["#D1C4E9", "#B39DDB", "#9575CD", "#7E57C2", "#673AB7"] },  // Feelings
    { colors: ["#E0F7FA", "#B2EBF2", "#80DEEA", "#4DD0E1", "#26C6DA"] },  // Refreshing
    { colors: ["#E8F5E9", "#C8E6C9", "#A5D6A7", "#81C784", "#388E3C"] },  // Garden
    { colors: ["#B2DFDB", "#80CBC4", "#4DB6AC", "#26A69A", "#009688"] },  // Tropical
    { colors: ["#FCE4EC", "#F8BBD0", "#F48FB1", "#F06292", "#E91E63"] },  // Romantic
    { colors: ["#FFCCBC", "#FFAB91", "#FF8A65", "#FF7043", "#FF5722"] },  // Warm
    { colors: ["#E8EAF6", "#C5CAE9", "#9FA8DA", "#7986CB", "#5C6BC0"] },  // Cool
    { colors: ["#D1C4E9", "#B39DDB", "#9575CD", "#7E57C2", "#673AB7"] },  // Mysterious
    { colors: ["#C8E6C9", "#A5D6A7", "#81C784", "#4CAF50", "#388E3C"] },  // Earthy
    { colors: ["#F8BBD0", "#F48FB1", "#F06292", "#EC407A", "#D81B60"] },  // Feminine
    { colors: ["#FFEDD5", "#FFD6A5", "#FDDA74", "#FBBF24", "#FBBF24"] },  // Sunset
    { colors: ["#F8BBD0", "#FFAB91", "#FF8A65", "#FF7043", "#FF5722"] },  // Warm Sunset
    { colors: ["#FFE4E1", "#FFC0CB", "#FF69B4", "#FF1493", "#DB7093"] },  // Flower
    { colors: ["#E0F7FA", "#B2EBF2", "#80DEEA", "#4DD0E1", "#26C6DA"] },  // Ocean
    { colors: ["#D3C8F6", "#AFA3E0", "#8B6BBE", "#6B4A9A", "#4A2B6D"] },  // Dreamy
    { colors: ["#F4E1D7", "#E5B8B0", "#E2A199", "#D27F7A", "#A95A6C"] },  // Warm Feelings
    { colors: ["#F1E6FF", "#D7C4FF", "#A78BFF", "#8454F9", "#5B29D3"] },  // Mystical
    { colors: ["#D4E157", "#C0CA33", "#A4D65E", "#8BC34A", "#689F38"] },  // Nature
    { colors: ["#FFB3BA", "#FF677D", "#D4A5A5", "#392F5A", "#FFB3BA"] },  // Emotion
    { colors: ["#FAF3DD", "#F4E2D8", "#E7B8A2", "#D67A7A", "#AE4B4B"] },  // Rustic
    { colors: ["#E0F7FA", "#B2EBF2", "#80DEEA", "#4DD0E1", "#26C6DA"] },  // Bright Natural
    { colors: ["#F3E5AB", "#E2C84C", "#C2A700", "#A28200", "#8B6D00"] },  // Sunshine
    { colors: ["#FF6F61", "#6C5B7F", "#C06C84", "#F67280", "#F8B400"] },  // Bold
    { colors: ["#EBEBEB", "#C8C8C8", "#A6A6A6", "#7F7F7F", "#545454"] },  // Grayscale
    { colors: ["#FEF9C7", "#FDE68A", "#FCD34D", "#FBBF24", "#F59E0B"] },  // Bright Yellow
    { colors: ["#F1F5F9", "#D1FAE5", "#A7F3D0", "#6EE7B7", "#34D399"] },  // Fresh Green
    { colors: ["#E0E7FF", "#C7D2FE", "#A5B4FC", "#818CF8", "#6366F1"] },  // Cool Blue
    { colors: ["#C2D9D9", "#B6E4E4", "#A8D8D8", "#9BCBDB", "#8EC5C5"] },  // Soft Water
    { colors: ["#FFF3E0", "#FFCCBC", "#FFAB91", "#FF8A65", "#FF7043"] },  // Warm Softness
    { colors: ["#FFFAFA", "#F2E1E1", "#F1C5C5", "#F19C9C", "#E76C6C"] },  // Warmth
    { colors: ["#C3E0E5", "#B4D4DB", "#A4C9D7", "#94BFD2", "#84B5CE"] },  // Calm
    { colors: ["#F9F9F9", "#F4F4F4", "#E7E7E7", "#D6D6D6", "#C4C4C4"] },  // Light Gray
    { colors: ["#FFB3BA", "#FF677D", "#D4A5A5", "#392F5A", "#FFB3BA"] },  // Love
    { colors: ["#D1C4E9", "#B39DDB", "#9575CD", "#7E57C2", "#673AB7"] },  // Magical
    { colors: ["#FFE4E1", "#FFC0CB", "#FF69B4", "#FF1493", "#DB7093"] },  // Floral
    { colors: ["#E8EAF6", "#C5CAE9", "#9FA8DA", "#7986CB", "#5C6BC0"] },  // Night Sky
    { colors: ["#F3F4F6", "#D1D5DB", "#9CA3AF", "#6B7280", "#374151"] },  // Gothic
    { colors: ["#DCE775", "#C0CA33", "#A4D65E", "#8BC34A", "#689F38"] },  // Fresh Nature
    { colors: ["#FFABAB", "#FFC3A0", "#D5AAFF", "#85E3FF", "#B9FBC0"] },  // Bright Spring
    { colors: ["#FFE4B5", "#FFD700", "#FFC107", "#FF8C00", "#FF4500"] },  // Sunset Glow
    { colors: ["#E2CFCF", "#D1B5B5", "#C18D8D", "#AE6868", "#9B4242"] },  // Earthy Tones
    { colors: ["#E3F2FD", "#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5"] },  // Sky Blue
    { colors: ["#F1F8E9", "#DCEDC8", "#C5E1A5", "#A5D6A7", "#81C784"] },  // Green Pastel
    { colors: ["#FFE0B2", "#FFCC80", "#FFB74D", "#FFA726", "#FF9800"] },  // Warm Orange
    { colors: ["#F3E5F5", "#E1BEE7", "#CE93D8", "#AB47BC", "#8E24AA"] },  // Purple Dream
    { colors: ["#D1C4E9", "#B39DDB", "#9575CD", "#7E57C2", "#673AB7"] },  // Modern
    { colors: ["#F3E5F5", "#E1BEE7", "#CE93D8", "#AB47BC", "#8E24AA"] },  // Soft Purple
    { colors: ["#FCE4EC", "#F8BBD0", "#F48FB1", "#F06292", "#E91E63"] },  // Soft Pink
    { colors: ["#FFE0B2", "#FFCC80", "#FFB74D", "#FFA726", "#FF9800"] },  // Orange Glow
    { colors: ["#E0E0E0", "#BDBDBD", "#9E9E9E", "#757575", "#424242"] },  // Neutral Grays
    { colors: ["#B2EBF2", "#80DEEA", "#4DD0E1", "#26C6DA", "#00BCD4"] },  // Turquoise
    { colors: ["#FFF3E0", "#FFCCBC", "#FFAB91", "#FF8A65", "#FF7043"] },  // Cozy
    { colors: ["#FF5252", "#FF4081", "#E040FB", "#7C4DFF", "#2979FF"] },  // Bold Colors
    { colors: ["#E3F2FD", "#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5"] },  // Bright Blue
    { colors: ["#FFCCBC", "#FFAB91", "#FF8A65", "#FF7043", "#FF5722"] },  // Coral
    { colors: ["#FFE4E1", "#FFC0CB", "#FF69B4", "#FF1493", "#DB7093"] },  // Sweet
    { colors: ["#F8BBD0", "#F48FB1", "#F06292", "#EC407A", "#D81B60"] },  // Vivid Pink
    { colors: ["#FFD740", "#FFC400", "#FFAB00", "#FFA000", "#FF8F00"] },  // Bright Yellow
    { colors: ["#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#F44336"] },  // Vibrant
    { colors: ["#E8EAF6", "#C5CAE9", "#9FA8DA", "#7986CB", "#5C6BC0"] },  // Night Sky
    { colors: ["#F1E6FF", "#D7C4FF", "#A78BFF", "#8454F9", "#5B29D3"] },  // Mystic
    { colors: ["#D1C4E9", "#B39DDB", "#9575CD", "#7E57C2", "#673AB7"] },  // Artistic
    { colors: ["#FFCCBC", "#FFAB91", "#FF8A65", "#FF7043", "#FF5722"] },  // Warmth
    { colors: ["#FF6F61", "#6C5B7F", "#C06C84", "#F67280", "#F8B400"] },  // Colorful
    { colors: ["#D4E157", "#C0CA33", "#A4D65E", "#8BC34A", "#689F38"] },  // Nature
    { colors: ["#C2D9D9", "#B6E4E4", "#A8D8D8", "#9BCBDB", "#8EC5C5"] },  // Aqua
    { colors: ["#B2DFDB", "#80CBC4", "#4DB6AC", "#26A69A", "#009688"] },  // Turquoise
    { colors: ["#FF8A80", "#FF5252", "#FF1744", "#D50000", "#C51162"] },  // Red
    { colors: ["#D1C4E9", "#B39DDB", "#9575CD", "#7E57C2", "#673AB7"] },  // Violet
    { colors: ["#F8BBD0", "#F48FB1", "#F06292", "#EC407A", "#D81B60"] },  // Pastel
    { colors: ["#FFE0B2", "#FFCC80", "#FFB74D", "#FFA726", "#FF9800"] },  // Yellow 
    { colors: ["#E0E0E0", "#BDBDBD", "#9E9E9E", "#757575", "#424242"] },  // Neutral Tones
    { colors: ["#B2EBF2", "#80DEEA", "#4DD0E1", "#26C6DA", "#00BCD4"] },  // Ocean Colors
    
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
                    showCopiedMessage(paletteItem);
                });

                paletteDiv.appendChild(paletteItem);
            });

            palettesContainer.appendChild(paletteDiv);
        }
    });
}

window.addEventListener("load", generatePredefinedPalettes);

function copyToClipboard(text) {
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = text;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}

function showCopiedMessage(paletteItem) {
    const copiedMessage = document.createElement("span");
    copiedMessage.textContent = "Copied!";
    copiedMessage.classList.add("copied-message");

    paletteItem.appendChild(copiedMessage);

    setTimeout(() => {
        copiedMessage.remove();
    }, 1500);
}
