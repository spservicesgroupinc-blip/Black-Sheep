export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1589465553303-3467c6999a49?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1568252542512-98555c45df7d?q=80&w=400&auto=format&fit=crop",
  ];

  return (
    <section id="gallery" className="px-8 py-20">
      <h2 className="text-4xl font-serif text-emerald-950 text-center mb-16">Treasure Trove</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <img key={i} src={img} alt="Found item" className="rounded-xl w-full h-64 object-cover" />
        ))}
      </div>
    </section>
  );
}
