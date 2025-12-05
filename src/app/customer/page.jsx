// // app/customer/page.jsx
// import PerfumeCard from "@/components/PerfumeCard";
// import { getAllPerfumes } from "@/lib/actions/perfumes";

// export default async function CustomerPerfumeList() {
//   const perfumes = await getAllPerfumes();

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-semibold mb-4">Perfume Collection</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {perfumes?.map((perfume) => (
//           <PerfumeCard key={perfume.id} perfume={perfume} />
//         ))}
//       </div>
//     </div>
//   );
// }
