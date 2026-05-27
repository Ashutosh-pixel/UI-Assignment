import React from 'react';

export default function RecentActivityCard() {
  const activityFilters = [
    { label: 'This Day', active: false },
    { label: 'This Week', active: true },
    { label: 'This Month', active: false },
    { label: '6 Month', active: false },
  ];

  return (
    <div className="w-full max-w-[340px] bg-white/75 backdrop-blur-md border border-white/40 rounded-[24px] p-5 shadow-xl shadow-black/10 font-sans text-left">
      <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-3.5">
        Recent activity
      </h3>
      
      {/* Pill filters */}
      <div className="flex gap-1.5 mb-5">
        {activityFilters.map((filter, idx) => (
          <button
            key={idx}
            className={`px-3 py-1.5 text-[11px] font-semibold rounded-full transition-all ${
              filter.active
                ? 'bg-[#002266] text-white'
                : 'bg-white text-slate-800 hover:bg-white/80'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Transaction list item */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-[#8b7cff] text-white rounded-xl flex items-center justify-center shadow-md shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 leading-tight">
              To Jin <span className="text-slate-500 font-normal">・ Work</span>
            </h4>
            <p className="text-[11px] font-medium text-slate-500 mt-0.5">12 jun 2022</p>
          </div>
        </div>
        <div className="text-base font-bold text-slate-900">-$59</div>
      </div>
    </div>
  );
}