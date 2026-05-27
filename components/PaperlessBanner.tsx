import React from 'react';
import Button1 from './ui/Button1';
import Button2 from './ui/Button2';

export default function PaperlessBanner() {
  return (
    <section className="w-full text-white py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-16 lg:px-24 overflow-hidden relative font-sans border-b border-slate-900/60">
      <div 
        className="absolute bottom-[-100px] right-[-50px] w-[300px] md:w-[500px] h-[300px] pointer-events-none select-none opacity-[0.12] blur-[90px] rounded-full z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, #0052cc 0%, transparent 70%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-7 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-[53px] font-normal tracking-tight leading-[1.2] md:leading-[1.12] text-slate-100">
            Take the full advantage of going paper-less now.
          </h2>
          <p className="text-sm md:text-[16px] text-slate-400 font-normal leading-relaxed max-w-xl">
            CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
          </p>
        </div>

        <div className="lg:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-start lg:justify-end gap-4 w-full pt-4 lg:pt-0">
          <div className="w-full sm:w-auto">
            <Button1 text='Contact Us' />
          </div>
          <div className="w-full sm:w-auto">
            <Button2 text='Request Demo'/>
          </div>
        </div>
      </div>
    </section>
  );
}