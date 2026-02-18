const principles = [
  {
    title: "Gelassenheit",
    subtitle: "Yielding to God's Will",
    description: "The cornerstone of Amish faith is complete submission to God and community. It means setting aside personal ambition and pride in favor of humility and obedience.",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
  },
  {
    title: "Demut",
    subtitle: "Humility Above All",
    description: "True humility means recognizing that we are all equal before God. Plain dress, simple homes, and modest living are outward expressions of this inner conviction.",
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
  },
  {
    title: "Ordnung",
    subtitle: "The Unwritten Rules",
    description: "Each community follows the Ordnung—guidelines for daily living that preserve simplicity and unity. These rules vary by district and are upheld through mutual accountability.",
    icon: "M4 4h16v16H4V4zm2 2v12h12V6H6z"
  },
  {
    title: "Gemeinschaft",
    subtitle: "Community & Mutual Aid",
    description: "The Amish believe in bearing one another's burdens. From barn raisings to sharing meals, community life is marked by practical love and interdependence.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
  },
  {
    title: "Absonderung",
    subtitle: "Separation from the World",
    description: "Living set apart is not about judgment but about creating space for a Christ-centered life free from worldly distractions and temptations.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
  },
  {
    title: "Nonresistance",
    subtitle: "The Way of Peace",
    description: "Following Christ's example, the Amish practice nonviolence in all aspects of life. They do not serve in the military or seek justice through courts.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
  }
];

export function Principles() {
  return (
    <section className="px-4 md:px-8 py-12 md:py-20 max-w-5xl mx-auto">
      <div className="text-center mb-12 md:mb-16 animate-fade-up">
        <p className="font-body text-warm-brown text-sm tracking-widest uppercase mb-3">
          Understanding the Faith
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-charcoal mb-6">
          Core Principles
        </h2>
        <p className="font-body text-charcoal/70 max-w-2xl mx-auto">
          Before embarking on this journey, you must understand the beliefs and values
          that guide every aspect of Amish life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {principles.map((principle, index) => (
          <article
            key={principle.title}
            className={`bg-cream/80 rounded-sm p-6 md:p-8 border border-barn-red/10 card-hover animate-fade-up`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-barn-red/10 flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B2B2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={principle.icon} />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-xl md:text-2xl text-barn-red mb-1">
                  {principle.title}
                </h3>
                <p className="font-body text-sm text-warm-brown italic mb-3">
                  {principle.subtitle}
                </p>
                <p className="font-body text-charcoal/80 text-sm md:text-base leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Important note */}
      <div className="mt-12 md:mt-16 p-6 md:p-8 bg-forest-green/10 border-l-4 border-forest-green rounded-r-sm animate-fade-up animate-delay-5">
        <h4 className="font-display text-lg text-forest-green mb-2">A Note on Patience</h4>
        <p className="font-body text-charcoal/80 text-sm md:text-base">
          Understanding these principles intellectually is just the beginning. Living them
          requires years of practice, community support, and spiritual growth. The Amish
          will want to see these values genuinely rooted in your life before accepting you
          into full membership.
        </p>
      </div>
    </section>
  );
}
