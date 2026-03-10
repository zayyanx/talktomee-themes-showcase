import fs from 'fs';

const filePath = 'src/themes.js';
let content = fs.readFileSync(filePath, 'utf-8');

// Match each theme object. They start with { and end with } and are separated by commas.
// Using a regex that handles nested structures if any (though these are flat)
const themeMatches = content.match(/{[\s\S]*?id:[\s\S]*?}/g);

if (!themeMatches) {
    console.error("Could not find any themes in themes.js");
    process.exit(1);
}

const newThemes = themeMatches.map(themeStr => {
    // Extract core properties manually to avoid duplication
    const getProp = (prop) => {
        const m = themeStr.match(new RegExp(`${prop}:\\s*('[^']+'|\`[^\`]+\`|"[^"]+")`));
        return m ? m[1] : null;
    };

    const id = getProp('id');
    const name = getProp('name');
    const category = getProp('category');
    const background = getProp('background');
    const backgroundSize = getProp('backgroundSize');
    const buttonStyle = getProp('buttonStyle');
    const textStyle = getProp('textStyle');
    const handleFont = getProp('handleFont');
    const cardBackground = getProp('cardBackground');

    // Logic to determine light/dark
    let isLightText = false;
    const ts = textStyle ? textStyle.replace(/['"`]/g, '') : '';
    if (ts.includes('white') || ts.includes('gray-200') || ts.includes('gray-300') || ts.includes('gray-400') || ts.match(/#([FfEeDdCcBb]{3}|[FfEeDdCcBb]{6})/)) {
        isLightText = true;
    }

    let aiStyle, userStyle, inputStyle, containerStyle;

    if (isLightText) {
        aiStyle = 'bg-black/60 backdrop-blur-md text-white border border-white/10 rounded-2xl rounded-bl-sm shadow-sm';
        userStyle = 'bg-white/20 backdrop-blur-md text-white rounded-2xl rounded-br-sm shadow-sm border border-white/10';
        inputStyle = 'bg-black/40 text-white border border-white/20 rounded-full focus:outline-none focus:ring-1 focus:ring-white/50 placeholder-white/50 backdrop-blur-md';
        containerStyle = 'bg-gradient-to-t from-black/80 via-black/50 to-transparent';
    } else {
        aiStyle = 'bg-white/80 backdrop-blur-md text-black border border-black/10 rounded-2xl rounded-bl-sm shadow-sm';
        userStyle = 'bg-black/10 backdrop-blur-md text-black rounded-2xl rounded-br-sm shadow-sm border border-black/5';
        inputStyle = 'bg-white/60 text-black border border-black/20 rounded-full focus:outline-none focus:ring-1 focus:ring-black/50 placeholder-black/50 backdrop-blur-md';
        containerStyle = 'bg-gradient-to-t from-white/90 via-white/50 to-transparent';
    }

    // Reconstruct the object cleanly
    let obj = `    {\n`;
    obj += `        id: ${id},\n`;
    obj += `        name: ${name},\n`;
    obj += `        category: ${category},\n`;
    obj += `        background: ${background},\n`;
    if (backgroundSize) obj += `        backgroundSize: ${backgroundSize},\n`;
    obj += `        buttonStyle: ${buttonStyle},\n`;
    obj += `        textStyle: ${textStyle},\n`;
    obj += `        handleFont: ${handleFont},\n`;
    obj += `        cardBackground: ${cardBackground},\n`;
    obj += `        coverImage: 'bg-gradient-to-br from-gray-800 to-gray-900',\n`;
    obj += `        socialIconStyle: 'bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors',\n`;
    obj += `        chatBubbleAIStyle: '${aiStyle}',\n`;
    obj += `        chatBubbleUserStyle: '${userStyle}',\n`;
    obj += `        chatInputStyle: '${inputStyle}',\n`;
    obj += `        chatInputContainerStyle: '${containerStyle}'\n`;
    obj += `    }`;

    return obj;
});

const finalContent = `export const themes = [\n${newThemes.join(',\n')}\n];\n\nexport const themeCategories = ['Vibrant', 'Minimal', 'Dark', 'Organic', 'Monochrome', 'Gradient', 'Y2K', 'Aesthetic', 'Abstract'];\n`;

fs.writeFileSync(filePath, finalContent, 'utf-8');
console.log('themes.js cleaned and recolored successfully.');
