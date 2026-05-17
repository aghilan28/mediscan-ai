import { AlertTriangle, ClipboardList, Stethoscope } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { patients, biomarkers } from "@/lib/mock-data";

export default function DoctorPage() {
  return (
    <DashboardShell title="Doctor Insights Panel" subtitle="AI-generated notes, critical queues, and abnormalities prepared for review.">
      <div className="grid gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2"><CardHeader><CardTitle>AI-Generated Doctor Notes</CardTitle></CardHeader><CardContent className="space-y-4">{patients.map((p) => <div key={p.id} className="rounded-lg border border-slate-100 p-4"><div className="flex items-center gap-2 font-bold"><Stethoscope className="h-4 w-4 text-sky-600" /> {p.name}</div><p className="mt-2 text-sm leading-6 text-slate-600">{p.condition} profile with health score {p.score}. Review latest {p.lastReport} and confirm intervention plan.</p></div>)}</CardContent></Card>
        <Card><CardHeader><CardTitle>Critical Patients</CardTitle></CardHeader><CardContent className="space-y-3">{patients.filter((p) => p.risk === "Critical" || p.risk === "High").map((p) => <div key={p.id} className="flex items-center justify-between rounded-lg bg-rose-50 p-3"><span className="font-semibold text-rose-900">{p.name}</span><Badge tone="red">{p.risk}</Badge></div>)}</CardContent></Card>
      </div>
      <Card className="mt-6"><CardHeader><CardTitle>Recent Abnormalities</CardTitle></CardHeader><CardContent className="grid gap-3 md:grid-cols-3">{biomarkers.filter((b) => b.status !== "Normal").map((b) => <div key={b.marker} className="rounded-lg border border-amber-100 bg-amber-50 p-4"><AlertTriangle className="h-5 w-5 text-amber-600" /><div className="mt-3 font-bold">{b.marker}</div><div className="text-sm text-amber-800">{b.value} · {b.status}</div></div>)}</CardContent></Card>
      <Card className="mt-6"><CardContent><ClipboardList className="h-5 w-5 text-teal-600" /><p className="mt-3 text-sm text-slate-600">Generated notes are draft clinical decision support. Every recommendation requires licensed clinician review before patient communication.</p></CardContent></Card>
    </DashboardShell>
  );
}
