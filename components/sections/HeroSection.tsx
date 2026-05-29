import Link from "next/link";
import Container from "@/components/common/Container";
import DottedPattern from "@/components/common/DottedPattern";
import GooglePlayButton from "@/components/common/GooglePlayButton";
import ScreenVisual from "@/components/screens/ScreenVisual";
import { ASSETS } from "@/lib/assets";
import { SITE } from "@/lib/constants";

const featurePills = [
  { icon: "👥", label: "Farmer Community" },
  { icon: "🔬", label: "AI Crop Scan" },
  { icon: "🌐", label: "13+ Languages" },
  { icon: "📰", label: "Farm News" },
];

const fadeUp = (delay: number) => ({
  animation: `fade-up 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}ms both`,
});

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#EAF8F0] pt-24 pb-16 md:pb-20 min-h-screen flex items-center">
      <DottedPattern />

      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#25D366] rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 bg-[#029600] rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"
        style={{ opacity: 0.05 }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#25D366] rounded-full blur-3xl pointer-events-none"
        style={{ opacity: 0.04, animation: "pulse-glow 6s ease-in-out infinite 2s" }}
        aria-hidden="true"
      />

      <Container className="relative w-full flex flex-col md:flex-row items-center gap-10 md:gap-16 py-8">

        <div className="flex-1 text-center md:text-left max-w-xl mx-auto md:mx-0">
          <div
            className="inline-flex items-center gap-2 bg-white border border-[#D0D0D0] text-xs font-bold px-4 py-1.5 rounded-full mb-5 shadow-sm"
            style={fadeUp(80)}
          >
            <span>🌾</span>
            <span className="text-[#6D6D6D] font-medium">
              By{" "}
              <span className="text-[#25D366] font-bold">{SITE.companyName}</span>
            </span>
            <span className="text-[#D0D0D0] select-none">·</span>
            <span className="text-[#25D366]">Built for Indian farmers</span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#202020] leading-[1.12] mb-5"
            style={fadeUp(180)}
          >
            Your farming{" "}
            <span className="text-[#25D366]">community</span>
            {", in one app"}
          </h1>

          <p
            className="text-[#6D6D6D] text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0"
            style={fadeUp(280)}
          >
            Connect with farmers, share knowledge, scan crops for possible
            disease or stress, and stay updated with farmer-focused news.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-7"
            style={fadeUp(380)}
          >
            <GooglePlayButton variant="hero" />
            <Link
              href="#features"
              className="inline-flex items-center justify-center bg-white border border-[#D0D0D0] text-[#202020] px-8 py-3.5 rounded-full font-semibold text-base hover:border-[#25D366] hover:text-[#25D366] transition-all shadow-sm"
            >
              Explore Features
            </Link>
          </div>

          <div
            className="flex flex-wrap gap-2 justify-center md:justify-start"
            style={fadeUp(460)}
          >
            {featurePills.map((pill) => (
              <span
                key={pill.label}
                className="inline-flex items-center gap-1.5 bg-white/80 border border-[#D0D0D0] text-[#202020] text-xs px-3 py-1.5 rounded-full font-semibold shadow-sm hover:border-[#25D366] hover:text-[#25D366] transition-colors cursor-default"
              >
                <span>{pill.icon}</span>
                {pill.label}
              </span>
            ))}
          </div>
        </div>

        <div
          className="flex-1 flex justify-center md:justify-end w-full"
          style={fadeUp(300)}
        >
          <div className="animate-float-slow">
            <ScreenVisual
              portraitSrc={ASSETS.screens.communityFeed.portrait}
              leftSrc={ASSETS.screens.communityFeed.left}
              alt="GraziLink community feed"
              preferred="left"
              hoverSwap
              glow
              maxWidth={310}
              priority
            />
          </div>
        </div>

      </Container>
    </section>
  );
}
