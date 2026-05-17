"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  Bell,
  Bot,
  FileArchive,
  FileUp,
  HeartPulse,
  LayoutDashboard,
  Pill,
  Search,
  Settings,
  Stethoscope,
  UserRound,
  UsersRound,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const nav = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/upload", label: "Upload Center", icon: FileUp },
  { href: "/analysis", label: "AI Analysis", icon: Activity },
  { href: "/risks", label: "Risk Analytics", icon: HeartPulse },
  { href: "/reminders", label: "Reminders", icon: Pill },
  { href: "/chat", label: "AI Assistant", icon: Bot },
  { href: "/patients", label: "Patient History", icon: UsersRound },
  { href: "/reports", label: "Reports Archive", icon: FileArchive },
  { href: "/doctor", label: "Doctor Insights", icon: Stethoscope },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function DashboardShell({ children, title, subtitle }: { children: React.ReactNode; title: string; subtitle: string }) {
  const pathname = usePathname();
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 border-r border-slate-200 bg-white/95 p-4 backdrop-blur lg:block">
        <Link href="/" className="mb-8 flex items-center gap-3 px-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-950 text-white">
            <HeartPulse className="h-5 w-5" />
          </div>
          <div>
            <div className="text-lg font-bold">Mediscan AI</div>
            <div className="text-xs font-medium text-slate-500">Report intelligence</div>
          </div>
        </Link>
        <nav className="space-y-1">
          {nav.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                href={item.href}
                key={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition",
                  active ? "bg-sky-50 text-sky-700" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-6 rounded-lg border border-teal-100 bg-teal-50 p-4 text-sm text-teal-900">
          <div className="font-semibold">Clinical disclaimer</div>
          <p className="mt-1 text-teal-800">AI insights support clinicians and do not replace professional medical advice.</p>
        </div>
      </aside>
      <main className="lg:pl-72">
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/85 px-4 py-3 backdrop-blur md:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-950">{title}</h1>
              <p className="text-sm text-slate-500">{subtitle}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden h-10 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 md:flex">
                <Search className="h-4 w-4 text-slate-400" />
                <span className="text-sm text-slate-500">Search patients, reports, markers</span>
              </div>
              <Button variant="secondary" size="icon" aria-label="Notifications">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="icon" aria-label="Profile">
                <UserRound className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>
        <div className="p-4 md:p-8">{children}</div>
      </main>
    </div>
  );
}
