import Link from "next/link";
import { ArrowRight, Brain, CheckCircle2, FileHeart, HeartPulse, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  { title: "Biomarker extraction", text: "Parse CBC, diabetes, thyroid, renal, liver, and lipid reports into structured medical markers.", icon: FileHeart },
  { title: "AI clinical summaries", text: "Generate patient-safe summaries, abnormalities, risk levels, and doctor-friendly recommendations.", icon: Brain },
  { title: "Risk analytics", text: "Track cardiovascular, diabetes, liver, renal, and adherence signals across patient cohorts.", icon: HeartPulse },
  { title: "Clinic-grade privacy posture", text: "Clear disclaimers, local upload storage, and enterprise-ready configuration surfaces.", icon: ShieldCheck },
];

export default function Home() {
  return (
    <main className="bg-white text-slate-950">
      <section className="medical-grid relative overflow-hidden border-b border-slate-200">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 md:px-8">
          <Link href="/" className="flex items-center gap-3 font-bold">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 text-white"><HeartPulse className="h-5 w-5" /></span>
            Mediscan AI
          </Link>
          <div className="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>
          <Button asChild size="sm"><Link href="/login">Launch MVP</Link></Button>
        </nav>
        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-10 md:grid-cols-[0.92fr_1.08fr] md:px-8 md:pb-24 md:pt-16">
          <div className="flex flex-col justify-center">
            <Badge tone="teal">AI-Powered Medical Report Intelligence Platform</Badge>
            <h1 className="mt-6 max-w-3xl text-5xl font-bold tracking-tight text-slate-950 md:text-6xl">AI-Powered Medical Report Intelligence</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Transform blood reports and diagnostic records into actionable AI-driven healthcare insights within seconds.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg"><Link href="/upload">Analyze Report <ArrowRight className="h-4 w-4" /></Link></Button>
              <Button asChild variant="secondary" size="lg"><Link href="/dashboard">Watch Demo</Link></Button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
              {["2.8k reports", "94.7% accepted", "19 alerts today"].map((item) => (
                <div key={item} className="rounded-lg border border-slate-200 bg-white/80 p-3 font-semibold shadow-sm">{item}</div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-8 top-8 hidden rounded-lg border border-sky-100 bg-white/80 p-4 shadow-xl backdrop-blur md:block">
              <div className="text-xs font-semibold text-slate-500">Risk signal</div>
              <div className="mt-1 text-2xl font-bold text-rose-600">Medium</div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white/90 p-4 shadow-2xl shadow-sky-950/10 backdrop-blur">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <div className="text-sm font-semibold text-slate-500">Live analysis</div>
                  <div className="text-xl font-bold">Diabetes + Lipid Panel</div>
                </div>
                <Sparkles className="h-5 w-5 text-sky-500" />
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {["Glucose 145", "HbA1c 7.1", "LDL 164"].map((item) => (
                  <div key={item} className="rounded-lg bg-slate-50 p-4">
                    <div className="h-2 w-16 rounded-full bg-sky-300" />
                    <div className="mt-4 font-bold">{item}</div>
                    <div className="mt-1 text-xs text-amber-600">Above range</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-lg bg-slate-950 p-5 text-white">
                <div className="flex items-center gap-2 text-sm font-semibold text-sky-200"><Stethoscope className="h-4 w-4" /> Doctor note</div>
                <p className="mt-3 text-sm leading-6 text-slate-200">Elevated glucose and LDL indicate metabolic risk. Recommend endocrinology follow-up and repeat HbA1c in 8-12 weeks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title}>
                <CardContent>
                  <Icon className="h-6 w-6 text-sky-600" />
                  <h3 className="mt-5 text-lg font-bold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{feature.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
      <section className="bg-slate-950 px-4 py-16 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {["18 min saved per report", "42% faster triage", "7 specialties supported"].map((stat) => (
            <div key={stat} className="rounded-lg border border-white/10 p-6">
              <div className="text-3xl font-bold">{stat.split(" ")[0]}</div>
              <div className="mt-2 text-slate-300">{stat.replace(stat.split(" ")[0], "").trim()}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {["Clinicians finally get a clean summary before consultation.", "Our diagnostic center demoed this to partners in one afternoon.", "The risk analytics view makes cohort reviews dramatically easier."].map((quote, index) => (
            <Card key={quote}><CardContent><p className="text-slate-700">&ldquo;{quote}&rdquo;</p><div className="mt-4 font-semibold">Healthcare pilot user {index + 1}</div></CardContent></Card>
          ))}
        </div>
      </section>
      <section id="pricing" className="border-y border-slate-200 bg-slate-50 px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {["Starter", "Clinic", "Hospital"].map((plan, index) => (
            <Card key={plan} className={index === 1 ? "border-sky-300 shadow-xl" : ""}>
              <CardContent>
                <h3 className="text-xl font-bold">{plan}</h3>
                <div className="mt-4 text-3xl font-bold">{index === 0 ? "$49" : index === 1 ? "$199" : "Custom"}</div>
                <p className="mt-3 text-sm text-slate-600">Report intelligence, AI summaries, analytics, and reminder workflows.</p>
                <Button className="mt-6 w-full" variant={index === 1 ? "primary" : "secondary"}>Choose plan</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section id="faq" className="mx-auto max-w-4xl px-4 py-16 md:px-8">
        {["Is this a diagnostic tool?", "Can it parse PDFs?", "Does it work without an AI key?"].map((q, i) => (
          <div key={q} className="border-b border-slate-200 py-5">
            <div className="flex items-center gap-2 font-bold"><CheckCircle2 className="h-4 w-4 text-teal-600" /> {q}</div>
            <p className="mt-2 text-sm text-slate-600">{i === 0 ? "No. Mediscan AI provides decision-support summaries and must be reviewed by qualified professionals." : i === 1 ? "Yes. The backend extracts PDF text and parses common biomarkers with realistic fallbacks." : "Yes. It automatically returns believable mock AI outputs for hackathon demos."}</p>
          </div>
        ))}
      </section>
      <footer className="border-t border-slate-200 px-4 py-8 text-center text-sm text-slate-500 md:px-8">
        Mediscan AI is not a real diagnostic device. Always consult a licensed medical professional.
      </footer>
    </main>
  );
}
