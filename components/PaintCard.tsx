import Link from "next/link";
import { Paint } from "@/data/paints";

type PaintCardProps = {
    paint: Paint;
};

export function PaintCard({ paint }: PaintCardProps) {
    return (
        <Link
            href={`/paints/${paint.id}`}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4 text-left transition hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg">
            <div
                className="mb-4 h-20 rounded-xl border border-zinc-700"
                style={{ backgroundColor: paint.hex }}
            />

            <p className="text-sm text-zinc-400">{paint.brand}</p>
            <h2 className="mt-1 font-semibold text-zinc-100">{paint.name}</h2>
            <p className="mt-2 text-xs uppercase tracking-wider text-zinc-500">
                {paint.type}
            </p>
        </Link>
    );
}