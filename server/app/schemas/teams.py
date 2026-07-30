import uuid
from typing import TYPE_CHECKING

from sqlalchemy import VARCHAR, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.base import Base

if TYPE_CHECKING:
    from app.schemas.user import User


class Team(Base):
    __tablename__ = "teams"

    id: Mapped[uuid.UUID] = mapped_column(
        primary_key=True,
        default=uuid.uuid4,
    )

    name: Mapped[str] = mapped_column(
        VARCHAR(255),
        nullable=False,
    )

    leader_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("users.id"),
    )

    leader: Mapped["User"] = relationship()
