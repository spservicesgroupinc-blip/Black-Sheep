export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1520699049698-acd2fce18738?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=600&auto=format&fit=crop",
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
