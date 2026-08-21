# app/crud/customer.py
from sqlalchemy.orm import Session
from app.models.customer import Customer
from app.schemas.customer import CustomerCreate


def get_all(db: Session):
    return db.query(Customer).all()


def get_by_username(username: str, db: Session):
    return db.query(Customer).filter(Customer.username == username).first()


def create(customer_in: CustomerCreate, db: Session):
    db_customer = Customer(**customer_in.model_dump())
    db.add(db_customer)
    db.commit()
    db.refresh(db_customer)  # Populates the 'id' field from the database

    return db_customer
