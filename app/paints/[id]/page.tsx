import {paints} from "@/data/paints";
import {notFound} from "next/navigation";
import { findClosestPaints } from "@/lib/color";
import Link from "next/link";

type PaintPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function PaintPage({params}: PaintPageProps) {
    const {id} = await params;

    const paint = paints.find((paint) => paint.id === id);

    const alternatives = findClosestPaints(paint, paints, 3);

    if (!paint) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-zinc-950 p-8 text-zinc-100">
            <section className="mx-auto max-w-4xl">
                <Link href="/" className="text-sm text-amber-400 hover:underline">
                    ← Back to paints
                </Link>

                <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
                    <div
                        className="h-40 rounded-2xl border border-zinc-700"
                        style={{backgroundColor: paint.hex}}
                    />

                    <p className="mt-8 text-sm text-zinc-400">
                        {paint.brand} / {paint.range}
                    </p>

                    <h1 className="mt-2 text-5xl font-bold">{paint.name}</h1>

                    <p className="mt-4 text-sm uppercase tracking-wider text-zinc-500">
                        {paint.type}
                    </p>

                    <p className="mt-6 font-mono text-amber-400">{paint.hex}</p>

                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold">Possible alternatives</h2>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {alternatives.map((alternative) => (
                            <div
                                key={alternative.id}
                                className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4"
                            >
                                <div
                                    className="mb-4 h-20 rounded-xl border border-zinc-700"
                                    style={{backgroundColor: alternative.hex}}
                                />

                                <p className="text-sm text-zinc-400">
                                    {alternative.brand} / {alternative.range}
                                </p>
                                <h3 className="mt-1 font-semibold">{alternative.name}</h3>
                                <p className="mt-2 font-mono text-sm text-amber-400">
                                    {alternative.hex}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}