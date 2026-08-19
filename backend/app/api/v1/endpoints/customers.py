# app/api/v1/endpoints/customers.py
from fastapi import APIRouter
from app.schemas.customer import CustomerCreate, CustomerResponse


router = APIRouter(prefix="/customers")


@router.get('/')
def top():
    return "top customer endpoint"


# Tells FastAPI to format the output using this schema
@router.post('/customers', response_model=CustomerResponse)
def create_customer(customer: CustomerCreate):
    # FastAPI automatically validates the incoming JSON against CustomerCreate.
    # If it's valid, 'customer' becomes a Python object you can work with.
    
    # (Later, you will pass this to your Service Layer)
    return customer
