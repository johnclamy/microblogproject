# app/api/v1/endpoints/customers.py
from fastapi import APIRouter, HTTPException, status
from typing import List
from app.schemas.customer import CustomerCreate, CustomerResponse
from app.crud import customer as customer_crud



router = APIRouter(prefix="/customers")


@router.get('/', response_model=List[CustomerResponse])
def get_all_customers():
    # CRUD returns List[Customer] (Model),
    # FastAPI auto-converts to List[CustomerResponse] (Schema)
    return customer_crud.get_all()


@router.get('/{username}', response_model=CustomerResponse)
def get_customer(username: str):
    customer = customer_crud.get_by_username(username)
    if not customer:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, 
            detail=f"Customer with username '{username}' not found"
        )
    return customer


# Tells FastAPI to format the output using this schema
@router.post(
    '/',
    response_model=CustomerResponse,
    status_code=status.HTTP_201_CREATED
)
def create_customer(customer_in: CustomerCreate):
    try:
        # Endpoint passes Schema to CRUD. CRUD returns Model.
        # FastAPI serializes Model to Schema.
        return customer_crud.create(customer_in)
    except ValueError as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e)
        )
