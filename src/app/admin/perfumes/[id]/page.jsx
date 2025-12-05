// src/app/admin/perfumes/[id]/edit/page.jsx
import PerfumeForm from "@/components/PerfumeForm";
import { getPerfumeById, updatePerfume } from "@/lib/actions/perfumes";

// Server Component — do NOT add "use client"
export default async function EditPerfumePage({ params }) {
  // ✅ Destructure id safely
  const { id } = params;

  if (!id) {
    return <p className="p-6 text-red-500">Invalid Perfume ID</p>;
  }

  // ✅ Fetch perfume from database
  const perfume = await getPerfumeById(id);

  if (!perfume) {
    return <p className="p-6 text-red-500">Perfume not found</p>;
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-black">Edit Perfume</h1>
      <PerfumeForm
        action={(data) => updatePerfume(id, data)}
        initialData={perfume} // prefill form
      />
    </div>
  );
}
