import uvicorn
from fastapi import FastAPI


app = FastAPI()


@app.get('/')
def root():
    return 'Root of the app here'


if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="127.0.0.1",
        port=8000,
        reload=True
    )
