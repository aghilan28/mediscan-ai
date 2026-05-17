import { CalendarDays, Pill } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { medicines } from "@/lib/mock-data";

export default function RemindersPage() {
  return (
    <DashboardShell title="Medicine Reminder Center" subtitle="Dosage schedules, adherence tracking, and AI nudges for patient engagement.">
      <div className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
        <Card>
          <CardHeader><CardTitle>Today&apos;s Schedule</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {medicines.map((med) => (
              <div key={med.name} className="flex items-center justify-between rounded-lg border border-slate-100 p-4">
                <div className="flex items-center gap-3"><div className="rounded-lg bg-teal-50 p-3 text-teal-700"><Pill className="h-5 w-5" /></div><div><div className="font-bold">{med.name}</div><div className="text-sm text-slate-500">{med.dose} at {med.time}</div></div></div>
                <Badge tone={med.status.includes("Missed") ? "red" : med.status.includes("Due") ? "amber" : "green"}>{med.status}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Adherence Calendar</CardTitle></CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 35 }).map((_, i) => <div key={i} className={`flex aspect-square items-center justify-center rounded-lg text-xs font-bold ${i % 9 === 0 ? "bg-rose-50 text-rose-700" : "bg-emerald-50 text-emerald-700"}`}>{i + 1}</div>)}
            </div>
            <div className="mt-6 rounded-lg bg-sky-50 p-4 text-sm text-sky-900"><CalendarDays className="mb-2 h-5 w-5" /> AI suggestion: evening statin reminders have the highest missed rate. Send SMS nudges at 9:00 PM.</div>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  );
}
