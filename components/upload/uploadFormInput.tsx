"use client";

import { useState, useEffect } from "react";
import {
  UploadCloud,
  Loader2,
  CheckCircle,
  FileText,
  RefreshCw,
  AlertCircle,
} from "lucide-react";

interface UploadFormInputProps {
  onSubmit: (file: File) => Promise<void>;
  isUploading: boolean;
}

export default function UploadFormInput({
  onSubmit,
  isUploading,
}: UploadFormInputProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleFileSelect = (selectedFile: File) => {
    if (!selectedFile.type.includes("pdf")) {
      setError("Only PDF files are allowed");
      return;
    }
    if (selectedFile.size > 10 * 1024 * 1024) {
      setError("File too large. Max 10MB allowed");
      return;
    }
    setFile(selectedFile);
    setIsSuccess(false);
    setError(null);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) handleFileSelect(droppedFile);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) handleFileSelect(selectedFile);
  };

  const handleSubmit = async () => {
    if (!file) return;
    setError(null);
    try {
      await onSubmit(file);
      setIsSuccess(true);
    } catch (err: any) {
      setError(err.message || "Upload failed. Please try again.");
    }
  };

  const resetUpload = () => {
    setFile(null);
    setIsSuccess(false);
    setError(null);
    const input = document.getElementById("pdf-file") as HTMLInputElement;
    if (input) input.value = "";
  };

  return (
    <>
      {error && (
        <div className="mb-8 p-6 rounded-2xl bg-red-500/10 border border-red-500/30 backdrop-blur-md animate-pulse">
          <div className="flex items-center justify-center gap-3">
            <AlertCircle className="w-6 h-6 text-red-400" />
            <p className="text-red-300 font-bold text-lg">{error}</p>
          </div>
        </div>
      )}

      <div
        className={`relative border-4 border-dashed rounded-3xl transition-all duration-500 text-center ${
          isDragging
            ? "border-cyan-400 bg-cyan-500/10 scale-105"
            : "border-white/30 bg-white/5"
        } ${isUploading || isSuccess ? "pointer-events-none opacity-70" : ""}`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
      >
        <label htmlFor="pdf-file" className="block cursor-pointer p-20">
          {isSuccess ? (
            <div className="space-y-6">
              <CheckCircle className="w-24 h-24 text-cyan-400 mx-auto animate-bounce" />
              <p className="text-3xl font-black text-cyan-300">Uploaded!</p>
              <p className="text-xl text-gray-300">{file?.name}</p>
            </div>
          ) : isUploading ? (
            <div className="space-y-4">
              <Loader2 className="w-20 h-20 text-cyan-400 mx-auto animate-spin" />
              <p className="text-2xl font-bold text-cyan-300">Uploading...</p>
              <p className="text-gray-400">{file?.name}</p>
            </div>
          ) : file ? (
            <div className="space-y-4">
              <FileText className="w-20 h-20 text-purple-400 mx-auto" />
              <p className="text-2xl font-bold text-white">Ready!</p>
              <p className="text-cyan-300 text-lg">{file.name}</p>
            </div>
          ) : (
            <>
              <UploadCloud className="w-20 h-20 text-cyan-400 mx-auto mb-6 animate-bounce" />
              <p className="text-2xl font-bold text-white mb-2">
                Drop PDF here
              </p>
              <p className="text-gray-400 text-lg">or click to select</p>
            </>
          )}
        </label>

        <input
          id="pdf-file"
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={handleChange}
          disabled={isUploading}
        />
      </div>
      {file && !isUploading && !isSuccess && (
        <div className="mt-10 text-center">
          <button
            onClick={handleSubmit}
            disabled={isUploading}
            className="px-20 py-7 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 font-black text-3xl text-white hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/60 transition-all duration-300"
          >
            Upload PDF
          </button>
        </div>
      )}
      {isSuccess && (
        <div className="mt-10 text-center">
          <button
            onClick={resetUpload}
            className="inline-flex items-center gap-3 px-16 py-6 rounded-2xl bg-white/10 border border-white/30 text-white font-bold text-xl hover:bg-white/20 hover:border-cyan-400 transition-all duration-300"
          >
            <RefreshCw className="w-6 h-6" />
            Upload Another PDF
          </button>
        </div>
      )}
    </>
  );
}
