import Button2 from './ui/Button2';
import LearnButton from './ui/LearnButton';
import CB7Background from './ui/CB7backgound';
import FeatureBlock from './ui/FeatureBlock';
import InteractiveMobileMockup from './mobile/InteractiveMobileMockup';
import { BankingMarqueeBanner } from './ui/BankingMarqueeBanner';
import PromoBanner from './PromoBanner';

const DigitalBankingSection = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#F4F9FD]
      px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24
      pt-24 sm:pt-28 md:pt-36
      pb-16 md:pb-24 mt-10 md:mt-20"
      style={{
        backgroundImage:
          'radial-gradient(circle at 10% 90%, #D4E9FC 0%, transparent 45%)'
      }}
    >
      {/* ================= TOP MARQUEE ================= */}
      <div className="absolute top-0 left-0 z-30 w-full">
        <BankingMarqueeBanner />
      </div>

      {/* ================= BACKGROUND LINES ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-40">
        <svg
          className="h-full w-full"
          viewBox="0 0 1440 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 -200 L400 1200 M400 1200 L1100 -200 M1100 -200 L1400 1200"
            stroke="#0065FF"
            strokeWidth="1"
            strokeOpacity="0.15"
          />
          <path
            d="M-50 400 Q200 600 600 300 T1500 900"
            stroke="#0065FF"
            strokeWidth="1"
            strokeOpacity="0.1"
          />
        </svg>
      </div>

      {/* Background watermark */}
      <CB7Background
        left="25%"
        top="3%"
        fontSize="32vw"
        strokeWidth="1.5px"
      />

{/* ================= MAIN GRID ================= */}
<div
  className="
    relative z-10 mx-auto max-w-7xl
    flex flex-col gap-20
    lg:grid lg:grid-cols-3
    lg:gap-x-10 lg:gap-y-28
    lg:items-start
  "
>

  {/* ================= HERO ================= */}
  <div className="space-y-6 lg:pt-10 text-center lg:text-left">
      <div className="space-y-3">
    <h1
      className="
        text-4xl
        sm:text-5xl
        lg:text-6xl
        font-normal
        tracking-tight
        text-[#091E42]
        leading-[1.05]
      "
    >
      Digital banking
    </h1>

    <h1
      className="
        text-4xl
        sm:text-5xl
        lg:text-6xl
        font-normal
        tracking-tight
        text-[#091E42]
        leading-[1.05]
      "
    >
      out-of-the-box
    </h1>
  </div>

  <p
    className="
      text-sm
      sm:text-base
      text-slate-500
      leading-relaxed

      max-w-md
      md:max-w-xl

      mx-auto lg:mx-0
    "
  >
    N7 helps your financial institution improve the client
    experience, automate and optimize procedures.
  </p>

  {/* BUTTONS */}
  <div
    className="
      flex flex-col
      sm:flex-row

      items-center
      lg:items-start

      justify-center
      lg:justify-start

      gap-4
      pt-2
    "
  >
    <Button2 text="REQUEST DEMO" />
    <LearnButton padding={'2'} text={'LEARN MORE'} />
  </div>
  </div>

  {/* ================= DESKTOP PHONE 1 ================= */}
  <div className="hidden lg:flex justify-center w-full">
    <InteractiveMobileMockup initialTab="home" />
  </div>

  {/* ================= DESKTOP FEATURE 1 ================= */}
  <div className="hidden lg:block">
    <FeatureBlock
      heading="Fully compliant with regulatory requirement"
      bodyText="The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital banking's operational-risk protocols and procedures."
      features={[
        "Pre-integrated Security System",
        "Fully Compliant With Regulatory Requirement",
        "Digitally Connected Core"
      ]}
    />
  </div>

  {/* ================= MOBILE/TABLET STACK 1 ================= */}
  <div className="flex flex-col gap-8 lg:hidden">
    <div className="flex justify-center">
      <InteractiveMobileMockup initialTab="home" />
    </div>

    <FeatureBlock
      heading="Fully compliant with regulatory requirement"
      bodyText="The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital banking's operational-risk protocols and procedures."
      features={[
        "Pre-integrated Security System",
        "Fully Compliant With Regulatory Requirement",
        "Digitally Connected Core"
      ]}
    />
  </div>

  {/* ================= ROW 2 DESKTOP ================= */}
  <div className="hidden lg:block"></div>

  <div className="hidden lg:block">
    <FeatureBlock
      heading="No legacy IT systems"
      bodyText="Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance."
      features={[
        "Adaptive & Intelligent API monetization",
        "Ambient User Experience",
        "Cloud-native With lower TCO"
      ]}
    />
  </div>

  <div className="hidden lg:flex justify-center w-full">
    <InteractiveMobileMockup initialTab="transaction" />
  </div>

  {/* ================= MOBILE/TABLET STACK 2 ================= */}
  <div className="flex flex-col gap-8 lg:hidden">
    <div className="flex justify-center">
      <InteractiveMobileMockup initialTab="transaction" />
    </div>

    <FeatureBlock
      heading="No legacy IT systems"
      bodyText="Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance."
      features={[
        "Adaptive & Intelligent API monetization",
        "Ambient User Experience",
        "Cloud-native With lower TCO"
      ]}
    />
  </div>

  {/* ================= ROW 3 DESKTOP ================= */}
  <div className="hidden lg:block"></div>

  <div className="hidden lg:flex justify-center w-full">
    <InteractiveMobileMockup initialTab="profile" />
  </div>

  <div className="hidden lg:block">
    <FeatureBlock
      heading="No traditional branches"
      bodyText="Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience."
      features={[
        "Branchless & Paperless Banking",
        "Digital Transformation Capability",
        "Optimized, Adoptable and Scalable"
      ]}
    />
  </div>

  {/* ================= MOBILE/TABLET STACK 3 ================= */}
  <div className="flex flex-col gap-8 lg:hidden">
    <div className="flex justify-center">
      <InteractiveMobileMockup initialTab="profile" />
    </div>

    <FeatureBlock
      heading="No traditional branches"
      bodyText="Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience."
      features={[
        "Branchless & Paperless Banking",
        "Digital Transformation Capability",
        "Optimized, Adoptable and Scalable"
      ]}
    />
  </div>

</div>

      {/* ================= PROMO BANNER ================= */}
      <div className="mt-16 md:mt-24">
        <PromoBanner
          bgText="N7"
          top="-30%"
          left="55%"
        />
      </div>
    </section>
  );
};

export default DigitalBankingSection;