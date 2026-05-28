export type PaintType =
    | "base"
    | "layer"
    | "shade"
    | "metallic"
    | "contrast";

export type PaintBrand =
    | "Citadel"
    | "Vallejo"
    | "Army Painter";

export type Paint = {
    id: string;
    brand: PaintBrand;
    range: string;
    name: string;
    hex: string;
    type: PaintType;
};

export const paints: Paint[] = [
    {
        id: "citadel-abaddon-black",
        brand: "Citadel",
        range: "Base",
        name: "Abaddon Black",
        hex: "#0F0F10",
        type: "base",
    },
    {
        id: "citadel-mephiston-red",
        brand: "Citadel",
        range: "Base",
        name: "Mephiston Red",
        hex: "#9E1B32",
        type: "base",
    },
    {
        id: "citadel-leadbelcher",
        brand: "Citadel",
        range: "Base",
        name: "Leadbelcher",
        hex: "#6E7170",
        type: "metallic",
    },
    {
        id: "vallejo-black",
        brand: "Vallejo",
        range: "Model Color",
        name: "Black",
        hex: "#111111",
        type: "base",
    },
    {
        id: "vallejo-heavy-red",
        brand: "Vallejo",
        range: "Game Color",
        name: "Heavy Red",
        hex: "#8F1D21",
        type: "base",
    },
    {
        id: "army-painter-gun-metal",
        brand: "Army Painter",
        range: "Warpaints",
        name: "Gun Metal",
        hex: "#70706E",
        type: "metallic",
    },
];