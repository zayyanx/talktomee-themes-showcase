import React, { useState, useRef, useCallback } from 'react';
import { themes, themeCategories } from './themes';
import { Share2, MoreHorizontal, Send, Instagram, Youtube, Twitter, Disc as Tiktok, Zap, PenTool } from 'lucide-react';

function ThemeComponent({ activeTheme }) {
    const tiles = [
        {
            label: 'TikTok', sub: '150K+',
            desc: 'Daily videos, trends & behind-the-scenes',
            iconBg: activeTheme.tile1Bg || 'bg-[#1c1a27]', iconColor: 'text-white',
            icon: <Tiktok size={26} />
        },
        {
            label: 'Instagram', sub: '12K',
            desc: 'Creative work & spontaneous moments',
            iconBg: activeTheme.tile2Bg || 'bg-gradient-to-tr from-[#fd5949] to-[#d6249f]', iconColor: 'text-white',
            icon: <Instagram size={26} />
        },
        {
            label: 'Alkemi Labs', sub: 'Venture Studio',
            desc: 'AI automation & product builds',
            iconBg: activeTheme.tile3Bg || 'bg-[#4f46e5]', iconColor: 'text-yellow-400',
            icon: <Zap size={26} />
        },
        {
            label: 'Substack', sub: 'Blog',
            desc: 'Essays on tech, strategy & growth',
            iconBg: activeTheme.tile4Bg || 'bg-[#ff6719]', iconColor: 'text-white',
            icon: <PenTool size={26} />
        },
    ];

    // Determine branding color based on theme
    const brandingTextColor = activeTheme.brandingColor || 'text-white';

    return (
        <div
            className="relative w-full max-w-[420px] md:max-w-[700px] h-full max-h-[95vh] rounded-[32px] md:rounded-[48px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] transition-all duration-700 ease-in-out flex flex-col"
            style={{
                background: activeTheme.background,
                backgroundSize: activeTheme.backgroundSize || 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>

            {/* Scrollable Container for everything except Input/Branding */}
            <div className="flex-1 overflow-y-auto no-scrollbar pb-32">

                {/* Header Section */}
                <div className="pt-10 px-8 flex justify-between items-center relative z-20 mb-6">
                    <button className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeTheme.cardBackground}`}>
                        <Share2 size={18} />
                    </button>
                    <button className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeTheme.cardBackground}`}>
                        <MoreHorizontal size={18} />
                    </button>
                </div>

                <div className="px-6 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-gray-300 overflow-hidden shadow-sm mb-4"></div>
                    <h1 className={`${activeTheme.handleFont} ${activeTheme.textStyle} text-3xl font-bold text-center mb-4`}>
                        @zzzayyan
                    </h1>

                    <div className="flex items-center justify-center gap-4 mb-4">
                        {[<Tiktok size={18} />, <Instagram size={18} />, <Zap size={18} />, <PenTool size={18} />, <Twitter size={18} />].map((icon, i) => (
                            <button key={i} className={`${activeTheme.textStyle} opacity-60 hover:opacity-100 transition-opacity`}>
                                {icon}
                            </button>
                        ))}
                    </div>

                    <p className={`${activeTheme.textStyle} text-sm font-medium text-center opacity-80 mb-8 max-w-[280px]`}>
                        Viral Creator • Global Adventures • Fan Experience
                    </p>
                </div>

                {/* Tile Carousel */}
                <div className="px-6 mb-8 mt-2">
                    <div className="flex gap-4 overflow-x-auto no-scrollbar py-2 -mx-2 px-2 scroll-smooth snap-x">
                        {tiles.map((tile, i) => (
                            <div
                                key={i}
                                className={`snap-start shrink-0 w-[130px] h-[200px] rounded-[24px] border border-white/10 ${activeTheme.cardBackground} overflow-hidden shadow-lg flex flex-col transition-transform hover:scale-[1.02] duration-300`}
                            >
                                <div className={`h-[70%] w-full ${tile.iconBg} ${tile.iconColor} flex items-center justify-center`}>
                                    {tile.icon}
                                </div>
                                <div className="h-[30%] px-4 flex items-center">
                                    <p className="text-xs font-semibold leading-tight line-clamp-2">
                                        {tile.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chat Area */}
                <div className="px-6 flex flex-col gap-4">
                    <div className={`flex items-center gap-4 mb-2 ${activeTheme.textStyle} opacity-20`}>
                        <div className="h-[1px] flex-1 bg-current rounded-full"></div>
                        <span className="text-[10px] font-black uppercase tracking-[0.25em]">Chat</span>
                        <div className="h-[1px] flex-1 bg-current rounded-full"></div>
                    </div>

                    <div className="flex justify-start">
                        <div className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed ${activeTheme.chatBubbleAIStyle}`}>
                            Hey! What would you like to know about me? 👋
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed ${activeTheme.chatBubbleUserStyle}`}>
                            What services do you offer?
                        </div>
                    </div>
                    <div className="flex justify-start">
                        <div className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed ${activeTheme.chatBubbleAIStyle}`}>
                            I offer fractional CPO services, content strategy, and 1:1 mentorship for creators 🚀
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed ${activeTheme.chatBubbleUserStyle}`}>
                            How do I book a call?
                        </div>
                    </div>
                    <div className="flex justify-start">
                        <div className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed ${activeTheme.chatBubbleAIStyle}`}>
                            Drop me a message here and I'll get back to you within 24 hours ✨
                        </div>
                    </div>

                    {/* Suggestion Chips */}
                    <div className="flex gap-2 mt-2 overflow-x-auto no-scrollbar whitespace-nowrap pb-4">
                        {['Fractional CPO services', 'Fitness & training', 'Travel recs', 'Latest Projects'].map((text, idx) => (
                            <button key={idx} className={`px-4 py-2 rounded-full text-[11px] font-medium border ${activeTheme.textStyle} border-current/10 bg-current/5 backdrop-blur-sm shadow-sm hover:bg-current/10 transition-colors`}>
                                {text}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sticky/Fixed Bottom Area */}
            <div className={`absolute bottom-0 left-0 w-full z-30 pb-6 pt-8 px-6 ${activeTheme.chatInputContainerStyle}`}>
                <div className="relative">
                    <input type="text" placeholder="Ask anything..." className={`w-full py-4 pl-6 pr-14 text-[15px] font-medium ${activeTheme.chatInputStyle} shadow-xl`} />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 border border-white/10 flex items-center justify-center text-white backdrop-blur-md shadow-sm active:scale-95 transition-all">
                        <Send size={18} />
                    </button>
                </div>

                <div className="flex justify-center mt-4">
                    <div className={`${activeTheme.brandingBubbleStyle || 'bg-black/20 backdrop-blur-md border border-white/5'} px-6 py-2 rounded-full flex items-center justify-center ${brandingTextColor} opacity-95 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg`}>
                        <p className="text-[11px] font-bold tracking-widest uppercase">Join zzayyan on TalktoMee</p>
                    </div>
                </div>

                <div className="w-full flex justify-center mt-3 opacity-30">
                    <div className="w-12 h-1 bg-current rounded-full"></div>
                </div>
            </div>
        </div>
    );
}

function App() {
    const [activeThemeId, setActiveThemeId] = useState(themes[0].id);
    const [activeCategory, setActiveCategory] = useState('All');

    const activeTheme = themes.find(t => t.id === activeThemeId);

    const filteredThemes = activeCategory === 'All'
        ? themes
        : themes.filter(t => t.category === activeCategory);

    return (
        <div className="flex h-screen bg-gray-50 flex-col md:flex-row overflow-hidden font-sans">
            {/* LEFT PANEL: The Mock Phone Profile */}
            <div
                className="flex-1 flex items-center justify-center p-8 lg:p-12 relative shadow-inner overflow-hidden transition-colors duration-700"
                style={{ backgroundColor: activeTheme.previewBg || '#f3f4f6' }}
            >
                <ThemeComponent activeTheme={activeTheme} />
            </div>

            {/* RIGHT PANEL: Theme Selector */}
            <div className="w-full md:w-[450px] lg:w-[500px] bg-white border-l border-gray-200 h-full flex flex-col shadow-xl z-20">
                <div className="p-6 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Appearance</h2>
                    <p className="text-gray-500 text-sm mt-1">Select a theme to preview your profile.</p>
                </div>

                <div className="px-6 py-4 flex gap-2 overflow-x-auto border-b border-gray-100 no-scrollbar snap-x">
                    <button
                        onClick={() => setActiveCategory('All')}
                        className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all snap-start ${activeCategory === 'All' ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    >
                        All Themes
                    </button>
                    {themeCategories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all snap-start ${activeCategory === cat ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="flex-1 overflow-y-auto p-6 bg-gray-50/50">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                        {filteredThemes.map(theme => (
                            <div
                                key={theme.id}
                                onClick={() => setActiveThemeId(theme.id)}
                                className="flex flex-col items-center cursor-pointer group"
                            >
                                <div
                                    className={`w-full aspect-[9/16] rounded-2xl mb-3 relative overflow-hidden transition-all duration-300 shadow-sm ${activeThemeId === theme.id ? 'ring-4 ring-black ring-offset-2 scale-[1.05] shadow-xl z-10' : 'ring-1 ring-gray-200 hover:ring-gray-400'}`}
                                    style={{
                                        background: theme.background,
                                        backgroundSize: theme.backgroundSize || 'cover',
                                    }}
                                >
                                    <div className="absolute top-4 left-0 right-0 flex flex-col items-center px-4">
                                        <div className="w-8 h-8 rounded-full bg-white/40 mb-2 border border-white/20"></div>
                                        <div className="w-16 h-1 bg-white/40 rounded-full mb-4"></div>
                                        <div className={`w-full h-5 rounded-lg mb-2 ${theme.buttonStyle} border-none`}></div>
                                        <div className={`w-full h-5 rounded-lg ${theme.buttonStyle} border-none`}></div>
                                    </div>
                                </div>
                                <span className={`text-xs font-bold text-center mb-0.5 ${activeThemeId === theme.id ? 'text-black' : 'text-gray-600'}`}>
                                    {theme.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
