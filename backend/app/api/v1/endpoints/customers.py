# app/api/v1/endpoints/customers.py
from fastapi import APIRouter


router = APIRouter(prefix="/customers")


@router.get("/")
def top():
    return "top customer endpoint"
