import { metrics } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";

const tones = {
  blue: "bg-sky-50 text-sky-700",
  teal: "bg-teal-50 text-teal-700",
  red: "bg-rose-50 text-rose-700",
  amber: "bg-amber-50 text-amber-700",
  indigo: "bg-indigo-50 text-indigo-700",
  green: "bg-emerald-50 text-emerald-700",
};

export function MetricGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <Card key={metric.label} className="overflow-hidden">
            <CardContent className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">{metric.label}</p>
                <div className="mt-2 text-3xl font-bold tracking-tight text-slate-950">{metric.value}</div>
                <p className="mt-2 text-xs font-semibold text-teal-700">{metric.change}</p>
              </div>
              <div className={`rounded-lg p-3 ${tones[metric.tone]}`}>
                <Icon className="h-5 w-5" />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
