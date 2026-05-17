import { FileImage, FileText, UploadCloud } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { BiomarkerTable } from "@/components/dashboard/biomarker-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { aiFindings } from "@/lib/mock-data";

export default function UploadPage() {
  return (
    <DashboardShell title="Report Upload Center" subtitle="Upload PDFs or medical images and extract biomarkers instantly.">
      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <CardHeader><CardTitle>Drag and Drop Medical Reports</CardTitle></CardHeader>
          <CardContent>
            <div className="flex min-h-72 flex-col items-center justify-center rounded-lg border-2 border-dashed border-sky-200 bg-sky-50/60 p-8 text-center">
              <UploadCloud className="h-12 w-12 text-sky-600" />
              <h2 className="mt-4 text-xl font-bold">Drop PDF, PNG, or JPG reports here</h2>
              <p className="mt-2 max-w-md text-sm text-slate-600">Supported: CBC, Diabetes, Cholesterol, Thyroid, Liver Function, Kidney Function.</p>
              <Button className="mt-6">Choose report</Button>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["CBC_Report_Maya.pdf", "Lipid_Profile_Arjun.png"].map((file, index) => (
                <div key={file} className="flex items-center gap-3 rounded-lg border border-slate-200 p-3">
                  {index === 0 ? <FileText className="h-5 w-5 text-sky-600" /> : <FileImage className="h-5 w-5 text-teal-600" />}
                  <div><div className="text-sm font-semibold">{file}</div><div className="text-xs text-slate-500">Parsed successfully</div></div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>AI Findings Preview</CardTitle></CardHeader>
          <CardContent>
            <Badge tone="amber">Medium risk</Badge>
            <p className="mt-4 text-sm leading-6 text-slate-600">{aiFindings.summary}</p>
            <div className="mt-5"><BiomarkerTable /></div>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  );
}
