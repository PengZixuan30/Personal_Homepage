from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Hello World"}

@app.get("/projects")
def projects():
    my_projects = [
        {"name": "GamesAI", "description": "一个MCDR插件, 让你可以在游戏内访问AI", "link": "https://www.github.com/PengZixuan30/Games_AI", "download": "https://ghfast.top/https://github.com/PengZixuan30/Games_AI/releases/download/0.5.1/GamesAI-v0.5.1.mcdr"},
        {"name": "WangHai Webpage", "description": "望海官网"},
    ]
    return {"projects": my_projects}