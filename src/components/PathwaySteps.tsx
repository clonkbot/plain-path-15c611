const steps = [
  {
    number: "01",
    title: "Research & Reflection",
    duration: "3-6 months",
    description: "Begin with honest self-examination. Read books, visit Amish country respectfully, and ask yourself why you're drawn to this life. Is it escape from modern problems, or a genuine calling to simplicity and faith?",
    tasks: [
      "Read 'Growing Up Amish' and 'The Riddle of Amish Culture'",
      "Visit Amish communities as a respectful observer",
      "Journal about your motivations and concerns",
      "Discuss with family members who would be affected"
    ]
  },
  {
    number: "02",
    title: "Making Contact",
    duration: "1-3 months",
    description: "Write a sincere letter to an Amish bishop or deacon expressing your interest. Be patient—letters may take weeks to receive a response. Some communities are more open to seekers than others.",
    tasks: [
      "Identify welcoming Amish communities (New Order tends to be more open)",
      "Write a humble, honest letter of introduction",
      "Be prepared for initial skepticism or no response",
      "Consider attending Amish church services if invited"
    ]
  },
  {
    number: "03",
    title: "Living Among",
    duration: "1-2 years",
    description: "If a community accepts your interest, you may be invited to live nearby or with an Amish family. This period tests whether you can genuinely embrace the lifestyle—rising early, manual labor, no modern conveniences.",
    tasks: [
      "Relocate near or within the community",
      "Learn Pennsylvania Dutch (essential for most communities)",
      "Adopt plain dress gradually",
      "Participate in work, worship, and community events"
    ]
  },
  {
    number: "04",
    title: "Instruction Classes",
    duration: "6-9 months",
    description: "Formal instruction in Amish doctrine and the Ordnung typically happens in spring and summer before fall baptism. You'll attend classes with young people from the community preparing for the same commitment.",
    tasks: [
      "Attend instruction classes (typically 9 sessions)",
      "Memorize key Scripture passages in German",
      "Demonstrate understanding of the Ordnung",
      "Receive approval from the congregation"
    ]
  },
  {
    number: "05",
    title: "Baptism & Membership",
    duration: "Lifetime",
    description: "Baptism is a covenant with God and the community. It's not taken lightly—leaving after baptism results in shunning. Only proceed if you're certain this is your calling and can accept all aspects of Amish life.",
    tasks: [
      "Make your confession of faith before the congregation",
      "Receive baptism (typically by pouring)",
      "Commit to the Ordnung and community discipline",
      "Continue growing in faith and community"
    ]
  }
];

export function PathwaySteps() {
  return (
    <section className="px-4 md:px-8 py-12 md:py-20 max-w-5xl mx-auto">
      <div className="text-center mb-12 md:mb-16 animate-fade-up">
        <p className="font-body text-warm-brown text-sm tracking-widest uppercase mb-3">
          The Journey Ahead
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-charcoal mb-6">
          The Pathway to Joining
        </h2>
        <p className="font-body text-charcoal/70 max-w-2xl mx-auto">
          Becoming Amish is a multi-year process that cannot be rushed.
          Here is what the journey typically looks like.
        </p>
      </div>

      <div className="relative">
        {/* Vertical timeline line - hidden on mobile */}
        <div className="hidden md:block absolute left-[60px] top-0 bottom-0 w-px bg-barn-red/20" />

        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`relative mb-8 md:mb-12 animate-fade-up`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              {/* Step number */}
              <div className="flex items-center gap-4 md:block">
                <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full bg-barn-red text-cream flex items-center justify-center font-display text-2xl relative z-10 flex-shrink-0">
                  {step.number}
                </div>
                <div className="md:hidden">
                  <h3 className="font-display text-xl text-charcoal">
                    {step.title}
                  </h3>
                  <span className="font-body text-sm text-forest-green">
                    {step.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 bg-cream/60 rounded-sm p-5 md:p-8 border border-barn-red/10">
                <div className="hidden md:flex items-baseline gap-4 mb-4">
                  <h3 className="font-display text-2xl text-charcoal">
                    {step.title}
                  </h3>
                  <span className="font-body text-sm text-forest-green px-3 py-1 bg-forest-green/10 rounded-full">
                    {step.duration}
                  </span>
                </div>

                <p className="font-body text-charcoal/80 mb-6 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>

                <div className="border-t border-barn-red/10 pt-4">
                  <h4 className="font-display text-sm text-warm-brown mb-3">Key Tasks:</h4>
                  <ul className="space-y-2">
                    {step.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start gap-3 font-body text-sm text-charcoal/70">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 flex-shrink-0">
                          <path d="M8 1L10 6L15 6L11 9L13 14L8 11L3 14L5 9L1 6L6 6L8 1Z" fill="#8B2B2B" opacity="0.6"/>
                        </svg>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Warning box */}
      <div className="mt-8 p-6 md:p-8 bg-barn-red/10 border border-barn-red/20 rounded-sm animate-fade-up animate-delay-5">
        <div className="flex gap-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-1">
            <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#8B2B2B" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <div>
            <h4 className="font-display text-lg text-barn-red mb-2">Important Understanding</h4>
            <p className="font-body text-charcoal/80 text-sm md:text-base">
              Approximately 90% of seekers do not complete the process. This is not failure—it's
              often wisdom. The Amish lifestyle is not better or worse than others, simply different.
              Many who explore this path find their calling elsewhere, enriched by what they learned.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
