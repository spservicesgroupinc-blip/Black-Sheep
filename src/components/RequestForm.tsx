export default function RequestForm() {
  return (
    <section id="request" className="px-6 py-16 md:px-10 md:py-20 bg-neutral-100 md:rounded-3xl mx-0 md:mx-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-serif text-emerald-950 text-center mb-10">Make a Request</h2>
        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="What are you looking for?" className="p-4 rounded-lg border border-neutral-300" />
          <textarea placeholder="Tell us about the style, budget, vibe..." className="p-4 rounded-lg border border-neutral-300 h-32" />
          <button className="bg-emerald-800 text-white rounded-full py-4 text-lg font-medium hover:bg-emerald-900 transition-colors">
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}
