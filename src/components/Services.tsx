const services = [
  { title: "Clothing & Fashion", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8d?q=80&w=600&auto=format&fit=crop" },
  { title: "Furniture & Home Decor", image: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=600&auto=format&fit=crop" },
  { title: "Vintage & Collectibles", image: "https://images.unsplash.com/photo-1605335191316-24e6de7343e0?q=80&w=600&auto=format&fit=crop" },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-16 md:px-10 md:py-20 bg-emerald-50 md:rounded-3xl mx-0 md:mx-8">
      <h2 className="text-4xl font-serif text-emerald-950 text-center mb-12 md:mb-16">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div key={i} className="group overflow-hidden rounded-2xl relative h-80">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-neutral-900/30 flex items-center justify-center">
              <span className="text-white text-2xl font-serif font-medium">{service.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
