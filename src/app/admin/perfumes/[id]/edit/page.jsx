// src/app/admin/perfumes/[id]/edit/page.jsx
import PerfumeForm from "@/components/PerfumeForm";
import { getPerfumeById, updatePerfume } from "@/lib/actions/perfumes";
import { notFound } from "next/navigation";

export default async function EditPerfumePage({ params }) {
  const { id } = await params;

  if (!id) notFound();

  const perfume = await getPerfumeById(id);
  if (!perfume) notFound();

  // ✅ Server Action
  async function handleUpdate(data) {
    "use server"; // important!
    await updatePerfume(id, data);
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-black">Edit Perfume</h1>
      <PerfumeForm action={handleUpdate} initialData={perfume} />
    </div>
  );
}
