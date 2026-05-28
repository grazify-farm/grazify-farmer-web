interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  featured?: boolean;
}

export default function FeatureCard({ icon, title, description, featured = false }: FeatureCardProps) {
  if (featured) {
    return (
      <div className="relative bg-[#202020] border border-[#25D366] rounded-[2rem] p-6 group overflow-hidden col-span-1">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#25D366] opacity-10 rounded-full blur-2xl" />
        <div className="relative">
          <div className="w-13 h-13 rounded-2xl bg-[#25D366] flex items-center justify-center text-2xl mb-4 w-12 h-12">
            {icon}
          </div>
          <div className="inline-flex items-center gap-1.5 bg-[#25D366]/20 text-[#25D366] text-[10px] font-bold px-2.5 py-1 rounded-full mb-3">
            <span>✦</span> AI Feature
          </div>
          <h3 className="font-bold text-[#EEEEEE] text-base mb-2">{title}</h3>
          <p className="text-[#B0B0B0] text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#E8E8E8] rounded-[2rem] p-6 hover:border-[#25D366] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group cursor-default">
      <div className="w-12 h-12 rounded-2xl bg-[#EAF8F0] flex items-center justify-center text-2xl mb-4 group-hover:bg-[#25D366] group-hover:scale-110 transition-all duration-200">
        {icon}
      </div>
      <h3 className="font-bold text-[#202020] text-base mb-2">{title}</h3>
      <p className="text-[#6D6D6D] text-sm leading-relaxed">{description}</p>
    </div>
  );
}
