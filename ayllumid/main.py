"""
Main thread definition for server execution
"""
# General imports
from fastapi import FastAPI
# Module imports
from iot import iot_executor

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "This is an Ayllu PyCardano Middleware!"}
