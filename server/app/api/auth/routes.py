from sqlalchemy import select
from sqlalchemy.ext.asyncio import async_session
from app.models.user import Users

class UserRepository:
    def __init__(self,db:AsyncSession):
        self.db=db
        
    async def get_by_email(self,email:str)->Users |None:
        getUser= select(Users).where(
            
        )
        