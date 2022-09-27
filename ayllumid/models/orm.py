"""
Submodule for ORM queries models
"""

# General imports
from datetime import datetime
from pydantic import BaseModel

class UserData(BaseModel):
    user_id: int
    name: str
    email: str
    wallet: str
    totalRewards: int
    createdAt: datetime
    updatedAt: datetime
