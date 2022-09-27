"""
Submodule for ORM queries models
"""

# General imports
from datetime import datetime
from pydantic import BaseModel

class UserData(BaseModel):
    """
    Answer model from `GetUserById` query.

    Attributes
    ---------
    user_id: int
        The index from table.
    name: str
        The name which the user is registered as.
    email: str
        The email the user is registered with.
    wallet: str
        The wallet that is linked with the user account.
    totalRewards: int
        The balance from AYU tokens recieved by the account.
    created_at: datetime
        The date in which the account was created.
    updated_at: datetime
        The time at which the user information was latest updated.
    """
    user_id: int
    name: str
    email: str
    wallet: str
    total_rewards: int
    created_at: datetime
    updated_at: datetime
