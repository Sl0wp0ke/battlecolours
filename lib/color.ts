import { Paint } from "@/data/paints";

type Rgb = {
    r: number;
    g: number;
    b: number;
};

export function hexToRgb(hex: string): Rgb {
    const cleanHex = hex.replace("#", "");

    return {
        r: parseInt(cleanHex.slice(0, 2), 16),
        g: parseInt(cleanHex.slice(2, 4), 16),
        b: parseInt(cleanHex.slice(4, 6), 16),
    };
}

export function getRgbDistance(firstHex: string, secondHex: string): number {
    const first = hexToRgb(firstHex);
    const second = hexToRgb(secondHex);

    const rDiff = first.r - second.r;
    const gDiff = first.g - second.g;
    const bDiff = first.b - second.b;

    return Math.sqrt(rDiff ** 2 + gDiff ** 2 + bDiff ** 2);
}

export function findClosestPaints(
    sourcePaint: Paint,
    candidates: Paint[],
    limit = 3,
    maxDeltaE = 15,
): Paint[] {
    return candidates
        .filter((candidate) => candidate.id !== sourcePaint.id)
        .map((candidate) => ({
            paint: candidate,
            distance: getRgbDistance(sourcePaint.hex, candidate.hex),
        }))
        .filter((match) => match.distance <= maxDeltaE)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, limit)
        .map((match) => match.paint);
}