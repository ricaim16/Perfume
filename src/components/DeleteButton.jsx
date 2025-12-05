import { deletePerfume } from "@/lib/actions/perfumes";
import { redirect } from "next/navigation";

export default function DeletePerfumeButton({ perfumeId, perfumeName }) {
  // Server Action
  async function handleDelete() {
    "use server"; // must be inside a Server Component
    await deletePerfume(perfumeId);
    redirect("/admin/perfumes"); // redirect after deletion
  }

  return (
    <form action={handleDelete}>
      <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">
        Delete {perfumeName}
      </button>
    </form>
  );
}
