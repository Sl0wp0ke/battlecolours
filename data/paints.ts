export type Paint = {
    id: string;
    brand: string;
    name: string;
    hex: string;
    type: "base" | "layer" | "shade" | "metallic";
};

export const paints: Paint[] = [
    {
        id: "citadel-abaddon-black",
        brand: "Citadel",
        name: "Abaddon Black",
        hex: "#0b0b0b",
        type: "base",
    },
    {
        id: "citadel-mephiston-red",
        brand: "Citadel",
        name: "Mephiston Red",
        hex: "#991b1e",
        type: "base",
    },
    {
        id: "vallejo-black",
        brand: "Vallejo",
        name: "Black",
        hex: "#111111",
        type: "base",
    },
    {
        id: "vallejo-heavy-red",
        brand: "Vallejo",
        name: "Heavy Red",
        hex: "#8f1d21",
        type: "base",
    },
];