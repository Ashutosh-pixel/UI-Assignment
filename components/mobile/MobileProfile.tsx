import React from 'react';
import { BottomNav } from './BottomNav';

interface ScreenProps {
  onTabChange: (tab: 'home' | 'card' | 'transaction' | 'profile') => void;
  activeTab: string;
}

const MobileProfile = ({ onTabChange, activeTab }: ScreenProps) => {
  return (
    <div className="w-[310px] h-[640px] bg-white rounded-[40px] shadow-2xl border-[6px] overflow-hidden flex flex-col justify-between font-sans select-none animate-fadeIn">
      <div className="p-5 overflow-y-auto flex-1 space-y-5 scrollbar-none">
        <div className="bg-slate-50/70 rounded-[32px] p-6 text-center space-y-3 border border-slate-100/50 mt-2">
          <div className="w-16 h-16 rounded-2xl mx-auto bg-slate-200 overflow-hidden shadow-sm">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150" alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="text-base font-black tracking-tight">Toni Kross</h3>
            <p className="text-[10px] text-slate-400 font-semibold mt-0.5">tonikross@gmai.com</p>
          </div>
        </div>

        <div className="space-y-2.5">
          {[
            { icon: 'user', name: 'Profile setting', action: () => onTabChange('home') },
            { icon: 'settings', name: 'Setting' },
            { icon: 'help-circle', name: 'Support' },
            { icon: 'log-out', name: 'Sign out' },
          ].map((opt, idx) => (
            <div key={idx} onClick={opt.action} className="flex justify-between items-center bg-slate-50/50 hover:bg-slate-100 border border-slate-100/40 p-3 rounded-2xl cursor-pointer transition-all duration-200 group">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
                  {opt.icon === 'user' && <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>}
                  {opt.icon === 'settings' && <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>}
                  {opt.icon === 'help-circle' && <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>}
                  {opt.icon === 'log-out' && <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/></svg>}
                </div>
                <span className="text-[12px] font-bold text-slate-800">{opt.name}</span>
              </div>
              {opt.icon !== 'log-out' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-slate-400"><path d="M9 5l7 7-7 7"/></svg>}
            </div>
          ))}
        </div>
      </div>

      <BottomNav onTabChange={onTabChange} activeTab={activeTab} />
    </div>
  );
};

export default MobileProfile;