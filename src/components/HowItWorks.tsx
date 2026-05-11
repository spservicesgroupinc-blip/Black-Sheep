import { Search, MapPin, Package, PartyPopper } from 'lucide-react';

const steps = [
  { icon: Search, title: "You Request", description: "Tell us what you're looking for, your budget, and your vibe." },
  { icon: MapPin, title: "We Hunt", description: "Our experts scour thrift stores, estate sales, and marketplaces." },
  { icon: Package, title: "We Present", description: "We send you a curated collection of options for you to choose from." },
  { icon: PartyPopper, title: "You Enjoy", description: "Your chosen items are shipped directly to your door." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#1A1A1A] text-[#F5F2ED] px-6 py-16 md:px-10 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {steps.map((step, i) => (
          <div key={i} className="space-y-4">
            <span className="text-[#C36B4E] font-serif italic text-3xl">0{i + 1}</span>
            <h4 className="text-sm font-bold uppercase tracking-widest">{step.title}</h4>
            <p className="text-xs text-[#A1A1A1] leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
