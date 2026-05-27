import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import dashboard from '../public/dashboard/image 4.png';

const features = [
  "Customer-On Boarding",
  "CRM Activities",
  "Managing deposits and withdrawals",
  "Configuring New Banking Products",
  "Transaction management",
  "Loan disbursal and Loan management",
  "Interest Calculation",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)"
];

export default function EfficiencySection() {
  // Split features into two columns to balance the list exactly like the mockup
  const leftColumnFeatures = features.filter((_, idx) => idx % 2 === 0);
  const rightColumnFeatures = features.filter((_, idx) => idx % 2 !== 0);

  return (
    <section className="w-full text-white py-24 px-8 md:px-16 lg:px-24 relative overflow-hidden border-t border-slate-900/60 font-sans antialiased">
      
      {/* ─── MAIN 12-COLUMN GRID CONTAINER ─── */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center w-full relative z-10">
        
        {/* ─── LEFT COLUMN: OVERFLOW LAPTOP CONTAINER (LEFT SIDE SHIFTED) ─── */}
        <div className="lg:col-span-6 w-full relative flex justify-start order-2 lg:order-1">
          
          {/* lg:-translate-x-[28%] shifts the laptop frame out past the left viewport cut edge cleanly */}
          <div className="relative w-full aspect-[16/10.5] min-w-[320px] sm:min-w-[480px] lg:min-w-[660px] lg:-translate-x-[28%] xl:-translate-x-[32%] transition-transform duration-300 pb-5">
            
            {/* 1. SCREEN BEZEL FRAME */}
            <div 
              className="absolute inset-0 bottom-5 z-0 pointer-events-none"
              style={{
                background: `linear-gradient(225deg, rgb(37, 99, 235) 0%, rgb(15, 23, 42) 80%)`,
                padding: '2px', 
                borderRadius: '0px 16px 10px 0px', // Keeps right corners rounded while left sits square off-screen
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
              }}
            />

            {/* 2. LAPTOP BOTTOM KEYBOARD LIP BASE (Calibrated Thick Profile Edge) */}
            <div 
              className="absolute -bottom-1.5 left-0 right-[-64px] h-8 z-20 pointer-events-none"
              style={{
                background: `linear-gradient(225deg, rgb(37, 99, 235) 0%, rgb(15, 23, 42) 90%)`,
                padding: '2px',
                borderRadius: '0px 5px 18px 0px', // Matches the deeper curve for the thicker tray profile
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
              }}
            />

            {/* Dark interior tray filling frame layer */}
            <div className="absolute bottom-[2px] left-0 right-[-36px] h-[22px] bg-[#020b14] rounded-br-[16px] z-10" />

            {/* 3. INNER SCREEN CANVAS WRAPPER WITH EMBEDDED BEZEL INNER PADDING */}
            <div className="absolute inset-[2px] bottom-6 left-0 z-10 p-3.5 bg-[#030d1a] rounded-r-[14px] flex items-center justify-end">
              <div className="relative w-full h-full overflow-hidden rounded-r-[8px]">
                {/* Replace /kyc-dashboard.png with your physical dashboard asset path */}
                <Image
                  src={dashboard}
                  alt="KYC Verification Management Dashboard"
                  fill
                  priority
                  sizes="(max-w: 1024px) 100vw, 45vw"
                  className="object-cover object-right-top brightness-[0.5]"
                />
              </div>
            </div>

            {/* Backlight Ambient Glow Emitter */}
            <div className="absolute right-[-20px] top-1/4 w-1/3 h-1/2 bg-blue-500/10 rounded-full blur-3xl pointer-events-none z-0" />
          </div>

        </div>

        {/* ─── RIGHT COLUMN: CONTENT TEXT AND BALANCED METRIC LIST ─── */}
        <div className="lg:col-span-6 space-y-10 text-left order-1 lg:order-2">
          
          {/* Main Title Block */}
          <div className="space-y-4">
            <h2 className="text-[32px] md:text-[27px] font-normal tracking-tight leading-[1.2] text-slate-100 max-w-[540px]">
              Run a more efficient, flexible, and digitally connected corebanking system
            </h2>
          </div>

          {/* Feature List Split Columns layout */}
          <div className="space-y-6">
            <div className="text-[14px] font-semibold tracking-wider text-slate-200 uppercase">
              What you will get:
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 items-start">
              
              {/* Left Features Block column */}
              <div className="space-y-2">
                {leftColumnFeatures.map((text, index) => (
                  <div key={index} className="flex items-start gap-3.5 group">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-600 border border-blue-500 flex items-center justify-center text-white flex-shrink-0">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <p className="text-[14px] text-slate-300 font-light leading-relaxed tracking-wide">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right Features Block column */}
              <div className="space-y-2">
                {rightColumnFeatures.map((text, index) => (
                  <div key={index} className="flex items-start gap-3.5 group">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-600 border border-blue-500 flex items-center justify-center text-white flex-shrink-0 transition-colors duration-200">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <p className="text-[14px] text-slate-300 font-light leading-relaxed tracking-wide">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}