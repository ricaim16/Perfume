// app/admin/perfumes/create/page.jsx
import PerfumeForm from "@/components/PerfumeForm";
import { createPerfume } from "@/lib/actions/perfumes";

export default function CreatePerfumePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6 md:p-10 lg:ml-80 max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1
            className="text-5xl font-bold text-black"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Add Perfume
          </h1>
         
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12">
          <PerfumeForm action={createPerfume} />
        </div>
      </div>
    </div>
  );
}
