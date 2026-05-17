import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react";
import { biomarkers } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";

export function BiomarkerTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[680px] text-left text-sm">
        <thead className="text-xs uppercase tracking-wide text-slate-500">
          <tr className="border-b border-slate-100">
            <th className="py-3 pr-4">Marker</th>
            <th className="py-3 pr-4">Value</th>
            <th className="py-3 pr-4">Normal Range</th>
            <th className="py-3 pr-4">Status</th>
            <th className="py-3 pr-4">Trend</th>
          </tr>
        </thead>
        <tbody>
          {biomarkers.map((item) => {
            const tone = item.status === "Normal" ? "green" : item.status === "Critical" ? "red" : item.status === "High" ? "amber" : "blue";
            const TrendIcon = item.trend === "up" ? ArrowUp : item.trend === "down" ? ArrowDown : ArrowRight;
            return (
              <tr key={item.marker} className="border-b border-slate-100 last:border-0">
                <td className="py-4 pr-4 font-semibold text-slate-900">{item.marker}</td>
                <td className="py-4 pr-4 text-slate-700">{item.value}</td>
                <td className="py-4 pr-4 text-slate-500">{item.range}</td>
                <td className="py-4 pr-4"><Badge tone={tone}>{item.status}</Badge></td>
                <td className="py-4 pr-4"><TrendIcon className="h-4 w-4 text-slate-500" /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
