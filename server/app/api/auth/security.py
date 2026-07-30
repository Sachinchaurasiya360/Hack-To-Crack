from pwdlib import PasswordHash

hashPassword=PasswordHash.recommended()

def hash_password(password:str)->str:
    return hashPassword.hash(password)

def verify_password(password:str,hash_password:str)->  bool:
        return hashPassword.verify(password,hash_password)
    
