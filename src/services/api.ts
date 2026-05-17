export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export async function analyzeReportText(reportText: string) {
  const response = await fetch(`${API_BASE_URL}/analyze`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ report_text: reportText }),
  });

  if (!response.ok) {
    throw new Error("Unable to analyze report");
  }

  return response.json();
}

export async function uploadReport(file: File) {
  const data = new FormData();
  data.append("file", file);

  const response = await fetch(`${API_BASE_URL}/upload`, {
    method: "POST",
    body: data,
  });

  if (!response.ok) {
    throw new Error("Unable to upload report");
  }

  return response.json();
}
