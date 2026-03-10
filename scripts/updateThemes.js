import fs from 'fs';

let fileContent = fs.readFileSync('src/themes.js', 'utf-8');

// The objects end with `}`. Let's find every `cardBackground` line and insert the properties right after it.
// To be safe, let's just replace `cardBackground: (.*?),?(\r?\n|\s*})`
const modifiedContent = fileContent.replace(/(cardBackground:\s*(?:'[^']+'|`[^`]+`)(?:,\s*)?)/g, `$1\n        coverImage: 'bg-gradient-to-br from-gray-800 to-gray-900',\n        socialIconStyle: 'bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors',\n        chatBubbleAIStyle: 'bg-[#2a2a2a] text-white rounded-2xl rounded-bl-sm border border-white/5 shadow-md',\n        chatBubbleUserStyle: 'bg-blue-500 text-white rounded-2xl rounded-br-sm shadow-md',\n        chatInputStyle: 'bg-black text-white border border-white/20 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500',\n        chatInputContainerStyle: 'bg-[#0f0f0f]',\n`);

fs.writeFileSync('src/themes.js', modifiedContent, 'utf-8');
console.log('Themes updated successfully with properties.');
