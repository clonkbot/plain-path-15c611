const books = [
  {
    title: "Growing Up Amish",
    author: "Ira Wagler",
    description: "A memoir that provides honest insight into Amish life from someone who lived it."
  },
  {
    title: "The Riddle of Amish Culture",
    author: "Donald Kraybill",
    description: "The definitive academic study of how Amish communities negotiate with modernity."
  },
  {
    title: "Amish Society",
    author: "John Hostetler",
    description: "A comprehensive sociological study written by a former Amish member turned scholar."
  },
  {
    title: "Plain Secrets",
    author: "Joe Mackall",
    description: "A non-Amish author's friendship with his Amish neighbors reveals daily realities."
  }
];

const faqs = [
  {
    question: "Can anyone become Amish?",
    answer: "Technically yes, but practically it's very difficult. You must sincerely adopt the Christian faith, learn the language, give up all modern conveniences, and be accepted by a specific community. Most seekers do not complete the process."
  },
  {
    question: "How long does it take to become Amish?",
    answer: "Plan for 3-5 years minimum. This includes time for research, making contact, living among the community, language learning, instruction classes, and finally baptism."
  },
  {
    question: "Do I need to already be Christian?",
    answer: "Yes. The Amish are a Christian denomination, and faith in Jesus Christ is central to their identity. Converting to Amish life without genuine faith would be dishonest and unsustainable."
  },
  {
    question: "What happens if I leave after being baptized?",
    answer: "Leaving after baptism results in Meidung (shunning). Baptized members who leave are socially avoided by the community, including family members. This is why the commitment should never be made lightly."
  },
  {
    question: "Are all Amish communities the same?",
    answer: "No. There's significant variation between groups (Old Order, New Order, Beachy Amish, etc.) and even between individual church districts. Some are more conservative, others more progressive."
  },
  {
    question: "Can I keep any contact with non-Amish family?",
    answer: "Generally yes, but it will be limited. You won't have a phone or car for easy visits. Some communities are stricter than others about outside contact."
  }
];

export function Resources() {
  return (
    <section className="px-4 md:px-8 py-12 md:py-20 max-w-5xl mx-auto">
      <div className="text-center mb-12 md:mb-16 animate-fade-up">
        <p className="font-body text-warm-brown text-sm tracking-widest uppercase mb-3">
          Continue Your Journey
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-charcoal mb-6">
          Resources & Guidance
        </h2>
        <p className="font-body text-charcoal/70 max-w-2xl mx-auto">
          Deepen your understanding with these carefully selected resources
          and answers to common questions.
        </p>
      </div>

      {/* Recommended Reading */}
      <div className="mb-12 md:mb-16">
        <h3 className="font-display text-xl md:text-2xl text-charcoal mb-6 flex items-center gap-3 animate-fade-up">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B2B2B" strokeWidth="1.5">
            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          Recommended Reading
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {books.map((book, index) => (
            <div
              key={book.title}
              className={`bg-cream/80 p-5 md:p-6 rounded-sm border border-barn-red/10 card-hover animate-fade-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h4 className="font-display text-lg text-barn-red mb-1">{book.title}</h4>
              <p className="font-body text-sm text-warm-brown italic mb-3">by {book.author}</p>
              <p className="font-body text-sm text-charcoal/70">{book.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="mb-12 md:mb-16">
        <h3 className="font-display text-xl md:text-2xl text-charcoal mb-6 flex items-center gap-3 animate-fade-up">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B2B2B" strokeWidth="1.5">
            <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Common Questions
        </h3>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className={`group bg-cream/60 rounded-sm border border-barn-red/10 animate-fade-up`}
              style={{ animationDelay: `${(index + 4) * 0.1}s` }}
            >
              <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer font-display text-base md:text-lg text-charcoal hover:text-barn-red transition-colors">
                {faq.question}
                <svg
                  width="20" height="20" viewBox="0 0 20 20" fill="none"
                  className="flex-shrink-0 ml-4 transition-transform group-open:rotate-180"
                >
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </summary>
              <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0">
                <p className="font-body text-sm md:text-base text-charcoal/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Final encouragement */}
      <div className="text-center py-8 md:py-12 border-t border-barn-red/20 animate-fade-up animate-delay-5">
        <div className="ornament mb-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8L12 2Z" fill="#8B2B2B"/>
          </svg>
        </div>
        <h3 className="font-display text-xl md:text-2xl text-charcoal mb-4">
          May Your Path Be Clear
        </h3>
        <p className="font-body text-charcoal/70 max-w-xl mx-auto text-sm md:text-base mb-6">
          Whether your journey leads you to an Amish community or elsewhere,
          may you find the simplicity, purpose, and peace you seek.
          The values of humility, community, and faith can enrich any life.
        </p>
        <p className="font-body italic text-warm-brown text-sm">
          "Trust in the Lord with all thine heart; and lean not unto thine own understanding.
          In all thy ways acknowledge him, and he shall direct thy paths."
        </p>
        <cite className="font-body text-xs text-warm-brown/70 mt-1 block">— Proverbs 3:5-6</cite>
      </div>
    </section>
  );
}
