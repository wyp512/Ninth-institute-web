"""FastAPI 应用入口"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .config import get_settings
from .routers import datasets_router

# 获取配置
settings = get_settings()

# 创建 FastAPI 应用
app = FastAPI(
    title="Ninth Institute API",
    description="单细胞数据分析后端 API",
    version="1.0.0"
)

# 配置 CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        settings.frontend_url,
        "http://localhost:3000",
        "http://127.0.0.1:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 注册路由
app.include_router(datasets_router)


@app.get("/")
async def root():
    """根路径"""
    return {
        "message": "Ninth Institute API is running",
        "version": "1.0.0"
    }

