import Container from "@/components/common/Container";
import DottedPattern from "@/components/common/DottedPattern";
import Reveal from "@/components/common/Reveal";
import ScreenVisual from "@/components/screens/ScreenVisual";
import { ASSETS } from "@/lib/assets";

type ScanCard = { icon: string; title: string; desc: string };

const scanCards: ScanCard[] = [
  { icon: "📸", title: "Multiple Photo Scan",         desc: "Upload multiple photos for more accurate crop analysis." },
  { icon: "🔬", title: "Disease or Stress Detection", desc: "AI identifies possible crop diseases or stress conditions." },
  { icon: "📊", title: "Severity and Confidence",     desc: "See the severity level and how confident the AI result is." },
  { icon: "📋", title: "Recommended Next Steps",      desc: "Receive actionable guidance on what to do after the scan." },
];

export default function AiCropScanSection() {
  return (
    <section id="crop-scan" className="py-20 bg-[#202020] relative overflow-hidden">
      <DottedPattern className="dotted-bg-dark opacity-100" />

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[560px] h-[560px] bg-[#25D366] rounded-full blur-3xl pointer-events-none animate-pulse-glow"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          <Reveal className="flex-1">
            <span className="inline-flex items-center gap-2 bg-[#25D366]/15 text-[#25D366] text-xs font-bold px-4 py-1.5 rounded-full mb-5">
              ✦ Powered by AI
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#EEEEEE] mb-4 leading-tight">
              Detect crop issues early with{" "}
              <span className="text-[#25D366]">AI Crop Scan</span>
            </h2>
            <p className="text-[#B0B0B0] text-base md:text-lg mb-6 leading-relaxed">
              Upload multiple crop photos and receive AI-powered insights about
              possible disease, stress, severity level, confidence score and
              recommended next steps.
            </p>

            <div className="bg-[#1C1C1C] border border-[#404040] rounded-2xl p-4 mb-5">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-[#EEEEEE] text-xs font-bold">Sample scan result</p>
                  <p className="text-[#6D6D6D] text-[10px] mt-0.5">Aloe plant · Medium severity</p>
                </div>
                <span className="bg-yellow-500/20 text-yellow-400 text-[10px] font-bold px-2 py-1 rounded-full">
                  Medium
                </span>
              </div>
              <div className="space-y-1 mb-3">
                <div className="flex justify-between text-[10px]">
                  <span className="text-[#6D6D6D]">Confidence</span>
                  <span className="text-[#25D366] font-bold">85%</span>
                </div>
                <div className="h-2 bg-[#404040] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#25D366] to-[#029600] rounded-full animate-grow-bar"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-[#5A5A5A] text-[10px]">
                  High confidence — recommendations are reliable
                </p>
              </div>
              <div className="bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl px-3 py-2">
                <p className="text-[#25D366] text-[10px] font-semibold mb-0.5">Recommendation</p>
                <p className="text-[#B0B0B0] text-[10px] leading-relaxed">
                  Improve airflow, reduce overwatering and monitor for spreading symptoms.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {scanCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-[#1C1C1C] border border-[#404040] rounded-[1.5rem] p-4 hover:border-[#25D366] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="text-2xl mb-2">{card.icon}</div>
                  <h3 className="text-[#EEEEEE] font-bold text-sm mb-1.5">{card.title}</h3>
                  <p className="text-[#6D6D6D] text-xs leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#25D366]/10 border border-[#25D366]/25 rounded-2xl px-4 py-3">
              <p className="text-[#B0B0B0] text-xs leading-relaxed">
                <span className="text-[#25D366] font-bold">Note: </span>
                AI crop scan results are informational and should not replace
                professional agricultural advice.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150} className="flex justify-center flex-shrink-0 w-full lg:max-w-[270px]">
            <ScreenVisual
              portraitSrc={ASSETS.screens.aiCropScan.portrait}
              leftSrc={ASSETS.screens.aiCropScan.left}
              alt="GraziLink AI crop scan report"
              preferred="left"
              hoverSwap
              glow
              maxWidth={270}
            />
          </Reveal>

        </div>
      </Container>
    </section>
  );
}
