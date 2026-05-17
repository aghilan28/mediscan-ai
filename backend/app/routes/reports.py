from pathlib import Path
from uuid import uuid4

from fastapi import APIRouter, File, UploadFile

from app.models.schemas import AnalyzeRequest, AnalysisResponse
from app.services.ai_service import analyze_report
from app.services.parser_service import extract_text_from_file

router = APIRouter(tags=["reports"])
UPLOAD_DIR = Path(__file__).resolve().parents[2] / "uploads"
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)


@router.post("/upload")
async def upload_report(file: UploadFile = File(...)):
    suffix = Path(file.filename or "report.pdf").suffix
    saved_path = UPLOAD_DIR / f"{uuid4().hex}{suffix}"
    saved_path.write_bytes(await file.read())
    extracted_text = extract_text_from_file(saved_path)
    analysis = analyze_report(extracted_text)
    return {"filename": file.filename, "stored_as": saved_path.name, "extracted_text": extracted_text[:2000], "analysis": analysis}


@router.post("/analyze", response_model=AnalysisResponse)
def analyze(payload: AnalyzeRequest):
    return analyze_report(payload.report_text)
