import { Bell, Brain, Building2, Moon, ShieldCheck, UserRound } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsPage() {
  const sections = [
    { title: "Profile Settings", icon: UserRound, text: "Dr. Ananya Rao · Internal Medicine · Apollo Demo Clinic" },
    { title: "AI Preferences", icon: Brain, text: "Mock fallback enabled · Explainability: clinician-friendly · Tone: patient-safe" },
    { title: "Notifications", icon: Bell, text: "Critical alerts, missed medicines, report completion, weekly risk digest" },
    { title: "Clinic Branding", icon: Building2, text: "Logo, colors, contact details, printable report header" },
    { title: "Privacy Controls", icon: ShieldCheck, text: "Local uploads, retention policy, disclaimer banners, export controls" },
    { title: "Dark Mode", icon: Moon, text: "Toggle available in UI shell for future persisted preference" },
  ];
  return (
    <DashboardShell title="Settings" subtitle="Profile, AI configuration, notifications, branding, and secure deployment knobs.">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {sections.map((section) => {
          const Icon = section.icon;
          return <Card key={section.title}><CardContent><Icon className="h-6 w-6 text-sky-600" /><h2 className="mt-4 text-lg font-bold">{section.title}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{section.text}</p><Button variant="secondary" className="mt-5">Configure</Button></CardContent></Card>;
        })}
      </div>
      <Card className="mt-6">
        <CardHeader><CardTitle>API Configuration</CardTitle></CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <label className="text-sm font-semibold">Backend URL<input defaultValue="http://localhost:8000" className="mt-2 h-11 w-full rounded-lg border border-slate-200 px-3" /></label>
          <label className="text-sm font-semibold">AI Provider<input defaultValue="Mock fallback / OpenAI / Gemini" className="mt-2 h-11 w-full rounded-lg border border-slate-200 px-3" /></label>
        </CardContent>
      </Card>
    </DashboardShell>
  );
}
