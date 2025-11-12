"use server";

import { fetchAndExtractPDFText } from "@/lib/langchain";
import { generatePDFSummaryWithFallback } from "@/lib/ai";

export async function generatePDFSummary(
  uploadRes: Array<{ url: string; name: string }>
) {
  if (!uploadRes?.[0]?.url) {
    return {
      success: false,
      message: "Upload failed or no file URL received",
      extractedText: null,
      summary: null,
    };
  }

  const { url: fileUrl, name: fileName } = uploadRes[0];

  try {
    // Step 1: Extract text from PDF
    const extractedText = await fetchAndExtractPDFText(fileUrl);

    if (!extractedText || extractedText.trim().length < 50) {
      return {
        success: false,
        message: "No readable text found (maybe scanned/image-based PDF)",
        extractedText: null,
        summary: null,
      };
    }

    // Step 2: Generate AI Summary
    const summary = await generatePDFSummaryWithFallback(extractedText);

    return {
      success: true,
      message: "PDF processed successfully",
      fileName,
      extractedText,
      summary,
    };
  } catch (error: any) {
    console.error("PDF processing failed:", error);
    return {
      success: false,
      message: error.message || "Failed to process PDF",
      extractedText: null,
      summary: null,
    };
  }
}
