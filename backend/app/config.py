"""应用配置"""
import os
from pydantic_settings import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    """应用设置"""
    # 服务器配置
    host: str = "0.0.0.0"
    port: int = 8000
    
    # CORS 配置
    frontend_url: str = "http://localhost:3000"
    
    # 数据目录
    data_dir: str = "./data"
    
    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"


@lru_cache()
def get_settings() -> Settings:
    """获取配置单例"""
    return Settings()

