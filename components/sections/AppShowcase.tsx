import Container from "@/components/common/Container";
import DottedPattern from "@/components/common/DottedPattern";
import Reveal from "@/components/common/Reveal";
import ScreenVisual from "@/components/screens/ScreenVisual";
import { ASSETS } from "@/lib/assets";

type ShowcaseItem = {
  emoji:       string;
  label:       string;
  title:       string;
  description: string;
  portrait:    string;
  left:        string;
  alt:         string;
};

const cards: ShowcaseItem[] = [
  {
    emoji:       "🏡",
    label:       "Community feed",
    title:       "Your farming community, in one place",
    description: "Read farmer posts, share crop updates, follow discussions and learn from real farming experiences.",
    portrait:    ASSETS.screens.communityFeed.portrait,
    left:        ASSETS.screens.communityFeed.left,
    alt:         "GraziLink community feed",
  },
  {
    emoji:       "💬",
    label:       "Direct messages",
    title:       "Talk to farmers directly",
    description: "Private one-on-one chats help farmers ask questions, learn techniques and support each other.",
    portrait:    ASSETS.screens.directMessages.portrait,
    left:        ASSETS.screens.directMessages.left,
    alt:         "GraziLink direct messages",
  },
  {
    emoji:       "🌱",
    label:       "Live conversations",
    title:       "Real conversations, real solutions",
    description: "Discuss soil, crops, weather, prices and practical challenges through real-time farmer chats.",
    portrait:    ASSETS.screens.liveChat.portrait,
    left:        ASSETS.screens.liveChat.left,
    alt:         "GraziLink live chat",
  },
  {
    emoji:       "🔬",
    label:       "AI Crop Scan",
    title:       "Detect crop issues early",
    description: "Scan crops with multiple photos and get instant AI health insights — severity, confidence and next steps.",
    portrait:    ASSETS.screens.aiCropScan.portrait,
    left:        ASSETS.screens.aiCropScan.left,
    alt:         "GraziLink AI crop scan report",
  },
];

function ShowcaseCard({ emoji, label, title, description, portrait, left, alt }: ShowcaseItem) {
  return (
    <div className="group relative bg-white rounded-[2rem] border border-[#EBEBEB] overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-default h-full">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(160deg, #EAF8F0 0%, #F4FCF7 35%, #ffffff 65%)" }}
        aria-hidden="true"
      />

      <div
        className="relative flex justify-center items-end px-8 pt-8 pb-2"
        style={{ minHeight: 340 }}
      >
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-32 bg-[#25D366] opacity-10 rounded-full blur-2xl pointer-events-none group-hover:opacity-20 transition-opacity duration-500"
          aria-hidden="true"
        />
        <ScreenVisual
          portraitSrc={portrait}
          leftSrc={left}
          alt={alt}
          preferred="portrait"
          hoverSwap
          maxWidth={190}
          compact
        />
      </div>

      <div className="relative px-6 pb-6 pt-4">
        <span className="inline-flex items-center gap-1.5 bg-[#EAF8F0] text-[#25D366] text-xs font-bold px-3 py-1.5 rounded-full mb-3">
          <span>{emoji}</span>
          {label}
        </span>
        <h3 className="font-bold text-[#202020] text-lg leading-snug mb-2">{title}</h3>
        <p className="text-[#6D6D6D] text-sm leading-relaxed">{description}</p>
      </div>

      <div className="absolute bottom-0 left-0 h-[3px] bg-[#25D366] w-0 group-hover:w-full transition-all duration-500 ease-out rounded-b-[2rem]" />
    </div>
  );
}

export default function AppShowcase() {
  return (
    <section id="showcase" className="py-20 bg-[#EAF8F0] relative overflow-hidden">
      <DottedPattern />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#25D366] rounded-full blur-3xl pointer-events-none animate-pulse-glow"
        aria-hidden="true"
      />

      <Container className="relative">
        <Reveal className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-white border border-[#D0D0D0] text-[#25D366] text-xs font-bold px-4 py-1.5 rounded-full mb-4">
            ✦ Real app screenshots
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#202020] mb-4">
            See GraziLink in <span className="text-[#25D366]">action</span>
          </h2>
          <p className="text-[#6D6D6D] text-base md:text-lg max-w-2xl mx-auto">
            Hover any card to see the screen from a different angle. Explore
            how farmers connect, chat and grow through one simple app.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <Reveal key={card.label} delay={i * 90}>
              <ShowcaseCard {...card} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
