import {
  Activity,
  AlertTriangle,
  Brain,
  CalendarCheck,
  FileText,
  HeartPulse,
} from "lucide-react";
import type { Biomarker, MetricCard, Patient, Report } from "@/types/health";

export const patients: Patient[] = [
  { id: "P-1004", name: "Maya Krishnan", age: 42, gender: "Female", condition: "Diabetes watch", score: 78, risk: "Medium", lastReport: "CBC + HbA1c", adherence: 91 },
  { id: "P-1011", name: "Arjun Mehta", age: 55, gender: "Male", condition: "Cardio metabolic", score: 61, risk: "High", lastReport: "Lipid profile", adherence: 72 },
  { id: "P-1020", name: "Sara Iyer", age: 31, gender: "Female", condition: "Thyroid review", score: 86, risk: "Low", lastReport: "Thyroid panel", adherence: 96 },
  { id: "P-1037", name: "Daniel Rao", age: 63, gender: "Male", condition: "Kidney function", score: 54, risk: "Critical", lastReport: "Renal panel", adherence: 68 },
];

export const reports: Report[] = [
  { id: "RPT-8841", patient: "Maya Krishnan", type: "Diabetes Panel", date: "May 16, 2026", status: "Medium", tags: ["HbA1c", "Glucose"], size: "1.8 MB" },
  { id: "RPT-8832", patient: "Arjun Mehta", type: "Cholesterol", date: "May 15, 2026", status: "High", tags: ["LDL", "Triglycerides"], size: "940 KB" },
  { id: "RPT-8790", patient: "Sara Iyer", type: "Thyroid", date: "May 13, 2026", status: "Low", tags: ["TSH", "T3", "T4"], size: "1.1 MB" },
  { id: "RPT-8775", patient: "Daniel Rao", type: "Kidney Function", date: "May 12, 2026", status: "Critical", tags: ["Creatinine", "eGFR"], size: "2.2 MB" },
  { id: "RPT-8750", patient: "Nisha Verma", type: "CBC", date: "May 10, 2026", status: "Medium", tags: ["Hemoglobin", "WBC"], size: "760 KB" },
];

export const biomarkers: Biomarker[] = [
  { marker: "Glucose fasting", value: "145 mg/dL", range: "70-99 mg/dL", status: "High", trend: "up" },
  { marker: "HbA1c", value: "7.1%", range: "4.0-5.6%", status: "High", trend: "up" },
  { marker: "Hemoglobin", value: "11.2 g/dL", range: "12.0-15.5 g/dL", status: "Low", trend: "down" },
  { marker: "WBC", value: "8,400 /uL", range: "4,000-11,000 /uL", status: "Normal", trend: "stable" },
  { marker: "LDL cholesterol", value: "164 mg/dL", range: "<100 mg/dL", status: "High", trend: "up" },
  { marker: "TSH", value: "3.8 uIU/mL", range: "0.4-4.0 uIU/mL", status: "Normal", trend: "stable" },
];

export const metrics: MetricCard[] = [
  { label: "Total Reports", value: "2,846", change: "+18.2% this month", tone: "blue", icon: FileText },
  { label: "High Risk Patients", value: "128", change: "-6 after follow-up", tone: "red", icon: AlertTriangle },
  { label: "AI Diagnoses", value: "9,420", change: "94.7% clinician accepted", tone: "indigo", icon: Brain },
  { label: "Medicine Adherence", value: "86%", change: "+9.5% with reminders", tone: "teal", icon: CalendarCheck },
  { label: "Average Health Score", value: "78", change: "+4 points", tone: "green", icon: HeartPulse },
  { label: "Critical Alerts", value: "19", change: "7 need review today", tone: "amber", icon: Activity },
];

export const riskTrend = [
  { month: "Jan", low: 44, medium: 32, high: 18, critical: 6 },
  { month: "Feb", low: 48, medium: 30, high: 16, critical: 6 },
  { month: "Mar", low: 52, medium: 27, high: 15, critical: 6 },
  { month: "Apr", low: 55, medium: 25, high: 14, critical: 5 },
  { month: "May", low: 59, medium: 23, high: 12, critical: 4 },
];

export const bloodAnalytics = [
  { name: "Glucose", patient: 145, baseline: 96 },
  { name: "LDL", patient: 164, baseline: 98 },
  { name: "Hb", patient: 11.2, baseline: 13.5 },
  { name: "WBC", patient: 8.4, baseline: 7.1 },
  { name: "TSH", patient: 3.8, baseline: 2.2 },
];

export const diseaseDistribution = [
  { name: "Diabetes", value: 34 },
  { name: "Cardio", value: 27 },
  { name: "Thyroid", value: 18 },
  { name: "Renal", value: 11 },
  { name: "Liver", value: 10 },
];

export const uploadTrend = [
  { day: "Mon", reports: 82 },
  { day: "Tue", reports: 104 },
  { day: "Wed", reports: 96 },
  { day: "Thu", reports: 128 },
  { day: "Fri", reports: 142 },
  { day: "Sat", reports: 76 },
  { day: "Sun", reports: 58 },
];

export const medicines = [
  { name: "Metformin", dose: "500 mg", time: "08:00 AM", status: "Taken", adherence: 94 },
  { name: "Atorvastatin", dose: "20 mg", time: "09:30 PM", status: "Due tonight", adherence: 86 },
  { name: "Vitamin D3", dose: "1000 IU", time: "01:00 PM", status: "Missed yesterday", adherence: 78 },
  { name: "Levothyroxine", dose: "50 mcg", time: "06:30 AM", status: "Taken", adherence: 97 },
];

export const aiFindings = {
  summary: "The latest report shows elevated fasting glucose and HbA1c with borderline anemia. Lipid markers indicate increased cardiovascular risk. Kidney and thyroid markers remain inside expected ranges.",
  riskLevel: "Medium",
  recommendations: [
    "Schedule an endocrinology review within 2 weeks.",
    "Repeat fasting glucose and HbA1c in 8-12 weeks.",
    "Increase fiber intake and reduce high-glycemic foods.",
    "Consider lipid management review with the treating physician.",
  ],
};
