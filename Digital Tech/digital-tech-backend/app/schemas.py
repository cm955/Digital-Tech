import re
from pydantic import BaseModel, ConfigDict, EmailStr, Field, field_validator

class EnquiryBase(BaseModel):
    phone: str = Field(min_length=10, max_length=15)
    email: EmailStr
    message: str | None = Field(default=None, max_length=5000)

    @field_validator("phone")
    @classmethod
    def validate_phone(cls, value: str) -> str:
        cleaned = re.sub(r"[\s+()-]", "", value)
        if not cleaned.isdigit() or not 10 <= len(cleaned) <= 15:
            raise ValueError("Enter a valid phone number containing 10 to 15 digits.")
        return cleaned

class GeneralEnquiryCreate(EnquiryBase):
    name: str = Field(min_length=1, max_length=100)
    service: str = Field(min_length=1, max_length=120)

class BusinessConsultationCreate(EnquiryBase):
    company: str = Field(min_length=1, max_length=150)
    contact: str = Field(min_length=1, max_length=100)
    business: str = Field(min_length=1, max_length=120)
    budget: str | None = Field(default=None, max_length=60)

class EnquiryCreated(BaseModel):
    id: int
    status: str
    message: str
    model_config = ConfigDict(from_attributes=True)
