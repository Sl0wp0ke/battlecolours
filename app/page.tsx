
export default function Home() {
  return (
      <main className="min-h-screen bg-zinc-950 text-zinc-100">
        <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            BattleColours
          </p>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Find miniature paint alternatives without digging through endless charts.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-zinc-400">
            AI-assisted paint matching for tabletop miniatures. Compare Citadel,
            Vallejo, Army Painter and more by colour similarity.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-full bg-amber-400 px-6 py-3 font-semibold text-zinc-950">
              Start matching
            </button>

            <button className="rounded-full border border-zinc-700 px-6 py-3 font-semibold text-zinc-100">
              View paint database
            </button>
          </div>
        </section>
      </main>
  );
}
