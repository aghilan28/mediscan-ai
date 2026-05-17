import os

from app.services.parser_service import parse_biomarkers

DISCLAIMER = "This output is AI decision support only and does not replace professional medical advice."


def analyze_report(report_text: str) -> dict:
    biomarkers = parse_biomarkers(report_text)
    abnormal = [b for b in biomarkers if b["status"] != "Normal"]
    risk_level = _risk_level(abnormal)
    summary = _summary(abnormal, risk_level)
    return {
        "summary": summary,
        "risk_level": risk_level,
        "abnormal_values": [{"marker": b["marker"], "value": f"{b['value']} {b['unit']}", "status": b["status"]} for b in abnormal],
        "biomarkers": biomarkers,
        "recommendations": _recommendations(abnormal),
        "disclaimer": DISCLAIMER,
        "provider": _configured_provider(),
    }


def _configured_provider() -> str:
    if os.getenv("OPENAI_API_KEY"):
        return "openai-ready"
    if os.getenv("GEMINI_API_KEY"):
        return "gemini-ready"
    return "mock-fallback"


def _risk_level(abnormal: list[dict]) -> str:
    if any(item["status"] == "Critical" for item in abnormal):
        return "Critical"
    if len(abnormal) >= 3:
        return "High"
    if abnormal:
        return "Medium"
    return "Low"


def _summary(abnormal: list[dict], risk_level: str) -> str:
    if not abnormal:
        return "No major abnormalities detected in the parsed report. Continue routine monitoring and clinician review."
    markers = ", ".join(item["marker"] for item in abnormal[:4])
    return f"{risk_level} risk pattern detected with abnormal {markers}. Findings suggest metabolic or hematology follow-up depending on clinical context."


def _recommendations(abnormal: list[dict]) -> list[str]:
    recs = ["Review results with a licensed clinician before changing any treatment."]
    marker_names = {item["marker"].lower() for item in abnormal}
    if "glucose" in marker_names:
        recs.append("Consider repeat fasting glucose and HbA1c monitoring.")
        recs.append("Discuss diet, exercise, and endocrine follow-up if clinically appropriate.")
    if "ldl" in marker_names or "cholesterol" in marker_names:
        recs.append("Review lipid management and cardiovascular risk factors.")
    if "hemoglobin" in marker_names:
        recs.append("Evaluate anemia symptoms, iron profile, and dietary history.")
    if len(recs) == 1:
        recs.append("Continue routine monitoring and trend comparison.")
    return recs
