import React, { useState, useRef, useCallback } from 'react';
import { themes, themeCategories } from './themes';
import { Share2, MoreHorizontal, Send, Instagram, Youtube, Twitter, Disc as Tiktok, Zap, PenTool, Calendar, Bot } from 'lucide-react';

function DefaultPhoneContent({ activeTheme }) {
    return (
        <div
            className="relative w-full max-w-[380px] h-[800px] max-h-[90vh] rounded-[48px] overflow-hidden shadow-2xl transition-all duration-700 ease-in-out border-[8px] border-black/80 ring-4 ring-gray-900 ring-offset-2"
            style={{
                background: activeTheme.background,
                backgroundSize: activeTheme.backgroundSize || 'cover',
                backgroundPosition: 'center'
            }}
        >
            {/* Top Icons */}
            <div className="flex justify-between items-center p-6 w-full z-10 relative">
                <button className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeTheme.cardBackground}`}>
                    <Share2 size={18} />
                </button>
                <button className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeTheme.cardBackground}`}>
                    <MoreHorizontal size={18} />
                </button>
            </div>

            {/* Scrollable Content Container */}
            <div className="absolute inset-0 pt-24 pb-24 overflow-y-auto no-scrollbar z-10 flex flex-col items-center">
                {/* Profile Section */}
                <div className="flex flex-col items-center mt-8 px-6 relative w-full">
                    {/* Avatar */}
                    <div className="w-24 h-24 rounded-full bg-gray-300 overflow-hidden mb-4 border-4 border-transparent shadow-lg flex items-center justify-center shrink-0" style={{ borderColor: activeTheme.cardBackground?.split(' ')[0]?.replace('bg-', '') || 'white' }}>
                        {/* Empty avatar for preview */}
                    </div>

                    {/* Handle & Bio */}
                    <h1 className={`${activeTheme.handleFont} ${activeTheme.textStyle} text-3xl font-bold mb-2 transition-colors duration-500`}>
                        @zzzayyan
                    </h1>

                    {/* Social Icons */}
                    <div className="flex gap-3 mb-4">
                        <button className={`w-8 h-8 rounded-full flex items-center justify-center ${activeTheme.socialIconStyle}`}>
                            <Twitter size={14} />
                        </button>
                        <button className={`w-8 h-8 rounded-full flex items-center justify-center ${activeTheme.socialIconStyle}`}>
                            <Instagram size={14} />
                        </button>
                        <button className={`w-8 h-8 rounded-full flex items-center justify-center ${activeTheme.socialIconStyle}`}>
                            <Tiktok size={14} />
                        </button>
                        <button className={`w-8 h-8 rounded-full flex items-center justify-center ${activeTheme.socialIconStyle}`}>
                            <Youtube size={14} />
                        </button>
                    </div>

                    <p className={`${activeTheme.textStyle} text-sm font-medium opacity-90 mb-8 transition-colors duration-500 text-center px-4`}>
                        Viral Creator • Global Adventures • Ultimate Fan Experience
                    </p>

                    {/* Links */}
                    <div className="w-full space-y-4 mb-8">
                        {['Watch Latest Videos', 'Personal Website', 'Join the Community'].map((link, i) => (
                            <button
                                key={i}
                                className={`w-full py-4 px-6 flex justify-center items-center relative group rounded-xl ${activeTheme.buttonStyle}`}
                            >
                                <span className="font-semibold text-[15px]">{link}</span>
                                <MoreHorizontal size={16} className="absolute right-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Chat Input Box (Sticky at bottom inside phone frame) */}
            <div className={`absolute bottom-0 left-0 w-full z-20 pb-6 pt-12 px-6 ${activeTheme.chatInputContainerStyle}`}>
                {/* Subtle Suggestion Chips */}
                <div className="-mx-6 flex gap-2 mb-4 overflow-x-auto no-scrollbar whitespace-nowrap px-6">
                    {['Fractional CPO services', 'Fitness & training', 'Travel recs', 'Latest Projects', 'Global Adventures'].map((text, idx) => (
                        <button
                            key={idx}
                            className={`px-4 py-2 rounded-full text-[11px] font-medium border transition-all hover:bg-current/10 shrink-0 ${activeTheme.textStyle} border-current/10 bg-current/5 backdrop-blur-sm shadow-sm`}
                        >
                            {text}
                        </button>
                    ))}
                </div>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className={`w-full py-3 pl-4 pr-12 text-sm ${activeTheme.chatInputStyle}`}
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                        <Send size={14} />
                    </button>
                </div>
            </div>
        </div>
    );
}

function LiquidGreenPhoneContent({ activeTheme }) {
    const scrollRef = useRef(null);
    const [expanded, setExpanded] = useState(true);

    const handleScroll = useCallback(() => {
        const el = scrollRef.current;
        if (!el) return;
        setExpanded(el.scrollTop < 60);
    }, []);

    const tiles = [
        {
            label: 'TikTok', sub: '150K+',
            desc: 'Daily videos, trends & behind-the-scenes',
            iconBg: 'bg-[#1c1a27]', iconColor: 'text-white',
            icon: <Tiktok size={expanded ? 26 : 20} />
        },
        {
            label: 'Instagram', sub: '12K',
            desc: 'Creative work & spontaneous moments',
            iconBg: 'bg-gradient-to-tr from-[#fd5949] to-[#d6249f]', iconColor: 'text-white',
            icon: <Instagram size={expanded ? 26 : 20} />
        },
        {
            label: 'Alkemi Labs', sub: 'Venture Studio',
            desc: 'AI automation & product builds',
            iconBg: 'bg-[#4f46e5]', iconColor: 'text-yellow-400',
            icon: <Zap size={expanded ? 26 : 20} />
        },
        {
            label: 'Substack', sub: 'Blog',
            desc: 'Essays on tech, strategy & growth',
            iconBg: 'bg-[#ff6719]', iconColor: 'text-white',
            icon: <PenTool size={expanded ? 26 : 20} />
        },
    ];

    return (
        <div
            className="relative w-full max-w-[380px] h-[800px] max-h-[90vh] rounded-[48px] overflow-hidden shadow-2xl transition-all duration-700 ease-in-out border-[8px] border-black/80 ring-4 ring-gray-900 ring-offset-2 flex flex-col"
            style={{
                background: activeTheme.background,
                backgroundSize: activeTheme.backgroundSize || 'cover',
                backgroundPosition: 'center'
            }}
        >
            {/* Top Icons */}
            <div className="flex justify-between items-center p-6 w-full z-10 relative shrink-0">
                <button className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeTheme.cardBackground}`}>
                    <Share2 size={18} />
                </button>
                <button className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeTheme.cardBackground}`}>
                    <MoreHorizontal size={18} />
                </button>
            </div>

            {/* Avatar & Header Section */}
            <div className="px-6 relative w-full shrink-0 z-10 tracking-tight">
                <div className="w-20 h-20 mx-auto rounded-full bg-gray-300 overflow-hidden mb-3 shadow-sm flex items-center justify-center shrink-0"></div>

                <h1 className={`${activeTheme.handleFont} ${activeTheme.textStyle} text-2xl font-bold text-center mb-2 transition-colors duration-500`}>
                    @zzzayyan
                </h1>

                {/* Social icon row */}
                <div className="flex items-center justify-center gap-3 mb-2">
                    {[
                        { icon: <Tiktok size={14} />, bg: 'bg-[#1c1a27]', color: 'text-white' },
                        { icon: <Instagram size={14} />, bg: 'bg-gradient-to-tr from-[#fd5949] to-[#d6249f]', color: 'text-white' },
                        { icon: <Zap size={14} />, bg: 'bg-[#4f46e5]', color: 'text-yellow-400' },
                        { icon: <PenTool size={14} />, bg: 'bg-[#ff6719]', color: 'text-white' },
                        { icon: <Twitter size={14} />, bg: 'bg-[#1da1f2]', color: 'text-white' },
                    ].map((s, i) => (
                        <button key={i} className={`w-7 h-7 rounded-full flex items-center justify-center shadow-sm ${s.bg} ${s.color}`}>
                            {s.icon}
                        </button>
                    ))}
                </div>

                <p className={`${activeTheme.textStyle} text-xs font-medium opacity-70 mb-4 text-center`}>
                    Testing the scene
                </p>

                {/* Morphing Tile Carousel */}
                <div className="-mx-6 flex gap-3 overflow-x-auto snap-x no-scrollbar px-6"
                    style={{ paddingBottom: expanded ? '16px' : '12px', marginBottom: expanded ? '4px' : '2px', transition: 'padding-bottom 0.4s ease, margin-bottom 0.4s ease' }}
                >
                    {tiles.map((tile, i) => (
                        <div
                            key={i}
                            className={`snap-start shrink-0 border border-white/20 ${activeTheme.cardBackground} overflow-hidden`}
                            style={{
                                width: expanded ? '148px' : '100px',
                                borderRadius: '20px',
                                transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1), border-radius 0.4s ease',
                                boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
                            }}
                        >
                            {/* Image / Icon area */}
                            <div
                                className={`w-full ${tile.iconBg} ${tile.iconColor} flex items-center justify-center`}
                                style={{
                                    height: expanded ? '110px' : '56px',
                                    transition: 'height 0.4s cubic-bezier(0.4,0,0.2,1)'
                                }}
                            >
                                {tile.icon}
                            </div>

                            {/* Text area */}
                            <div
                                className="px-3"
                                style={{
                                    paddingTop: expanded ? '10px' : '7px',
                                    paddingBottom: expanded ? '12px' : '8px',
                                    transition: 'padding 0.4s ease'
                                }}
                            >
                                <p className="font-bold leading-tight" style={{ fontSize: expanded ? '13px' : '12px', transition: 'font-size 0.3s ease' }}>
                                    {tile.label}
                                </p>
                                <p className="opacity-50 font-medium" style={{ fontSize: '10px' }}>
                                    {tile.sub}
                                </p>
                                {/* Description — fades in when expanded */}
                                <p
                                    className="text-[11px] leading-snug"
                                    style={{
                                        opacity: expanded ? 0.6 : 0,
                                        maxHeight: expanded ? '36px' : '0px',
                                        marginTop: expanded ? '5px' : '0px',
                                        overflow: 'hidden',
                                        transition: 'opacity 0.35s ease, max-height 0.4s ease, margin-top 0.4s ease'
                                    }}
                                >
                                    {tile.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scrollable Chat Area */}
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex-1 overflow-y-auto no-scrollbar px-6 pb-24 pt-3 flex flex-col gap-3 z-10 relative"
            >
                <div className="flex justify-start">
                    <div className={`max-w-[78%] px-4 py-2.5 text-sm leading-relaxed ${activeTheme.chatBubbleAIStyle}`}>
                        Hey! What would you like to know about me? 👋
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className={`max-w-[78%] px-4 py-2.5 text-sm leading-relaxed ${activeTheme.chatBubbleUserStyle}`}>
                        What services do you offer?
                    </div>
                </div>
                <div className="flex justify-start">
                    <div className={`max-w-[78%] px-4 py-2.5 text-sm leading-relaxed ${activeTheme.chatBubbleAIStyle}`}>
                        I offer fractional CPO services, content strategy, and 1:1 mentorship for creators 🚀
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className={`max-w-[78%] px-4 py-2.5 text-sm leading-relaxed ${activeTheme.chatBubbleUserStyle}`}>
                        How do I book a call?
                    </div>
                </div>
                <div className="flex justify-start">
                    <div className={`max-w-[78%] px-4 py-2.5 text-sm leading-relaxed ${activeTheme.chatBubbleAIStyle}`}>
                        Drop me a message here and I'll get back to you within 24 hours ✨
                    </div>
                </div>

                {/* Suggestion Chips — scroll to bottom to see */}
                <div className="-mx-6 flex gap-2 mt-2 overflow-x-auto no-scrollbar whitespace-nowrap px-6 pb-1">
                    {['Fractional CPO services', 'Fitness & training', 'Travel recs', 'Latest Projects', 'Global Adventures'].map((text, idx) => (
                        <button
                            key={idx}
                            className={`px-4 py-2 rounded-full text-[11px] font-medium border transition-all hover:bg-current/10 shrink-0 ${activeTheme.textStyle} border-current/10 bg-current/5 backdrop-blur-sm shadow-sm`}
                        >
                            {text}
                        </button>
                    ))}
                </div>
            </div>

            {/* Sticky Chat Input */}
            <div className={`absolute bottom-0 left-0 w-full z-20 pb-6 pt-4 px-6 ${activeTheme.chatInputContainerStyle}`}>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Ask anything..."
                        className={`w-full py-3.5 pl-5 pr-12 text-[15px] font-medium ${activeTheme.chatInputStyle}`}
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 border border-white/10 flex items-center justify-center text-white hover:bg-white/30 transition-colors backdrop-blur-md">
                        <Send size={15} />
                    </button>
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
        <div className="flex h-screen bg-gray-50 flex-col md:flex-row overflow-hidden">

            {/* LEFT PANEL: The Mock Phone Profile */}
            <div className="flex-1 flex items-center justify-center p-4 bg-gray-100 relative shadow-inner overflow-hidden">
                {activeTheme.id === 'liquid-green'
                    ? <LiquidGreenPhoneContent activeTheme={activeTheme} />
                    : <DefaultPhoneContent activeTheme={activeTheme} />
                }
            </div>

            {/* RIGHT PANEL: Theme Selector (The "Linktree Admin" side) */}
            <div className="w-full md:w-[450px] lg:w-[500px] bg-white border-l border-gray-200 h-full flex flex-col shadow-xl z-20">
                <div className="p-6 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900">Appearance</h2>
                    <p className="text-gray-500 text-sm mt-1">Select a theme to preview your profile.</p>
                </div>

                {/* Categories */}
                <div className="px-6 py-4 flex gap-2 overflow-x-auto border-b border-gray-100 no-scrollbar snap-x">
                    <button
                        onClick={() => setActiveCategory('All')}
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors snap-start ${activeCategory === 'All' ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    >
                        All Themes
                    </button>
                    {themeCategories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors snap-start ${activeCategory === cat ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Theme Grid */}
                <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {filteredThemes.map(theme => (
                            <div
                                key={theme.id}
                                onClick={() => setActiveThemeId(theme.id)}
                                className={`flex flex-col items-center cursor-pointer group`}
                            >
                                {/* Theme Thumbnail Preview */}
                                <div
                                    className={`w-full aspect-[9/16] rounded-2xl mb-2 relative overflow-hidden transition-all duration-300 ${activeThemeId === theme.id ? 'ring-4 ring-blue-500 ring-offset-2 scale-[1.02]' : 'ring-1 ring-gray-200 hover:ring-gray-300'}`}
                                    style={{
                                        background: theme.background,
                                        backgroundSize: theme.backgroundSize || 'cover',
                                    }}
                                >
                                    {/* Mock content inside thumbnail */}
                                    <div className="absolute top-4 left-0 right-0 flex flex-col items-center px-4">
                                        <div className="w-8 h-8 rounded-full bg-white/50 mb-2"></div>
                                        <div className="w-16 h-2 bg-white/50 rounded-full mb-4"></div>
                                        <div className={`w-full h-6 rounded-xl mb-2 ${theme.buttonStyle} border-none`}></div>
                                        <div className={`w-full h-6 rounded-xl ${theme.buttonStyle} border-none`}></div>
                                    </div>
                                </div>

                                <span className={`text-sm font-medium text-center line-clamp-1 ${activeThemeId === theme.id ? 'text-blue-600' : 'text-gray-700'}`}>
                                    {theme.name}
                                </span>
                                <span className="text-[10px] uppercase tracking-wider text-gray-400 mt-0.5">
                                    {theme.category}
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
