import GooglePlayButton from "@/components/common/GooglePlayButton";
import Reveal from "@/components/common/Reveal";
import { ASSETS } from "@/lib/assets";

export default function CTASection() {
  return (
    <section className="py-20 bg-[#EAF8F0] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <Reveal>
          <div
            className="relative bg-[#202020] rounded-[2.5rem] overflow-hidden"
            style={{
              boxShadow:
                "0 25px 60px -10px rgba(37,211,102,0.2), 0 25px 60px -20px rgba(0,0,0,0.4)",
            }}
          >
            {/* Background glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#25D366] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#25D366] opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

            <div className="relative flex flex-col lg:flex-row items-center">
              {/* Text + CTA */}
              <div className="flex-1 p-10 md:p-14 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-[#25D366]/20 text-[#25D366] text-xs font-bold px-4 py-2 rounded-full mb-6">
                  <span>🌾</span> Free to Download
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#EEEEEE] mb-4 leading-tight">
                  Join the GraziLink{" "}
                  <span className="text-[#25D366]">farmer community</span> today
                </h2>
                <p className="text-[#B0B0B0] text-lg mb-8 max-w-md mx-auto lg:mx-0">
                  Download GraziLink and start connecting, learning, sharing and
                  growing with farmers across India.
                </p>
                <GooglePlayButton variant="hero" />
              </div>

              {/* Decorative stacked screenshots — aria-hidden, no text */}
              <div className="hidden lg:flex flex-shrink-0 items-end gap-3 pb-10 pr-12">
                <div
                  className="overflow-hidden"
                  style={{
                    width: 110,
                    transform: "rotate(-3deg) translateY(20px)",
                    filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.4))",
                    borderRadius: "2rem",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ASSETS.screens.communityFeed.portrait}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-auto block"
                  />
                </div>
                <div
                  className="overflow-hidden"
                  style={{
                    width: 110,
                    transform: "rotate(2deg) translateY(-10px)",
                    filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.4))",
                    borderRadius: "2rem",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ASSETS.screens.aiCropScan.portrait}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
