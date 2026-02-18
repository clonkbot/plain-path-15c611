import { useState } from 'react';

interface ChecklistItem {
  id: string;
  text: string;
  category: 'spiritual' | 'practical' | 'social' | 'sacrifice';
}

const checklistItems: ChecklistItem[] = [
  // Spiritual
  { id: 's1', text: 'I have a sincere Christian faith, not just interest in the lifestyle', category: 'spiritual' },
  { id: 's2', text: 'I am willing to submit to church authority and discipline', category: 'spiritual' },
  { id: 's3', text: 'I can accept adult baptism as a lifetime covenant', category: 'spiritual' },
  { id: 's4', text: 'I understand and accept nonresistance, including no military service', category: 'spiritual' },

  // Practical
  { id: 'p1', text: 'I can live without electricity, internet, and modern appliances', category: 'practical' },
  { id: 'p2', text: 'I am willing to learn manual skills (farming, carpentry, sewing)', category: 'practical' },
  { id: 'p3', text: 'I can commit to learning Pennsylvania Dutch or German', category: 'practical' },
  { id: 'p4', text: 'I am prepared for physically demanding daily work', category: 'practical' },

  // Social
  { id: 'o1', text: 'I can accept limitations on contact with non-Amish friends and family', category: 'social' },
  { id: 'o2', text: 'I am comfortable with decisions being made by the community, not individually', category: 'social' },
  { id: 'o3', text: 'I can embrace plain dress as a statement of humility, not costume', category: 'social' },
  { id: 'o4', text: 'I understand that my children would be raised exclusively Amish', category: 'social' },

  // Sacrifice
  { id: 'c1', text: 'I am ready to give up my car permanently', category: 'sacrifice' },
  { id: 'c2', text: 'I can live without higher education for myself or my children', category: 'sacrifice' },
  { id: 'c3', text: 'I accept that leaving after baptism means being shunned', category: 'sacrifice' },
  { id: 'c4', text: 'I am not running from problems, but running toward a calling', category: 'sacrifice' },
];

const categories = [
  { id: 'spiritual', label: 'Spiritual Readiness', color: 'barn-red' },
  { id: 'practical', label: 'Practical Readiness', color: 'forest-green' },
  { id: 'social', label: 'Social Readiness', color: 'warm-brown' },
  { id: 'sacrifice', label: 'Willingness to Sacrifice', color: 'charcoal' },
];

export function Checklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newChecked = new Set(checked);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setChecked(newChecked);
  };

  const totalChecked = checked.size;
  const totalItems = checklistItems.length;
  const percentage = Math.round((totalChecked / totalItems) * 100);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'spiritual': return 'border-barn-red/30 bg-barn-red/5';
      case 'practical': return 'border-forest-green/30 bg-forest-green/5';
      case 'social': return 'border-warm-brown/30 bg-[#6B4423]/5';
      case 'sacrifice': return 'border-charcoal/30 bg-charcoal/5';
      default: return '';
    }
  };

  return (
    <section className="px-4 md:px-8 py-12 md:py-20 max-w-5xl mx-auto">
      <div className="text-center mb-12 md:mb-16 animate-fade-up">
        <p className="font-body text-warm-brown text-sm tracking-widest uppercase mb-3">
          Honest Self-Assessment
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-charcoal mb-6">
          Am I Ready?
        </h2>
        <p className="font-body text-charcoal/70 max-w-2xl mx-auto">
          Use this checklist to honestly evaluate your readiness. These are not requirements
          to pass, but truths to accept before proceeding.
        </p>
      </div>

      {/* Progress indicator */}
      <div className="bg-cream/80 rounded-sm p-6 md:p-8 border border-barn-red/10 mb-8 md:mb-12 animate-fade-up animate-delay-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <h3 className="font-display text-xl text-charcoal">Your Progress</h3>
          <span className="font-body text-warm-brown">
            {totalChecked} of {totalItems} acknowledged
          </span>
        </div>
        <div className="h-3 bg-barn-red/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-barn-red transition-all duration-500 rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <p className="font-body text-sm text-charcoal/60 mt-4">
          {percentage < 50
            ? "Take your time. These are significant commitments to consider carefully."
            : percentage < 100
            ? "You're giving this serious thought. Continue reflecting on each point."
            : "You've acknowledged all items. Now spend months living with these truths before acting."}
        </p>
      </div>

      {/* Checklist by category */}
      <div className="space-y-8 md:space-y-12">
        {categories.map((category, catIndex) => (
          <div
            key={category.id}
            className={`animate-fade-up`}
            style={{ animationDelay: `${(catIndex + 2) * 0.1}s` }}
          >
            <h3 className="font-display text-lg md:text-xl text-charcoal mb-4 flex items-center gap-3">
              <span className={`w-3 h-3 rounded-full ${
                category.id === 'spiritual' ? 'bg-barn-red' :
                category.id === 'practical' ? 'bg-forest-green' :
                category.id === 'social' ? 'bg-[#6B4423]' : 'bg-charcoal'
              }`} />
              {category.label}
            </h3>

            <div className="space-y-3">
              {checklistItems
                .filter(item => item.category === category.id)
                .map(item => (
                  <label
                    key={item.id}
                    className={`flex items-start gap-4 p-4 rounded-sm border cursor-pointer transition-all ${getCategoryColor(item.category)} ${
                      checked.has(item.id) ? 'opacity-70' : ''
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked.has(item.id)}
                      onChange={() => toggleItem(item.id)}
                      className="checkbox-custom mt-0.5"
                    />
                    <span className={`font-body text-sm md:text-base text-charcoal/80 ${
                      checked.has(item.id) ? 'line-through' : ''
                    }`}>
                      {item.text}
                    </span>
                  </label>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Reflection prompt */}
      <div className="mt-12 md:mt-16 text-center animate-fade-up animate-delay-5">
        <div className="ornament mb-6">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 0L12 8L20 8L14 12L16 20L10 15L4 20L6 12L0 8L8 8L10 0Z" fill="#8B2B2B" opacity="0.5"/>
          </svg>
        </div>
        <p className="font-body italic text-charcoal/70 max-w-xl mx-auto text-sm md:text-base">
          "Count the cost. For which of you, intending to build a tower, sitteth not down
          first, and counteth the cost, whether he have sufficient to finish it?"
        </p>
        <cite className="font-body text-sm text-warm-brown mt-2 block">— Luke 14:28</cite>
      </div>
    </section>
  );
}
