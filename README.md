# Mediscan AI

AI-Powered Medical Report Intelligence Platform for clinics, diagnostic centers, hospitals, patients, and telemedicine teams.

Mediscan AI turns PDFs and medical images into structured biomarkers, AI summaries, risk analytics, doctor-ready notes, reminder workflows, and patient history views. This is a hackathon-ready MVP with a production-style architecture and safe mock AI fallbacks.

## Features

- Premium healthcare SaaS landing page
- Mock login with demo credentials
- Main command dashboard with Recharts analytics
- PDF/image report upload center
- Blood test biomarker extraction for glucose, cholesterol, hemoglobin, WBC, RBC, thyroid markers, liver and kidney markers
- AI analysis endpoint with OpenAI/Gemini-ready configuration and fallback summaries
- Risk indicator analytics with health score meter
- Medicine reminder center with adherence tracking
- Healthcare AI chat assistant UI with medical disclaimer
- Patient history, reports archive, doctor insights, and settings pages
- Local upload storage for rapid deployment

## Screenshots

Add screenshots after running locally:

- `screenshots/landing.png`
- `screenshots/dashboard.png`
- `screenshots/upload-center.png`
- `screenshots/doctor-insights.png`

## Architecture

```text
mediscan-ai/
  src/
    app/                 Next.js 15 App Router pages
    components/          shadcn-style UI, dashboard shell, charts
    hooks/               reusable client hooks
    lib/                 mock clinical data and utilities
    services/            frontend API client
    types/               TypeScript health models
  backend/
    app/
      routes/            FastAPI upload, analyze, patients, analytics routes
      services/          parser, AI fallback, demo data
      models/            Pydantic schemas
    uploads/             local report storage
    requirements.txt
```

## Tech Stack

- Frontend: Next.js 15, TypeScript, TailwindCSS, shadcn-style components, Framer Motion-ready, Recharts, Lucide Icons
- Backend: FastAPI, Python, Pydantic
- AI: OpenAI/Gemini-ready environment configuration with realistic fallback outputs
- PDF/OCR: PyPDF2, pdfplumber, optional pytesseract
- Deployment: Vercel frontend, Render/Railway backend

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Demo login:

```text
doctor@mediscan.ai
password123
```

## Backend Setup

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

Health check:

```bash
curl http://localhost:8000/health
```

## API Endpoints

- `GET /health` - service health
- `POST /upload` - upload PDF/image/text report and receive extracted text plus AI analysis
- `POST /analyze` - analyze raw report text
- `GET /patients` - demo patient cohort
- `GET /analytics` - dashboard metrics and risk trends

Example analysis request:

```json
{
  "report_text": "Glucose 145 mg/dL\nHemoglobin 11.2 g/dL\nLDL 164 mg/dL\nTSH 3.8 uIU/mL"
}
```

## Environment

Copy `.env.example` and configure:

```text
NEXT_PUBLIC_API_URL=http://localhost:8000
OPENAI_API_KEY=
GEMINI_API_KEY=
```

If no AI key is set, the backend returns realistic mock clinical summaries.

## Deployment

### Vercel

1. Import the repository into Vercel.
2. Set `NEXT_PUBLIC_API_URL` to the deployed backend URL.
3. Build command: `npm run build`.
4. Output: Next.js default.

### Render or Railway

1. Set root directory to `backend`.
2. Install command: `pip install -r requirements.txt`.
3. Start command: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`.
4. Add `OPENAI_API_KEY` or `GEMINI_API_KEY` only if using a real provider.

## Security and Medical Disclaimer

This project is not a diagnostic device and does not provide medical advice. AI outputs are decision-support demonstrations only and require review by a licensed medical professional. The MVP uses local file storage for speed; production deployments should add authenticated access control, encrypted object storage, audit logs, PHI handling policies, and compliance review.

## Future Improvements

- Real OCR pipeline with Tesseract or managed document AI
- Provider-specific OpenAI/Gemini prompt orchestration
- Role-based access control and organization tenancy
- HL7/FHIR export
- Encrypted report storage
- Clinician approval workflow
- Patient-facing mobile reminders

## Contributors

Built as a rapid healthcare AI SaaS MVP for hackathon demos.
