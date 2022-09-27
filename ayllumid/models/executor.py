"""
Submodule for IoT Executor models
"""

# General imports
from typing import Optional
from pydantic import BaseModel

class PublishMessage(BaseModel):
    """
    Payload to be packed into a Message.

    Attributes
    ----------
    client_id: str
        The identifier for the IoT Device.
    seq: int
        The number of commands to execute.
    cmd: list[str]
        The commands to execute.
    payload: Optional[list[str]]
        The arguments to execute.
    """
    client_id: str
    seq: int
    cmd: list[str]
    payload: Optional[list[str]]
