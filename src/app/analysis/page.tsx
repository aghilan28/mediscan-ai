import { Brain, ClipboardCheck, Stethoscope } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { BiomarkerTable } from "@/components/dashboard/biomarker-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { aiFindings } from "@/lib/mock-data";

export default function AnalysisPage() {
  return (
    <DashboardShell title="AI Analysis Dashboard" subtitle="Structured AI summaries, abnormalities, ranges, and next-step guidance.">
      <div className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
        <Card>
          <CardHeader><CardTitle>Extracted Biomarkers</CardTitle></CardHeader>
          <CardContent><BiomarkerTable /></CardContent>
        </Card>
        <div className="space-y-6">
          <Card><CardContent><Brain className="h-6 w-6 text-sky-600" /><h2 className="mt-4 text-xl font-bold">AI Medical Summary</h2><p className="mt-3 text-sm leading-6 text-slate-600">{aiFindings.summary}</p></CardContent></Card>
          <Card><CardContent><Stethoscope className="h-6 w-6 text-teal-600" /><h2 className="mt-4 text-xl font-bold">Doctor Review Notes</h2><p className="mt-3 text-sm leading-6 text-slate-600">Prioritize glucose control, lipid risk review, and anemia workup. No evidence of acute renal or thyroid derangement in the parsed markers.</p></CardContent></Card>
          <Card><CardContent><ClipboardCheck className="h-6 w-6 text-indigo-600" /><h2 className="mt-4 text-xl font-bold">Recommendations</h2><div className="mt-3 space-y-2">{aiFindings.recommendations.map((r) => <Badge key={r} tone="blue">{r}</Badge>)}</div></CardContent></Card>
        </div>
      </div>
    </DashboardShell>
  );
}
