interface HeroProps {
  onNavigate: (section: 'home' | 'principles' | 'pathway' | 'checklist' | 'resources') => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-4 md:px-8 py-12 md:py-20">
      {/* Decorative wheat illustration */}
      <div className="absolute top-8 right-4 md:right-12 opacity-20 pointer-events-none">
        <svg width="120" height="200" viewBox="0 0 120 200" fill="none" className="w-20 md:w-32">
          <path d="M60 200V100M60 100C60 100 40 80 40 60C40 40 60 30 60 30M60 100C60 100 80 80 80 60C80 40 60 30 60 30M60 80C60 80 45 65 45 50C45 35 60 28 60 28M60 80C60 80 75 65 75 50C75 35 60 28 60 28M60 60C60 60 50 50 50 40C50 30 60 25 60 25M60 60C60 60 70 50 70 40C70 30 60 25 60 25"
            stroke="#8B2B2B" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto w-full">
        {/* Main heading */}
        <div className="animate-fade-up">
          <p className="font-body text-warm-brown text-sm md:text-base tracking-widest uppercase mb-4">
            A Guide for the Seeking Heart
          </p>
        </div>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-charcoal leading-tight mb-6 animate-fade-up animate-delay-1">
          Walking the <span className="text-barn-red italic">Plain Path</span>
        </h1>

        <div className="ornament my-8 animate-fade-up animate-delay-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8L12 2Z" fill="#8B2B2B"/>
          </svg>
        </div>

        <p className="font-body text-lg md:text-xl text-charcoal/80 max-w-2xl leading-relaxed mb-8 animate-fade-up animate-delay-3">
          For those who feel called to a life of simplicity, community, and faith.
          This guide will help you understand what it means to become Amish and
          prepare your heart for the journey ahead.
        </p>

        {/* Quote */}
        <blockquote className="relative pl-8 md:pl-12 py-6 my-8 border-l-4 border-barn-red/30 animate-fade-up animate-delay-4">
          <span className="quote-mark absolute -top-2 left-0">"</span>
          <p className="font-body italic text-charcoal/70 text-base md:text-lg">
            Be not conformed to this world: but be ye transformed by the renewing of your mind.
          </p>
          <cite className="font-body text-sm text-warm-brown mt-2 block">— Romans 12:2</cite>
        </blockquote>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-up animate-delay-5">
          <button
            onClick={() => onNavigate('principles')}
            className="px-8 py-4 bg-barn-red text-cream font-body text-base rounded-sm hover:bg-barn-red/90 transition-colors shadow-md"
          >
            Learn the Principles
          </button>
          <button
            onClick={() => onNavigate('pathway')}
            className="px-8 py-4 bg-transparent border-2 border-barn-red text-barn-red font-body text-base rounded-sm hover:bg-barn-red/5 transition-colors"
          >
            View the Pathway
          </button>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-40">
        <svg width="200" height="30" viewBox="0 0 200 30" fill="none">
          <path d="M0 15H80M120 15H200M100 5V25M90 15L100 5L110 15L100 25L90 15Z" stroke="#8B2B2B" strokeWidth="1"/>
        </svg>
      </div>
    </section>
  );
}
