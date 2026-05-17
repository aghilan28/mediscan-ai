import { Bot, Send, UserRound } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ChatPage() {
  const prompts = ["What does high glucose mean?", "Explain my cholesterol results.", "Summarize Maya's latest report."];
  return (
    <DashboardShell title="AI Chat Assistant" subtitle="Ask report questions, explain biomarkers, and generate patient-safe education.">
      <Card className="mx-auto max-w-4xl">
        <CardHeader><CardTitle>Healthcare AI Assistant</CardTitle></CardHeader>
        <CardContent>
          <div className="rounded-lg bg-amber-50 p-3 text-sm font-medium text-amber-900">This AI assistant does not replace professional medical advice.</div>
          <div className="mt-5 space-y-4">
            <div className="flex gap-3"><div className="rounded-lg bg-slate-950 p-3 text-white"><Bot className="h-5 w-5" /></div><div className="rounded-lg bg-slate-100 p-4 text-sm leading-6 text-slate-700">I can explain biomarkers, summarize uploaded reports, and prepare doctor-friendly notes. What would you like to review?</div></div>
            <div className="flex justify-end gap-3"><div className="rounded-lg bg-sky-600 p-4 text-sm leading-6 text-white">What does high glucose mean?</div><div className="rounded-lg bg-sky-50 p-3 text-sky-700"><UserRound className="h-5 w-5" /></div></div>
            <div className="flex gap-3"><div className="rounded-lg bg-slate-950 p-3 text-white"><Bot className="h-5 w-5" /></div><div className="rounded-lg bg-slate-100 p-4 text-sm leading-6 text-slate-700">A fasting glucose of 145 mg/dL is above the expected range and may indicate impaired glucose control. In this demo report, HbA1c is also elevated, so clinician follow-up is recommended.</div></div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">{prompts.map((p) => <Button key={p} variant="secondary" size="sm">{p}</Button>)}</div>
          <div className="mt-5 flex gap-2"><input className="h-12 flex-1 rounded-lg border border-slate-200 px-4 outline-none focus:border-sky-400" placeholder="Ask about a report, marker, or risk..." /><Button size="icon" aria-label="Send"><Send className="h-4 w-4" /></Button></div>
        </CardContent>
      </Card>
    </DashboardShell>
  );
}
