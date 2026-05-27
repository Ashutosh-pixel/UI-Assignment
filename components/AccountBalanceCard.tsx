import React from 'react';

export default function TotalBalanceCard() {
  return (
    <div className="w-full max-w-[280px] bg-white/75 backdrop-blur-md border border-white/40 rounded-[24px] p-5 shadow-xl shadow-black/10 text-slate-900 font-sans text-left">
      
      {/* Header block */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <img 
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=120" 
            alt="Toni Kross" 
            className="w-10 h-10 rounded-xl object-cover"
          />
          <div>
            <h4 className="text-sm font-bold text-slate-900 leading-none">Toni Kross</h4>
            <p className="text-[11px] text-slate-500 mt-1 font-medium">Good Morning</p>
          </div>
        </div>
        <button className="w-8 h-8 rounded-lg bg-white/40 border border-white/20 flex items-center justify-center text-slate-800 hover:bg-white/60 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56’ 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        </button>
      </div>

      {/* Balance */}
      <div className="mb-4">
        <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide">Total balance</p>
        <p className="text-xl font-extrabold text-[#002266] tracking-tight mt-0.5">
          $42,295.00 <span className="text-xs font-bold text-[#002266]/70">USD</span>
        </p>
      </div>

      <hr className="border-slate-300/50 mb-4" />

      {/* Icon Shortcuts Grid */}
      <div className="grid grid-cols-3 gap-1 text-center">
        {/* Fund Transfer */}
        <button className="flex flex-col items-center gap-1.5 group">
          <div className="w-11 h-11 rounded-xl bg-white/40 border border-white/20 flex items-center justify-center text-slate-800 group-hover:bg-white/60 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5h16.5M5.25 7.5h13.5m-13.5 3h13.5m-13.5 3h13.5M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 18.75h18" />
            </svg>
          </div>
          <span className="text-[10px] font-bold text-slate-800 tracking-tight">Fund Transfer</span>
        </button>

        {/* Add Money */}
        <button className="flex flex-col items-center gap-1.5 group">
          <div className="w-11 h-11 rounded-xl bg-white/40 border border-white/20 flex items-center justify-center text-slate-800 group-hover:bg-white/60 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
            </svg>
          </div>
          <span className="text-[10px] font-bold text-slate-800 tracking-tight">Add Money</span>
        </button>

        {/* More */}
        <button className="flex flex-col items-center gap-1.5 group">
          <div className="w-11 h-11 rounded-xl bg-white/40 border border-white/20 flex items-center justify-center text-slate-800 group-hover:bg-white/60 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>
          </div>
          <span className="text-[10px] font-bold text-slate-800 tracking-tight">More</span>
        </button>
      </div>

    </div>
  );
}