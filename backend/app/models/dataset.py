"""数据集模型定义"""
from typing import Dict, List, Optional
from pydantic import BaseModel


class Dataset(BaseModel):
    """单个数据集"""
    path: str
    type: str
    obsm: str
    layers: str
    reference: str


class DatasetResponse(BaseModel):
    """单个数据集响应"""
    success: bool
    data: Optional[Dataset] = None
    error: Optional[str] = None


class DatasetsListResponse(BaseModel):
    """数据集列表响应"""
    success: bool
    data: Optional[Dict[str, object]] = None
    error: Optional[str] = None

