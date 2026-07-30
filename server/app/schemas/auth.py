from pydantic import BaseModel,Field,EmailStr,ConfigDict


class RegisterRequest(BaseModel):
    full_name:str=Field(
        min_length=2
        ,
        max_length=33,
        
    )
    email:EmailStr
    password:str=Field(
        min_length=4,
        max_length=20
    )
    
class UserResponse(BaseModel):
    model_config=ConfigDict(
        from_attributes=True
    )
    id:str
    full_name:str
    email:EmailStr
    password:str