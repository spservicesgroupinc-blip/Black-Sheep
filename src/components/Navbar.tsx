import { ShoppingBag } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-[#F5F2ED] sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#849483] rounded-full flex items-center justify-center text-white font-serif italic text-xl">B</div>
        <span className="text-xl font-bold tracking-tight uppercase text-[#1A1A1A]">Black Sheep & Co.</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-[#4A4A4A]">
        <a href="#hero" className="hover:text-[#C36B4E] border-b-2 border-[#C36B4E]">Home</a>
        <a href="#how-it-works" className="hover:text-[#C36B4E]">How it Works</a>
        <a href="#services" className="hover:text-[#C36B4E]">Services</a>
        <a href="#gallery" className="hover:text-[#C36B4E]">The Gallery</a>
      </div>
      <a href="#request" className="bg-[#1A1A1A] text-white px-6 py-3 rounded-none text-xs uppercase tracking-widest hover:bg-[#C36B4E] transition-colors">
        Make a Request
      </a>
    </nav>
  );
}
