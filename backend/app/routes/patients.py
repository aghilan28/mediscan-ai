from fastapi import APIRouter

from app.services.mock_data import PATIENTS

router = APIRouter(tags=["patients"])


@router.get("/patients")
def list_patients():
    return {"patients": PATIENTS}
