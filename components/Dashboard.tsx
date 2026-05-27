import Image from 'next/image';
import Button1 from './ui/Button1';
import dashboard from "../public/dashboard/image 3.png";
import LearnButton from './ui/LearnButton';

const Dashboard = () => {
  return (
    <section className="w-full text-white min-h-[640px] py-14 md:py-20 relative overflow-hidden flex items-center border-t border-slate-900/60 px-4 sm:px-6 lg:px-0">

      {/* Background Watermark */}
      <div
        className="absolute left-[-10%] top-[5%] font-sans text-[42vw] font-bold select-none pointer-events-none z-0 hidden lg:block opacity-40 leading-none tracking-tighter"
        style={{
          WebkitTextStroke: '2px rgba(71, 85, 105, 0.18)',
          color: 'transparent',
        }}
      >
        CB7
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full relative z-10">

        {/* Left Content */}
        <div className="lg:col-span-5 space-y-6 text-center lg:text-left">

          <h1 className="text-[34px] sm:text-[42px] md:text-[48px] lg:text-[53px] font-normal tracking-tight leading-[1.15] text-slate-100">
            A complete cloud-based{" "}
            <span className="text-slate-100">core banking.</span>
          </h1>

          <p className="text-[15px] md:text-[16px] text-slate-400 font-light max-w-[420px] leading-relaxed tracking-normal mx-auto lg:mx-0">
            Faster time to market with our cloud-based core banking services
          </p>

          {/* Buttons */}
          <div className="space-y-6 pt-2 flex flex-col items-center lg:items-start">
            <div>
              <Button1 text="Request Demo" />
            </div>
            <LearnButton padding={'2'} text={'LEARN MORE'}/>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-7 w-full relative flex justify-center lg:justify-end">

          <div className="relative w-full max-w-[900px] aspect-[16/10] min-w-0 sm:min-w-[480px] lg:min-w-[680px] lg:translate-x-[12%] xl:translate-x-[18%] transition-transform duration-300 pb-4">

            {/* Screen Border */}
            <div
              className="absolute inset-0 bottom-4 z-0 pointer-events-none"
              style={{
                background: `linear-gradient(135deg, rgb(37, 99, 235) 0%, rgb(15, 23, 42) 80%)`,
                padding: '2px',
                borderRadius: '16px 0px 0px 10px',
                mask:
                  'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
                WebkitMask:
                  'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
              }}
            />

            {/* Bottom Base */}
            <div
              className="absolute -bottom-3 left-[-12px] sm:left-[-24px] right-0 h-6 sm:h-8 z-20 pointer-events-none"
              style={{
                background: `linear-gradient(135deg, rgb(37, 99, 235) 0%, rgb(15, 23, 42) 90%)`,
                padding: '2px',
                borderRadius: '4px 0px 0px 14px',
                mask:
                  'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
                WebkitMask:
                  'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
              }}
            />

            {/* Bottom Fill */}
            <div className="absolute bottom-[2px] left-[-10px] sm:left-[-20px] right-0 h-[10px] bg-[#020b14] rounded-bl-[12px] z-10" />

            {/* Image Container */}
            <div className="absolute inset-[2px] bottom-5 right-0 z-10 p-2 sm:p-3.5 bg-[#030d1a] rounded-l-[14px] flex items-center justify-start">

              <div className="relative w-full h-full overflow-hidden rounded-l-[8px]">
                <Image
                  src={dashboard}
                  alt="AML Dashboard Analytics Frame"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-left-top brightness-[0.5]"
                />
              </div>
            </div>

            {/* Glow */}
            <div className="absolute left-[-20px] top-1/4 w-1/3 h-1/2 bg-blue-500/10 rounded-full blur-3xl pointer-events-none z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;