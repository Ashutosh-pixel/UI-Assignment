import React from 'react';

interface NavProps {
  onTabChange: (tab: 'home' | 'card' | 'transaction' | 'profile') => void;
  activeTab: string;
}

export const BottomNav = ({ onTabChange, activeTab }: NavProps) => (
  <div className="border-t border-slate-100 bg-slate-50/90 backdrop-blur-md px-4 py-3 grid grid-cols-4 gap-1 text-center">
    {[
      { id: 'home', label: 'Home', icon: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/> },
      { id: 'card', label: 'Card', icon: <rect x="2" y="5" width="20" height="14" rx="2"/> },
      { id: 'transaction', label: 'Transaction', icon: <path d="M17 3L21 7M21 7L17 11M21 7H3M7 21L3 17M3 17L7 13M3 17H21"/> },
      { id: 'profile', label: 'Profile', icon: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></> }
    ].map((tab) => (
      <div 
        key={tab.id} 
        onClick={() => onTabChange(tab.id as never)} 
        className={`flex flex-col items-center cursor-pointer transition-colors relative ${activeTab === tab.id ? 'text-[#002B74] font-bold' : 'text-slate-400'}`}
      >
        {activeTab === tab.id && <div className="absolute -top-3 w-6 h-[2px] bg-[#002B74] rounded-full" />}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">{tab.icon}</svg>
        <span className="text-[9px] mt-0.5">{tab.label}</span>
      </div>
    ))}
  </div>
);