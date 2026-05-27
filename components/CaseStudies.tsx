'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ReadMoreButton from './ui/ReadMoreButton';
import LearnButton from './ui/LearnButton';

// 1. Define the TypeScript interface for an individual case study
export interface CaseStudy {
  id: number | string;
  category: string;
  title: string;
  company: string;
  logo: string;
  image: string;
}

// 2. Define the props interface for the component
interface CaseStudySectionProps {
  data: CaseStudy[];
}

export default function CaseStudySection({ data = [] }: CaseStudySectionProps) {
  const [index, setIndex] = useState(0);

  // Guard clause in case an empty array is passed accidentally
  if (!data || data.length === 0) return null;

  const nextStep = () => {
    setIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const prevStep = () => {
    setIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const currentStudy = data[index];

  return (
    <section className="w-full text-white py-16 md:py-24 px-4 sm:px-6 md:px-16 overflow-hidden relative font-sans border-b border-slate-900/60">
      
      {/* Background Gradient Ambiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[800px] h-[300px] sm:h-[500px] pointer-events-none opacity-[0.12] blur-[100px] sm:blur-[120px] rounded-full z-0 bg-blue-600" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-normal text-center mb-12 md:mb-20 tracking-tight">
          Our Case Studies
        </h2>

        {/* ================= CAROUSEL AREA ================= */}
        <div className="relative w-full flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full bg-[#020d1a] border border-[#0b213a] rounded-[24px] p-5 sm:p-8 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 items-stretch shadow-2xl relative z-20"
            >
              {/* Left Column: Graphic Pattern */}
              <div className="w-full md:w-[45%] aspect-video md:aspect-[4/3] max-h-[240px] md:max-h-none bg-[#031326] rounded-xl overflow-hidden flex items-center justify-center shrink-0 border border-[#0d2847]">
                <img 
                  src={currentStudy.image} 
                  alt={currentStudy.title} 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>

              {/* Right Column: Content */}
              <div className="flex flex-col justify-between flex-1 py-1 min-w-0">
                <div className="space-y-3 md:space-y-4">
                  <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#0065FF] uppercase">
                    {currentStudy.category}
                  </p>
                  <h3 className="text-xl sm:text-2xl md:text-[32px] font-normal leading-[1.25] md:leading-[1.2] tracking-tight text-white">
                    {currentStudy.title}
                  </h3>
                  
                  <div className="flex items-center gap-3 pt-2 md:pt-4">
                    <img src={currentStudy.logo} alt={`${currentStudy.company} logo`} className="w-8 h-8 rounded-full bg-white/10 p-1" />
                    <span className="text-base md:text-lg text-slate-300">{currentStudy.company}</span>
                  </div>
                </div>

                <div className="pt-6 md:pt-4">
                  <ReadMoreButton text={'READ MORE'}/>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Background Cards (Peek Effect) */}
          <div className="absolute left-[-10%] xl:left-[-15%] opacity-10 scale-90 blur-sm pointer-events-none hidden xl:block">
             <div className="w-[800px] h-[400px] bg-[#020d1a] border border-[#0b213a] rounded-[24px]" />
          </div>
          <div className="absolute right-[-10%] xl:right-[-15%] opacity-10 scale-90 blur-sm pointer-events-none hidden xl:block">
             <div className="w-[800px] h-[400px] bg-[#020d1a] border border-[#0b213a] rounded-[24px]" />
          </div>
        </div>

        {/* ================= NAVIGATION BAR ================= */}
        <div className="mt-10 md:mt-16 flex flex-col-reverse sm:flex-row items-center gap-6 sm:gap-0 justify-between">
          
          <div className="hidden sm:block sm:flex-1" />

          {/* Center Navigation Elements */}
          <div className="flex items-center gap-6 justify-center sm:flex-1">
            <button 
              onClick={prevStep}
              className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 text-slate-400 transition-all active:scale-95"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} strokeWidth={2} />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2.5">
               {data.map((_, i) => (
                 <div 
                  key={i} 
                  className={`transition-all duration-300 rounded-full h-1.5 ${i === index ? 'w-7 bg-blue-500' : 'w-1.5 bg-slate-800'}`} 
                 />
               ))}
            </div>

            <button 
              onClick={nextStep}
              className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 text-slate-400 transition-all active:scale-95"
              aria-label="Next slide"
            >
              <ChevronRight size={20} strokeWidth={2} />
            </button>
          </div>

          {/* View All Button Right Aligned */}
          <div className="w-full sm:w-auto flex justify-center sm:justify-end sm:flex-1">
            <LearnButton padding={''} text={'View All'}/>
          </div>

        </div>
      </div>
    </section>
  );
}