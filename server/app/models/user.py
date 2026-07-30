# The Database modle which will be used by application basically the prisma one


import uuid
from sqlalchemy.orm import Mapped, mapped_column
from app.db.base import Base


class Users(Base):
    __tablename__ = "users"

    id: Mapped[uuid.UUID] = mapped_column(primary_key=True, default=uuid.UUID)
    email: Mapped[str]= mapped_column(String(255),unique=True, nullable=False,index=True)
    full_name: Mapped[str]= mapped_column(String(255),nullable=False)
    password: Mapped[str]= mapped_column(String(255),nullable=False)
    