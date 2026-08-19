# app/schemas/customer.py
from pydantic import BaseModel, EmailStr


# Base schema (shared attributes)
class CustomerBase(BaseModel):
    username: str
    name: str
    email: EmailStr  # validates email format!
    industry: str


# Schema for creating a customer (Input)
class CustomerCreate(CustomerBase):
    password: str  # password on creation, but not on response


# Schema for reading a customer (Output)
class CustomerResponse(CustomerBase):
    id: int  # Example: the database ID is usually only returned, not sent by the client

    # Allows Pydantic to read data from SQLAlchemy ORM models
    class Config:
        from_attributes = True 
