import { Download, Filter, Search } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { reports } from "@/lib/mock-data";

export default function ReportsPage() {
  return (
    <DashboardShell title="Reports Archive" subtitle="Searchable diagnostic records with tags, filters, sorting, and export actions.">
      <Card>
        <CardHeader><div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><CardTitle>All Reports</CardTitle><div className="flex gap-2"><Button variant="secondary"><Search className="h-4 w-4" /> Search</Button><Button variant="secondary"><Filter className="h-4 w-4" /> Filter</Button></div></div></CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-slate-500"><tr className="border-b border-slate-100"><th className="py-3">ID</th><th>Patient</th><th>Type</th><th>Date</th><th>Tags</th><th>Status</th><th>Action</th></tr></thead>
            <tbody>{reports.map((report) => <tr key={report.id} className="border-b border-slate-100"><td className="py-4 font-semibold">{report.id}</td><td>{report.patient}</td><td>{report.type}</td><td>{report.date}</td><td className="space-x-1">{report.tags.map((tag) => <Badge key={tag} tone="blue">{tag}</Badge>)}</td><td><Badge tone={report.status === "Critical" ? "red" : report.status === "High" ? "amber" : "green"}>{report.status}</Badge></td><td><Button variant="ghost" size="icon" aria-label="Download"><Download className="h-4 w-4" /></Button></td></tr>)}</tbody>
          </table>
        </CardContent>
      </Card>
    </DashboardShell>
  );
}
