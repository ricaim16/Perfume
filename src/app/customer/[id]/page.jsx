// src/app/customer/[id]/page.jsx
import PerfumeCard from "@/components/PerfumeCard";
import { getPerfumeById } from "@/lib/actions/perfumes";

// ⚠️ Server component — do NOT use "use client"
export default async function CustomerPerfume({ params }) {
  // If Next.js returns params as a promise, unwrap it:
  const { id } = await params; // use only if required
  // Or simply: const id = params.id; // if already an object

  const perfume = await getPerfumeById(id);

  if (!perfume) {
    return <div className="p-6 text-black">Perfume not found</div>;
  }

  return (
    <div className="p-6">
      <PerfumeCard perfume={perfume} />
    </div>
  );
}
