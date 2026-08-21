import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.db.database import engine, Base
from app.api.v1.endpoints import customers # Adjust path to your router
from app.models import customer # This import registers the Customer model with Base
from app.api.v1.api import api_router


# Create all tables in the database (does nothing if they already exist)
Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="CRM Plus App",
    description="A scalable FastAPI application with a layered architecture",
    version="1.0.0",
    # If using settings:
    # docs_url=settings.DOCS_URL,
    # redoc_url=settings.REDOC_URL,
)


# --- Middleware ---
# Set up CORS (Cross-Origin Resource Sharing) to allow frontend apps to talk to your API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ⚠️ In production, replace "*" with your actual frontend URL (e.g., "http://localhost:3000")
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# --- Router Inclusion ---
# Include the main API router. 
# This prefixes ALL routes inside api_router with "/api/v1"
app.include_router(api_router, prefix="/api/v1")


# --- Root / Health Check Endpoint ---
@app.get('/', tags=["Health Check"])
def read_root():
    return { 'message': 'Root of the app here' }


if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="127.0.0.1",
        port=8000,
        reload=True
    )
