from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import analytics, patients, reports

app = FastAPI(
    title="Mediscan AI API",
    description="AI-powered medical report intelligence backend with safe mock fallbacks.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(reports.router)
app.include_router(patients.router)
app.include_router(analytics.router)


@app.get("/health")
def health_check():
    return {"status": "healthy", "service": "Mediscan AI", "ai_fallback": True}
