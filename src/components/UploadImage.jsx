// components/UploadImage.jsx
"use client";

import { useState } from "react";
import { uploadImage } from "@/lib/upload";

export default function UploadImage({ onUpload }) {
  const [file, setFile] = useState(null);

  async function handleUpload() {
    if (!file) return;
    const url = await uploadImage(file);
    onUpload(url);
  }

  return (
    <div className="flex gap-2 items-center">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button
        onClick={handleUpload}
        className="px-3 py-1 bg-blue-500 text-white rounded"
      >
        Upload
      </button>
    </div>
  );
}
