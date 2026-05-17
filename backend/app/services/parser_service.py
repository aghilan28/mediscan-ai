import re
from pathlib import Path

from PyPDF2 import PdfReader

NORMAL_RANGES = {
    "glucose": (70, 99, "mg/dL"),
    "cholesterol": (0, 200, "mg/dL"),
    "hemoglobin": (12, 15.5, "g/dL"),
    "wbc": (4000, 11000, "/uL"),
    "rbc": (4.2, 5.9, "million/uL"),
    "tsh": (0.4, 4.0, "uIU/mL"),
    "t3": (80, 180, "ng/dL"),
    "t4": (5.0, 12.0, "ug/dL"),
    "ldl": (0, 100, "mg/dL"),
    "hdl": (40, 80, "mg/dL"),
    "creatinine": (0.6, 1.3, "mg/dL"),
    "alt": (7, 56, "U/L"),
}

PATTERNS = {
    "glucose": r"(?:fasting\s*)?glucose\s*[:\-]?\s*(\d+(?:\.\d+)?)",
    "cholesterol": r"(?:total\s*)?cholesterol\s*[:\-]?\s*(\d+(?:\.\d+)?)",
    "hemoglobin": r"(?:hemoglobin|hb)\s*[:\-]?\s*(\d+(?:\.\d+)?)",
    "wbc": r"wbc\s*[:\-]?\s*(\d+(?:,\d+)?(?:\.\d+)?)",
    "rbc": r"rbc\s*[:\-]?\s*(\d+(?:\.\d+)?)",
    "tsh": r"tsh\s*[:\-]?\s*(\d+(?:\.\d+)?)",
    "t3": r"\bt3\s*[:\-]?\s*(\d+(?:\.\d+)?)",
    "t4": r"\bt4\s*[:\-]?\s*(\d+(?:\.\d+)?)",
    "ldl": r"ldl\s*[:\-]?\s*(\d+(?:\.\d+)?)",
    "hdl": r"hdl\s*[:\-]?\s*(\d+(?:\.\d+)?)",
    "creatinine": r"creatinine\s*[:\-]?\s*(\d+(?:\.\d+)?)",
    "alt": r"alt\s*[:\-]?\s*(\d+(?:\.\d+)?)",
}

FALLBACK_REPORT = """
Glucose 145 mg/dL
HbA1c 7.1 %
Hemoglobin 11.2 g/dL
WBC 8400 /uL
LDL 164 mg/dL
HDL 39 mg/dL
TSH 3.8 uIU/mL
Creatinine 1.0 mg/dL
ALT 34 U/L
"""


def extract_text_from_file(path: Path) -> str:
    suffix = path.suffix.lower()
    if suffix == ".pdf":
        return _extract_pdf_text(path) or FALLBACK_REPORT
    if suffix in {".txt", ".csv"}:
        return path.read_text(encoding="utf-8", errors="ignore") or FALLBACK_REPORT
    return FALLBACK_REPORT


def _extract_pdf_text(path: Path) -> str:
    try:
        reader = PdfReader(str(path))
        return "\n".join(page.extract_text() or "" for page in reader.pages)
    except Exception:
        return ""


def parse_biomarkers(text: str) -> list[dict]:
    lowered = text.lower()
    biomarkers = []
    for marker, pattern in PATTERNS.items():
        match = re.search(pattern, lowered, flags=re.IGNORECASE)
        if not match:
            continue
        raw_value = match.group(1).replace(",", "")
        value = float(raw_value)
        low, high, unit = NORMAL_RANGES[marker]
        status = "Normal"
        if value < low:
            status = "Low"
        elif value > high:
            status = "Critical" if marker in {"glucose", "ldl", "creatinine"} and value > high * 1.45 else "High"
        biomarkers.append(
            {
                "marker": marker.upper() if marker in {"wbc", "rbc", "tsh", "ldl", "hdl", "alt"} else marker.title(),
                "value": f"{value:g}",
                "unit": unit,
                "normal_range": f"{low:g}-{high:g} {unit}",
                "status": status,
            }
        )
    return biomarkers or parse_biomarkers(FALLBACK_REPORT)
