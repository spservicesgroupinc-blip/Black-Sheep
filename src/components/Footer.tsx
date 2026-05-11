import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="px-8 py-10 border-t border-neutral-200 mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-neutral-600">© 2026 Black Sheep & Co. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center gap-2 text-neutral-600 hover:text-emerald-800">
            <Instagram size={20} />
            <span>@blacksheep.thrifts</span>
          </a>
          <a href="#" className="text-neutral-600 hover:text-emerald-800">Sustainability</a>
          <a href="#" className="text-neutral-600 hover:text-emerald-800">Contact</a>
        </div>
      </div>
    </footer>
  );
}
