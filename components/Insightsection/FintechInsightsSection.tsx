import React from 'react';
import { FeaturedInsightCard, StandardInsightCard } from './Insights';
import Button1 from '../ui/Button1';
import LearnButton from '../ui/LearnButton';

export default function FintechInsightsSection() {
  const standardInsights = [
    {
      id: 1,
      title: "How to transition from a traditional to a digital bank",
      author: "David Grohl",
      date: "17/08/24",
    },
    {
      id: 2,
      title: "How to transition from a traditional to a digital bank",
      author: "David Grohl",
      date: "17/08/24",
    },
  ];

  return (
    <section className="w-full text-white py-16 md:py-24 px-4 sm:px-6 md:px-16 lg:px-24 overflow-hidden relative font-sans">

      {/* ================= FIXED LEFT-EDGE AMBIENT BLUE GRADIENT ================= */}
      {/* Reduced width on mobile to prevent clipping issues */}
      <div
        className="absolute top-0 -left-20 w-[300px] md:w-[650px] h-full pointer-events-none select-none opacity-[0.25] mix-blend-screen z-0"
        style={{
          backgroundImage: 'radial-gradient(ellipse at left center, #0044cc 0%, #001a4d 40%, transparent 70%)'
        }}
      />

      {/* Main Structural Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-x-16 items-start">

        {/* Left Side Sticky Header Column (Spans 4 columns) */}
        {/* Added top-24 to fix the sticky positioning when scrolling */}
        <div className="lg:col-span-4 space-y-6 md:space-y-8 lg:sticky lg:top-24">
          <h2 className="text-3xl md:text-[37px] font-normal tracking-tight text-white leading-[1.2] md:leading-[1.15]">
            Get yourself up-to-speed on all the things happening in fintech
          </h2>

          <div>
            <Button1 text={'INSIGHTS'} />
          </div>
        </div>

        {/* Right Side Column (Spans 8 columns) */}
        <div className="lg:col-span-8 w-full max-w-3xl lg:ml-auto space-y-8">

          {/* Cards Inner Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 auto-rows-fr items-stretch">

            {/* FIRST HORIZONTAL CARD */}
            {/* Added md:col-span-2 so the featured card spans beautifully across both columns on wider screens */}
            <div className="md:col-span-2">
              <FeaturedInsightCard
                title="How to transition from a traditional to a digital bank"
                author="David Grohl"
                date="17/08/24"
                imageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600"
              />
            </div>

            {/* REUSABLE STANDARD VERTICAL CARDS */}
            {standardInsights.map((card) => (
              <StandardInsightCard
                key={card.id}
                title={card.title}
                author={card.author}
                date={card.date}
              />
            ))}
          </div>

          {/* Bottom Link Alignment Anchor */}
          <div className="flex justify-start sm:justify-end pt-2">
            <LearnButton padding={'2'} text={'Read all insights'} />
          </div>

        </div>

      </div>
    </section>
  );
}