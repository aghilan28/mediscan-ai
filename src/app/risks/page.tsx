import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { BloodAnalyticsChart, DiseasePieChart, HealthScoreMeter, RiskTrendChart } from "@/components/dashboard/charts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RisksPage() {
  const scores = ["Cardiovascular 72", "Diabetes 81", "Liver 34", "BMI 66"];
  return (
    <DashboardShell title="Risk Indicator Analytics" subtitle="Cohort and patient-level risk models for proactive care workflows.">
      <div className="grid gap-6 xl:grid-cols-4">
        <Card className="xl:col-span-1"><CardHeader><CardTitle>Health Score</CardTitle></CardHeader><CardContent><HealthScoreMeter value={78} /></CardContent></Card>
        <Card className="xl:col-span-3"><CardHeader><CardTitle>Risk Trend Distribution</CardTitle></CardHeader><CardContent><RiskTrendChart /></CardContent></Card>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-4">
        {scores.map((score) => {
          const [label, value] = score.split(" ");
          return <Card key={label}><CardContent><div className="text-sm font-semibold text-slate-500">{label} risk</div><div className="mt-3 text-3xl font-bold">{value}</div><div className="mt-4 h-2 rounded-full bg-slate-100"><div className="h-2 rounded-full bg-sky-500" style={{ width: `${value}%` }} /></div></CardContent></Card>;
        })}
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <Card><CardHeader><CardTitle>Cholesterol and Biomarker Trends</CardTitle></CardHeader><CardContent><BloodAnalyticsChart /></CardContent></Card>
        <Card><CardHeader><CardTitle>Health Distribution</CardTitle></CardHeader><CardContent><DiseasePieChart /></CardContent></Card>
      </div>
    </DashboardShell>
  );
}
