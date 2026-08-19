# app/crud/customer.py
from typing import List, Optional
from app.models.customer import Customer
from app.schemas.customer import CustomerCreate, CustomerResponse


# Fake in-memory "database" using the internal Model
_fake_db: List[Customer] = [
    Customer(
        username="claudie24",
        name="Claude Augustine",
        email="claude.augustine@abcd-corp.com",
        industry="software",
    ),
    Customer(
        username="nikita_kurkova",
        name="Nikita Kurkova",
        email="nikita.kurkova@beemail.co.uk",
        industry="cyber security",
    ),
]


def get_all() -> List[Customer]:
    """Return all customers (as internal Models)"""
    return _fake_db


def get_by_username(username: str) -> Optional[Customer]:
    """Return a specific customer by username, or None if not found"""
    for customer in _fake_db:
        if customer.username == username:
            return customer
    return None


def create(customer_in: CustomerCreate) -> Optional[Customer]:
    """Add a new customer to the database"""
    if get_by_username(customer_in.username):
        raise ValueError(f"Customer with username '{customer_in.username}' already exists")

    # Convert the API Schema (CustomerCreate) into the Internal Model (Customer)
    new_customer = Customer(
        username=customer_in.username,
        name=customer_in.name,
        email=customer_in.email,
        industry=customer_in.industry,
    )
    
    _fake_db.append(new_customer)
    return new_customer


def update(username: str, customer_in: CustomerCreate) -> Optional[Customer]:
    """Completely replace an existing customer's data"""
    for i, existing_customer in enumerate(_fake_db):
        if existing_customer.username == username:
            updated_customer = Customer(
                username=username, # Keep the primary key the same
                name=customer_in.name,
                email=customer_in.email,
                industry=customer_in.industry,
            )
            _fake_db[i] = updated_customer
            return updated_customer

    return None


def delete(username: str) -> bool:
    """Delete a customer by username. Returns True if deleted, False if not found."""
    for i, customer in enumerate(_fake_db):
        if customer.username == username:
            _fake_db.pop(i)
            return True

    return False
