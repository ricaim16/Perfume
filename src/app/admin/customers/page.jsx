// src/app/customer/page.jsx
import PerfumeCard from "@/components/PerfumeCard";
import { getAllPerfumes } from "@/lib/actions/perfumes";

export default async function CustomerPerfumeList() {
  const perfumes = await getAllPerfumes(); // Server component

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      {perfumes.map((p) => (
        <PerfumeCard key={p.id} perfume={p} />
      ))}
    </div>
  );
}
