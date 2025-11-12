"use client";

import { useState } from "react";
import { FileText } from "lucide-react";
import UploadFormInput from "./uploadFormInput";
import { z } from "zod";
import { useUploadThing } from "@/utils/uploadthing";
import { generatePDFSummary } from "@/actions/upload-actions";

const fileSchema = z.object({
  file: z
    .instanceof(File)
    .refine((f) => f.size <= 10 * 1024 * 1024, "Max 10MB")
    .refine((f) => f.type === "application/pdf", "Only PDF allowed"),
});

export default function UploadForm() {
  const [error, setError] = useState<string | null>(null);

  const { startUpload, isUploading } = useUploadThing("pdfUploader", {
    onClientUploadComplete: (res) => {
      const url = res?.[0]?.ufsUrl;
    },
    onUploadError: (err) => {
      setError(err.message || "Upload failed");
    },
  });

  const handleUpload = async (file: File) => {
    setError(null);

    try {
      fileSchema.parse({ file });
      const res = await startUpload([file]);

      if (!res?.[0]?.ufsUrl) {
        throw new Error("No URL returned from UploadThing");
      }
      const PDFSummary = await generatePDFSummary(res);

      console.log(PDFSummary, "summary");
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError(error.message);
      } else {
        setError(error instanceof Error ? error.message : "Upload failed");
      }
      throw error;
    }
  };

  if (error) {
    setTimeout(() => setError(null), 5000);
  }

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-purple-500/30 via-cyan-500/30 to-pink-500/30 blur-3xl animate-pulse-slow" />

      <div className="relative p-20 rounded-3xl glass-card border border-white/20 backdrop-blur-3xl shadow-2xl">
        <div className="flex justify-center mb-10">
          <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20">
            <FileText className="w-16 h-16 text-cyan-400" />
          </div>
        </div>

        <h2 className="text-center text-6xl font-black text-white mb-6">
          Upload Your PDF
        </h2>
        <p className="text-center text-xl text-gray-300 mb-12">
          One drop. One click.{" "}
          <span className="text-cyan-300 font-bold">Pure magic.</span>
        </p>
        {error && (
          <div className="mb-8 p-6 rounded-2xl bg-red-500/10 border border-red-500/30 backdrop-blur-md animate-pulse">
            <p className="text-red-300 text-center font-bold text-lg">
              {error}
            </p>
          </div>
        )}

        <UploadFormInput onSubmit={handleUpload} isUploading={isUploading} />
      </div>
    </div>
  );
}
