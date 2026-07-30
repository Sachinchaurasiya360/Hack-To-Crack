from fastapi import FastAPI

from app.api.health import router as health_router

app = FastAPI(
    title="Hackathon API",
    version="1.0.0",
)

app.include_router(
    health_router,
    prefix="/api/v1",
)