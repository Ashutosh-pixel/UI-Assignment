'use client';

import Image from 'next/image';
import React from 'react';
import hand from "../../public/marqueebanner/hand waving.png";

export const BankingMarqueeBanner = () => {

  const bannerItems = Array(12)
    .fill([
      { text: 'N7', isBrand: true },
      { text: 'Say', isBrand: false, hasHand: true },
      { text: 'to the new way of banking', isBrand: false },
      { text: 'CB7', isBrand: true },
      { text: 'Say', isBrand: false, hasHand: true },
      { text: 'to the new way of banking', isBrand: false },
    ])
    .flat();

  return (
    <div className="w-full bg-white border-y border-slate-100 overflow-hidden py-3 sm:py-4 select-none relative flex items-center">

      {/* Marquee Track */}
      <div className="flex whitespace-nowrap min-w-full shrink-0 items-center gap-3 sm:gap-4 animate-marqueeLoop">

        {bannerItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 sm:gap-3 shrink-0 mx-1 sm:mx-2"
          >

            {/* Separator */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="text-slate-300 shrink-0 sm:w-5 sm:h-5"
            >
              <path
                d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            {/* Text */}
            <span
              className={`text-[15px] sm:text-lg md:text-xl font-bold tracking-tight whitespace-nowrap ${
                item.isBrand ? 'text-[#0065FF]' : 'text-slate-900'
              }`}
            >
              {item.text}
            </span>

            {/* Hand */}
            {item.hasHand && (
              <span className="inline-flex items-center justify-center origin-[70%_70%] animate-handWave shrink-0">

                <Image
                  src={hand}
                  alt="hand"
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
                />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};