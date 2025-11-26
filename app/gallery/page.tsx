export default function GalleryPage() {
  return (
    <div className="space-y-12">

      {/* HERO */}
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">
          GNPL Gallery
        </p>

        <h1 className="text-3xl font-bold sm:text-4xl">
          Match Moments & Community Memories
        </h1>

        <p className="max-w-3xl text-slate-300">
          A look into the unforgettable moments from the Gold Coast Nepalese
          Premier League – on the field, off the field, and in the hearts of our
          community.
        </p>
      </section>

      {/* PHOTO GALLERY */}
      <section className="space-y-6">

        <h2 className="text-xl font-semibold text-emerald-400">
          Match Highlights
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {/* Image 1 */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
            <div className="flex h-52 items-center justify-center bg-slate-800 text-xs text-slate-500">
              Add your image here
            </div>

            <div className="absolute inset-0 bg-black/40 opacity-0 transition group-hover:opacity-100 flex items-end">
              <p className="p-3 text-xs text-white">
                Opening match – Season 1
              </p>
            </div>
          </div>

          {/* Image 2 */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
            <div className="flex h-52 items-center justify-center bg-slate-800 text-xs text-slate-500">
              Add your image here
            </div>

            <div className="absolute inset-0 bg-black/40 opacity-0 transition group-hover:opacity-100 flex items-end">
              <p className="p-3 text-xs text-white">
                Himalayan Heat in action
              </p>
            </div>
          </div>

          {/* Image 3 */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
            <div className="flex h-52 items-center justify-center bg-slate-800 text-xs text-slate-500">
              Add your image here
            </div>

            <div className="absolute inset-0 bg-black/40 opacity-0 transition group-hover:opacity-100 flex items-end">
              <p className="p-3 text-xs text-white">
                Crowd & supporters
              </p>
            </div>
          </div>

          {/* Image 4 */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
            <div className="flex h-52 items-center justify-center bg-slate-800 text-xs text-slate-500">
              Add your image here
            </div>

            <div className="absolute inset-0 bg-black/40 opacity-0 transition group-hover:opacity-100 flex items-end">
              <p className="p-3 text-xs text-white">
                Trophy moment – Season 1
              </p>
            </div>
          </div>

          {/* Image 5 */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
            <div className="flex h-52 items-center justify-center bg-slate-800 text-xs text-slate-500">
              Add your image here
            </div>

            <div className="absolute inset-0 bg-black/40 opacity-0 transition group-hover:opacity-100 flex items-end">
              <p className="p-3 text-xs text-white">
                Team celebrations
              </p>
            </div>
          </div>

          {/* Image 6 */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
            <div className="flex h-52 items-center justify-center bg-slate-800 text-xs text-slate-500">
              Add your image here
            </div>

            <div className="absolute inset-0 bg-black/40 opacity-0 transition group-hover:opacity-100 flex items-end">
              <p className="p-3 text-xs text-white">
                Community gathering
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* VIDEO SECTION */}
      <section className="space-y-6">

        <h2 className="text-xl font-semibold text-cyan-400">
          GNPL Videos (Coming Soon)
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6 text-center">
            <p className="text-sm text-slate-400">
              Match highlights video will be featured here
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6 text-center">
            <p className="text-sm text-slate-400">
              Player interviews & behind-the-scenes
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-emerald-500/50 bg-gradient-to-br from-emerald-500/10 via-slate-950 to-slate-950 p-6 shadow-lg shadow-emerald-500/20">

        <h2 className="text-lg font-semibold text-emerald-400">
          Share Your GNPL Moments
        </h2>

        <p className="text-slate-300">
          Do you have photos or videos from GNPL matches or community events?
          We’d love to feature them on our official gallery.
        </p>

        <a
          href="/contact"
          className="inline-block rounded-full bg-emerald-500 px-6 py-2 text-sm font-semibold text-black transition hover:bg-emerald-400"
        >
          Submit Your Photos
        </a>

      </section>

    </div>
  )
}
