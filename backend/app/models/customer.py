# app/models/customer.py
from dataclasses import dataclass


@dataclass
class Customer:
    username: str
    name: str
    email: str
    industry: str
