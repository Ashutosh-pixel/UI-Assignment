import React from 'react';
import { BottomNav } from './BottomNav';

interface ScreenProps {
  onTabChange: (tab: 'home' | 'card' | 'transaction' | 'profile') => void;
  activeTab: string;
}

const MobileTransaction = ({ onTabChange, activeTab }: ScreenProps) => {
  const barData = [
    { month: 'Jan', val: 'h-24', active: false }, { month: 'Feb', val: 'h-24', active: false },
    { month: 'Mar', val: 'h-32', active: true }, { month: 'Apr', val: 'h-24', active: false },
    { month: 'May', val: 'h-24', active: false }, { month: 'Jun', val: 'h-24', active: false },
  ];

  return (
    <div className="w-[310px] h-[640px] bg-white rounded-[40px] shadow-2xl border-[6px] overflow-hidden flex flex-col justify-between font-sans select-none animate-fadeIn">
      <div className="p-5 overflow-y-auto flex-1 space-y-5 scrollbar-none">
        <div className="space-y-1 pt-2">
          <p className="text-[11px] text-slate-400 font-semibold tracking-wide">March 2022</p>
          <h2 className="text-2xl font-black text-[#002B74] tracking-tight">$8,295.00 USD</h2>
        </div>

        <div className="flex items-end justify-between bg-slate-50/40 border border-slate-100 rounded-3xl p-4 h-40">
          {barData.map((bar, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 flex-1">
              <div className={`w-3.5 rounded-full transition-all duration-500 ${bar.val} ${bar.active ? 'bg-[#002B74]' : 'bg-slate-200'}`}></div>
              <span className={`text-[9px] font-bold ${bar.active ? 'text-[#002B74]' : 'text-slate-400'}`}>{bar.month}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 bg-slate-50/50 p-2.5 rounded-2xl border border-slate-100">
            <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M23 18l-9.5-9.5-5 5L1 6"/></svg></div>
            <div><p className="text-[9px] text-slate-400 font-semibold">Income</p><h4 className="text-[12px] font-black">$453.00</h4></div>
          </div>
          <div className="flex items-center gap-2 bg-slate-50/50 p-2.5 rounded-2xl border border-slate-100">
            <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M23 6l-9.5 9.5-5-5L1 18"/></svg></div>
            <div><p className="text-[9px] text-slate-400 font-semibold">Spend</p><h4 className="text-[12px] font-black">$453.00</h4></div>
          </div>
        </div>
      </div>

      <BottomNav onTabChange={onTabChange} activeTab={activeTab} />
    </div>
  );
};

export default MobileTransaction;