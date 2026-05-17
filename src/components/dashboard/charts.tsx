"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { bloodAnalytics, diseaseDistribution, riskTrend, uploadTrend } from "@/lib/mock-data";

const colors = ["#0ea5e9", "#14b8a6", "#6366f1", "#f59e0b", "#ef4444"];

export function RiskTrendChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart data={riskTrend}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="month" stroke="#64748b" />
        <YAxis stroke="#64748b" />
        <Tooltip />
        <Area dataKey="low" stackId="1" stroke="#14b8a6" fill="#ccfbf1" />
        <Area dataKey="medium" stackId="1" stroke="#0ea5e9" fill="#dbeafe" />
        <Area dataKey="high" stackId="1" stroke="#f59e0b" fill="#fef3c7" />
        <Area dataKey="critical" stackId="1" stroke="#ef4444" fill="#fee2e2" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function BloodAnalyticsChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={bloodAnalytics}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="name" stroke="#64748b" />
        <YAxis stroke="#64748b" />
        <Tooltip />
        <Bar dataKey="baseline" fill="#cbd5e1" radius={[6, 6, 0, 0]} />
        <Bar dataKey="patient" fill="#0ea5e9" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function DiseasePieChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <PieChart>
        <Pie data={diseaseDistribution} dataKey="value" nameKey="name" innerRadius={58} outerRadius={96} paddingAngle={4}>
          {diseaseDistribution.map((entry, index) => (
            <Cell key={entry.name} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

export function UploadLineChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <LineChart data={uploadTrend}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="day" stroke="#64748b" />
        <YAxis stroke="#64748b" />
        <Tooltip />
        <Line type="monotone" dataKey="reports" stroke="#14b8a6" strokeWidth={3} dot={{ r: 5 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function HealthScoreMeter({ value = 78 }: { value?: number }) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <RadialBarChart innerRadius="70%" outerRadius="100%" data={[{ name: "score", value, fill: "#0ea5e9" }]} startAngle={180} endAngle={0}>
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        <RadialBar dataKey="value" cornerRadius={10} background />
        <text x="50%" y="56%" textAnchor="middle" dominantBaseline="middle" className="fill-slate-950 text-3xl font-bold">
          {value}
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  );
}
