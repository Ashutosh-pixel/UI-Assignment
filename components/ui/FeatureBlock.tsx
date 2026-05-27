// app/components/ui/FeatureBlock.tsx
import React from 'react';

interface FeatureItemProps {
  text: string;
}

// Reusable Internal Checkmark Item
const FeatureItem = ({ text }: FeatureItemProps) => (
  <div className="flex items-start gap-3 text-[#091E42]">
    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0065FF] mt-0.5">
      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <span className="text-sm md:text-base font-medium text-slate-700 tracking-wide">{text}</span>
  </div>
);

interface FeatureBlockProps {
  heading: string;
  bodyText: string;
  features: string[];
  className?: string; // Optional: To allow custom margins or overrides later
}

const FeatureBlock = ({ heading, bodyText, features, className = "" }: FeatureBlockProps) => {
  return (
    <div className={`space-y-6 lg:pt-12 ${className}`}>
      <h3 className="text-xl md:text-xl font-medium text-[#091E42]">
        {heading}
      </h3>
      <p className="text-sm md:text-base text-slate-500 leading-relaxed">
        {bodyText}
      </p>
      <div className="space-y-3 pt-2">
        {features.map((feature, index) => (
          <FeatureItem key={index} text={feature} />
        ))}
      </div>
    </div>
  );
};

export default FeatureBlock;