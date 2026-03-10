import fs from 'fs';

let content = fs.readFileSync('src/themes.js', 'utf-8');

// Split file by object
let newContent = content.replace(/({[\s\S]*?id:[\s\S]*?})/g, (match) => {
    const textStyleMatch = match.match(/textStyle:\s*'([^']+)'/);
    let isLightText = false;
    let textStyle = textStyleMatch ? textStyleMatch[1] : '';

    if (textStyle.includes('white') || textStyle.includes('gray-200') || textStyle.includes('gray-300') || textStyle.includes('gray-400')) {
        isLightText = true;
    }
    if (textStyle.match(/#([FfEeDdCcBb]{3}|[FfEeDdCcBb]{6})/)) {
        isLightText = true;
    }

    let aiStyle = '';
    let userStyle = '';
    let inputStyle = '';
    let containerStyle = '';

    if (isLightText) {
        // DARK BACKGROUND => Light Text
        aiStyle = 'bg-black/60 backdrop-blur-md text-white border border-white/10 rounded-2xl rounded-bl-sm shadow-sm';
        userStyle = 'bg-white/20 backdrop-blur-md text-white rounded-2xl rounded-br-sm shadow-sm border border-white/10';
        inputStyle = 'bg-black/40 text-white border border-white/20 rounded-full focus:outline-none focus:ring-1 focus:ring-white/50 placeholder-white/50 backdrop-blur-md';
        containerStyle = 'bg-gradient-to-t from-black/80 via-black/50 to-transparent';
    } else {
        // LIGHT BACKGROUND => Dark Text
        aiStyle = 'bg-white/80 backdrop-blur-md text-black border border-black/10 rounded-2xl rounded-bl-sm shadow-sm';
        userStyle = 'bg-black/10 backdrop-blur-md text-black rounded-2xl rounded-br-sm shadow-sm border border-black/5';
        inputStyle = 'bg-white/60 text-black border border-black/20 rounded-full focus:outline-none focus:ring-1 focus:ring-black/50 placeholder-black/50 backdrop-blur-md';
        containerStyle = 'bg-gradient-to-t from-white/90 via-white/50 to-transparent';
    }

    let replaced = match
        .replace(/chatBubbleAIStyle:\s*'[^']+',?/, `chatBubbleAIStyle: '${aiStyle}',`)
        .replace(/chatBubbleUserStyle:\s*'[^']+',?/, `chatBubbleUserStyle: '${userStyle}',`)
        .replace(/chatInputStyle:\s*'[^']+',?/, `chatInputStyle: '${inputStyle}',`)
        .replace(/chatInputContainerStyle:\s*'[^']+',?/, `chatInputContainerStyle: '${containerStyle}',`);

    return replaced;
});

fs.writeFileSync('src/themes.js', newContent, 'utf-8');
console.log('Chat colors updated to blend perfectly');
