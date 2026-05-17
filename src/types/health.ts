import type { LucideIcon } from "lucide-react";

export type RiskLevel = "Low" | "Medium" | "High" | "Critical";

export interface Biomarker {
  marker: string;
  value: string;
  range: string;
  status: "Normal" | "Low" | "High" | "Critical";
  trend: "up" | "down" | "stable";
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  condition: string;
  score: number;
  risk: RiskLevel;
  lastReport: string;
  adherence: number;
}

export interface Report {
  id: string;
  patient: string;
  type: string;
  date: string;
  status: RiskLevel;
  tags: string[];
  size: string;
}

export interface MetricCard {
  label: string;
  value: string;
  change: string;
  tone: "blue" | "teal" | "red" | "amber" | "indigo" | "green";
  icon: LucideIcon;
}
