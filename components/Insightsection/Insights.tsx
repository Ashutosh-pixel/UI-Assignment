import React from 'react';
import Button1 from '../ui/Button1';
import image from "../../public/Frame 55.png"
import Image from 'next/image';
import ReadMoreButton from '../ui/ReadMoreButton';

interface CardProps {
  category?: string;
  title: string;
  author: string;
  date: string;
}

interface FeatureCardProps extends CardProps {
  imageSrc: string;
}

// ================= FIRST CARD ONLY (FEATURED HORIZONTAL LAYOUT) =================
export const FeaturedInsightCard = ({
  category = "GETTING STARTED",
  title,
  author,
  date,
  imageSrc,
}: FeatureCardProps) => {
  return (
    <div className="border border-[#0b213a] rounded-[20px] p-4 sm:p-5 flex flex-col sm:flex-row gap-5 w-full items-stretch group hover:border-[#0065FF]/40 transition-all duration-300 shadow-2xl bg-[#020d1a]/50 backdrop-blur-sm">
      
      {/* Left Column: Pattern Graphic Image */}
      {/* Set a dynamic max-height on mobile so the image doesn't overwhelm smaller viewports */}
      <div className="w-full sm:w-[42%] max-h-[240px] sm:max-h-none aspect-video sm:aspect-auto bg-[#031326] rounded-xl overflow-hidden flex items-center justify-center shrink-0 border border-[#0d2847]">
        <Image
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          priority
        />
      </div>

      {/* Right Column: Content */}
      <div className="flex flex-col justify-between flex-1 py-1 min-w-0">
        <div className="space-y-2">
          <p className="text-[10px] font-mono font-medium tracking-widest text-[#0065FF] uppercase">
            {category}
          </p>
          <h3 className="text-lg md:text-[21px] font-normal text-white tracking-tight leading-snug group-hover:text-blue-400 transition-colors duration-200">
            {title}
          </h3>
        </div>

        {/* Dropped lower down with a tighter gap */}
        <div className="space-y-4 mt-6 sm:mt-4">
          <div className="flex items-center gap-3 text-[11px] text-[#4a6582]">
            <span>{author}</span>
            <span className="w-1 h-1 rounded-full bg-[#4a6582]/40" /> {/* Clean separator dot */}
            <span>{date}</span>
          </div>

          <div className="w-full sm:w-auto">
            <ReadMoreButton text={'READ MORE'}/>
          </div>
        </div>
      </div>
    </div>
  );
};

// ================= ALL OTHER CARDS (REUSABLE VERTICAL LAYOUT) =================
export const StandardInsightCard = ({
  category = "GETTING STARTED",
  title,
  author,
  date,
}: CardProps) => {
  return (
    <div className="bg-[#020d1a] border border-[#0b213a] rounded-[20px] p-5 flex flex-col justify-between h-full w-full min-h-[250px] group hover:border-[#0065FF]/40 transition-all duration-300 shadow-2xl">
      <div className="space-y-2">
        <p className="text-[10px] font-mono font-medium tracking-widest text-[#0065FF] uppercase">
          {category}
        </p>
        <h3 className="text-lg font-normal text-white tracking-tight leading-snug group-hover:text-blue-400 transition-colors duration-200">
          {title}
        </h3>
      </div>

      {/* Tight lower down spacing container */}
      <div className="space-y-4 mt-6">
        <div className="flex items-center gap-3 text-[11px] text-[#4a6582]">
          <span>{author}</span>
          <span className="w-1 h-1 rounded-full bg-[#4a6582]/40" />
          <span>{date}</span>
        </div>

        <div>
          <ReadMoreButton text={'READ MORE'}/>
        </div>
      </div>
    </div>
  );
};