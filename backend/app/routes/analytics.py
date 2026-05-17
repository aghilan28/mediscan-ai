from fastapi import APIRouter

from app.services.mock_data import ANALYTICS

router = APIRouter(tags=["analytics"])


@router.get("/analytics")
def get_analytics():
    return ANALYTICS
