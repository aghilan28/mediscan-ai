from typing import Literal

from pydantic import BaseModel, Field


class AnalyzeRequest(BaseModel):
    report_text: str = Field(..., min_length=5)


class Biomarker(BaseModel):
    marker: str
    value: str
    unit: str
    normal_range: str
    status: Literal["Normal", "Low", "High", "Critical"]


class AbnormalValue(BaseModel):
    marker: str
    value: str
    status: str


class AnalysisResponse(BaseModel):
    summary: str
    risk_level: Literal["Low", "Medium", "High", "Critical"]
    abnormal_values: list[AbnormalValue]
    biomarkers: list[Biomarker]
    recommendations: list[str]
    disclaimer: str


class Patient(BaseModel):
    id: str
    name: str
    age: int
    risk: str
    condition: str
    health_score: int
