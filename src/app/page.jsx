"use client";
import { useEffect, useState } from "react";
import PerfumeCard from "@/components/PerfumeCard";
import { getAllPerfumes } from "@/lib/actions/perfumes";
import Link from "next/link";

export default function HomePage() {
  const [perfumes, setPerfumes] = useState([]);
  const [typedText, setTypedText] = useState("");
  const fullText = "Welcome to Perfume Inventory";

  useEffect(() => {
    async function fetchPerfumes() {
      const data = await getAllPerfumes();
      setPerfumes(data || []);
    }
    fetchPerfumes();
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* PROFESSIONAL RECTANGLE ADMIN BUTTON – Top Right */}
      <Link
        href="/admin"
        className="fixed top-6 right-6 z-50 
                   px-8 py-4 
                   bg-black/90 backdrop-blur-lg 
                   text-white font-medium text-base 
                   rounded-lg hover:rounded-xl 
                   border border-white/30 
                   shadow-2xl hover:shadow-black/50 
                   hover:bg-black 
                   transition-all duration-300 
                   tracking-wide uppercase text-sm 
                   flex items-center gap-2"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 11c0-2.67-2.24-5-5-5S2 8.33 2 11s2.24 5 5 5 5-2.33 5-5zm10 9v2H2v-2s0-4 10-4 10 4 10 4z"
          />
        </svg>
        Admin Panel
      </Link>

      <main className="min-h-screen flex flex-col">
        {/* HERO SECTION */}
        <section
          className="relative min-h-screen flex items-center justify-center"
          style={{
            backgroundImage: "url('/2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <h1
              className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                textShadow: "2px 2px 10px rgba(0,0,0,0.8)",
              }}
            >
              {typedText}
              <span className="inline-block w-1 h-10 bg-white animate-pulse ml-2" />
            </h1>

            <p
              className="text-xl md:text-2xl text-white/95 font-light leading-relaxed max-w-2xl mx-auto"
              style={{
                fontFamily: "'Montserrat', Arial, sans-serif",
                textShadow: "1px 1px 8px rgba(0,0,0,0.7)",
              }}
            >
              Find the perfect fragrance from our carefully curated collection.
            </p>
          </div>
        </section>

        {/* PERFUME COLLECTION */}
        <section className="py-20 md:py-28 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Perfume Collection
            </h2>
            <p
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Explore our curated collection of premium perfumes. Find the
              perfect fragrance that defines your style.
            </p>
          </div> 

          <div className="mt-16 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
            {perfumes && perfumes.length > 0 ? (
              perfumes.map((perfume) => (
                <PerfumeCard key={perfume.id} perfume={perfume} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500 text-lg py-20">
                No perfumes available yet. Admin needs to add some!
              </p>
            )}
          </div>
        </section>

        {/* PROFESSIONAL FOOTER */}
        {/* ULTIMATE PROFESSIONAL FOOTER – Luxury Black */}
        <footer className="bg-black text-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
              {/* Brand + Description + Copyright in one elegant block */}
              <div className="space-y-4">
                <h3
                  className="text-3xl font-bold tracking-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Perfume Inventory
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                  Discover, explore, and indulge in our curated collection of
                  luxurious fragrances.
                </p>

                {/* Copyright right next to description – clean & modern */}
                <p className="text-gray-500 text-xs tracking-wider uppercase pt-2">
                  © 2025 Perfume Inventory. All rights reserved.
                </p>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Quick Links</h4>
                <ul className="space-y-3 text-gray-400 text-sm">
                  <li>
                    <Link href="#" className="hover:text-white transition">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition">
                      Shipping & Returns
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Contact</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  info@perfumeinventory.com
                  <br />
                  +251 912 345 678
                  <br />
                  Addis Ababa, Ethiopia
                </p>

                {/* Optional social icons */}
                <div className="flex gap-6 mt-6 justify-center md:justify-start">
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-white transition"
                  >
                    Instagram
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-white transition"
                  >
                    Facebook
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
