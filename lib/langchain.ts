import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

export async function fetchAndExtractPDFText(fileUrl: string): Promise<string> {
  const response = await fetch(fileUrl);
  if (!response.ok) throw new Error("Failed to fetch PDF");

  const arrayBuffer = await response.arrayBuffer();
  const blob = new Blob([arrayBuffer]);

  const loader = new PDFLoader(blob, {
    parsedItemSeparator: "\n",
  });

  const docs = await loader.load();

  return docs
    .map((doc) => doc.pageContent)
    .join("\n")
    .replace(/\s+/g, " ")
    .trim();
}
