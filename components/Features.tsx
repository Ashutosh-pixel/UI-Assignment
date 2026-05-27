import React from 'react';
import Button1 from './ui/Button1';
import Image from 'next/image';
import vector from "../public/feature/Vector.png"
import vector1 from "../public/feature/Vector (1).png"
import vector2 from "../public/feature/Vector (2).png"
import vector3 from "../public/feature/Vector (3).png"
import vector4 from "../public/feature/Vector (4).png"
import LearnButton from './ui/LearnButton';

const features = [
  {
    icon: <Image src={vector1} alt='vector' />,
    title: "Core Banking CB7",
    desc: "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
    hasBadge: false
  },
  {
    icon: <Image src={vector2} alt='vector1' />,
    title: "Digital Banking N7",
    desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
    hasBadge: false
  },
  {
    icon: <Image src={vector3} alt='vector2' />,
    title: "Open Banking",
    desc: "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
    hasBadge: false
  },
  {
    icon: <Image src={vector} alt='vector4' />,
    title: "Loan Origination System",
    desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
    hasBadge: true
  },
  {
    icon: <Image src={vector4} alt='vector3' />,
    title: "Loan Management System",
    desc: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
    hasBadge: true
  }
];

export default function FeaturesGrid() {
  return (
    <section className="w-full text-white py-14 px-8 md:px-16 relative overflow-hidden border-t border-slate-900/60">

      {/* Background ambient lighting */}
      <div className="absolute right-[-10%] top-[20%] w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen" />

      {/* Main grid container using items-start to force top-baseline alignment */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-30 items-start relative z-10">

        {/* ─── LEFT COLUMN: STICKY HEADER BLOCK ─── */}
        <div className="lg:col-span-5 h-fit text-left">
          <div className="text-4xl font-normal tracking-tight leading-[1.15] text-slate-100">
            All of our solutions are <br />
            <span className="text-slate-100">tailor-made to your needs</span>
          </div>

          <div className="pt-8">
            <Button1 text="Request Demo" />
          </div>
        </div>

        {/* ─── RIGHT COLUMN: FEATURES LIST GRID ─── */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          {features.map((f, i) => (
            <div key={i} className="space-y-4 text-left group">

              {/* Feature Header Bar: Icon Frame & Optional Badge */}
              <div className="flex items-center justify-between h-8">
                <div className="w-10 h-10 flex items-center justify-start text-slate-400 group-hover:text-[#00e1ff] transition-colors duration-300">
                  {f.icon}
                </div>

                {f.hasBadge && (
                  <span className="text-[9px] font-bold tracking-widest text-slate-500 bg-slate-900/40 px-2 py-0.5 rounded border border-slate-800/60 uppercase">
                    NBFC
                  </span>
                )}
              </div>

              {/* Descriptions */}
              <div className="space-y-2">
                <h3 className="text-[22px] font-medium text-slate-100 group-hover:text-white transition-colors duration-200">
                  {f.title}
                </h3>
                <p className="text-[16px] text-slate-400 font-light leading-relaxed pt-8">
                  {f.desc}
                </p>
              </div>

              {/* Bottom Action Link Indicator */}
              <LearnButton padding={'2'} text={'LEARN MORE'} />

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}