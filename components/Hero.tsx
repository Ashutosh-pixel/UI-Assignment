import { ArrowUpRight, Send, Plus, Grid, Bell } from 'lucide-react';
import Image from 'next/image';
import lady from "../public/hero/lady.png"
import Button1 from './ui/Button1';
import Button2 from './ui/Button2';

export default function Hero() {
    return (
        <div className="min-h-screen text-white font-sans flex flex-col justify-between p-6 sm:p-8 md:p-16 overflow-x-hidden relative selection:bg-blue-500 selection:text-white">

            {/* Background Subtle Glows */}
            <div className="absolute top-1/5 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-500/30 rounded-full blur-[30px] pointer-events-none" />

            {/* Main Content Grid */}
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto z-10 py-12 lg:py-0">

                {/* Left Column: Copy & CTA */}
                <div className="lg:col-span-6 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[67px] font-normal tracking-tight leading-[1.1] text-slate-100">
                        The new foundation <br />
                        <span className="text-slate-300">of modern banking</span>
                    </h1>

                    <p className="text-slate-400 text-base md:text-lg max-w-md font-light leading-relaxed">
                        We drive innovation and growth, provide seamless customer experience and operational excellence
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4 w-full">
                        <Button2 text='Request Demo'/>
                        <Button1 text='Contact Us' />
                    </div>
                </div>

                {/* Right Column: Visual Component Dashboard Stack */}
                <div className="lg:col-span-6 relative flex justify-center items-center pt-12 sm:pt-20 lg:pl-10 mt-6 lg:mt-0 w-full max-w-lg mx-auto lg:max-w-none">

                    {/* Main Rounded Image Frame */}
                    <div className="relative w-full max-w-xs sm:max-w-sm aspect-[4/3] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                        <Image
                            src={lady}
                            alt="User managing banking app"
                            className="w-full h-full object-cover brightness-95 contrast-105"
                        />
                        {/* Subtle inner dark vignette */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Overlay Card 1: Recent Activity (Bottom Left Floating) */}
                    <div className="absolute left-0 sm:-left-4 md:-left-8 bottom-4 sm:bottom-8 w-56 sm:w-64 bg-white/50 backdrop-blur-xs border border-white/40 rounded-2xl p-1 text-slate-900 shadow-xl shadow-black/20 transform translate-x-2 sm:translate-x-6 md:translate-x-12">
                        <div className="bg-white/60 rounded-xl p-2">
                            <h4 className="text-xs font-semibold text-slate-900 mb-3 tracking-wide">Recent activity</h4>

                            {/* Timeframe Chips */}
                            <div className="flex gap-1 mb-2 text-[8px] text-slate-400 overflow-x-auto pb-1 scrollbar-none">
                                <span className="px-2.5 py-1 rounded-full bg-white text-slate-900 hover:bg-white/10 cursor-pointer whitespace-nowrap">This Day</span>
                                <span className="px-2.5 py-1 rounded-full bg-[#081f69] text-white cursor-pointer whitespace-nowrap">This Week</span>
                                <span className="px-2.5 py-1 rounded-full bg-white text-slate-900 hover:bg-white/10 cursor-pointer whitespace-nowrap">This Month</span>
                                <span className="px-2.5 py-1 rounded-full bg-white text-slate-900 hover:bg-white/10 cursor-pointer whitespace-nowrap">6 Month</span>
                            </div>

                            {/* Transaction Item */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-indigo-400 flex items-center justify-center text-white shrink-0">
                                        <ArrowUpRight size={16} />
                                    </div>
                                    <div>
                                        <span className="text-xs font-semibold text-slate-900">To Jin</span>
                                        <span className='text-xs text-slate-500'> • Work</span>
                                        <p className="text-[10px] text-slate-900 mt-0.5">12 Jun 2022</p>
                                    </div>
                                </div>
                                <span className="text-xs font-bold text-slate-900">-$59</span>
                            </div>
                        </div>
                    </div>

                    {/* Overlay Card 2: Balance & Navigation (Top Right Floating) */}
                    <div className="absolute top-0 sm:top-12 right-0 sm:-right-4 md:-right-6 w-48 sm:w-55 bg-white/50 backdrop-blur-xs border border-white/40 rounded-2xl p-1 text-slate-900 shadow-xl shadow-black/20 transform -translate-x-2 sm:translate-x-0">
                        <div className="bg-white/60 rounded-xl p-2">
                            {/* Header profile block */}
                            <div className="flex items-center justify-between mb-3 sm:mb-4">
                                <div className="flex items-center gap-2">
                                    <img
                                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
                                        alt="Toni Kross Profile"
                                        className="w-6 h-6 sm:w-7 sm:h-7 object-cover rounded-md"
                                    />
                                    <div>
                                        <h5 className="text-[10px] sm:text-[11px] font-bold text-slate-900 leading-tight">Toni Kross</h5>
                                        <p className="text-[8px] sm:text-[9px] text-slate-500 leading-none">Good Morning</p>
                                    </div>
                                </div>
                                <button className="text-slate-700 hover:text-slate-900 transition p-1 rounded-md hover:bg-black/5">
                                    <Bell size={12} />
                                </button>
                            </div>

                            {/* Balance presentation */}
                            <div className="mb-3 sm:mb-4">
                                <p className="text-[8px] sm:text-[9px] uppercase tracking-wider font-semibold text-slate-400">Total balance</p>
                                <p className="text-sm sm:text-lg font-extrabold text-[#0a192f] tracking-tight mt-0.5">$42,295.00 <span className="text-[9px] sm:text-[10px] font-bold text-slate-500">USD</span></p>
                            </div>

                            {/* Quick Actions Action Grid */}
                            <div className="grid grid-cols-3 gap-1 text-center border-t border-slate-200/60 pt-2 sm:pt-3">
                                <button className="flex flex-col items-center gap-1 group">
                                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-slate-200 transition">
                                        <Send size={10} className="rotate-45 -translate-y-[1px] translate-x-[1px]" />
                                    </div>
                                    <span className="text-[7px] sm:text-[8px] font-bold text-slate-600 group-hover:text-slate-900">Fund Transfer</span>
                                </button>

                                <button className="flex flex-col items-center gap-1 group">
                                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-slate-200 transition">
                                        <Plus size={10} />
                                    </div>
                                    <span className="text-[7px] sm:text-[8px] font-bold text-slate-600 group-hover:text-slate-900">Add Money</span>
                                </button>

                                <button className="flex flex-col items-center gap-1 group">
                                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-slate-200 transition">
                                        <Grid size={10} />
                                    </div>
                                    <span className="text-[7px] sm:text-[8px] font-bold text-slate-600 group-hover:text-slate-900">More</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Footer / Trusted By Bar */}
            <div className="max-w-7xl mx-auto w-full pt-8 sm:pt-12 z-10">
                <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-4 text-center sm:text-left">Trusted By:</p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-x-8 gap-y-4 items-center opacity-40 grayscale contrast-200">
                    <span className="font-black tracking-tighter text-lg text-white">● SHELLS</span>
                    <span className="font-bold tracking-tight text-base text-white">SmartFinder</span>
                    <span className="font-extrabold italic text-lg text-white">Zoomerr</span>
                    <span className="font-light tracking-widest text-sm text-white">▲ ArtVenue</span>
                    <span className="font-medium text-base tracking-tight text-white">kontrastr</span>
                    <span className="font-bold text-sm tracking-wide text-white">WAVESMARATHON</span>
                </div>
            </div>

        </div>
    );
}