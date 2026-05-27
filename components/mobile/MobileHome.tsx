import React from 'react';
import { BottomNav } from './BottomNav';

interface ScreenProps {
  onTabChange: (tab: 'home' | 'card' | 'transaction' | 'profile') => void;
  activeTab: string;
}

const MobileHome = ({ onTabChange, activeTab }: ScreenProps) => {
  const activities = [
    { type: 'up', title: 'To Jin • Work', date: '12 jun 2022', amount: '-$59', isNegative: true },
    { type: 'down', title: 'From Google • Salary', date: '10 jun 2022', amount: '+$859', isNegative: false },
    { type: 'up', title: 'To David • Work', date: '7 jun 2022', amount: '-$479', isNegative: true },
    { type: 'down', title: 'From Google • Bonus', date: '10 jun 2022', amount: '+$859', isNegative: false },
  ];

  return (
    <div className="w-[310px] h-[640px] bg-white rounded-[40px] shadow-2xl border-[6px] overflow-hidden flex flex-col justify-between font-sans select-none animate-fadeIn">
      <div className="p-5 overflow-y-auto flex-1 space-y-6 scrollbar-none">
        {/* Header Profile */}
        <div className="flex justify-between items-center pt-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-200 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="text-sm font-bold leading-tight">Toni Kross</h4>
              <p className="text-[11px] text-slate-400 font-medium">Good Morning</p>
            </div>
          </div>
          <button className="p-2 bg-slate-50 rounded-full"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-7F" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg></button>
        </div>

        {/* Balance */}
        <h2 className="text-2xl font-black text-[#002B74] tracking-tight">$42,295.00 USD</h2>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div onClick={() => onTabChange('transaction')} className="space-y-1.5 flex flex-col items-center cursor-pointer">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center hover:bg-blue-50 transition-colors shadow-sm"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-slate-700"><path d="M12 5v14M5 12h14" /></svg></div>
            <span className="text-[10px] font-bold text-slate-800">Transfer</span>
          </div>
          <div className="space-y-1.5 flex flex-col items-center cursor-pointer">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shadow-sm"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-slate-700"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M12 11v4M10 13h4" /></svg></div>
            <span className="text-[10px] font-bold text-slate-800">Add Money</span>
          </div>
          <div onClick={() => onTabChange('profile')} className="space-y-1.5 flex flex-col items-center cursor-pointer">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shadow-sm"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-slate-700"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg></div>
            <span className="text-[10px] font-bold text-slate-800">More</span>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-4">
          <h3 className="text-base font-bold">Recent activity</h3>
          <div className="space-y-3">
            {activities.map((act, i) => (
              <div key={i} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${act.isNegative ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'}`}>
                    {act.type === 'up' ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg> : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 7l10 10M17 7v10H7"/></svg>}
                  </div>
                  <div><h5 className="text-[12px] font-bold text-slate-800">{act.title}</h5><p className="text-[10px] text-slate-400 font-medium">{act.date}</p></div>
                </div>
                <span className="text-[12px] font-bold text-slate-800">{act.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reusable Tab Render */}
      <BottomNav onTabChange={onTabChange} activeTab={activeTab} />
    </div>
  );
};

export default MobileHome;