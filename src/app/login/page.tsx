import Link from "next/link";
import { HeartPulse, Mail, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <main className="medical-grid flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-8">
          <Link href="/" className="mx-auto flex w-fit items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-950 text-white"><HeartPulse className="h-5 w-5" /></span>
            <span className="text-xl font-bold">Mediscan AI</span>
          </Link>
          <div className="mt-8 text-center">
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="mt-2 text-sm text-slate-500">Sign in to review reports, alerts, and patient intelligence.</p>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Button variant="secondary"><Mail className="h-4 w-4" /> Google</Button>
            <Button variant="secondary"><ShieldCheck className="h-4 w-4" /> SSO</Button>
          </div>
          <form className="mt-6 space-y-4">
            <label className="block text-sm font-semibold text-slate-700">Email
              <input defaultValue="doctor@mediscan.ai" className="mt-2 h-11 w-full rounded-lg border border-slate-200 px-3 outline-none focus:border-sky-400" />
            </label>
            <label className="block text-sm font-semibold text-slate-700">Password
              <input defaultValue="password123" type="password" className="mt-2 h-11 w-full rounded-lg border border-slate-200 px-3 outline-none focus:border-sky-400" />
            </label>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-600"><input type="checkbox" defaultChecked /> Remember me</label>
              <a className="font-semibold text-sky-700" href="#">Forgot password?</a>
            </div>
            <Button asChild className="w-full"><Link href="/dashboard">Sign in to demo</Link></Button>
          </form>
          <div className="mt-6 rounded-lg bg-sky-50 p-4 text-sm text-sky-900">
            Demo credentials: <span className="font-semibold">doctor@mediscan.ai</span> / <span className="font-semibold">password123</span>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
