import { prisma } from "@/lib/prisma";

export default async function PaintsPage() {
    const paints = await prisma.paint.findMany({
        orderBy: {
            name: "asc",
        },
    });

    return (
        <div>
            <h1>Paints</h1>

            {paints.map((paint) => (
                <div key={paint.id}>
                    {paint.name}
                </div>
            ))}
        </div>
    );
}