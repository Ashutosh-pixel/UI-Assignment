"use client"
import React, { useState } from 'react';
import MobileHome from './MobileHome';
import MobileTransaction from './MobileTransaction';
import MobileProfile from './MobileProfile';
import { BottomNav } from './BottomNav';

interface WrapperProps {
  initialTab: 'home' | 'card' | 'transaction' | 'profile';
}

const InteractiveMobileMockup = ({ initialTab }: WrapperProps) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <div className="w-[310px] h-[640px] bg-white rounded-[40px] shadow-2xl border-[6px] border-slate-900 overflow-hidden flex flex-col justify-between font-sans select-none transform transition-all duration-300 hover:scale-[1.02]">
      
      {/* ================= STABLE TRANSITION LAYER ================= */}
      {/* Keeping height/width constrained forces smooth, reliable inner container cross-fades */}
      <div className="relative flex-1 w-full bg-white overflow-hidden">
        
        {/* HOME SCREEN CONTAINER */}
        <div 
          className={`absolute inset-0 w-full h-full transition-all duration-300 ease-in-out ${
            activeTab === 'home' 
              ? 'opacity-100 pointer-events-auto scale-100 translate-y-0' 
              : 'opacity-0 pointer-events-none scale-[0.97] translate-y-2'
          }`}
        >
          <MobileHome onTabChange={setActiveTab} activeTab={activeTab} />
        </div>

        {/* TRANSACTION SCREEN CONTAINER */}
        <div 
          className={`absolute inset-0 w-full h-full transition-all duration-300 ease-in-out ${
            activeTab === 'transaction' 
              ? 'opacity-100 pointer-events-auto scale-100 translate-y-0' 
              : 'opacity-0 pointer-events-none scale-[0.97] translate-y-2'
          }`}
        >
          <MobileTransaction onTabChange={setActiveTab} activeTab={activeTab} />
        </div>

        {/* PROFILE SCREEN CONTAINER */}
        <div 
          className={`absolute inset-0 w-full h-full transition-all duration-300 ease-in-out ${
            activeTab === 'profile' 
              ? 'opacity-100 pointer-events-auto scale-100 translate-y-0' 
              : 'opacity-0 pointer-events-none scale-[0.97] translate-y-2'
          }`}
        >
          <MobileProfile onTabChange={setActiveTab} activeTab={activeTab} />
        </div>

        {/* GENERIC CARD VIEW BACKDROP */}
        <div 
          className={`absolute inset-0 w-full h-full p-5 text-center flex flex-col justify-center items-center bg-white transition-all duration-300 ease-in-out ${
            activeTab === 'card' 
              ? 'opacity-100 pointer-events-auto scale-100 translate-y-0' 
              : 'opacity-0 pointer-events-none scale-[0.97] translate-y-2'
          }`}
        >
          <div className="space-y-4">
            <div className="w-48 h-28 bg-gradient-to-br from-blue-600 to-[#002B74] rounded-2xl p-4 text-white flex flex-col justify-between text-left shadow-lg">
              <span className="text-xs font-bold tracking-widest">N7 CARD</span>
              <span className="text-xs tracking-wider">•••• •••• •••• 4295</span>
            </div>
            <p className="text-xs font-semibold text-slate-400">Card View Activated</p>
          </div>
        </div>

      </div>

      {/* ================= PERSISTENT BOTTOM NAVIGATION ================= */}
      {/* Keeping navigation completely external to the screen tracks ensures it never flashes or jitters during tab updates */}
      <BottomNav onTabChange={setActiveTab} activeTab={activeTab} />
    </div>
  );
};

export default InteractiveMobileMockup;