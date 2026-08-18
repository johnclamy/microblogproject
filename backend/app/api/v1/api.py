# app/api/v1/api.py
from fastapi import APIRouter
from app.api.v1.endpoints import customers


api_router = APIRouter()


# Include the router
api_router.include_router(customers.router, tags=["customers"])