# app/schemas/customer.py
from pydantic import BaseModel, EmailStr, Field


# Base schema (shared attributes)
class CustomerBase(BaseModel):
    username: str = Field(min_length=5, max_length=15)
    name: str = Field(min_length=1, max_length=100)
    email: EmailStr  # validates email format!
    industry: str = Field(min_length=3, max_length=50)


# Schema for creating a customer (Input)
class CustomerCreate(CustomerBase):
    password: str  # password on creation, but not on response


# Schema for reading a customer (Output)
class CustomerResponse(CustomerBase):
    id: int  # Example: the database ID is usually only returned, not sent by the client

    # Allows Pydantic to read data from SQLAlchemy ORM models
    class Config:
        from_attributes = True 
