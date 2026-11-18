import os
from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from . import models
from .database import Base, engine, get_db
from .schemas import BusinessConsultationCreate, EnquiryCreated, GeneralEnquiryCreate

# For initial local development only; production will use migrations.
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Digital Tech Enquiry API", version="1.0.0")
origins = [x.strip() for x in os.getenv("FRONTEND_ORIGINS", "http://127.0.0.1:5500,http://localhost:5500").split(",") if x.strip()]
app.add_middleware(CORSMiddleware, allow_origins=origins, allow_credentials=False, allow_methods=["GET", "POST"], allow_headers=["Content-Type"])

@app.get("/")
def health_check():
    return {"status": "ok", "message": "Digital Tech API is running"}

@app.post("/api/enquiries/general", response_model=EnquiryCreated, status_code=201)
def create_general_enquiry(enquiry: GeneralEnquiryCreate, db: Session = Depends(get_db)):
    record = models.GeneralEnquiry(
        full_name=enquiry.name.strip(), phone=enquiry.phone, email=str(enquiry.email),
        service=enquiry.service.strip(), message=enquiry.message
    )
    db.add(record)
    db.commit()
    db.refresh(record)
    return {"id": record.id, "status": record.status, "message": "General enquiry saved successfully."}

@app.post("/api/enquiries/business", response_model=EnquiryCreated, status_code=201)
def create_business_consultation(enquiry: BusinessConsultationCreate, db: Session = Depends(get_db)):
    record = models.BusinessConsultation(
        company_name=enquiry.company.strip(), contact_person=enquiry.contact.strip(),
        phone=enquiry.phone, email=str(enquiry.email), business_type=enquiry.business.strip(),
        monthly_budget=enquiry.budget, message=enquiry.message
    )
    db.add(record)
    db.commit()
    db.refresh(record)
    return {"id": record.id, "status": record.status, "message": "Business consultation saved successfully."}
