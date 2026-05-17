import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { RiskTrendChart } from "@/components/dashboard/charts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { patients } from "@/lib/mock-data";

export default function PatientsPage() {
  return (
    <DashboardShell title="Patient History" subtitle="Longitudinal patient cards, report timeline, and progress graphs.">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {patients.map((patient) => <Card key={patient.id}><CardContent><div className="flex items-start justify-between"><div><div className="font-bold">{patient.name}</div><div className="text-sm text-slate-500">{patient.age} years · {patient.gender}</div></div><Badge tone={patient.risk === "Critical" ? "red" : patient.risk === "High" ? "amber" : "green"}>{patient.risk}</Badge></div><p className="mt-4 text-sm text-slate-600">{patient.condition}</p><div className="mt-4 text-sm font-semibold">Health score {patient.score}</div></CardContent></Card>)}
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_0.8fr]">
        <Card><CardHeader><CardTitle>Trends Over Time</CardTitle></CardHeader><CardContent><RiskTrendChart /></CardContent></Card>
        <Card><CardHeader><CardTitle>Timeline</CardTitle></CardHeader><CardContent className="space-y-4">{["Report uploaded", "AI summary generated", "Doctor note approved", "Reminder plan updated"].map((item) => <div key={item} className="border-l-2 border-sky-300 pl-4"><div className="font-semibold">{item}</div><div className="text-sm text-slate-500">May 2026</div></div>)}</CardContent></Card>
      </div>
    </DashboardShell>
  );
}
