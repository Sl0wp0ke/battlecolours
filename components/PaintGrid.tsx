import { Paint } from "@/data/paints";
import { PaintCard } from "@/components/PaintCard";

type PaintGridProps = {
    paints: Paint[];
};

export function PaintGrid({ paints }: PaintGridProps) {
    return (
        <div className="mt-16 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {paints.map((paint) => (
                <PaintCard key={paint.id} paint={paint} />
            ))}
        </div>
    );
}