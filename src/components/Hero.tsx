import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="hero" className="relative px-6 py-12 md:px-10 md:py-20 bg-[#F5F2ED]">
      <div className="flex flex-col md:flex-row gap-12 items-center max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <div className="inline-block px-3 py-1 bg-[#849483]/20 text-[#849483] text-[10px] font-bold uppercase tracking-widest rounded-full">
            Premium Secondhand Sourcing
          </div>
          <h1 className="text-5xl md:text-7xl font-serif italic leading-[1.1] text-[#1A1A1A]">
            Secondhand treasures, <br /><span className="text-[#C36B4E]">zero legwork.</span>
          </h1>
          <p className="text-lg text-[#5A5A5A] max-w-md leading-relaxed">
            We hunt the world’s finest thrift stores, estate sales, and vintage markets to find exactly what you’re looking for—delivered to your door.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#request" className="bg-[#C36B4E] text-white px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-[#a85c44] transition-colors">
              Start Your Hunt
            </a>
          </div>
        </motion.div>
        {/* Placeholder for visual feature */}
        <div className="w-full md:w-1/2 h-[300px] md:h-[500px] bg-[#E8E2D9] rounded-tr-[60px] md:rounded-tr-[120px] rounded-bl-[60px] md:rounded-bl-[120px]"></div>
      </div>
    </section>
  );
}
