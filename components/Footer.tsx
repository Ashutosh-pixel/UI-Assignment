import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface FooterLink {
  name: string;
  href: string;
}

interface FooterProps {
  solutionLinks: FooterLink[];
  bankingLinks: FooterLink[];
  socialLinks: FooterLink[];
}

export default function Footer({ solutionLinks, bankingLinks, socialLinks }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-white pt-16 md:pt-24 pb-12 px-4 sm:px-6 md:px-16 lg:px-24 overflow-hidden relative font-sans">
      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* ROW 1: Logo & Addresses (Reduced bottom padding here from pb-20 to pb-8) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start pb-8 md:pb-10">
          
          <div className="lg:col-span-4 flex items-start">
            <h1 
              className="text-[120px] sm:text-[150px] md:text-[200px] lg:text-[250px] xl:text-[300px] font-bold tracking-tighter leading-none select-none bg-clip-text text-transparent transform -translate-y-4 lg:-translate-y-6"
              style={{
                backgroundImage: 'linear-gradient(135deg, #00bfff 0%, #0052cc 45%, #002288 100%)'
              }}
            >
              N7
            </h1>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-6">
            
            <div className="space-y-4">
              <h4 className="text-[14px] font-semibold text-white tracking-wider uppercase">London</h4>
              <p className="text-[14px] text-slate-300 leading-relaxed font-normal max-w-[220px]">
                Linktia Infosystems Ltd – CB7,<br />
                26 Main Road Sundridge, TN14 6EP,<br />
                England, United Kingdom.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-[14px] font-semibold text-white tracking-wider uppercase">Dubai</h4>
              <p className="text-[14px] text-slate-300 leading-relaxed font-normal max-w-[220px]">
                Linktia Infosystems Ltd – CB7,<br />
                Jumeirah Business Center 5,<br />
                Cluster W, Jumeirah Lakes Towers,<br />
                Dubai, United Arab Emirates.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-[14px] font-semibold text-white tracking-wider uppercase">India</h4>
              <p className="text-[14px] text-slate-300 leading-relaxed font-normal max-w-[220px]">
                Linktia Infosystems Ltd – CB7,<br />
                Nirmal, Anand Nagar,<br />
                Suncity Road, Pune,<br />
                Maharashtra, 411041, India.
              </p>
            </div>

          </div>
        </div>

        {/* ROW 2: Links (Removed top padding entirely to pull it flush with Row 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start pb-16">
          
          <div className="hidden lg:block lg:col-span-4" />

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-6">
            
            <div className="space-y-5">
              <h4 className="text-[14px] font-semibold text-white tracking-wider uppercase">Solutions</h4>
              <ul className="space-y-3">
                {solutionLinks?.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="group flex items-center justify-between text-[14px] text-slate-300 hover:text-white transition-colors py-0.5 max-w-[210px]">
                      <span>{link.name}</span>
                      <ArrowUpRight size={14} className="text-[#0052cc] group-hover:text-blue-400 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" strokeWidth={2.5} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <h4 className="text-[14px] font-semibold text-white tracking-wider uppercase">N7 Banking</h4>
              <ul className="space-y-3">
                {bankingLinks?.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="group flex items-center justify-between text-[14px] text-slate-300 hover:text-white transition-colors py-0.5 max-w-[210px]">
                      <span>{link.name}</span>
                      <ArrowUpRight size={14} className="text-[#0052cc] group-hover:text-blue-400 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" strokeWidth={2.5} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <h4 className="text-[14px] font-semibold text-white tracking-wider uppercase">Our Socials</h4>
              <ul className="space-y-3">
                {socialLinks?.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="group flex items-center justify-between text-[14px] text-slate-300 hover:text-white transition-colors py-0.5 max-w-[210px]">
                      <span>{link.name}</span>
                      <ArrowUpRight size={14} className="text-[#0052cc] group-hover:text-blue-400 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" strokeWidth={2.5} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* ROW 3: Copyright (Slightly brightened the copyright text as well) */}
        <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="hidden lg:block lg:col-span-4" />
          
          <div className="lg:col-span-8">
            <p className="text-[12px] text-[#5e7792] leading-relaxed max-w-3xl font-normal">
              Copyright © {currentYear} by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}