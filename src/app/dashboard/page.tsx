import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { MetricGrid } from "@/components/dashboard/metric-grid";
import { BloodAnalyticsChart, DiseasePieChart, RiskTrendChart, UploadLineChart } from "@/components/dashboard/charts";
import { BiomarkerTable } from "@/components/dashboard/biomarker-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { aiFindings, patients } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  return (
    <DashboardShell title="Command Dashboard" subtitle="Live AI triage, cohort risk, reports, and clinical workflow health.">
      <div className="space-y-6">
        <MetricGrid />
        <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
          <Card>
            <CardHeader><CardTitle>Patient Risk Trends</CardTitle></CardHeader>
            <CardContent><RiskTrendChart /></CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>AI Summary</CardTitle></CardHeader>
            <CardContent>
              <Badge tone="amber">{aiFindings.riskLevel} risk</Badge>
              <p className="mt-4 text-sm leading-6 text-slate-600">{aiFindings.summary}</p>
              <div className="mt-4 space-y-2">
                {aiFindings.recommendations.slice(0, 3).map((item) => <div key={item} className="rounded-lg bg-slate-50 p-3 text-sm font-medium text-slate-700">{item}</div>)}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-6 xl:grid-cols-3">
          <Card className="xl:col-span-2">
            <CardHeader><CardTitle>Blood Parameter Analytics</CardTitle></CardHeader>
            <CardContent><BloodAnalyticsChart /></CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Disease Distribution</CardTitle></CardHeader>
            <CardContent><DiseasePieChart /></CardContent>
          </Card>
        </div>
        <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
          <Card>
            <CardHeader><CardTitle>Report Uploads</CardTitle></CardHeader>
            <CardContent><UploadLineChart /></CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Abnormal Biomarkers</CardTitle></CardHeader>
            <CardContent><BiomarkerTable /></CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader><CardTitle>Critical Patient Queue</CardTitle></CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {patients.map((patient) => (
              <div key={patient.id} className="rounded-lg border border-slate-100 p-4">
                <div className="flex items-center justify-between"><span className="font-bold">{patient.name}</span><Badge tone={patient.risk === "Critical" ? "red" : patient.risk === "High" ? "amber" : "green"}>{patient.risk}</Badge></div>
                <p className="mt-2 text-sm text-slate-500">{patient.condition}</p>
                <div className="mt-4 h-2 rounded-full bg-slate-100"><div className="h-2 rounded-full bg-sky-500" style={{ width: `${patient.score}%` }} /></div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  );
}
